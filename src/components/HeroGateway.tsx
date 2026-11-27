import { useState } from 'react';
import { ArrowDown, Gamepad2, Shield } from 'lucide-react';
import { EDITORIAL_ART_URLS } from '../game/assets';

interface HeroGatewayProps {
  onLaunchArcade: () => void;
  hasCompletedQuest: boolean;
}

export function HeroGateway({ onLaunchArcade, hasCompletedQuest }: HeroGatewayProps) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <section id="top-gateway" className="bg-[#FAF8F5] py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left 55% Column: Editorial Proposition & Arcade Launch */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-[#0068B5]">
              <span>Intel Core Ultra</span>
              <span aria-hidden="true" className="text-[#9CA3AF]">
                ·
              </span>
              <span className="text-[#4B5563]">Interactive Store Kiosk &amp; Buyer Guide</span>
            </div>

            <h1
              className="font-editorial mt-4 text-[clamp(2.25rem,4vw,3.75rem)] font-bold leading-[1.06] tracking-tight text-[#111827]"
              style={{ textWrap: 'balance' }}
            >
              Don&apos;t Buy a Pretty Laptop That Chokes in 6 Months.
            </h1>

            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[#4B5563] md:text-[17px]">
              Sleek chassis stickers hide weak single-engine chips that burn through battery and
              throttle under real college, coding, and AI workloads. Play Byte&apos;s 2-minute quest
              to experience dedicated NPU, 20+ hour efficiency, and Intel Arc XeSS firsthand—or
              verify the specs below before you buy.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onLaunchArcade}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#0068B5] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#005291] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068B5] whitespace-nowrap shrink-0"
              >
                <Gamepad2 className="h-4 w-4 shrink-0" />
                <span>
                  {hasCompletedQuest
                    ? 'Replay Arcade Quest'
                    : 'Get over here, Byte needs you!'}
                </span>
              </button>

              <a
                href="#three-pillars"
                className="inline-flex items-center gap-2 rounded-lg border border-[#D1D5DB] bg-white px-5 py-3.5 text-sm font-semibold text-[#111827] transition-colors hover:border-[#111827] hover:bg-[#F8F9FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068B5] whitespace-nowrap shrink-0"
              >
                <span>See Why Intel AI PCs Win</span>
                <ArrowDown className="h-4 w-4 shrink-0 text-[#4B5563]" />
              </a>
            </div>

            {/* Mobile Portrait Fallback Link + Unboxed Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#6B7280]">
              <span>2-min playable RPG inside Intel Arcade</span>
              <span aria-hidden="true">·</span>
              <span>Keyboard or Touch D-Pad</span>
              <span aria-hidden="true">·</span>
              <a
                href="#store-guide"
                className="font-semibold text-[#0068B5] underline-offset-4 hover:underline"
              >
                Skip to 3-Question Matcher
              </a>
            </div>
          </div>

          {/* Right 45% Column: Bespoke Pen-and-Ink Key Art Plate */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={onLaunchArcade}
              aria-label="Open the playable Silicon Quest inside the Intel Arcade Machine"
              className="group relative block h-full min-h-[300px] w-full overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#FAF8F5] text-left transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068B5]"
            >
              {!imgErr ? (
                <img
                  src={EDITORIAL_ART_URLS.heroGateway}
                  alt="Pen-and-ink illustration of knight-engineer Byte holding a Core Ultra silicon shield confronting the obsidian Lag Titan."
                  referrerPolicy="no-referrer"
                  onError={() => setImgErr(true)}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full min-h-[300px] w-full flex-col items-center justify-center gap-3 bg-[#F3F4F6] p-8 text-center">
                  <Shield className="h-12 w-12 text-[#0068B5]" />
                  <span className="font-editorial text-lg font-bold text-[#111827]">
                    Silicon Quest · Byte vs. Lag Titan
                  </span>
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111827]/85 via-[#111827]/45 to-transparent p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold tracking-wide text-[#BAE6FD]">
                      Interactive Arcade Gateway
                    </div>
                    <div className="font-editorial mt-0.5 text-base font-bold text-white">
                      Byte vs. The Lag Titan
                    </div>
                  </div>
                  <span className="rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-[#111827] whitespace-nowrap shrink-0">
                    Launch Arcade
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
