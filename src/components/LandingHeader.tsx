interface LandingHeaderProps {
  onPlayQuest: () => void;
}

export function LandingHeader({ onPlayQuest }: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-[#FAF8F5]/95 backdrop-blur-xs">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-6 py-3.5 md:px-10">
        {/* Zone 1: Single clean wordmark */}
        <a
          href="#top-gateway"
          className="font-editorial text-lg font-bold tracking-tight text-[#111827] whitespace-nowrap shrink-0"
        >
          Intel AI PC Zone
        </a>

        {/* Zone 2: 4 concise single-line anchor links */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm font-medium text-[#4B5563] md:flex"
        >
          <a
            href="#top-gateway"
            className="transition-colors hover:text-[#111827] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
          >
            The Quest
          </a>
          <a
            href="#three-pillars"
            className="transition-colors hover:text-[#111827] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
          >
            Three Pillars
          </a>
          <a
            href="#reality-check"
            className="transition-colors hover:text-[#111827] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
          >
            1-Year Test
          </a>
          <a
            href="#store-guide"
            className="transition-colors hover:text-[#111827] hover:underline hover:underline-offset-4 whitespace-nowrap shrink-0"
          >
            Store Guide
          </a>
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onPlayQuest}
            className="rounded-lg bg-[#0068B5] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#005291] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068B5] whitespace-nowrap shrink-0"
          >
            Play Quest
          </button>
        </div>
      </div>
    </header>
  );
}
