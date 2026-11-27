import { EDITORIAL_ART_URLS } from './assets';
import type { PrimaryNeed } from './types';

export interface PillarItem {
  index: string;
  id: string;
  title: string;
  metricTag: string;
  headline: string;
  description: string;
  proofFootnotes: string[];
  imageUrl: string;
  imageAlt: string;
}

export const THREE_PILLARS: PillarItem[] = [
  {
    index: '01',
    id: 'dedicated-npu',
    title: 'Dedicated NPU (45–48+ TOPS)',
    metricTag: 'Intel AI Boost · Local Silicon',
    headline: 'Offline AI power, instant privacy, and whisper-quiet classes.',
    description:
      'On ordinary laptops, running lecture summaries, background blur, or live noise cancellation forces the main CPU to sprint and burn battery. Intel Core Ultra routes sustained AI directly to a dedicated Neural Processing Unit—keeping your notes private on your SSD without fans screaming in a quiet library.',
    proofFootnotes: [
      '45–48+ NPU TOPS',
      '0% cloud upload required',
      '300+ AI-accelerated apps',
    ],
    imageUrl: EDITORIAL_ART_URLS.pillarNpu,
    imageAlt:
      'Hand-drawn ink illustration of an Intel Core Ultra NPU crystal forge running silently on a study desk while cloud storms remain outside.',
  },
  {
    index: '02',
    id: 'all-day-battery',
    title: 'All-Day Battery (20+ Hours)',
    metricTag: 'Low-Power Island E-Cores',
    headline: 'Offload background work so your charger brick stays at home.',
    description:
      'Three specialized compute engines—Performance Cores, Efficiency Cores, and a Low-Power Island—assign light browsing, video calls, and document work to ultra-thrifty silicon lanes. You get genuine morning-to-midnight endurance across college lectures, metro commutes, and café coding sessions.',
    proofFootnotes: [
      '20+ hrs unplugged playback',
      'Instant lid-open wake',
      'Low-wattage call AI',
    ],
    imageUrl: EDITORIAL_ART_URLS.pillarBattery,
    imageAlt:
      'Hand-drawn ink illustration of a glowing cobalt battery lantern under sun and moon arcs beside a coiled unplugged power cord and commuter backpack.',
  },
  {
    index: '03',
    id: 'x86-arc-graphics',
    title: 'Uncompromised x86 + Intel Arc',
    metricTag: 'Native Compatibility · XeSS AI Upscaling',
    headline: 'Zero app compatibility headaches and smooth AI-upscaled play.',
    description:
      'Never discover halfway through semester that your engineering CAD tool, compiler, exam portal, or favourite Steam game refuses to launch on an unfamiliar architecture. Every Intel Core Ultra AI PC runs full x86 Windows software natively while built-in Intel Arc Graphics with XMX XeSS multiplies frame rates cleanly.',
    proofFootnotes: [
      '100% native x86 apps & games',
      'Intel XeSS frame boost',
      'Hardware AV1 4K media engine',
    ],
    imageUrl: EDITORIAL_ART_URLS.pillarX86Arc,
    imageAlt:
      'Hand-drawn ink illustration of a stone-and-silicon aqueduct bridge smoothly carrying blueprints, code tablets, and winged heraldic banners.',
  },
];

export type TimelineMonth = 'm1' | 'm6' | 'm12';
export type RealityWorkload = 'college' | 'coding' | 'creator' | 'gaming';

export interface RealityMetricRow {
  dimension: string;
  bargainValue: string;
  bargainStatus: 'OK' | 'WARN' | 'THROTTLED';
  intelValue: string;
  intelStatus: 'STEADY' | 'FAST' | 'COOL';
}

export interface RealitySnapshot {
  summaryVerdict: string;
  rows: RealityMetricRow[];
}

export const TIMELINE_MONTHS: { id: TimelineMonth; label: string; sub: string }[] = [
  { id: 'm1', label: 'Month 1', sub: 'Fresh Out of the Box' },
  { id: 'm6', label: 'Month 6', sub: 'Mid-Semester Load' },
  { id: 'm12', label: 'Month 12', sub: 'Year 1 Reality' },
];

export const REALITY_WORKLOADS: { id: RealityWorkload; label: string }[] = [
  { id: 'college', label: 'College & Research' },
  { id: 'coding', label: 'Coding & Local AI' },
  { id: 'creator', label: 'Content Creation' },
  { id: 'gaming', label: 'Evening Gaming' },
];

export const REALITY_MATRIX: Record<RealityWorkload, Record<TimelineMonth, RealitySnapshot>> = {
  college: {
    m1: {
      summaryVerdict:
        'Both laptops feel snappy in the showroom when only two browser tabs are open.',
      rows: [
        {
          dimension: 'Unplugged Lecture Day',
          bargainValue: '7.5 hrs (dim screen)',
          bargainStatus: 'OK',
          intelValue: '20.5 hrs real mix',
          intelStatus: 'STEADY',
        },
        {
          dimension: 'PDF + Video Call AI Blur',
          bargainValue: 'CPU 68% · warm palm rest',
          bargainStatus: 'WARN',
          intelValue: 'NPU handles silently',
          intelStatus: 'COOL',
        },
        {
          dimension: '30 Tabs + Slides + Docs',
          bargainValue: 'Occasional tab reload',
          bargainStatus: 'OK',
          intelValue: 'Instant tab switch',
          intelStatus: 'FAST',
        },
      ],
    },
    m6: {
      summaryVerdict:
        'Operating system updates and AI study extensions expose single-engine CPU bottlenecks.',
      rows: [
        {
          dimension: 'Unplugged Lecture Day',
          bargainValue: '4.5 hrs (hunting outlets)',
          bargainStatus: 'WARN',
          intelValue: '19.5 hrs unplugged',
          intelStatus: 'STEADY',
        },
        {
          dimension: 'Offline Summary & Notes',
          bargainValue: 'Fan ramps + lag spikes',
          bargainStatus: 'THROTTLED',
          intelValue: '1.4s local NPU response',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Hostel Exam Portals & Apps',
          bargainValue: 'Slow boot & freezes',
          bargainStatus: 'WARN',
          intelValue: 'Native x86 instant wake',
          intelStatus: 'STEADY',
        },
      ],
    },
    m12: {
      summaryVerdict:
        'The cheap chassis spends every afternoon tethered to a wall socket while Core Ultra still runs day-one fast.',
      rows: [
        {
          dimension: 'Unplugged Lecture Day',
          bargainValue: '3.2 hrs (charger required)',
          bargainStatus: 'THROTTLED',
          intelValue: '18.5+ hrs full campus',
          intelStatus: 'STEADY',
        },
        {
          dimension: 'Multitasking + AI Copilot',
          bargainValue: 'Heavy thermal throttle',
          bargainStatus: 'THROTTLED',
          intelValue: 'Zero stutter across cores',
          intelStatus: 'COOL',
        },
        {
          dimension: 'Resale & 4-Year Longevity',
          bargainValue: 'Already feels sluggish',
          bargainStatus: 'THROTTLED',
          intelValue: 'Ready for next 3+ years',
          intelStatus: 'STEADY',
        },
      ],
    },
  },
  coding: {
    m1: {
      summaryVerdict:
        'Simple scripts compile cleanly on either machine—until Docker, IDE indexing, and local LLMs stack up.',
      rows: [
        {
          dimension: 'VS Code + Local Dev Server',
          bargainValue: 'Passable on AC power',
          bargainStatus: 'OK',
          intelValue: 'P-Cores blaze · E-Cores sip',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Local Code Assistant',
          bargainValue: 'Freezes editor typing',
          bargainStatus: 'WARN',
          intelValue: 'Offloaded to 48 TOPS NPU',
          intelStatus: 'COOL',
        },
        {
          dimension: 'Docker & Linux Tooling',
          bargainValue: 'Memory & fan strain',
          bargainStatus: 'WARN',
          intelValue: 'Full native x86 compatibility',
          intelStatus: 'STEADY',
        },
      ],
    },
    m6: {
      summaryVerdict:
        'Hackathons and capstone builds punish thin laptops that lack dedicated AI and efficiency lanes.',
      rows: [
        {
          dimension: 'Build + Browser + Terminal',
          bargainValue: '38% slower on battery',
          bargainStatus: 'WARN',
          intelValue: 'Consistent P/E scheduling',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Local Vector & AI Inference',
          bargainValue: 'CPU thermal cap at 94 C',
          bargainStatus: 'THROTTLED',
          intelValue: 'Sustained NPU throughput',
          intelStatus: 'COOL',
        },
        {
          dimension: 'Unplugged Hackathon Sprint',
          bargainValue: '2.8 hrs before shutdown',
          bargainStatus: 'THROTTLED',
          intelValue: '14+ hrs coding unplugged',
          intelStatus: 'STEADY',
        },
      ],
    },
    m12: {
      summaryVerdict:
        'Modern dev workflows assume on-device AI copilots; Core Ultra keeps your build pipeline brisk through graduation.',
      rows: [
        {
          dimension: 'Full-Stack + AI Autocomplete',
          bargainValue: 'Severe swap & fan roar',
          bargainStatus: 'THROTTLED',
          intelValue: 'Fluid zero-lag IDE feel',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Package & Driver Support',
          bargainValue: 'Heat-worn battery cell',
          bargainStatus: 'THROTTLED',
          intelValue: '100% x86 & Arc acceleration',
          intelStatus: 'STEADY',
        },
        {
          dimension: 'Unplugged Workday',
          bargainValue: '2.0 hrs under compile',
          bargainStatus: 'THROTTLED',
          intelValue: '13+ hrs reliable compile',
          intelStatus: 'STEADY',
        },
      ],
    },
  },
  creator: {
    m1: {
      summaryVerdict:
        'Editing 1080p clips feels fine on day one, before 4K timelines and AI masking tools enter the workflow.',
      rows: [
        {
          dimension: '4K Timeline Scrubbing',
          bargainValue: 'Dropped preview frames',
          bargainStatus: 'WARN',
          intelValue: 'Dual-engine Arc media fluid',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Auto-Reframe & Background Cut',
          bargainValue: '42s CPU stall per clip',
          bargainStatus: 'WARN',
          intelValue: 'Instant NPU + Arc acceleration',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Chassis Fan Acoustics',
          bargainValue: 'Audible whine in edits',
          bargainStatus: 'WARN',
          intelValue: 'Low-temp whisper balance',
          intelStatus: 'COOL',
        },
      ],
    },
    m6: {
      summaryVerdict:
        'Premiere, DaVinci, and local generative brushes rely heavily on hardware media engines and NPU silicon.',
      rows: [
        {
          dimension: '10-Min Reel Export (AV1/H.265)',
          bargainValue: '14m 20s · hot keyboard',
          bargainStatus: 'THROTTLED',
          intelValue: '4m 10s via Arc QuickSync',
          intelStatus: 'FAST',
        },
        {
          dimension: 'On-Device Image Generation',
          bargainValue: 'Minutes per render',
          bargainStatus: 'THROTTLED',
          intelValue: 'Seconds on NPU + XMX Arc',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Color & Plug-in Support',
          bargainValue: 'Stutter on multi-layer FX',
          bargainStatus: 'WARN',
          intelValue: 'Smooth 60fps timeline lock',
          intelStatus: 'STEADY',
        },
      ],
    },
    m12: {
      summaryVerdict:
        'When deadlines stack up, a bargain laptop costs hours every week waiting on exports and thermal cooldowns.',
      rows: [
        {
          dimension: 'Batch Exports + Cloud Sync',
          bargainValue: 'Throttles 40% mid-render',
          bargainStatus: 'THROTTLED',
          intelValue: 'Full clock stability',
          intelStatus: 'STEADY',
        },
        {
          dimension: 'Battery While Field Editing',
          bargainValue: '1.8 hrs light trim',
          bargainStatus: 'THROTTLED',
          intelValue: '9.5+ hrs real timeline work',
          intelStatus: 'STEADY',
        },
        {
          dimension: 'AI Audio Cleanup & Captions',
          bargainValue: 'Requires paid cloud upload',
          bargainStatus: 'THROTTLED',
          intelValue: 'Private local NPU pass',
          intelStatus: 'COOL',
        },
      ],
    },
  },
  gaming: {
    m1: {
      summaryVerdict:
        'Without Intel Arc XMX engines and XeSS upscaling, integrated bargain graphics struggle past 720p.',
      rows: [
        {
          dimension: '1080p Competitive FPS',
          bargainValue: '28–34 FPS · frame drops',
          bargainStatus: 'WARN',
          intelValue: '90–120+ FPS with Intel XeSS',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Game + Discord + Voice AI',
          bargainValue: 'Mic noise spikes stutter',
          bargainStatus: 'WARN',
          intelValue: 'NPU cleans voice cleanly',
          intelStatus: 'COOL',
        },
        {
          dimension: 'Anti-Cheat & Steam Library',
          bargainValue: 'Low textures required',
          bargainStatus: 'OK',
          intelValue: '100% native x86 compatibility',
          intelStatus: 'STEADY',
        },
      ],
    },
    m6: {
      summaryVerdict:
        'Long weekend sessions heat-soak budget coolers, dropping clock speeds right during endgame fights.',
      rows: [
        {
          dimension: '45-Min Sustained FPS',
          bargainValue: 'Drops to 21 FPS thermal cap',
          bargainStatus: 'THROTTLED',
          intelValue: 'Locked smooth XeSS pacing',
          intelStatus: 'STEADY',
        },
        {
          dimension: 'WASD Keyboard Surface Temp',
          bargainValue: 'Uncomfortably hot keys',
          bargainStatus: 'THROTTLED',
          intelValue: 'Cool balanced airflow',
          intelStatus: 'COOL',
        },
        {
          dimension: 'Alt-Tab to Guides/Browser',
          bargainValue: '3s hang & black flicker',
          bargainStatus: 'WARN',
          intelValue: 'Instant zero-hitch switch',
          intelStatus: 'FAST',
        },
      ],
    },
    m12: {
      summaryVerdict:
        'Newer titles ship with heavier shaders—AI upscaling on Intel Arc keeps modern games crisp without a bulky gaming brick.',
      rows: [
        {
          dimension: '2026+ Release Readiness',
          bargainValue: 'Unplayable sub-20 FPS',
          bargainStatus: 'THROTTLED',
          intelValue: 'Crisp playable 1080p XeSS',
          intelStatus: 'FAST',
        },
        {
          dimension: 'Stream / Replay Capture',
          bargainValue: 'Kills frame pacing',
          bargainStatus: 'THROTTLED',
          intelValue: 'Zero-hit Arc AV1 capture',
          intelStatus: 'COOL',
        },
        {
          dimension: 'Controller & Peripheral Drivers',
          bargainValue: 'USB bandwidth drops',
          bargainStatus: 'WARN',
          intelValue: 'Full Thunderbolt & x86 stack',
          intelStatus: 'STEADY',
        },
      ],
    },
  },
};

export type MatcherWorkOption = 'college' | 'coding' | 'creator' | 'gaming';
export type MatcherBatteryOption = 'standard' | 'full_day' | 'marathon';
export type MatcherPriorityOption = 'ultralight' | 'balanced' | 'performance';

export interface QuickMatcherAnswers {
  work: MatcherWorkOption;
  battery: MatcherBatteryOption;
  priority: MatcherPriorityOption;
}

export interface CoreUltraRecommendation {
  badge: 'Intel Core Ultra 5' | 'Intel Core Ultra 7' | 'Intel Core Ultra 9';
  seriesGuide: string;
  ramFloor: string;
  npuSpec: string;
  stationLabel: string;
  headline: string;
  reason: string;
  askScript: string;
}

export type RetailerId = 'croma' | 'reliance' | 'vijaysales';

export interface RetailerProfile {
  id: RetailerId;
  name: string;
  floorTip: string;
}

export const RETAILERS: RetailerProfile[] = [
  {
    id: 'croma',
    name: 'Croma',
    floorTip:
      'Look for the blue Intel AI PC bay near the ultrabook table and inspect the palm-rest sticker.',
  },
  {
    id: 'reliance',
    name: 'Reliance Digital',
    floorTip:
      'Check the digital price card below the laptop for "Core Ultra" + "16GB" and verify NPU in Task Manager.',
  },
  {
    id: 'vijaysales',
    name: 'Vijay Sales',
    floorTip:
      'Ask the floor specialist to demonstrate offline AI or unplug the demo unit to inspect battery efficiency.',
  },
];

export interface StoreChecklistRule {
  id: string;
  title: string;
  badgeCheck: string;
  howToVerify: string;
}

export const STORE_FLOOR_CHECKLIST: StoreChecklistRule[] = [
  {
    id: 'sticker',
    title: 'Core Ultra Metallic Badge',
    badgeCheck: 'Palm-rest sticker check',
    howToVerify:
      'Confirm the silver-and-cobalt "Intel Core Ultra" sticker (Series 2 / Core Ultra 5, 7, or 9)—not older Core i3/i5 entry chips.',
  },
  {
    id: 'npu',
    title: '45–48+ TOPS Dedicated NPU',
    badgeCheck: 'Ctrl + Shift + Esc -> Performance',
    howToVerify:
      'Open Windows Task Manager on the display laptop and verify the "NPU0 — Intel AI Boost" graph sits right beside CPU & GPU.',
  },
  {
    id: 'ram',
    title: '16GB+ RAM Floor (Never 8GB)',
    badgeCheck: 'Spec card / Settings -> About',
    howToVerify:
      'Local AI features and 30-tab multitasking thrive on 16GB or 32GB LPDDR5x/DDR5 memory. Skip 8GB bargain configurations.',
  },
  {
    id: 'evo_arc',
    title: 'Intel Evo or Arc Graphics Cue',
    badgeCheck: 'Ports & Graphics check',
    howToVerify:
      'For all-day campus mobility look for the Intel Evo Edition badge; for 4K editing or gaming look for Intel Arc Graphics + XeSS.',
  },
];

export function mapNeedChoiceToMatcher(need: PrimaryNeed): QuickMatcherAnswers {
  if (need === 'gaming') {
    return { work: 'gaming', battery: 'standard', priority: 'performance' };
  }
  if (need === 'multitask') {
    return { work: 'coding', battery: 'full_day', priority: 'balanced' };
  }
  return { work: 'college', battery: 'marathon', priority: 'ultralight' };
}

export function solveCoreUltraRecommendation(
  answers: QuickMatcherAnswers,
  retailer: RetailerProfile
): CoreUltraRecommendation {
  if (answers.work === 'gaming' || answers.priority === 'performance') {
    if (answers.work === 'gaming') {
      return {
        badge: 'Intel Core Ultra 9',
        seriesGuide: 'Core Ultra 7 / 9 H-Series · Intel Arc Graphics',
        ramFloor: '16GB–32GB Dual-Channel RAM',
        npuSpec: 'Dedicated Intel AI Boost NPU + XMX XeSS',
        stationLabel: 'Station B · Gaming & High-FPS Zone',
        headline: 'Apex Performance Build · Built for XeSS Gaming & Heavy Compiles',
        reason:
          'Pairs high-clock P-Cores with Intel Arc XMX engines so modern games run crisp with XeSS AI upscaling while Discord and voice cleanup run silently on the NPU.',
        askScript: `Hi! At ${retailer.name}, please show me your Intel Core Ultra 7 or Core Ultra 9 laptops with at least 16GB RAM, Intel Arc Graphics (XeSS), and the dedicated Intel AI Boost NPU.`,
      };
    }
    return {
      badge: 'Intel Core Ultra 7',
      seriesGuide: 'Core Ultra 7 · Intel Evo / Creator Series',
      ramFloor: '16GB–32GB LPDDR5x / DDR5',
      npuSpec: '45–48+ TOPS NPU · 300+ AI App Ready',
      stationLabel: 'Station C · Creator & Coding Zone',
      headline: 'Multitasking Creator Rig · Built for 4K Edits, Code & Local AI',
      reason:
        'Balances multi-core throughput for Figma, IDE containers, and 4K timeline exports with dedicated NPU acceleration so heavy background AI never stalls your workflow.',
      askScript: `Hi! At ${retailer.name}, please show me your Intel Core Ultra 7 AI PCs with at least 16GB RAM, Intel Arc Graphics, and the 45–48+ TOPS Intel AI Boost NPU.`,
    };
  }

  if (answers.work === 'coding' || answers.work === 'creator') {
    return {
      badge: 'Intel Core Ultra 7',
      seriesGuide: 'Intel Core Ultra 7 · Evo Edition',
      ramFloor: '16GB+ RAM Floor (Recommended 32GB for Creators)',
      npuSpec: '45–48+ TOPS Intel AI Boost NPU',
      stationLabel: 'Station C · Coding & Multitasking Zone',
      headline: 'All-Rounder Builder Tier · Zero Stutter Across 30+ Tabs & IDEs',
      reason:
        'Hybrid P-Cores, E-Cores, and a dedicated NPU let you run code servers, browser research, and local AI assistants simultaneously without thermal throttling.',
      askScript: `Hi! At ${retailer.name}, I am looking for an Intel Core Ultra 7 Evo Edition laptop with at least 16GB RAM and the dedicated Intel AI Boost NPU for coding and creator workloads.`,
    };
  }

  return {
    badge: 'Intel Core Ultra 5',
    seriesGuide:
      answers.battery === 'marathon' || answers.priority === 'ultralight'
        ? 'Core Ultra 5 · Intel Evo Ultralight (Under 1.3 kg)'
        : 'Core Ultra 5 · Everyday AI PC',
    ramFloor: '16GB+ LPDDR5x RAM Floor',
    npuSpec: 'Dedicated Intel AI Boost NPU · 20+ Hr Class Battery',
    stationLabel: 'Station A · Campus & Portability Zone',
    headline: 'All-Day Campus Companion · Leave Your Charger Brick in the Hostel',
    reason:
      'Low-Power Island E-Cores stretch unplugged study days past 20 hours while the on-device NPU runs lecture summaries and call blur silently without Wi-Fi.',
    askScript: `Hi! At ${retailer.name}, please show me your Intel Core Ultra 5 Intel Evo laptops with 16GB RAM, all-day battery life, and the dedicated Intel AI Boost NPU.`,
  };
}
