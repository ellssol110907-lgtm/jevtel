import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { INTEL_HARDWARE_URLS, TINY_SWORDS_AVATARS, TINY_SWORDS_UI } from '../game/assets';
import type { CatalogPcCharacter } from '../game/types';

interface ExpoPcModalProps {
  pc: CatalogPcCharacter;
  isMatched: boolean;
  isTagged: boolean;
  onTriggerDemo: () => void;
  onToggleTag: () => void;
  onOpenStoreGuide: () => void;
  onClose: () => void;
}

export function ExpoPcModal({
  pc,
  isMatched,
  isTagged,
  onTriggerDemo,
  onToggleTag,
  onOpenStoreGuide,
  onClose,
}: ExpoPcModalProps) {
  const [imgErr, setImgErr] = useState(false);
  const avatarUrl = TINY_SWORDS_AVATARS[Math.max(0, Math.min(24, pc.avatarIdx - 1))];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.code === 'Escape' || e.code === 'KeyE' || e.code === 'Enter') {
        e.preventDefault();
        onClose();
      } else if (e.code === 'Digit1') {
        e.preventDefault();
        onTriggerDemo();
      } else if (e.code === 'Digit2') {
        e.preventDefault();
        onToggleTag();
      } else if (e.code === 'Digit3' || e.code === 'KeyC') {
        e.preventDefault();
        onOpenStoreGuide();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, onOpenStoreGuide, onToggleTag, onTriggerDemo]);

  return (
    <div className="absolute inset-x-0 bottom-0 z-30 flex justify-center p-3 md:p-5">
      <div className="ts-wood-panel w-full max-w-4xl">
        {/* Faction Color Ribbon + Station Tag */}
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className={`ts-ribbon ts-ribbon-${pc.factionColor} inline-flex items-center gap-2 font-display text-sm font-bold tracking-wide md:text-base`}>
              <img src={INTEL_HARDWARE_URLS.chip} alt="" referrerPolicy="no-referrer" className="pixelated h-5 w-5" />
              <span>{pc.name}</span>
            </div>
            <span className="font-display text-xs font-bold text-[#FDE68A]">
              {pc.persona}
              {isMatched ? ' · ★ YOUR BEST MATCH' : ''}
            </span>
          </div>

          <span className="font-mono-tabular text-xs font-bold text-[#FDE68A]">
            {pc.tierName} · Demo Station {pc.stationId}
          </span>
        </div>

        <div className="ts-paper-panel">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            {/* Avatar + Pixel Intel AI PC Hardware Stack */}
            <div className="flex shrink-0 flex-row gap-2 sm:flex-col">
              <div className="ts-special-panel relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden">
                {!imgErr ? (
                  <img
                    src={avatarUrl}
                    alt={pc.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImgErr(true)}
                    className="pixelated h-full w-full object-contain"
                  />
                ) : (
                  <Shield className="h-10 w-10 text-sky-300" />
                )}
              </div>
              <div className="flex h-20 w-24 items-center justify-center rounded border-2 border-[#a88a5d] bg-[#dfd0ac] p-1.5">
                <img
                  src={INTEL_HARDWARE_URLS.aiPc}
                  alt={pc.tierName}
                  referrerPolicy="no-referrer"
                  className="pixelated h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-relaxed text-[#2B1B12]">{pc.chatText}</p>

              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {pc.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded border-2 border-[#a88a5d] bg-[#dfd0ac] px-3 py-2 text-xs font-medium text-[#2B1B12]"
                  >
                    {h}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={onTriggerDemo}
                    className="ts-btn-blue inline-flex items-center gap-2 font-display text-xs font-bold text-white whitespace-nowrap shrink-0"
                  >
                    <img src={TINY_SWORDS_UI.icons.sword} alt="" referrerPolicy="no-referrer" className="pixelated h-4 w-4" />
                    <span>Power Burst [1]</span>
                  </button>

                  <button
                    type="button"
                    onClick={onToggleTag}
                    className="ts-btn-blue inline-flex items-center gap-2 font-display text-xs font-bold text-white whitespace-nowrap shrink-0"
                  >
                    <img src={TINY_SWORDS_UI.icons.gold} alt="" referrerPolicy="no-referrer" className="pixelated h-4 w-4" />
                    <span>{isTagged ? 'Saved Pick [2]' : 'Save Pick [2]'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenStoreGuide}
                    className="ts-btn-blue inline-flex items-center gap-2 font-display text-xs font-bold text-white whitespace-nowrap shrink-0"
                  >
                    <img src={TINY_SWORDS_UI.icons.info} alt="" referrerPolicy="no-referrer" className="pixelated h-4 w-4" />
                    <span>Checklist [3]</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="ts-btn-red inline-flex items-center gap-2 font-display text-xs font-bold text-white whitespace-nowrap shrink-0"
                >
                  <img src={TINY_SWORDS_UI.icons.back} alt="" referrerPolicy="no-referrer" className="pixelated h-4 w-4" />
                  <span>Explore [E / Esc]</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
