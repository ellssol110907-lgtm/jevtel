import { useState } from 'react';
import {
  REALITY_MATRIX,
  REALITY_WORKLOADS,
  TIMELINE_MONTHS,
  type RealityWorkload,
  type TimelineMonth,
} from '../game/landingData';

export function RealityCheckSection() {
  const [month, setMonth] = useState<TimelineMonth>('m12');
  const [workload, setWorkload] = useState<RealityWorkload>('college');

  const snapshot = REALITY_MATRIX[workload][month];
  const activeMonthMeta = TIMELINE_MONTHS.find((m) => m.id === month) ?? TIMELINE_MONTHS[2];

  return (
    <section id="reality-check" className="bg-[#FAF8F5] py-20 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wide text-[#0068B5]">
              The 1-Year Reality Check
            </div>
            <h2
              className="font-editorial mt-2 text-2xl font-bold tracking-tight text-[#111827] md:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Flashy Budget Thin-and-Light vs. Intel Core Ultra AI PC
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#4B5563]">
              Almost any laptop looks fast in a 5-minute showroom browse. Toggle the timeline and
              workload below to see how architecture holds up across your first year.
            </p>
          </div>

          {/* Interactive Timeline Selector */}
          <div
            role="group"
            aria-label="Ownership timeline"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-[#E5E7EB] bg-white p-1 self-start"
          >
            {TIMELINE_MONTHS.map((item) => {
              const active = item.id === month;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMonth(item.id)}
                  className={`rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#0068B5] text-white'
                      : 'text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111827]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Workload Selector Tabs */}
        <div
          role="tablist"
          aria-label="Daily workload type"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {REALITY_WORKLOADS.map((w) => {
            const active = w.id === workload;
            return (
              <button
                key={w.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setWorkload(w.id)}
                className={`rounded-lg border px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'border-[#111827] bg-[#111827] text-white'
                    : 'border-[#E5E7EB] bg-white text-[#4B5563] hover:border-[#9CA3AF] hover:text-[#111827]'
                }`}
              >
                {w.label}
              </button>
            );
          })}
        </div>

        {/* Comparison Plate (Single-level elevation, clean hairline rules) */}
        <div className="mt-6 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
          {/* Verdict Summary Strip */}
          <div className="flex flex-col justify-between gap-2 border-b border-[#E5E7EB] bg-[#F8F9FA] px-6 py-4 md:flex-row md:items-center">
            <div className="font-mono-tabular text-xs font-semibold text-[#0068B5]">
              {activeMonthMeta.label} · {activeMonthMeta.sub}
            </div>
            <p className="text-sm font-medium text-[#111827]">{snapshot.summaryVerdict}</p>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#E5E7EB]">
            {/* Column Headers */}
            <div className="hidden grid-cols-12 gap-4 px-6 py-3.5 text-xs font-semibold text-[#6B7280] md:grid">
              <div className="col-span-4">Real-World Test</div>
              <div className="col-span-4">Flashy Budget Thin-and-Light</div>
              <div className="col-span-4 text-[#0068B5]">Intel Core Ultra AI PC</div>
            </div>

            {snapshot.rows.map((row) => {
              const bargainTone =
                row.bargainStatus === 'THROTTLED'
                  ? 'text-[#B45309]'
                  : row.bargainStatus === 'WARN'
                    ? 'text-[#92400E]'
                    : 'text-[#4B5563]';

              return (
                <div
                  key={row.dimension}
                  className="grid grid-cols-1 gap-4 px-6 py-5 md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-4">
                    <div className="text-sm font-semibold text-[#111827]">{row.dimension}</div>
                  </div>

                  {/* Competitor Budget Baseline */}
                  <div className="md:col-span-4">
                    <div className="text-[11px] font-medium text-[#6B7280] md:hidden">
                      Flashy Budget Thin-and-Light
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-2 md:mt-0 md:justify-start md:gap-3">
                      <span className="font-mono-tabular text-sm font-medium text-[#374151]">
                        {row.bargainValue}
                      </span>
                      <span className={`font-mono-tabular text-[11px] font-bold ${bargainTone}`}>
                        [{row.bargainStatus}]
                      </span>
                    </div>
                  </div>

                  {/* Intel Core Ultra AI PC */}
                  <div className="md:col-span-4">
                    <div className="text-[11px] font-medium text-[#0068B5] md:hidden">
                      Intel Core Ultra AI PC
                    </div>
                    <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-2 md:mt-0 md:justify-start md:gap-3">
                      <span className="font-mono-tabular text-sm font-semibold text-[#111827]">
                        {row.intelValue}
                      </span>
                      <span className="font-mono-tabular text-[11px] font-bold text-[#047857]">
                        [{row.intelStatus}]
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
