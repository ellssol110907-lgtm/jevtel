import type { IntelHardwareKey, IntelHardwareSpec } from './types';

export const INTEL_HARDWARE_SPECS: Record<IntelHardwareKey, IntelHardwareSpec> = {
  trap_glitterbook: {
    key: 'trap_glitterbook',
    title: 'Budget Non-NPU Laptop (Bargain Trap)',
    subtitle: 'Legacy Single-Lane Silicon · No Dedicated AI Engine',
    category: 'Hardware Comparison',
    factionColor: 'Red',
    accentColor: '#EF4444',
    studioPhotoKey: 'aiPcLaptop',
    pixelSpriteKey: 'trapLaptop',
    summary:
      'Flashy retail stickers often hide outdated processors with no dedicated Neural Processing Unit (NPU) and weak integrated graphics. When study summaries, background blur, and games compete on legacy CPU cores alone, clock speeds thermal-throttle and battery drains rapidly.',
    whyItMatters:
      'Without an NPU or Low-Power Island E-Cores, everyday background AI and multitasking stall FPS and force you to stay plugged into a wall outlet.',
    engines: [
      {
        label: 'CPU Only',
        title: 'Overloaded Legacy Cores',
        detail: 'Forces OS, browser tabs, and AI filters onto power-hungry general cores simultaneously.',
      },
      {
        label: 'Basic iGPU',
        title: 'No XMX AI Upscaling',
        detail: 'Lacks hardware XeSS frame acceleration, dropping below playable frame rates under load.',
      },
      {
        label: 'No NPU',
        title: 'Cloud-Dependent Latency',
        detail: 'Zero dedicated AI silicon—offline local models stutter and drain battery quickly.',
      },
    ],
    specs: [
      { label: 'AI Accelerator', value: 'None (CPU Fallback)' },
      { label: 'Graphics Tech', value: 'Basic Shared iGPU' },
      { label: 'Efficiency Island', value: 'Not Included' },
      { label: 'Unplugged Endurance', value: 'Short Under AI Load' },
    ],
    officialUrl: 'https://www.intel.com',
    officialLabel: 'Compare True Intel AI PCs on Intel.com',
  },

  ecore_booth: {
    key: 'ecore_booth',
    title: 'Intel AI PC Retail Experience Pavilion',
    subtitle: 'Intel Core Ultra · Hybrid P-Core + E-Core + NPU Showcase',
    category: 'Live Demo Station',
    factionColor: 'Blue',
    accentColor: '#00C7FD',
    studioPhotoKey: 'expoStation',
    pixelSpriteKey: 'booth',
    summary:
      'The Intel AI PC Pavilion demonstrates how Core Ultra processors balance Performance-cores, Efficient-cores, and Low-Power Island cores across thin-and-light laptops. Background sync, audio filtering, and video calls run silently on low-wattage silicon.',
    whyItMatters:
      'All-day unplugged battery life meets instant responsiveness across coding, lectures, and 300+ AI-accelerated applications.',
    engines: [
      {
        label: 'P-Cores & E-Cores',
        title: 'Intelligent Thread Director',
        detail: 'Routes foreground bursts to Performance-cores and sustained apps to Efficiency-cores.',
      },
      {
        label: 'Low-Power Island',
        title: 'Always-Efficient Standby',
        detail: 'Handles video playback and background tasks on a dedicated ultra-low-power tile.',
      },
      {
        label: 'Intel AI Boost',
        title: 'Dedicated NPU Silicon',
        detail: 'Runs sustained local AI effects coolly without ramping up laptop fans.',
      },
    ],
    specs: [
      { label: 'Platform', value: 'Intel Core Ultra AI PC' },
      { label: 'Architecture', value: '3D Hybrid Compute Tiles' },
      { label: 'Ecosystem', value: '300+ Accelerated AI Apps' },
      { label: 'Experience Zone', value: 'Interactive Retail Hub' },
    ],
    officialUrl: 'https://www.intel.com',
    officialLabel: 'Explore Intel AI PCs on Intel.com',
  },

  core_ultra_battery: {
    key: 'core_ultra_battery',
    title: 'Intel Core Ultra Efficiency Architecture',
    subtitle: 'Disaggregated SoC Tile · 20+ Hour Unplugged Design',
    category: 'Core Processor Silicon',
    factionColor: 'Blue',
    accentColor: '#10B981',
    studioPhotoKey: 'processor',
    pixelSpriteKey: 'chip',
    summary:
      'Built around a disaggregated multi-tile SoC layout, Intel Core Ultra pairs high-throughput compute silicon with an isolated Low-Power Efficiency Island. Lighter workloads stay inside the low-power tile so the main compute complex can sleep.',
    whyItMatters:
      'Carry your laptop across full college days, cafes, and work commutes without packing a bulky power brick.',
    engines: [
      {
        label: 'Compute Tile',
        title: 'Performance + Efficiency Cores',
        detail: 'Delivers fast single-thread burst speed paired with multi-core background throughput.',
      },
      {
        label: 'SoC Low-Power',
        title: 'Low-Power Island E-Cores',
        detail: 'Offloads media streaming and idle tasks to dramatically cut watt draw.',
      },
      {
        label: 'Integrated NPU',
        title: 'Low-Wattage AI Inference',
        detail: 'Keeps webcam studio framing, live captions, and local assistants sipping power.',
      },
    ],
    specs: [
      { label: 'Silicon Design', value: 'Multi-Tile Packaging' },
      { label: 'Target Class', value: 'Thin & Light AI PCs' },
      { label: 'Power Focus', value: 'Multi-Day / All-Day Battery' },
      { label: 'Thermal Behavior', value: 'Cool & Whisper-Quiet' },
    ],
    officialUrl: 'https://www.intel.com',
    officialLabel: 'View Intel Core Ultra Architecture',
  },

  core_ultra_hub: {
    key: 'core_ultra_hub',
    title: 'Intel Core Ultra Three-Engine Architecture',
    subtitle: 'CPU + Intel Arc GPU + Intel AI Boost NPU',
    category: 'Flagship SoC Hub',
    factionColor: 'Blue',
    accentColor: '#00C7FD',
    studioPhotoKey: 'processor',
    pixelSpriteKey: 'chip',
    summary:
      'Every Intel Core Ultra AI PC distributes AI workloads across three specialized engines rather than bottlenecking one chip: the CPU handles instant low-latency prompts, the Intel Arc GPU accelerates heavy generative graphics, and the NPU sustains continuous AI efficiently.',
    whyItMatters:
      'Matching each task to the right engine eliminates lag spikes, extends battery life, and unlocks smooth local AI.',
    engines: [
      {
        label: 'CPU Engine',
        title: 'Low-Latency Responsiveness',
        detail: 'Handles quick commands, lightweight local scripts, and snappy OS interactions.',
      },
      {
        label: 'Arc GPU Engine',
        title: 'High-Throughput Rendering',
        detail: 'Powers generative AI imagery, 4K media encoding, and XeSS-accelerated gaming.',
      },
      {
        label: 'NPU Engine',
        title: 'Sustained Efficiency',
        detail: 'Dedicated Intel AI Boost unit built for continuous background AI at minimal wattage.',
      },
    ],
    specs: [
      { label: 'Compute Pillars', value: 'CPU + GPU + NPU' },
      { label: 'NPU Tech', value: 'Intel AI Boost' },
      { label: 'Graphics', value: 'Built-In Intel Arc GPU' },
      { label: 'Local Privacy', value: 'On-Device Processing' },
    ],
    officialUrl:
      'https://www.intel.com/content/www/us/en/support/products/236437/processors/intel-core-processors/intel-core-ultra-processors/intel-ai-boost.html',
    officialLabel: 'Read Intel AI Boost Docs on Intel.com',
  },

  ai_pc_apps: {
    key: 'ai_pc_apps',
    title: 'Intel AI PC · 300+ Accelerated AI Apps',
    subtitle: 'On-Device Productivity, Coding & Creative Workflows',
    category: 'AI PC Ultrabook',
    factionColor: 'Blue',
    accentColor: '#38BDF8',
    studioPhotoKey: 'aiPcLaptop',
    pixelSpriteKey: 'aiPc',
    summary:
      'Backed by Intel developer optimization and software partners, Core Ultra laptops accelerate over 300 AI-powered features locally across notes, code completion, photo masking, stem separation, and noise cancellation—even offline.',
    whyItMatters:
      'Run smart document summaries, audio cleanup, and developer copilots privately on your SSD with zero monthly cloud lag.',
    engines: [
      {
        label: 'Local CPU',
        title: 'Instant App Launch',
        detail: 'Keeps dozens of browser tabs, IDE builds, and notes moving smoothly side by side.',
      },
      {
        label: 'Intel Arc GPU',
        title: 'Creator Media Acceleration',
        detail: 'Hardware AV1 encoding and GPU-accelerated filters cut video & photo export wait times.',
      },
      {
        label: 'Intel AI Boost',
        title: 'Offline NPU Intelligence',
        detail: 'Powers real-time transcription, privacy blur, and local model inference anywhere.',
      },
    ],
    specs: [
      { label: 'ISV Ecosystem', value: '300+ AI Features' },
      { label: 'Offline Mode', value: 'Full Local Execution' },
      { label: 'Media Support', value: 'Hardware AV1 & Xe Media' },
      { label: 'Security', value: 'Data Stays On Device' },
    ],
    officialUrl: 'https://www.intel.com',
    officialLabel: 'Explore AI PC Software on Intel.com',
  },

  ai_pc_xess: {
    key: 'ai_pc_xess',
    title: 'Intel Arc Graphics & XeSS AI Upscaling',
    subtitle: 'XMX AI Matrix Acceleration · Crisp High-FPS Gaming',
    category: 'Arc Graphics Rig',
    factionColor: 'Yellow',
    accentColor: '#F59E0B',
    studioPhotoKey: 'arcXess',
    pixelSpriteKey: 'aiPc',
    summary:
      'Instead of brute-forcing every native pixel until a laptop heats up, Intel Xe Super Sampling (XeSS) uses hardware-accelerated AI upscaling to reconstruct razor-sharp high-resolution frames at high frame rates.',
    whyItMatters:
      'Play modern esports and AAA worlds smoothly on thin-and-light AI PCs without loud fans or thermal throttling.',
    engines: [
      {
        label: 'Xe Cores',
        title: 'Hardware Ray Tracing',
        detail: 'Modern graphics pipelines bring rich lighting and crisp geometry to mobile laptops.',
      },
      {
        label: 'XeSS AI Engine',
        title: 'AI Frame Reconstruction',
        detail: 'Upscales lower-cost internal renders into crisp detail with dramatic FPS gains.',
      },
      {
        label: 'NPU Co-Pilot',
        title: 'Stream & Voice Offload',
        detail: 'Frees GPU headroom by running mic noise removal and webcam framing on the NPU.',
      },
    ],
    specs: [
      { label: 'Graphics Engine', value: 'Intel Arc Built-In GPU' },
      { label: 'Upscaling Tech', value: 'Intel XeSS AI Super Sampling' },
      { label: 'Target Smoothness', value: 'High-FPS 1080p+ Gaming' },
      { label: 'Stream Offload', value: 'Dual GPU + NPU Pipeline' },
    ],
    officialUrl:
      'https://www.intel.com/content/www/us/en/architecture-and-technology/arc-gaming-technologies.html',
    officialLabel: 'See Intel Arc Gaming Tech on Intel.com',
  },

  npu_ai_boost: {
    key: 'npu_ai_boost',
    title: 'Intel AI Boost (Dedicated NPU Engine)',
    subtitle: 'Low-Power Neural Processing Unit · Private Local AI',
    category: 'NPU Architecture',
    factionColor: 'Purple',
    accentColor: '#A855F7',
    studioPhotoKey: 'processor',
    pixelSpriteKey: 'chip',
    summary:
      'Intel AI Boost is the integrated Neural Processing Unit inside Intel Core Ultra processors. Engineered specifically for matrix math and neural networks, it runs continuous local AI assistants, vision tracking, and audio isolation at a fraction of CPU/GPU power.',
    whyItMatters:
      'Think of the CPU as a sprinter and the GPU as an artist—the NPU is the marathon runner keeping AI features active all day.',
    engines: [
      {
        label: 'Neural Compute',
        title: 'Dedicated AI Matrix Pipe',
        detail: 'Purpose-built neural hardware tuned for sustained INT8/FP16 inference.',
      },
      {
        label: 'Zero Wi-Fi Needed',
        title: 'Private On-Device Models',
        detail: 'Summarize lecture PDFs and sensitive files locally without uploading to cloud servers.',
      },
      {
        label: 'Low Wattage',
        title: 'Preserves Battery Life',
        detail: 'Keeps background AI studio effects and live transcription running coolly.',
      },
    ],
    specs: [
      { label: 'Hardware Unit', value: 'Intel AI Boost NPU' },
      { label: 'Supported OS', value: 'Windows Copilot+ & DirectML' },
      { label: 'Workload Profile', value: 'Sustained Background AI' },
      { label: 'Privacy Posture', value: '100% Local Capable' },
    ],
    officialUrl:
      'https://www.intel.com/content/www/us/en/support/products/236437/processors/intel-core-processors/intel-core-ultra-processors/intel-ai-boost.html',
    officialLabel: 'Inspect Intel AI Boost Support Page',
  },

  arc_xess_rig: {
    key: 'arc_xess_rig',
    title: 'Intel XeSS & Arc Gaming Workstation',
    subtitle: 'Xe Super Sampling · Developer & Gamer AI Pipeline',
    category: 'XeSS Arena Showcase',
    factionColor: 'Yellow',
    accentColor: '#F59E0B',
    studioPhotoKey: 'arcXess',
    pixelSpriteKey: 'aiPc',
    summary:
      'Demonstrating Intel Xe Super Sampling (XeSS) in live action: deep-learning motion vectors and sub-pixel history combine to deliver sharp edges and responsive frame times while leaving thermal headroom for Discord, recording, and multitasking.',
    whyItMatters:
      'Higher frame rates and cleaner image stability on sleek laptops without thermal meltdowns.',
    engines: [
      {
        label: 'XeSS Super Res',
        title: 'Motion-Compensated Upscaling',
        detail: 'Uses neural reconstruction for crisp foliage, fine edges, and stable motion.',
      },
      {
        label: 'Xe Media Engine',
        title: 'Dual Hardware Encoders',
        detail: 'Stream gameplay cleanly in AV1/HEVC with minimal frame-rate penalty.',
      },
      {
        label: 'Core Ultra CPU',
        title: 'Steady Frametimes',
        detail: 'Hybrid cores keep background launchers and voice chat off gaming threads.',
      },
    ],
    specs: [
      { label: 'Upscaler', value: 'Intel XeSS AI Pipeline' },
      { label: 'Architecture', value: 'Intel Arc Xe Graphics' },
      { label: 'Codec Ready', value: 'Hardware AV1 Encode/Decode' },
      { label: 'Thermals', value: 'Sustained Boost Clocks' },
    ],
    officialUrl:
      'https://www.intel.com/content/www/us/en/developer/articles/technical/intel-xe-super-sampling-xess.html',
    officialLabel: 'Explore Intel XeSS Technical Guide',
  },

  expo_station_a: {
    key: 'expo_station_a',
    title: 'Expo Station A · Intel Core Ultra 5 AI PC',
    subtitle: 'Campus Dash & FeatherAir · All-Day Ultraportable Class',
    category: 'Expo Booth Station A',
    factionColor: 'Blue',
    accentColor: '#00C7FD',
    studioPhotoKey: 'aiPcLaptop',
    pixelSpriteKey: 'booth',
    summary:
      'Station A spotlights ultra-portable Intel Core Ultra 5 laptops built for students, commuters, and everyday productivity. Pairing multi-hour unplugged battery life with quiet thermals and on-device NPU acceleration.',
    whyItMatters:
      'Ideal balance of price, portability, instant wake, and private offline study AI.',
    engines: [
      {
        label: 'Ultra 5 CPU',
        title: 'Balanced Hybrid Cores',
        detail: 'Handles heavy note apps, browsers, and spreadsheets smoothly all day.',
      },
      {
        label: 'Intel AI Boost',
        title: 'Offline Study Assistant',
        detail: 'Summarizes lectures and clears webcam noise without cloud reliance.',
      },
      {
        label: 'Integrated Graphics',
        title: 'Crisp Display Engine',
        detail: 'Drives high-refresh displays and smooth casual gaming effortlessly.',
      },
    ],
    specs: [
      { label: 'Tier', value: 'Intel Core Ultra 5' },
      { label: 'Form Factor', value: 'Ultralight 13"–14" Laptop' },
      { label: 'Standout Feature', value: 'All-Day Unplugged Endurance' },
      { label: 'Expo Zone', value: 'Station A (Blue Keep)' },
    ],
    officialUrl: 'https://www.intel.com',
    officialLabel: 'Browse Intel Core Ultra 5 AI PCs',
  },

  expo_station_b: {
    key: 'expo_station_b',
    title: 'Expo Station B · Intel Core Ultra 9 Performance',
    subtitle: 'Apex Frame · High-FPS Arc Graphics & Thermal Endurance',
    category: 'Expo Booth Station B',
    factionColor: 'Red',
    accentColor: '#EF4444',
    studioPhotoKey: 'arcXess',
    pixelSpriteKey: 'booth',
    summary:
      'Station B showcases flagship Intel Core Ultra 9 systems tuned for competitive gamers, 3D artists, and heavy compiler workloads—pairing maximum P-Core/E-Core headroom with Arc graphics and XeSS acceleration.',
    whyItMatters:
      'Sustained high performance for gaming, streaming, and heavy creative workloads without slowing down.',
    engines: [
      {
        label: 'Ultra 9 Flagship',
        title: 'Maximum Core Headroom',
        detail: 'Crushes heavy builds, multi-track timelines, and game engines simultaneously.',
      },
      {
        label: 'Intel Arc + XeSS',
        title: 'AI-Boosted Frame Rates',
        detail: 'Delivers crisp visuals and responsive FPS with hardware XeSS acceleration.',
      },
      {
        label: 'NPU Offload',
        title: 'Always-Free Background AI',
        detail: 'Handles OBS noise gating and background removal without stealing GPU FPS.',
      },
    ],
    specs: [
      { label: 'Tier', value: 'Intel Core Ultra 9' },
      { label: 'Target Class', value: 'Performance & Gaming' },
      { label: 'Graphics Tech', value: 'Intel Arc + XeSS' },
      { label: 'Expo Zone', value: 'Station B (Crimson Arena)' },
    ],
    officialUrl: 'https://www.intel.com/content/www/us/en/products/docs/discrete-gpus/arc/overview.html',
    officialLabel: 'Explore Intel Arc Overview on Intel.com',
  },

  expo_station_c: {
    key: 'expo_station_c',
    title: 'Expo Station C · Intel Core Ultra 7 Creator Studio',
    subtitle: 'FlowCraft Pro & Canvas Studio · Local Gen-AI & Multitasking',
    category: 'Expo Booth Station C',
    factionColor: 'Yellow',
    accentColor: '#F59E0B',
    studioPhotoKey: 'expoStation',
    pixelSpriteKey: 'booth',
    summary:
      'Station C highlights versatile Intel Core Ultra 7 laptops designed for developers, designers, and content creators who run 25+ apps, local generative AI images, and smart video editing timelines simultaneously.',
    whyItMatters:
      'Power-user speed in a slim aluminum chassis built to stay responsive for years of AI software updates.',
    engines: [
      {
        label: 'Ultra 7 Hybrid',
        title: 'Zero-Lag Multitasking',
        detail: 'Thread Director smoothly juggles IDEs, creative suites, and AI copilots.',
      },
      {
        label: 'Arc GPU Media',
        title: 'Fast Local Gen-AI & 4K',
        detail: 'Accelerates local image synthesis, color grading, and video auto-reframe.',
      },
      {
        label: 'Intel AI Boost',
        title: 'Private Creator AI',
        detail: 'Keeps client files, voice isolation, and smart background tools offline.',
      },
    ],
    specs: [
      { label: 'Tier', value: 'Intel Core Ultra 7 (Evo)' },
      { label: 'Target Class', value: 'Creators & Developers' },
      { label: 'Local AI', value: '300+ Accelerated Workflows' },
      { label: 'Expo Zone', value: 'Station C (Golden Guild)' },
    ],
    officialUrl: 'https://www.intel.com',
    officialLabel: 'Explore Intel Core Ultra 7 on Intel.com',
  },
};
