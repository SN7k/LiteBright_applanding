# LiteBright — SEO, Features & Product Guide

<div align="center">

<img src="https://res.cloudinary.com/dlpskz98w/image/upload/v1772171009/icon_szimom_qs5cfk.png" width="128" alt="LiteBright Logo" />

# LiteBright
### The Ultra-Lightweight, Native Windows 11 Brightness Controller for Desktop Monitors & Laptops

*Effortless DDC/CI hardware control, multi-monitor brightness sliders, tray scroll gestures, and global hotkeys — with zero Electron bloat.*

<br>

[![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%7C%20Windows%2011-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://github.com/SN7k/LightBright)
[![Runtime](https://img.shields.io/badge/.NET-10.0%20(x64)-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/download/dotnet/10.0)
[![Framework](https://img.shields.io/badge/UI-WPF%20Fluent%20Design-blueviolet?style=for-the-badge)](https://github.com/SN7k/LightBright)
[![Memory](https://img.shields.io/badge/RAM%20Usage-~25%20MB-success?style=for-the-badge)](https://github.com/SN7k/LightBright)
[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Donate-yellow?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/litebright)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br>

</div>

---

## 🌟 Executive Summary & Value Proposition

**LiteBright** is a fast, resource-efficient brightness management solution designed specifically for Windows 10 and Windows 11. 

By default, the Windows operating system only allows users to adjust brightness on internal laptop panels; external desktop monitors connected via HDMI, DisplayPort, or USB-C cannot be dimmed without reaching for physical hardware buttons on the monitor bezel.

**LiteBright eliminates this barrier.** It interfaces directly with display hardware via **DDC/CI (Display Data Channel / Command Interface)** and internal displays via **WMI (Windows Management Instrumentation)**. Whether you manage a multi-monitor battle-station, an ultrawide productivity setup, or a docked laptop, LiteBright gives you smooth, instantaneous brightness and contrast control right from your taskbar.

---

## ⚡ Why LiteBright? (The Native Advantage)

Most third-party brightness utilities on Windows (such as Twinkle Tray) are built on top of **Electron and Chromium**. While functional, they bundle an entire web browser engine, regularly consuming **250 MB to 500 MB of RAM**, creating delayed tray animations, and increasing system overhead.

LiteBright was engineered from the ground up in **pure C# and .NET 10 WPF**:
- 🪶 **Ultra-Low Memory Footprint**: Uses only **~20 MB to 30 MB of RAM** (~10x to 15x lighter than Electron utilities).
- ⚡ **Instant Response Time**: Native Win32 interop (`dxva2.dll`) interacts with the monitor's I2C bus with zero intermediate web layers.
- 🎨 **Authentic Windows 11 Fluent UI**: Uses native WPF components with acrylic backdrops, rounded geometry, Segoe Fluent Icons, and automatic system accent color synchronization.
- 🔒 **Completely Private & Offline**: LiteBright contains zero telemetry, no ad tracking, and does not require an internet connection.

---

## 📊 Feature Comparison Matrix

| Feature / Metric | Windows Default | Electron Apps (Twinkle Tray) | LiteBright |
|:---|:---:|:---:|:---:|
| **External Monitor Control (DDC/CI)** | ❌ Unsupported | ✅ Yes | ✅ **Yes (High & Low Level Interop)** |
| **Laptop & Surface Displays (WMI)** | ✅ Supported | ✅ Yes | ✅ **Yes** |
| **Average RAM Footprint** | System Service | 250 MB – 500 MB+ | 🟢 **~25 MB** |
| **Startup Duration** | Instant | 2 – 5 seconds | ⚡ **<0.2 seconds** |
| **Tray Scroll-Wheel Adjustment** | ❌ No | ✅ Yes | 🚀 **Yes (Low-level mouse hook)** |
| **Windows 11 Fluent Context Menu** | Generic | Web-simulated | 💎 **Native Windows 11 Fluent Menu** |
| **Hardware Monitor Telemetry** | ❌ None | Basic | 🔍 **Full EDID, I2C, Normalization & HDR** |
| **Global Customizable Hotkeys** | ❌ No | ✅ Yes | ⌨️ **Yes (UI Thread Synchronized)** |
| **DDC/CI I2C Bus Throttling** | ❌ No | Basic | ⚙️ **Configurable (0ms – 250ms)** |
| **Multi-Language Support** | Standard | 30+ Languages | 🌍 **35+ Built-in Localizations** |
| **Admin Rights Required** | N/A | Varies | 🛡️ **None (Runs entirely in user mode)** |

---

## 🚀 Complete Feature Breakdown

### 1. 🖥️ Multi-Monitor Hardware Control
* **Independent Brightness Sliders**: Set exact light levels for each connected display independently based on room positioning and ambient sunlight.
* **Unified Master Control**: Adjust brightness across all monitors at once using proportional normalization.
* **Direct Hardware Communication (DDC/CI)**: Adjusts the monitor's physical backlight lamp or OLED emission levels through the video cable — avoiding washed-out software gamma filters.
* **WMI Integration**: Direct communication with Windows ACPI brightness methods for laptops and convertible tablets.
* **Graceful Unsupported Display Handling**: If a secondary display does not expose DDC/CI commands, LiteBright displays its name with reduced opacity, preventing annoying error dialogs.
* **Optional Hardware Contrast Control**: Enable an auxiliary contrast slider for fine-tuning display color fidelity.

### 2. 🖱️ System Tray Mouse Wheel Gestures
* **Scroll-Over Adjustment**: Simply hover the mouse cursor over LiteBright's sun icon in the system tray and spin the mouse scroll wheel.
* **Zero Window Interruption**: Change brightness during gaming sessions, video editing, or virtual meetings without focusing a window or opening a flyout.
* **Real-Time Dynamic Tooltips**: Instant hover tooltips display active monitor names and brightness percentages as you scroll.

### 3. 🎨 Native Windows 11 Visual Experience
* **Auto Light / Dark Theme Syncing**: Automatically mirrors your Windows personalization preferences or allows manual override.
* **System Accent Color Harmonization**: Sliders, toggle switches, and selection pills automatically adapt to your chosen Windows Accent Color.
* **Modern Fluent Tray Context Menu**: Custom-crafted Windows 11 flyout context menu with rounded borders, icon glyphs, and micro-hover animations.

### 4. 🔍 Monitor Diagnostics & EDID Telemetry
Under **Settings → Monitor Settings**, LiteBright provides comprehensive diagnostic reporting:
* **Friendly Model Name**: e.g., `Acer KA242Y E`, `Dell UltraSharp U2720Q`
* **Internal EDID Manufacturer Code**: e.g., `ACR0B70`, `DEL4182`
* **Active Communication Protocol**: Displays whether the monitor is driven by `DDC/CI (HL)`, `WMI`, or `None`
* **Hardware Brightness Values**: Current brightness, maximum physical limit, and normalization range (`0 - 100`)
* **HDR Telemetry**: Shows whether High Dynamic Range is currently `Enabled` or `Unsupported`
* **"Refresh Displays" Action**: One-click re-querying of all physical and virtual display handles.

### 5. ⚙️ Hardware Tuning & Reliability Controls
* **I2C / DDC Bus Throttling**: Configure deliberate transmission delays (0ms, 25ms, 50ms, 100ms, or 250ms) between hardware I2C packets to accommodate sensitive monitor scalers and prevent monitor bus lockups.
* **Custom Step Percentages**: Configure the exact percentage step (1% to 20%) applied during hotkey presses or mouse wheel ticks.

### 6. ⌨️ Global Keyboard Hotkeys
* Configure system-wide keyboard shortcuts that operate even when LiteBright is minimized:
  * **Increase Brightness**
  * **Decrease Brightness**
  * **Jump to Presets** (e.g. 25%, 50%, 75%, 100%)
  * **Dim to Minimum**
* Supports multi-key combinations: <kbd>Ctrl</kbd>, <kbd>Alt</kbd>, <kbd>Shift</kbd>, and <kbd>Win</kbd> + any keyboard key.

### 7. 🌍 International Localization (35+ Languages)
LiteBright includes built-in native translations for over 35 languages:
* English, German (*Deutsch*), French (*Français*), Spanish (*Español*), Italian (*Italiano*), Portuguese (*Português*), Brazilian Portuguese (*Português do Brasil*), Dutch (*Nederlands*), Russian (*Русский*), Polish (*Polski*), Swedish (*Svenska*), Turkish (*Türkçe*), Ukrainian (*Українська*), Czech (*Čeština*), Hungarian (*Magyar*), Romanian (*Română*), Finnish (*Suomi*), Norwegian (*Norsk*), Lithuanian (*Lietuvių*), Croatian (*Hrvatski*), Slovak (*Slovenčina*), Vietnamese (*Tiếng Việt*), Indonesian (*Bahasa Indonesia*), Chinese Simplified (*简体中文*), Chinese Traditional (*繁體中文*), Japanese (*日本語*), Korean (*한국어*), Hindi (*हिन्दी*), Bengali (*বাংলা*), Tamil (*தமிழ்*), Thai (*ไทย*), Arabic (*العربية*), Hebrew (*עברית*), Persian (*فارسی*), Central Kurdish (*کوردی*), and Azerbaijani (*Azərbaycan*).

### 8. 🛡️ User-Centric System Integration
* **Zero Admin Rights Needed**: LiteBright registers for Windows login via `HKCU\Software\Microsoft\Windows\CurrentVersion\Run`. No administrative elevation or UAC popups are ever required.
* **Dynamic Cable Plug Detection**: Listens to Windows `DisplaySettingsChanged` events to seamlessly detect HDMI, DisplayPort, and Type-C monitor connections on the fly.
* **Startup Brightness Restoration**: Remembers your preferred brightness levels across system restarts.

---

## 🏗️ Technical Architecture

LiteBright is designed with clean architectural boundaries:

```
┌────────────────────────────────────────────────────────┐
│                   System Tray Shell                    │
│   (NotifyIcon • FluentTrayContextMenu • LowLevelHook)  │
└──────────────────────────┬─────────────────────────────┘
                           │
┌──────────────────────────▼─────────────────────────────┐
│                 TrayApplicationContext                 │
│         (Lifecycle, Settings, Event Routing)           │
└────────────┬─────────────────────────────┬─────────────┘
             │                             │
┌────────────▼────────────┐   ┌────────────▼─────────────┐
│     MonitorManager      │   │      HotkeyManager       │
│ (Display Enumeration)   │   │ (Win32 RegisterHotKey)   │
└──────┬────────────┬─────┘   └──────────────────────────┘
       │            │
┌──────▼─────┐ ┌────▼───────┐
│ DdcCiHelper│ │ WmiHelper  │
│ (dxva2.dll)│ │ (root/wmi) │
└────────────┘ └────────────┘
```

* **Core Framework**: .NET 10.0 Windows (`net10.0-windows`)
* **Graphics Subsystem**: Windows Presentation Foundation (WPF) with Per-Monitor V2 DPI awareness
* **Native Interop**: `dxva2.dll` (`GetPhysicalMonitorsFromHMONITOR`, `GetMonitorBrightness`, `SetMonitorBrightness`)
* **Mouse Input Capture**: Win32 `SetWindowsHookEx` (`WH_MOUSE_LL`) for tray hover detection

---

## 🔎 SEO Metadata & Indexing Keywords

To maximize discoverability across search engines, software repositories, and GitHub:

### Primary Keywords
`windows 11 brightness slider`, `external monitor brightness windows 10`, `ddc/ci brightness controller windows`, `twinkle tray alternative lightweight`, `multi monitor brightness controller`, `system tray brightness control windows 11`, `laptop screen brightness hotkey utility`, `windows brightness control without electron`.

### Secondary & Long-tail Keywords
`how to control desktop monitor brightness in windows 11`, `adjust hdmi monitor brightness software`, `displayport ddc ci brightness tool`, `c# wpf brightness app`, `best brightness controller for windows 11`, `fastest monitor brightness slider`, `lightweight monitor dimmer`, `i2c ddc ci monitor tool windows`, `wmi laptop brightness slider`, `open source monitor brightness windows`.

### Categorization Tags
* **Category**: Utilities, Display & Monitor Tools, Desktop Customization, System Optimization
* **Platforms Supported**: Windows 10 (64-bit), Windows 11 (64-bit)
* **Architecture**: x64 Intel/AMD

---

<div align="center">
<sub>LiteBright © 2026 • High-Performance Display Controller for Windows</sub>
</div>
