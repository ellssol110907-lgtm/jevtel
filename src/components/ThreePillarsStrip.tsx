import { useState } from 'react';
import { Cpu } from 'lucide-react';
import { THREE_PILLARS } from '../game/landingData';

export function ThreePillarsStrip() {
  const [failedIds, setFailedIds] = useState<Record<string, boolean>>({});

  return (
    <section
      id="three-pillars"
      className="border-y border-[#E5E7EB] bg-[#F8F9FA] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-wide text-[#0068B5]">
            Three Pillars of Intel Core Ultra
          </div>
          <h2
            className="font-editorial mt-2 text-2xl font-bold tracking-tight text-[#111827] md:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Built for how you actually work, study, and game all day.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4B5563]">
            An Intel AI PC splits tasks across dedicated compute engines instead of forcing one
            overworked processor to do everything at once.
          </p>
        </div>

        {/* Alternating Editorial Rows */}
        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
          {THREE_PILLARS.map((pillar, idx) => {
            const artOnLeft = idx % 2 === 1;
            const hasErr = !!failedIds[pillar.id];

            return (
              <article
                key={pillar.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                {/* Text Column */}
                <div className={`lg:col-span-6 ${artOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#6B7280]">
                    <span className="font-mono-tabular font-semibold text-[#0068B5]">
                      {pillar.index}.
                    </span>
                    <span>{pillar.title}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pillar.metricTag}</span>
                  </div>

                  <h3
                    className="font-editorial mt-3 text-2xl font-bold leading-snug tracking-tight text-[#111827] md:text-3xl"
                    style={{ textWrap: 'balance' }}
                  >
                    {pillar.headline}
                  </h3>

                  <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-[#4B5563]">
                    {pillar.description}
                  </p>

                  {/* Tabular Spec Footnotes (unboxed, clean hairline separation) */}
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#E5E7EB] pt-4 font-mono-tabular text-xs font-medium text-[#111827]">
                    {pillar.proofFootnotes.map((note, noteIdx) => (
                      <span key={note} className="inline-flex items-center gap-3">
                        <span>{note}</span>
                        {noteIdx < pillar.proofFootnotes.length - 1 && (
                          <span aria-hidden="true" className="text-[#9CA3AF]">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Seamless Paper-Matched Artwork Plate */}
                <div className={`lg:col-span-6 ${artOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#FAF8F5]">
                    {!hasErr ? (
                      <img
                        src={pillar.imageUrl}
                        alt={pillar.imageAlt}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedIds((prev) => ({ ...prev, [pillar.id]: true }))
                        }
                        className="aspect-[4/3] w-full object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-[#FAF8F5] p-8 text-center">
                        <Cpu className="h-10 w-10 text-[#0068B5]" />
                        <span className="font-editorial text-base font-bold text-[#111827]">
                          {pillar.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
