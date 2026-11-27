import { useState } from 'react';
import { Check, CheckCircle2, Circle, Copy, Gamepad2, RotateCcw } from 'lucide-react';
import { TINY_SWORDS_AVATARS } from '../game/assets';
import {
  RETAILERS,
  STORE_FLOOR_CHECKLIST,
  solveCoreUltraRecommendation,
  type MatcherBatteryOption,
  type MatcherPriorityOption,
  type MatcherWorkOption,
  type QuickMatcherAnswers,
  type RetailerId,
} from '../game/landingData';

interface RetailActionSectionProps {
  answers: QuickMatcherAnswers;
  onChangeAnswers: (next: QuickMatcherAnswers) => void;
  questMatchApplied: boolean;
  onLaunchArcade: () => void;
  onResetSession: () => void;
}

const WORK_OPTIONS: { id: MatcherWorkOption; label: string }[] = [
  { id: 'college', label: 'College & Docs' },
  { id: 'coding', label: 'Coding & Local AI' },
  { id: 'creator', label: 'Content Creation' },
  { id: 'gaming', label: 'Gaming & Streaming' },
];

const BATTERY_OPTIONS: { id: MatcherBatteryOption; label: string }[] = [
  { id: 'standard', label: '6–8 hrs' },
  { id: 'full_day', label: '12–15 hrs' },
  { id: 'marathon', label: '18–20+ hrs' },
];

const PRIORITY_OPTIONS: { id: MatcherPriorityOption; label: string }[] = [
  { id: 'ultralight', label: 'Under 1.25 kg' },
  { id: 'balanced', label: 'Balanced Daily' },
  { id: 'performance', label: 'Max Arc FPS' },
];

export function RetailActionSection({
  answers,
  onChangeAnswers,
  questMatchApplied,
  onLaunchArcade,
  onResetSession,
}: RetailActionSectionProps) {
  const [retailerId, setRetailerId] = useState<RetailerId>('croma');
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const retailer = RETAILERS.find((r) => r.id === retailerId) ?? RETAILERS[0];
  const rec = solveCoreUltraRecommendation(answers, retailer);
  const verifiedCount = STORE_FLOOR_CHECKLIST.filter((c) => checkedIds[c.id]).length;

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyAskCard = async () => {
    try {
      await navigator.clipboard.writeText(rec.askScript);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="store-guide"
      className="border-t border-[#E5E7EB] bg-[#F8F9FA] pt-20 pb-12 lg:pt-28 lg:pb-16"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-wide text-[#0068B5]">
            Retail Store Action Bar
          </div>
          <h2
            className="font-editorial mt-2 text-2xl font-bold tracking-tight text-[#111827] md:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Match your Core Ultra tier and verify it on the store floor.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4B5563]">
            Skipping the game or finished Byte&apos;s quest? Lock in your exact processor badge,
            memory floor, and a salesperson script before stepping up to the display table.
          </p>
        </div>

        {/* Two-Column Action Grid */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Half: 3-Question Quick Matcher & Result */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E5E7EB] bg-white p-6 md:p-8 lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-editorial text-xl font-bold text-[#111827]">
                  3-Question Quick Matcher
                </h3>
                {questMatchApplied && (
                  <span className="font-mono-tabular text-xs font-semibold text-[#047857]">
                    Synced from Quest
                  </span>
                )}
              </div>

              <div className="mt-6 space-y-5">
                {/* Q1 */}
                <div>
                  <div className="text-xs font-semibold text-[#374151]">
                    01. Primary daily work
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {WORK_OPTIONS.map((opt) => {
                      const active = answers.work === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => onChangeAnswers({ ...answers, work: opt.id })}
                          className={`rounded-lg border px-3 py-2.5 text-left text-xs font-semibold transition-colors whitespace-nowrap ${
                            active
                              ? 'border-[#0068B5] bg-[#0068B5] text-white'
                              : 'border-[#E5E7EB] bg-[#F8F9FA] text-[#374151] hover:border-[#9CA3AF]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Q2 */}
                <div>
                  <div className="text-xs font-semibold text-[#374151]">
                    02. Unplugged hours needed daily
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {BATTERY_OPTIONS.map((opt) => {
                      const active = answers.battery === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => onChangeAnswers({ ...answers, battery: opt.id })}
                          className={`rounded-lg border px-3 py-2.5 text-center font-mono-tabular text-xs font-semibold transition-colors whitespace-nowrap ${
                            active
                              ? 'border-[#0068B5] bg-[#0068B5] text-white'
                              : 'border-[#E5E7EB] bg-[#F8F9FA] text-[#374151] hover:border-[#9CA3AF]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Q3 */}
                <div>
                  <div className="text-xs font-semibold text-[#374151]">
                    03. Daily carry &amp; graphics priority
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {PRIORITY_OPTIONS.map((opt) => {
                      const active = answers.priority === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => onChangeAnswers({ ...answers, priority: opt.id })}
                          className={`rounded-lg border px-3 py-2.5 text-center text-xs font-semibold transition-colors whitespace-nowrap ${
                            active
                              ? 'border-[#0068B5] bg-[#0068B5] text-white'
                              : 'border-[#E5E7EB] bg-[#F8F9FA] text-[#374151] hover:border-[#9CA3AF]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Matched Intel Core Ultra Recommendation */}
            <div className="mt-7 border-t border-[#E5E7EB] pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#E5E7EB] bg-[#FAF8F5]">
                  <img
                    src={TINY_SWORDS_AVATARS[0]}
                    alt="Byte Warrior Seal"
                    referrerPolicy="no-referrer"
                    className="pixelated h-10 w-10 object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono-tabular text-xs font-bold text-[#0068B5]">
                    {rec.badge} · {rec.stationLabel}
                  </div>
                  <h4 className="font-editorial mt-1 text-lg font-bold text-[#111827]">
                    {rec.headline}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563]">{rec.reason}</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 border-t border-[#E5E7EB] pt-4 text-xs sm:grid-cols-3">
                <div>
                  <div className="text-[#6B7280]">Series Guide</div>
                  <div className="mt-0.5 font-semibold text-[#111827]">{rec.seriesGuide}</div>
                </div>
                <div>
                  <div className="text-[#6B7280]">Memory Floor</div>
                  <div className="font-mono-tabular mt-0.5 font-semibold text-[#111827]">
                    {rec.ramFloor}
                  </div>
                </div>
                <div>
                  <div className="text-[#6B7280]">AI Engine</div>
                  <div className="font-mono-tabular mt-0.5 font-semibold text-[#0068B5]">
                    {rec.npuSpec}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={onLaunchArcade}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0068B5] underline-offset-4 hover:underline"
                >
                  <Gamepad2 className="h-4 w-4" />
                  <span>Test this hardware inside the Arcade Quest</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Half: Store Floor Checklist & Copyable Salesperson Ask-Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E5E7EB] bg-white p-6 md:p-8 lg:col-span-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-editorial text-xl font-bold text-[#111827]">
                  Store Floor Checklist
                </h3>
                <span className="font-mono-tabular text-xs font-semibold text-[#0068B5]">
                  {verifiedCount}/{STORE_FLOOR_CHECKLIST.length} Verified
                </span>
              </div>

              {/* Store Selector */}
              <div
                role="tablist"
                aria-label="Retail partner store"
                className="mt-4 grid grid-cols-3 gap-1 rounded-lg border border-[#E5E7EB] bg-[#F8F9FA] p-1"
              >
                {RETAILERS.map((r) => {
                  const active = r.id === retailerId;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setRetailerId(r.id)}
                      className={`rounded-md px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap ${
                        active
                          ? 'bg-white text-[#111827] shadow-xs'
                          : 'text-[#4B5563] hover:text-[#111827]'
                      }`}
                    >
                      {r.name}
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[#4B5563]">{retailer.floorTip}</p>

              {/* 4 Physical Checks */}
              <div className="mt-5 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
                {STORE_FLOOR_CHECKLIST.map((item) => {
                  const checked = !!checkedIds[item.id];
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleCheck(item.id)}
                      className="flex w-full items-start gap-3 py-3.5 text-left transition-colors hover:bg-[#FAF8F5]"
                    >
                      {checked ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#047857]" />
                      ) : (
                        <Circle className="mt-0.5 h-5 w-5 shrink-0 text-[#9CA3AF]" />
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <span
                            className={`text-sm font-semibold ${
                              checked ? 'text-[#047857] line-through' : 'text-[#111827]'
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="font-mono-tabular text-[11px] font-medium text-[#6B7280]">
                            {item.badgeCheck}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#4B5563]">
                          {item.howToVerify}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Copyable Salesperson Ask-Card */}
            <div className="mt-6 rounded-lg border border-[#E5E7EB] bg-[#FAF8F5] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-semibold text-[#111827]">
                  {retailer.name} Salesperson Ask-Card
                </div>
                <button
                  type="button"
                  onClick={handleCopyAskCard}
                  className="inline-flex items-center gap-1.5 rounded-md bg-[#0068B5] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#005291] whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Ask-Card</span>
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2.5 text-sm font-medium leading-relaxed text-[#1F2937]">
                &ldquo;{rec.askScript}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Quiet Footer + Kiosk Reset Safeguard */}
        <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#E5E7EB] pt-6 text-xs text-[#6B7280] sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#111827]">Intel AI PC Zone</span>
            <span aria-hidden="true">·</span>
            <span>Croma · Reliance Digital · Vijay Sales Retail Showcase</span>
          </div>

          <button
            type="button"
            onClick={onResetSession}
            className="inline-flex items-center gap-1.5 font-medium text-[#4B5563] transition-colors hover:text-[#111827] whitespace-nowrap shrink-0"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Session</span>
          </button>
        </footer>
      </div>
    </section>
  );
}
