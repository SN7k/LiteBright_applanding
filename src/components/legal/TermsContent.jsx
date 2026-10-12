import React, { useState } from 'react';
import {
  FileText,
  Scale,
  MonitorCheck,
  CheckCircle2,
  AlertTriangle,
  Code2,
  ShieldAlert,
  Copy,
  Check,
  Building,
  Layers,
  Terminal,
  ExternalLink,
  Mail,
} from 'lucide-react';

export const TERMS_SECTIONS = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    badge: 'Binding Agreement',
    icon: FileText,
    summary: 'By downloading, running LiteBright, or accessing our site, you agree to these Terms.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          These Terms and Conditions (&quot;Terms&quot;, &quot;Agreement&quot;) constitute a binding legal agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and <strong>SNK DevWorks</strong> together with the <strong>LiteBright Open Source Project</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p className="leading-relaxed">
          By downloading, installing, launching, copying, or otherwise using the <strong>LiteBright</strong> desktop software (whether acquired from GitHub, the Microsoft Store, or direct download), or by accessing our landing website at <code>litebright.pages.dev</code>, you expressly agree to be bound by all terms, conditions, disclaimers, and notices contained herein.
        </p>
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-semibold text-amber-600 dark:text-amber-400 block mb-1">
              Important Notice
            </span>
            <span>
              If you do not agree to these Terms in full, you must not download, install, or run LiteBright, and you should delete all local copies of the application and its associated files immediately.
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'mit-license',
    title: '2. Open Source License Grant (MIT License)',
    badge: 'OSI Approved',
    icon: Code2,
    summary: 'LiteBright is free software licensed under the permissive MIT Open Source License.',
    render: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [copied, setCopied] = useState(false);
      const mitText = `MIT License

Copyright (c) 2026 SNK DevWorks & LiteBright Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

      const handleCopy = () => {
        navigator.clipboard.writeText(mitText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

      return (
        <div className="space-y-4">
          <p className="leading-relaxed">
            The core LiteBright software codebase is distributed under the terms of the widely adopted, permissive <strong>MIT License</strong>. You are permitted to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                ✓ Free Personal & Commercial Use
              </span>
              <span className="text-[var(--text-muted)] text-xs">
                Run LiteBright on as many personal, enterprise, work, or gaming PCs as you wish without fees.
              </span>
            </div>
            <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                ✓ Modify & Fork
              </span>
              <span className="text-[var(--text-muted)] text-xs">
                Inspect, modify the C# .NET WPF source code, and build customized versions for your workflow.
              </span>
            </div>
          </div>

          <div className="relative mt-3">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 text-slate-200 rounded-t-xl text-xs font-mono border-b border-white/10">
              <span className="font-medium text-slate-400">LICENSE — MIT Full Text</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 transition-colors text-xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy License'}</span>
              </button>
            </div>
            <pre className="p-4 bg-slate-950 text-slate-300 font-mono text-xs rounded-b-xl overflow-x-auto leading-relaxed border border-t-0 border-white/10">
              {mitText}
            </pre>
          </div>
        </div>
      );
    },
  },
  {
    id: 'hardware-compatibility',
    title: '3. Hardware Compatibility & DDC/CI Protocols',
    badge: 'Hardware Safety',
    icon: MonitorCheck,
    summary: 'Understanding monitor communication standards and manufacturer firmware variations.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          LiteBright interacts directly with attached external displays using the <strong>VESA Display Data Channel / Command Interface (DDC/CI)</strong> and <strong>Monitor Control Command Set (MCCS)</strong> standards:
        </p>
        <ul className="space-y-2.5 text-sm">
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Industry Standards:</strong> LiteBright communicates solely via standard Windows-certified APIs (<code>dxva2.dll</code>) and issues official VESA VCP Code <code>0x10</code> commands for luminance and <code>0x12</code> for contrast.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Manufacturer Firmware Variance:</strong> Hardware manufacturers implement DDC/CI microcode differently. Some monitors respond instantaneously, while others have slower onboard scalar chips, delay response over HDMI, or require DDC/CI to be manually enabled in their physical on-screen display (OSD) menus.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>Adapters & Docks:</strong> USB-C hubs, DisplayPort to HDMI active adapters, and KVM switches may strip or block I2C DDC/CI packets. This is an inherent hardware limitation outside LiteBright&apos;s control.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
            <span><strong>No Hardware Overclocking:</strong> LiteBright does not flash firmware, alter panel refresh rates, or push displays beyond their factory hardware specifications.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'acceptable-use',
    title: '4. Permitted and Prohibited Uses',
    badge: 'Rules of Conduct',
    icon: Scale,
    summary: 'Guidelines ensuring fair, lawful, and safe deployment of LiteBright.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          While the MIT License grants extensive freedoms, you agree not to engage in the following prohibited behaviors:
        </p>
        <div className="space-y-2.5 text-sm">
          <div className="p-3 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold">✕</span>
            <span><strong>Malicious Re-distribution:</strong> You may not repackage, wrap, or redistribute LiteBright with malware, adware, spyware, cryptominers, or unauthorized third-party payload installers.</span>
          </div>
          <div className="p-3 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold">✕</span>
            <span><strong>Misleading End-Users:</strong> You may not remove copyright headers from forks or misrepresent LiteBright as proprietary commercial software authored by yourself.</span>
          </div>
          <div className="p-3 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-start gap-2.5">
            <span className="text-rose-500 font-bold">✕</span>
            <span><strong>Impersonation:</strong> You may not claim official endorsement, partnership, or affiliation with SNK DevWorks or the LiteBright project without prior written consent.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property & Trademarks',
    badge: 'Branding & IP',
    icon: Building,
    summary: 'Ownership of brand assets, logos, and third-party trademarks.',
    render: () => (
      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          The LiteBright name, official visual brand identity, icons, graphics, landing page designs, and the SNK DevWorks mark are the intellectual property of <strong>SNK DevWorks</strong>.
        </p>
        <p className="text-[var(--text-muted)]">
          <strong>Third-Party Trademarks:</strong>
        </p>
        <ul className="space-y-1.5 text-xs text-[var(--text-muted)]">
          <li>• &quot;Microsoft&quot;, &quot;Windows&quot;, &quot;Windows 10&quot;, &quot;Windows 11&quot;, and &quot;Microsoft Store&quot; are registered trademarks of Microsoft Corporation.</li>
          <li>• &quot;VESA&quot; and &quot;DisplayPort&quot; are registered trademarks of the Video Electronics Standards Association.</li>
          <li>• &quot;HDMI&quot; is a registered trademark of HDMI Licensing Administrator, Inc.</li>
          <li>• &quot;Twinkle Tray&quot;, &quot;CareUEyes&quot;, and &quot;Brightness Slider&quot; are referenced solely for comparative and educational benchmarking purposes.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'store-dependencies',
    title: '6. Platform Dependencies & Distribution',
    badge: 'Platform Terms',
    icon: Layers,
    summary: 'Terms applying to Microsoft Store downloads and .NET runtime dependencies.',
    render: () => (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          LiteBright is built using Microsoft .NET 10 WPF and relies upon native Windows subsystem libraries. When installing via the Microsoft Store:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 font-bold">1.</span>
            <span>Your acquisition of LiteBright is also subject to the Microsoft Store Terms of Sale and Microsoft Services Agreement.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 font-bold">2.</span>
            <span>The Microsoft Store app is distributed at no monetary cost (100% Free, no hidden in-app subscriptions, no paywalls).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 font-bold">3.</span>
            <span>You are responsible for ensuring your machine meets the minimum system requirements: Windows 10 (Build 19041+) or Windows 11 (64-bit).</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'warranty-disclaimer',
    title: '7. Disclaimer of Warranties ("AS IS")',
    badge: 'Legal Disclaimer',
    icon: ShieldAlert,
    summary: 'The software is provided without warranty of any kind, to the fullest extent permitted by law.',
    render: () => (
      <div className="space-y-3">
        <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5 text-xs sm:text-sm uppercase font-mono tracking-tight text-[var(--text-main)] leading-relaxed">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SOFTWARE, LANDING PAGE, AND DOCUMENTATION ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;, WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.
          <br /><br />
          SNK DEVWORKS AND CONTRIBUTORS DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, COMPATIBILITY WITH SPECIFIC MONITOR BRANDS OR CHIPSETS, ACCURACY, AND NON-INFRINGEMENT.
        </div>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
          We do not warrant that LiteBright will operate uninterrupted or error-free, that all displays will support DDC/CI software commands, or that future Windows operating system updates will not require software patches.
        </p>
      </div>
    ),
  },
  {
    id: 'limitation-liability',
    title: '8. Limitation of Liability',
    badge: 'Liability Boundary',
    icon: Scale,
    summary: 'Our total legal liability is limited to the fullest extent permitted by applicable law.',
    render: () => (
      <div className="space-y-3">
        <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] text-xs sm:text-sm font-mono uppercase tracking-tight text-[var(--text-main)] leading-relaxed">
          IN NO EVENT SHALL SNK DEVWORKS, PROJECT CONTRIBUTORS, OR COPYRIGHT HOLDERS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, LOSS OF USE, DATA, REVENUE, PROFITS, SYSTEM DOWNTIME, OR HARDWARE MALFUNCTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF OR INABILITY TO USE THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        </div>
        <p className="text-xs text-[var(--text-muted)]">
          In jurisdictions where the exclusion or limitation of liability for consequential or incidental damages is not permitted, our liability is limited to the greatest extent allowed by law.
        </p>
      </div>
    ),
  },
  {
    id: 'indemnification',
    title: '9. Indemnification',
    badge: 'Hold Harmless',
    icon: CheckCircle2,
    summary: 'Your agreement to hold developers harmless against unauthorized claims or modifications.',
    render: () => (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          You agree to defend, indemnify, and hold harmless SNK DevWorks, its maintainers, and open-source contributors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or legal fees arising out of or relating to:
        </p>
        <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-muted)]">
          <li>1. Your violation of these Terms or the MIT License;</li>
          <li>2. Your redistribution of modified LiteBright binaries containing unauthorized alterations;</li>
          <li>3. Your violation of any third-party intellectual property or display manufacturer rights.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'termination',
    title: '10. Termination & Severability',
    badge: 'Contract Terms',
    icon: Terminal,
    summary: 'Conditions under which permissions terminate and validity of provisions.',
    render: () => (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          Your rights granted under these Terms terminate automatically if you fail to comply with any material provision of the MIT License. Upon termination, you must cease all use of LiteBright and destroy all copies in your possession.
        </p>
        <p className="text-[var(--text-muted)] text-xs leading-relaxed">
          <strong>Severability:</strong> If any provision of these Terms is determined by a court of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall continue in full force and effect.
        </p>
      </div>
    ),
  },
  {
    id: 'governing-law',
    title: '11. Governing Law & Dispute Resolution',
    badge: 'Jurisdiction',
    icon: Scale,
    summary: 'Informal resolution and applicable legal standards.',
    render: () => (
      <div className="space-y-3 text-sm leading-relaxed">
        <p>
          These Terms and your use of LiteBright are governed by standard open-source principles and applicable law, without regard to conflicts of law principles.
        </p>
        <p className="text-[var(--text-muted)] text-xs sm:text-sm leading-relaxed">
          In the event of any question or dispute, we strongly encourage contacting the developers first via GitHub Discussions or direct communication at <code>snkdevworks.com</code> so issues can be resolved quickly, amicably, and transparently.
        </p>
      </div>
    ),
  },
  {
    id: 'terms-contact',
    title: '12. Contact Information',
    badge: 'Developer Support',
    icon: Mail,
    summary: 'How to contact the project maintainers for licensing and support inquiries.',
    render: () => (
      <div className="space-y-4">
        <p className="leading-relaxed">
          For legal inquiries, licensing questions, or enterprise deployment guidance, please contact:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)]">
            <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-1">
              Organization
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
              GitHub Repository
            </div>
            <div className="font-semibold text-[var(--text-main)] mb-1">
              LiteBright Open Source
            </div>
            <a
              href="https://github.com/SN7k/LiteBright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-500 hover:underline flex items-center gap-1"
            >
              github.com/SN7k/LiteBright <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    ),
  },
];
