import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function LegalPage({
  activeTab = 'privacy', // 'privacy' | 'terms'
  onTabChange,
  onNavigateHome,
}) {
  // Scroll to top on tab switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen py-12 sm:py-16 px-6 max-w-3xl mx-auto text-[var(--text-main)]">
      {/* Top minimal back link and tab pill (NO NAVBAR) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[var(--border-subtle)]">
        <button
          type="button"
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors cursor-pointer group w-fit"
          title="Return to LiteBright"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to LiteBright</span>
        </button>

        {/* Minimal switcher */}
        <div className="inline-flex items-center p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border-subtle)] w-fit">
          <button
            type="button"
            onClick={() => onTabChange('privacy')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-[var(--btn-bg)] text-[var(--btn-text)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => onTabChange('terms')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-[var(--btn-bg)] text-[var(--btn-text)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
            }`}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'privacy' ? (
        <article className="space-y-8 animate-fadeIn">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-500 mb-1 block">
              LiteBright Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mb-2">
              Privacy Policy
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              Last updated: October 2026 • Effective version: 1.2
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-[15px] leading-relaxed text-[var(--text-main)]">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                1. Overview & Commitment
              </h2>
              <p className="text-[var(--text-muted)]">
                LiteBright is a free, open-source Windows brightness utility built by SNK DevWorks and community contributors. We believe desktop utility apps have no reason to track user activity. LiteBright is engineered to run 100% locally on your machine with zero telemetry.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                2. Zero Data Collection
              </h2>
              <p className="text-[var(--text-muted)]">
                We do not collect, process, log, or sell any personal information. LiteBright has no user accounts, no analytics SDKs, no advertising trackers, and no tracking cookies.
              </p>
              <p className="text-[var(--text-muted)]">
                LiteBright registers global hotkeys through standard Windows APIs exclusively to adjust brightness when your chosen shortcuts are pressed. It never reads or records any other keystrokes. It does not capture screen contents or pixels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                3. Local Hardware Communication
              </h2>
              <p className="text-[var(--text-muted)]">
                To adjust brightness, LiteBright communicates directly with your displays using official Windows APIs: DDC/CI via <code className="text-xs px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 font-mono">dxva2.dll</code> for external monitors, and WMI for laptop panels.
              </p>
              <p className="text-[var(--text-muted)]">
                All monitor queries and hardware identifiers stay strictly on your local PC and are never sent over any network.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                4. Local Settings Storage
              </h2>
              <p className="text-[var(--text-muted)]">
                Your preferences (such as custom display names, brightness percentages, and hotkeys) are stored exclusively in a local JSON configuration file on your machine:
              </p>
              <div className="p-2.5 rounded-lg bg-black/5 dark:bg-white/5 border border-[var(--border-subtle)] font-mono text-xs text-[var(--text-main)] select-all">
                %LOCALAPPDATA%\LiteBright\settings.json
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                You can inspect or delete this file at any time. We retain no cloud copies or backups.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                5. Network & Offline Operation
              </h2>
              <p className="text-[var(--text-muted)]">
                The LiteBright desktop app works completely offline. It does not open network ports or perform background data uploads.
              </p>
              <p className="text-[var(--text-muted)]">
                Our landing website (<code className="text-xs font-mono">litebright.pages.dev</code>) is hosted statically on Cloudflare Pages, which processes standard edge access logs for security and DDoS mitigation under Cloudflare&apos;s privacy policy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                6. Third-Party Platforms
              </h2>
              <p className="text-[var(--text-muted)]">
                If you download LiteBright from the Microsoft Store, Microsoft handles the store transaction and app delivery under Microsoft&apos;s Privacy Statement. If you visit our GitHub repository or file an issue, GitHub handles your interaction under its privacy policies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                7. Contact
              </h2>
              <p className="text-[var(--text-muted)]">
                If you have questions about this policy or LiteBright, reach out via{' '}
                <a
                  href="https://github.com/SN7k/LiteBright/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  GitHub Issues <ExternalLink className="w-3 h-3" />
                </a>{' '}
                or visit{' '}
                <a
                  href="https://snkdevworks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  SNK DevWorks <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </section>
          </div>
        </article>
      ) : (
        <article className="space-y-8 animate-fadeIn">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-cyan-500 mb-1 block">
              LiteBright Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] mb-2">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[var(--text-muted)]">
              Last updated: October 2026 • Governing license: MIT Open Source
            </p>
          </div>

          <div className="space-y-6 text-sm sm:text-[15px] leading-relaxed text-[var(--text-main)]">
            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                1. Acceptance of Terms
              </h2>
              <p className="text-[var(--text-muted)]">
                By downloading, installing, running, or accessing LiteBright (or this website), you agree to these Terms. If you do not agree to these terms, do not install or use the software.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                2. Open Source License (MIT)
              </h2>
              <p className="text-[var(--text-muted)]">
                LiteBright is free software licensed under the permissive MIT License. You are free to run, copy, modify, merge, publish, and distribute the software for personal, educational, non-profit, or commercial use, provided the original copyright notice is retained.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                3. Hardware Compatibility & DDC/CI
              </h2>
              <p className="text-[var(--text-muted)]">
                LiteBright communicates with external displays using standard VESA DDC/CI commands over HDMI and DisplayPort. Because monitor manufacturers implement DDC/CI firmware differently, hardware compatibility and response times depend on your specific monitor models, cables, and display adapters.
              </p>
              <p className="text-[var(--text-muted)]">
                LiteBright does not overclock hardware, flash firmware, or exceed manufacturer panel limits.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                4. Acceptable Use
              </h2>
              <p className="text-[var(--text-muted)]">
                You agree not to redistribute LiteBright bundled with malware, adware, spyware, or harmful payloads, nor misrepresent yourself as the original author or official representative of SNK DevWorks without authorization.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                5. Disclaimer of Warranties
              </h2>
              <p className="text-[var(--text-muted)]">
                The software is provided &quot;as is&quot;, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the software will be completely error-free or that all display hardware will support software control.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                6. Limitation of Liability
              </h2>
              <p className="text-[var(--text-muted)]">
                In no event shall the authors, copyright holders, or SNK DevWorks be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from or out of the use of or inability to use LiteBright.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-semibold text-[var(--text-main)]">
                7. Contact & Support
              </h2>
              <p className="text-[var(--text-muted)]">
                For licensing questions, contributions, or issues, please visit our repository at{' '}
                <a
                  href="https://github.com/SN7k/LiteBright"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  github.com/SN7k/LiteBright <ExternalLink className="w-3 h-3" />
                </a>{' '}
                or contact{' '}
                <a
                  href="https://snkdevworks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:underline font-medium inline-flex items-center gap-0.5"
                >
                  SNK DevWorks <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </section>
          </div>
        </article>
      )}
    </div>
  );
}
