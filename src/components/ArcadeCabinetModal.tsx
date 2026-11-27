import { useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Gamepad2,
  RotateCcw,
  Store,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { INTEL_HARDWARE_URLS, INTEL_REAL_PHOTO_URLS } from '../game/assets';
import type { IntelHardwareKey } from '../game/types';

interface ArcadeCabinetModalProps {
  open: boolean;
  muted: boolean;
  onToggleMute: () => void;
  onResetQuest: () => void;
  onExitArcade: () => void;
  onJumpToChecklist: () => void;
  onInspectAdHardware: (key: IntelHardwareKey) => void;
  onVirtualMove: (dx: number, dy: number) => void;
  onVirtualAction: (action: 'attack' | 'special' | 'dash' | 'interact') => void;
  children: ReactNode;
}

interface CabinetAdvert {
  hardwareKey: IntelHardwareKey;
  eyebrow: string;
  title: string;
  copy: string;
  photoUrl: string;
}

const LEFT_ADVERTS: CabinetAdvert[] = [
  {
    hardwareKey: 'npu_ai_boost',
    eyebrow: 'Intel AI Boost · 45–48+ TOPS',
    title: 'Dedicated Offline NPU',
    copy: 'Summarize notes, blur webcams, and run local AI without cloud wait or fan roar.',
    photoUrl: INTEL_REAL_PHOTO_URLS.processor,
  },
  {
    hardwareKey: 'core_ultra_battery',
    eyebrow: 'Low-Power Island E-Cores',
    title: '20+ Hr Campus Battery',
    copy: 'Three compute engines let background work sip power so your charger stays packed.',
    photoUrl: INTEL_REAL_PHOTO_URLS.aiPcLaptop,
  },
];

const RIGHT_ADVERTS: CabinetAdvert[] = [
  {
    hardwareKey: 'arc_xess_rig',
    eyebrow: 'Intel Arc + XMX Engines',
    title: 'XeSS AI Frame Boost',
    copy: 'Crisp 1080p gaming and 100% native Windows x86 software compatibility.',
    photoUrl: INTEL_REAL_PHOTO_URLS.arcXess,
  },
  {
    hardwareKey: 'expo_station_a',
    eyebrow: 'Croma · Reliance · Vijay Sales',
    title: '300+ AI Features Ready',
    copy: 'Verify the metallic Core Ultra palm-rest sticker and 16GB+ RAM on the floor.',
    photoUrl: INTEL_REAL_PHOTO_URLS.expoStation,
  },
];

export function ArcadeCabinetModal({
  open,
  muted,
  onToggleMute,
  onResetQuest,
  onExitArcade,
  onJumpToChecklist,
  onInspectAdHardware,
  onVirtualMove,
  onVirtualAction,
  children,
}: ArcadeCabinetModalProps) {
  const [showTouchPad, setShowTouchPad] = useState(false);

  const renderAdPoster = (ad: CabinetAdvert) => (
    <button
      key={ad.hardwareKey}
      type="button"
      onClick={() => onInspectAdHardware(ad.hardwareKey)}
      className="group flex flex-1 flex-col overflow-hidden rounded-lg border border-[#334155] bg-[#16202E] text-left transition-colors hover:border-[#0068B5] focus-visible:outline-2 focus-visible:outline-[#38BDF8]"
    >
      <div className="relative h-24 w-full overflow-hidden bg-[#0F172A] xl:h-28">
        <img
          src={ad.photoUrl}
          alt={ad.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B121C] to-transparent px-2.5 py-1.5">
          <div className="font-mono-tabular text-[10px] font-bold text-[#7DD3FC]">
            {ad.eyebrow}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <div className="font-editorial text-sm font-bold text-white">{ad.title}</div>
          <p className="mt-1 text-[11px] leading-relaxed text-[#CBD5E1]">{ad.copy}</p>
        </div>
        <div className="mt-2 font-mono-tabular text-[10px] font-semibold text-[#38BDF8] group-hover:underline">
          Inspect Specs -&gt;
        </div>
      </div>
    </button>
  );

  return (
    <div
      role="dialog"
      aria-modal={open}
      aria-hidden={!open}
      inert={!open}
      aria-label="Intel Core Ultra Silicon Quest Arcade Machine"
      className={
        open
          ? 'animate-arcade-expand fixed inset-0 z-50 flex flex-col bg-[#0B121C] text-white'
          : 'pointer-events-none fixed -left-[9999px] top-0 h-[720px] w-[1280px] opacity-0'
      }
    >
      {/* Top Intel Core Ultra Arcade Marquee Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#0068B5] bg-gradient-to-r from-[#004B87] via-[#0068B5] to-[#004B87] px-4 py-2.5 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/25 bg-[#091526] p-1">
            <img
              src={INTEL_HARDWARE_URLS.chip}
              alt="Intel Core Ultra"
              referrerPolicy="no-referrer"
              className="pixelated h-full w-full object-contain"
            />
          </div>
          <div>
            <div className="font-editorial text-sm font-bold tracking-wide text-white md:text-base">
              INTEL CORE ULTRA · SILICON QUEST ARCADE
            </div>
            <div className="hidden font-mono-tabular text-[11px] font-medium text-[#DBEAFE] sm:block">
              45–48+ TOPS NPU · 20+ HR BATTERY · INTEL ARC XeSS · X86 COMPATIBILITY
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setShowTouchPad((prev) => !prev)}
            className="hidden items-center gap-1.5 rounded-md border border-white/25 bg-[#091526]/70 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#091526] lg:inline-flex whitespace-nowrap shrink-0"
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            <span>{showTouchPad ? 'Hide Touch Pad' : 'Touch Pad'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleMute}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-[#091526]/70 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#091526] whitespace-nowrap shrink-0"
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            <span>{muted ? 'Unmute' : 'Mute'}</span>
          </button>

          <button
            type="button"
            onClick={onResetQuest}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/25 bg-[#091526]/70 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#091526] whitespace-nowrap shrink-0"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Restart Quest</span>
          </button>

          <button
            type="button"
            onClick={onJumpToChecklist}
            className="hidden items-center gap-1.5 rounded-md border border-white/25 bg-[#091526]/70 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#091526] sm:inline-flex whitespace-nowrap shrink-0"
          >
            <Store className="h-3.5 w-3.5" />
            <span>Store Checklist</span>
          </button>

          <button
            type="button"
            onClick={onExitArcade}
            className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-bold text-[#111827] transition-colors hover:bg-[#F3F4F6] whitespace-nowrap shrink-0"
          >
            <X className="h-3.5 w-3.5" />
            <span>Exit Arcade</span>
          </button>
        </div>
      </div>

      {/* Main Cabinet Chassis: Left Intel Ad Bezel | Center Game CRT/IPS | Right Intel Ad Bezel */}
      <div className="flex min-h-0 flex-1 items-stretch gap-3 bg-[#101826] p-2 md:p-3">
        {/* Left Bezel Ad Posters */}
        <aside
          aria-label="Intel Core Ultra hardware showcases"
          className="hidden w-56 shrink-0 flex-col gap-3 lg:flex xl:w-64"
        >
          <div className="rounded-md border border-[#1E3A5F] bg-[#0B1524] px-3 py-2 text-center font-mono-tabular text-[11px] font-bold tracking-wider text-[#7DD3FC]">
            INTEL CORE ULTRA · INSIDE
          </div>
          {LEFT_ADVERTS.map(renderAdPoster)}
        </aside>

        {/* Center Playable Screen Container */}
        <div className="relative min-w-0 flex-1 overflow-hidden rounded-xl border-4 border-[#0068B5] bg-[#1c2f44] shadow-2xl">
          {children}
        </div>

        {/* Right Bezel Ad Posters */}
        <aside
          aria-label="Intel Arc and Retail Partner showcases"
          className="hidden w-56 shrink-0 flex-col gap-3 lg:flex xl:w-64"
        >
          <div className="rounded-md border border-[#1E3A5F] bg-[#0B1524] px-3 py-2 text-center font-mono-tabular text-[11px] font-bold tracking-wider text-[#7DD3FC]">
            AI PC RETAIL SHOWCASE
          </div>
          {RIGHT_ADVERTS.map(renderAdPoster)}
        </aside>
      </div>

      {/* Bottom Arcade Control Deck: Desktop Legend + Mobile/Toggle Touch D-Pad */}
      <div className="border-t border-[#1E293B] bg-[#0E1623] px-4 py-2.5 md:px-6">
        {/* Touch D-Pad + Arcade Action Buttons (visible on <lg OR when Touch Pad toggled) */}
        <div
          className={`${
            showTouchPad ? 'flex' : 'flex lg:hidden'
          } flex-wrap items-center justify-between gap-4 pb-2`}
        >
          {/* Virtual D-Pad */}
          <div className="grid grid-cols-3 gap-1.5 touch-none">
            <div />
            <button
              type="button"
              aria-label="Move Up"
              onPointerDown={() => onVirtualMove(0, -1)}
              onPointerUp={() => onVirtualMove(0, 0)}
              onPointerLeave={() => onVirtualMove(0, 0)}
              onPointerCancel={() => onVirtualMove(0, 0)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[#334155] bg-[#1E293B] text-white active:bg-[#0068B5]"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <div />
            <button
              type="button"
              aria-label="Move Left"
              onPointerDown={() => onVirtualMove(-1, 0)}
              onPointerUp={() => onVirtualMove(0, 0)}
              onPointerLeave={() => onVirtualMove(0, 0)}
              onPointerCancel={() => onVirtualMove(0, 0)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[#334155] bg-[#1E293B] text-white active:bg-[#0068B5]"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Move Down"
              onPointerDown={() => onVirtualMove(0, 1)}
              onPointerUp={() => onVirtualMove(0, 0)}
              onPointerLeave={() => onVirtualMove(0, 0)}
              onPointerCancel={() => onVirtualMove(0, 0)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[#334155] bg-[#1E293B] text-white active:bg-[#0068B5]"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Move Right"
              onPointerDown={() => onVirtualMove(1, 0)}
              onPointerUp={() => onVirtualMove(0, 0)}
              onPointerLeave={() => onVirtualMove(0, 0)}
              onPointerCancel={() => onVirtualMove(0, 0)}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[#334155] bg-[#1E293B] text-white active:bg-[#0068B5]"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Virtual Arcade Buttons */}
          <div className="flex flex-wrap items-center gap-2 touch-none">
            <button
              type="button"
              onClick={() => onVirtualAction('interact')}
              className="h-11 rounded-lg border border-[#38BDF8] bg-[#0068B5] px-4 text-xs font-bold text-white active:scale-95"
            >
              Talk / Fix [E]
            </button>
            <button
              type="button"
              onClick={() => onVirtualAction('attack')}
              className="h-11 rounded-lg border border-[#64748B] bg-[#1E293B] px-4 text-xs font-bold text-white active:scale-95"
            >
              Slash [J]
            </button>
            <button
              type="button"
              onClick={() => onVirtualAction('special')}
              className="h-11 rounded-lg border border-[#F59E0B] bg-[#92400E] px-4 text-xs font-bold text-white active:scale-95"
            >
              NPU / XeSS [K]
            </button>
            <button
              type="button"
              onClick={() => onVirtualAction('dash')}
              className="h-11 rounded-lg border border-[#64748B] bg-[#1E293B] px-4 text-xs font-bold text-white active:scale-95"
            >
              Dash [Space]
            </button>
          </div>
        </div>

        {/* Desktop Control Legend Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#CBD5E1]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono-tabular">
            <span>
              <strong className="text-white">WASD / Arrows</strong> Move
            </span>
            <span>
              <strong className="text-white">J / Z</strong> Blade Slash
            </span>
            <span>
              <strong className="text-[#7DD3FC]">K / X</strong> NPU &amp; XeSS
            </span>
            <span>
              <strong className="text-white">Space</strong> Dash
            </span>
            <span>
              <strong className="text-[#FDE68A]">E / Click</strong> Inspect Hardware
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-medium text-[#94A3B8]">
            <span>Intel Core Ultra Retail Kiosk Edition</span>
            <span aria-hidden="true">·</span>
            <span>Auto-resets after 3m idle</span>
          </div>
        </div>
      </div>
    </div>
  );
}
