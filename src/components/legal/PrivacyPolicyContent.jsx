import React from 'react';
import {
  Shield,
  EyeOff,
  Monitor,
  HardDrive,
  WifiOff,
  ExternalLink,
  Users,
  Scale,
  Lock,
  RefreshCw,
  Mail,
  CheckCircle2,
  AlertCircle,
  FileCode2,
} from 'lucide-react';

export const PRIVACY_SECTIONS = [
  {
    id: 'introduction',
    title: '1. Introduction & Zero-Data Architecture',
    badge: 'Core Principle',
    icon: Shield,
    summary: 'LiteBright is built from the ground up to respect your digital privacy. We do not collect, process, or sell any personal data.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          Welcome to <strong>LiteBright</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;the software&quot;), an open-source, ultra-lightweight Windows 10 and Windows 11 brightness management application developed and maintained by <strong>SNK DevWorks</strong> and open-source contributors.
        </p>
        <p className="leading-relaxed">
          We believe display utility tools have no business tracking your activities, inspecting your documents, or phoning home to remote servers. This Privacy Policy outlines our transparent, zero-telemetry architecture and explains how LiteBright interacts solely with your local Windows operating system and attached display hardware.
        </p>
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
              Zero-Data Guarantee
            </span>
            <span>
              LiteBright runs 100% locally on your machine. We do not operate user accounts, analytics tracking databases, advertising networks, or background telemetry services.
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'data-not-collected',
    title: '2. Information We Do NOT Collect',
    badge: 'No Surveillance',
    icon: EyeOff,
    summary: 'A detailed breakdown of data types that LiteBright strictly never gathers or accesses.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          Unlike many Electron-based utilities that bundle web analytics or tracking scripts, LiteBright does not collect:
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Personal Identifiable Information (PII):</strong> No names, email addresses, phone numbers, postal addresses, or user credentials.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Device & Location Identifiers:</strong> No IP addresses, MAC addresses, Windows device serial numbers, or geolocation data.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Keystroke & Input Logging:</strong> LiteBright registers user-configured global hotkeys through the official Windows <code>RegisterHotKey</code> Win32 API. It intercepts only the exact key combinations you assign to brightness actions and never reads, monitors, or logs any other keystroke.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Screen Capture & Display Content:</strong> LiteBright communicates only with hardware brightness registers. It never captures screenshots, records screen buffers, or inspects visible window contents.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Behavioral & Usage Telemetry:</strong> We do not track how often you adjust brightness, how many monitors you connect, what hours you work, or how long the app runs.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'hardware-interaction',
    title: '3. Local Hardware & Windows API Interaction',
    badge: 'Hardware DDC/CI & WMI',
    icon: Monitor,
    summary: 'How LiteBright safely talks to external and internal displays using official Windows APIs.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          To adjust brightness and contrast across desktop monitors and laptops without physical buttons, LiteBright utilizes native Windows low-level system APIs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <div className="font-semibold text-[var(--text-main)] mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              External Monitors (DDC/CI)
            </div>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">
              Interacts via <code>dxva2.dll</code> (High-Level and Low-Level Monitor Configuration API) over I2C/DisplayPort/HDMI to read and transmit standardized VESA VCP Code <code>0x10</code> (Brightness) and <code>0x12</code> (Contrast).
            </p>
          </div>
          <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <div className="font-semibold text-[var(--text-main)] mb-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Internal Panels (WMI)
            </div>
            <p className="text-[var(--text-muted)] text-xs leading-relaxed">
              Interacts with internal laptop and Surface displays via <code>WmiMonitorBrightness</code> and <code>WmiMonitorBrightnessMethods</code> in the <code>root\wmi</code> namespace.
            </p>
          </div>
        </div>
        <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] text-xs sm:text-sm">
          <div className="font-semibold text-[var(--text-main)] mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            System Tray Mouse Wheel Hook
          </div>
          <p className="text-[var(--text-muted)] text-xs leading-relaxed">
            LiteBright uses a low-level mouse hook (<code>WH_MOUSE_LL</code>) exclusively scoped to intercept mouse scroll events when your cursor is positioned directly over the LiteBright notification area (system tray) icon. Mouse actions outside of this icon bounding box are completely ignored.
          </p>
        </div>
        <p className="text-xs text-[var(--text-muted)]">
          All hardware identifiers (such as EDID strings and monitor serial numbers) are queried in-memory solely to uniquely pair your display sliders with the physical screen on your desk. This metadata never leaves your system.
        </p>
      </div>
    ),
  },
  {
    id: 'local-storage',
    title: '4. Local Storage & User Configuration',
    badge: 'On-Device Storage',
    icon: HardDrive,
    summary: 'Where your custom monitor names, slider offsets, and hotkey preferences are saved on your PC.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          LiteBright saves your preferences (such as custom monitor labels, brightness curves, link-slider states, and launch-at-startup flags) exclusively on your local computer storage:
        </p>
        <div className="p-3 rounded-lg bg-black/40 text-cyan-300 font-mono text-xs overflow-x-auto border border-white/10 select-all">
          %LOCALAPPDATA%\LiteBright\settings.json
        </div>
        <p className="leading-relaxed text-sm">
          This configuration file is entirely under your control:
        </p>
        <ul className="space-y-2 text-sm text-[var(--text-muted)]">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 font-bold">✓</span>
            <span>You may inspect, edit, or back up this JSON file at any time.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 font-bold">✓</span>
            <span>Uninstalling LiteBright or deleting this directory permanently removes all application preferences.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 font-bold">✓</span>
            <span>We maintain no cloud mirrors, cloud backups, or remote synchronization copies.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'network-policy',
    title: '5. Network Connectivity & Web Services',
    badge: '100% Offline App',
    icon: WifiOff,
    summary: 'The LiteBright desktop binary requires zero internet connection to function.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          The LiteBright desktop client is an entirely offline application. It does not open background listening ports, establish outbound telemetry connections, or communicate with remote servers.
        </p>
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] text-sm">
            <span className="font-semibold text-[var(--text-main)] block mb-1">
              Software Updates
            </span>
            <span className="text-[var(--text-muted)] text-xs leading-relaxed block">
              LiteBright does not silently download executable files in the background. Clicking &quot;Check for Updates&quot; in settings or on our website opens the official GitHub Releases page in your default web browser for you to inspect changelogs and download verified binaries directly.
            </span>
          </div>
          <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] text-sm">
            <span className="font-semibold text-[var(--text-main)] block mb-1">
              Landing Page & Website (litebright.pages.dev)
            </span>
            <span className="text-[var(--text-muted)] text-xs leading-relaxed block">
              Our landing website is statically hosted on Cloudflare Pages. Cloudflare may process transient access logs (IP address, user-agent) purely for DDoS protection, caching, and edge routing as described in Cloudflare&apos;s Global Privacy Policy. LiteBright deploys no Google Analytics, tracking cookies, or tracking pixels on this domain.
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'third-parties',
    title: '6. Third-Party Distribution & External Links',
    badge: 'External Services',
    icon: ExternalLink,
    summary: 'How Microsoft Store, GitHub, and community sponsorship links handle external interactions.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          LiteBright interacts with trusted third-party developer platforms for distribution and community collaboration:
        </p>
        <ul className="space-y-3 text-sm">
          <li className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <strong className="text-[var(--text-main)] block mb-1">Microsoft Store:</strong>
            <span className="text-[var(--text-muted)] text-xs leading-relaxed block">
              When acquired via the Microsoft Store, Microsoft handles the delivery, installation, and Microsoft Account telemetry according to Microsoft&apos;s Privacy Statement. LiteBright developers receive only aggregated, anonymized crash counts and download metrics provided through Partner Center.
            </span>
          </li>
          <li className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <strong className="text-[var(--text-main)] block mb-1">GitHub (SN7k/LiteBright):</strong>
            <span className="text-[var(--text-muted)] text-xs leading-relaxed block">
              Our source code repository and bug tracker are hosted on GitHub. If you open a public issue, discussion, or pull request, your GitHub username and contributed text become publicly viewable under GitHub&apos;s Privacy Statement.
            </span>
          </li>
          <li className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <strong className="text-[var(--text-main)] block mb-1">Buy Me a Coffee:</strong>
            <span className="text-[var(--text-muted)] text-xs leading-relaxed block">
              If you choose to support the project via donation links, financial processing is handled securely by Buy Me a Coffee and Stripe/PayPal. LiteBright never collects or stores credit cards, bank accounts, or billing data.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'children',
    title: '7. Children’s Online Privacy Protection',
    badge: 'COPPA / Age Safe',
    icon: Users,
    summary: 'LiteBright does not knowingly collect data from children under any jurisdiction.',
    render: () => (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          LiteBright is a general utility software for managing display monitors. We do not collect any personal data from any person, including children under the age of 13 (or under 16 in the European Union and United Kingdom).
        </p>
        <p className="text-[var(--text-muted)]">
          Because no accounts, profiles, or network data streams exist within LiteBright, parents and guardians can rest assured that children using multi-monitor setups with LiteBright are not being tracked, profiled, or targeted with advertisements.
        </p>
      </div>
    ),
  },
  {
    id: 'user-rights',
    title: '8. Global Privacy Rights (GDPR, CCPA/CPRA, UK GDPR)',
    badge: 'Worldwide Rights',
    icon: Scale,
    summary: 'How global privacy mandates apply when zero remote data is retained.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          Regulations such as the European Union General Data Protection Regulation (<strong>GDPR</strong>), the UK GDPR, and the California Consumer Privacy Act (<strong>CCPA/CPRA</strong>) grant users specific rights regarding their personal data, including the right to know, access, rectify, delete, and port data.
        </p>
        <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-sm space-y-2">
          <div className="font-semibold text-cyan-600 dark:text-cyan-400">
            Fulfillment of Privacy Rights
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-main)] leading-relaxed">
            Because LiteBright does not collect, transmit, or retain your personal information on any server, we have no personal data to provide, rectify, or sell. You have total sovereign control over your data directly on your device.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            To delete all traces of LiteBright from your computer, simply delete the local configuration directory at <code>%LOCALAPPDATA%\LiteBright</code> and uninstall the app.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'security-audit',
    title: '9. Security & Open Source Verification',
    badge: 'MIT Auditable',
    icon: Lock,
    summary: 'Verify our privacy promises directly in the public source code repository.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          Unlike proprietary utilities whose internal behavior cannot be examined, LiteBright is fully open-source under the permissive <strong>MIT License</strong>.
        </p>
        <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <FileCode2 className="w-5 h-5 text-cyan-500" />
            </div>
            <div>
              <div className="font-semibold text-sm text-[var(--text-main)]">
                Inspect Source Code on GitHub
              </div>
              <div className="text-xs text-[var(--text-muted)]">
                Repository: github.com/SN7k/LiteBright
              </div>
            </div>
          </div>
          <a
            href="https://github.com/SN7k/LiteBright"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--btn-bg)] text-[var(--btn-text)] hover:opacity-90 transition-opacity"
          >
            <span>Review Source Code</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          Security researchers and users are encouraged to audit our codebase, build binaries directly from source using the .NET SDK, and verify network traffic through Wireshark or Fiddler to confirm our complete lack of outbound telemetry.
        </p>
      </div>
    ),
  },
  {
    id: 'updates',
    title: '10. Changes to this Privacy Policy',
    badge: 'Version Updates',
    icon: RefreshCw,
    summary: 'How and when updates to our privacy documentation are published.',
    render: () => (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          We may periodically update this Privacy Policy to reflect enhancements in LiteBright, new display protocol capabilities, or changes in applicable laws.
        </p>
        <p className="text-[var(--text-muted)]">
          When changes are made, we will update the &quot;Last Updated&quot; timestamp at the top of this document and summarize the changes in our repository release notes. Continued use of LiteBright following any updates signifies your agreement with the updated terms.
        </p>
      </div>
    ),
  },
  {
    id: 'contact',
    title: '11. Contact & Developer Information',
    badge: 'SNK DevWorks',
    icon: Mail,
    summary: 'Direct lines of contact with the development team.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          If you have any questions, feedback, or security inquiries regarding this Privacy Policy or LiteBright&apos;s data practices, please reach out to us:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">
              Developer & Publisher
            </div>
            <div className="font-semibold text-[var(--text-main)] mb-1">
              SNK DevWorks
            </div>
            <a
              href="https://snkdevworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-500 hover:underline flex items-center gap-1"
            >
              snkdevworks.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">
              Open Source Issues & Support
            </div>
            <div className="font-semibold text-[var(--text-main)] mb-1">
              GitHub Community
            </div>
            <a
              href="https://github.com/SN7k/LiteBright/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-500 hover:underline flex items-center gap-1"
            >
              github.com/SN7k/LiteBright/issues <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    ),
  },
];
