import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * useThemeVideo
 *
 * Synchronizes website theme state with the hero background transition video (litebright-vid1.mp4).
 *
 * DAY MODE:
 *   - video.currentTime = 0 (visually still on Day frame)
 *   - theme = 'day'
 *   - progress = 0.0
 *
 * NIGHT MODE:
 *   - video.currentTime = video.duration (visually still on final Night frame)
 *   - theme = 'night'
 *   - progress = 1.0
 *
 * TOGGLE DAY -> NIGHT:
 *   - plays video naturally from current position -> duration
 *   - smoothly updates progress 0 -> 1
 *   - pauses on final frame and locks to 'night'
 *
 * TOGGLE NIGHT -> DAY (REVERSE):
 *   - smoothly plays reverse transition from Night -> Day using hardware-accelerated canvas buffer
 *   - synchronizes video.currentTime along the timeline
 *   - locks to 'day' at exact original frame 0
 */
export default function useThemeVideo() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const framesRef = useRef([]);

  const [theme, setTheme] = useState('day');
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isReversing, setIsReversing] = useState(false);

  const isReversingRef = useRef(false);
  const isPlayingForwardRef = useRef(false);
  const reverseRafRef = useRef(null);
  const forwardRafRef = useRef(null);

  const TOTAL_FRAMES = 158;
  const VIDEO_DURATION = 5.267;

  // Preload all 158 transition frames for instant 60fps reverse playback
  useEffect(() => {
    const loaded = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame_${String(i).padStart(3, '0')}.webp`;
      loaded[i] = img;
    }
    framesRef.current = loaded;
  }, []);

  // Stop any active animation loops
  const stopAllAnimations = useCallback(() => {
    if (reverseRafRef.current) {
      cancelAnimationFrame(reverseRafRef.current);
      reverseRafRef.current = null;
    }
    if (forwardRafRef.current) {
      cancelAnimationFrame(forwardRafRef.current);
      forwardRafRef.current = null;
    }
    isReversingRef.current = false;
    isPlayingForwardRef.current = false;
    setIsReversing(false);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAllAnimations();
    };
  }, [stopAllAnimations]);

  // Initial video setup & mobile mute guarantee
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    const handleLoadedMetadata = () => {
      video.muted = true;
      if (theme === 'day') {
        video.currentTime = 0;
        setProgress(0);
      } else {
        const dur = video.duration || VIDEO_DURATION;
        video.currentTime = dur;
        setProgress(1);
      }
      video.pause();
    };

    const handleEnded = () => {
      stopAllAnimations();
      const dur = video.duration || VIDEO_DURATION;
      video.pause();
      video.currentTime = dur;
      setProgress(1);
      setTheme('night');
      setIsTransitioning(false);
    };

    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, []); // Run on mount only

  // Helper to draw a frame to the canvas
  const drawCanvasFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = framesRef.current[frameIndex];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  // Play forward to Night
  const playForwardToNight = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    stopAllAnimations();
    setIsTransitioning(true);
    setIsReversing(false);
    isPlayingForwardRef.current = true;
    isReversingRef.current = false;

    const dur = video.duration || VIDEO_DURATION;

    // If already at or near end, restart from 0
    if (video.currentTime >= dur - 0.05) {
      video.currentTime = 0;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Playback interrupted:', err);
      });
    }

    const checkForwardProgress = () => {
      if (!isPlayingForwardRef.current) return;

      const cur = video.currentTime;
      const p = Math.min(1, Math.max(0, cur / dur));
      setProgress(p);

      // Check if reached end of video
      if (cur >= dur - 0.05 || video.ended) {
        video.pause();
        video.currentTime = dur;
        setProgress(1);
        setTheme('night');
        setIsTransitioning(false);
        isPlayingForwardRef.current = false;
        return;
      }

      forwardRafRef.current = requestAnimationFrame(checkForwardProgress);
    };

    forwardRafRef.current = requestAnimationFrame(checkForwardProgress);
  }, [stopAllAnimations]);

  // Reverse backward to Day
  const reverseBackwardToDay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    stopAllAnimations();
    video.pause();

    const dur = video.duration || VIDEO_DURATION;

    // Determine starting frame index (0 to 157)
    let startFrame = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.round((video.currentTime / dur) * (TOTAL_FRAMES - 1)))
    );

    // If starting from 0 (e.g. night state reached), start from final frame
    if (startFrame <= 1) {
      startFrame = TOTAL_FRAMES - 1;
    }

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 1280;
      canvas.height = 567;
      drawCanvasFrame(startFrame);
    }

    setIsTransitioning(true);
    setIsReversing(true);
    isReversingRef.current = true;
    isPlayingForwardRef.current = false;

    let currentFrame = startFrame;
    let lastTimestamp = performance.now();
    const FRAME_DURATION = 1000 / 30; // ~33.3ms for real-time 30fps reverse

    const reverseTick = (now) => {
      if (!isReversingRef.current) return;

      const elapsed = now - lastTimestamp;

      if (elapsed >= FRAME_DURATION) {
        const framesToStep = Math.max(1, Math.floor(elapsed / FRAME_DURATION));
        lastTimestamp = now - (elapsed % FRAME_DURATION);

        currentFrame = Math.max(0, currentFrame - framesToStep);

        // Draw frame to canvas immediately
        drawCanvasFrame(currentFrame);

        // Synchronize video timeline & progress
        const p = currentFrame / (TOTAL_FRAMES - 1);
        setProgress(p);
        video.currentTime = p * dur;

        if (currentFrame > 0) {
          reverseRafRef.current = requestAnimationFrame(reverseTick);
        } else {
          // Reached Day frame 0
          video.currentTime = 0;
          setProgress(0);
          setTheme('day');
          setIsTransitioning(false);
          setIsReversing(false);
          isReversingRef.current = false;
          reverseRafRef.current = null;
        }
      } else {
        reverseRafRef.current = requestAnimationFrame(reverseTick);
      }
    };

    reverseRafRef.current = requestAnimationFrame(reverseTick);
  }, [stopAllAnimations]);

  // Main Toggle Trigger with mid-flight interruption support
  const toggleTheme = useCallback(() => {
    if (isPlayingForwardRef.current) {
      // Mid-flight forward -> reverse immediately back to Day
      reverseBackwardToDay();
    } else if (isReversingRef.current) {
      // Mid-flight reversing -> play forward immediately to Night
      playForwardToNight();
    } else if (theme === 'day') {
      // At Day -> play forward to Night
      playForwardToNight();
    } else {
      // At Night -> reverse back to Day
      reverseBackwardToDay();
    }
  }, [theme, playForwardToNight, reverseBackwardToDay]);

  return {
    videoRef,
    canvasRef,
    theme,
    progress,
    isTransitioning,
    isReversing,
    toggleTheme,
    playForwardToNight,
    reverseBackwardToDay,
  };
}
