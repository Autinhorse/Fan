// Every research project and activity, with the content for its detail page at /projects/<slug>/.
import type { ImageMetadata } from 'astro';
import type { Accent, IconName, Figure } from './site';

import ltArchitecture from '../assets/img/learntune-architecture.png';
import ltResults from '../assets/img/learntune-results.png';
import ltPcb from '../assets/img/learntune-pcb.jpg';
import ltHeadband from '../assets/img/learntune-headband.jpg';
import helmetFinal from '../assets/img/helmet-final.jpg';
import helmetPcb from '../assets/img/helmet-pcb.jpg';
import helmetBench from '../assets/img/helmet-bench.jpg';
import helmetAssembly from '../assets/img/helmet-assembly.jpg';
import helmetSchematic from '../assets/img/helmet-schematic.jpg';
import helmetLayout from '../assets/img/helmet-layout.jpg';
import helmet3d from '../assets/img/helmet-3d.jpg';
import helmetFitting from '../assets/img/helmet-fitting.jpg';
import cyclingSunset from '../assets/img/cycling-sunset.jpg';
import meditationBowls from '../assets/img/meditation-bowls.jpg';
import meditationSession1 from '../assets/img/meditation-session-1.jpg';
import meditationSession2 from '../assets/img/meditation-session-2.jpg';
import chamberQuartet from '../assets/img/chamber-quartet.jpg';
import violaSoloBlack from '../assets/img/viola-solo-black.jpg';
import violaPortrait from '../assets/img/viola-portrait.jpg';
import fantuan from '../assets/img/fantuan.jpg';
import zimoFantuan from '../assets/img/zimo-fantuan.jpg';
import childhoodWhiteShirt from '../assets/img/childhood-white-shirt.jpg';
import childhoodPractice from '../assets/img/childhood-practice.jpg';
import childhoodCloseup from '../assets/img/childhood-closeup.jpg';
import childhoodRecital from '../assets/img/childhood-recital.jpg';
import childhoodTeacher from '../assets/img/childhood-teacher.jpg';
import posterSeitz from '../assets/img/performance-poster.jpg';
import posterLearntune from '../assets/img/poster-learntune-experiment.jpg';
import posterMeditation from '../assets/img/poster-meditation-session.jpg';
import posterChamber from '../assets/img/poster-chamber-rehearsal.jpg';
import posterPractice from '../assets/img/poster-viola-practice.jpg';
import posterLesson from '../assets/img/poster-childhood-lesson.jpg';
import posterRecital from '../assets/img/poster-childhood-recital.jpg';
import posterStairs from '../assets/img/poster-fantuan-stairs.jpg';
import posterPlay from '../assets/img/poster-fantuan-play.jpg';
import posterVase from '../assets/img/poster-fantuan-vase.jpg';

export interface Video { src: string; poster: ImageMetadata; title: string; portrait?: boolean }
export interface Section { heading: string; paragraphs?: string[]; bullets?: string[]; steps?: { title: string; body: string }[] }
export interface Quote { text: string; source: string }
export interface Paper { title: string; citation: string; href: string; note?: string }

export interface Project {
  slug: string;
  kind: 'research' | 'activity';
  featured?: boolean;
  accent: Accent;
  icon: IconName;
  tag: string;
  title: string;
  role: string;
  dates?: string;
  /** One-paragraph summary used on the home page cards. */
  summary: string;
  highlight?: string;
  /** Bullet points shown on the home page (featured projects only). */
  points?: string[];
  cardImage?: Figure;
  hero?: Figure & { diagram?: boolean };
  /** Small figure strip shown on the home page (featured projects only). */
  homeFigures?: Figure[];
  facts: { label: string; value: string }[];
  lead: string;
  sections: Section[];
  quotes?: Quote[];
  figures?: Figure[];
  videos?: Video[];
  paper?: Paper;
  lesson?: string;
}

export const projects: Project[] = [
  {
    slug: 'learntune',
    kind: 'research',
    featured: true,
    accent: 'cyan',
    icon: 'wave',
    tag: 'Neuroengineering',
    title: 'LearnTune: Closed-Loop Music Neurofeedback',
    role: 'Student Researcher · Shing-Tung Yau High School Science Award project',
    dates: 'Nov 2025 – Present',
    summary:
      'A wearable system that reads a learner’s state and adapts music in real time. I designed and built a custom scalp-EEG headband, fused it with camera-derived heart rate and facial arousal, and ran a within-participant experiment during word learning.',
    points: [
      'Designed the headband PCB (dual-channel EEG front end, nRF52840 Bluetooth MCU, 6-axis IMU) and the closed-loop control pipeline: individual calibration, quality-weighted fusion, Kalman filtering and negative-feedback music control.',
      'Ran controlled experiments comparing closed-loop and static music; coordinated participant recruitment and processed the multimodal data with Python and machine learning (29 participants).',
      'Under closed-loop feedback, variability of the composite arousal index fell by 12.8% — and I reported honestly that no learning benefit was shown, focusing the paper on system feasibility and measurement limits.',
    ],
    hero: {
      src: ltArchitecture, diagram: true,
      alt: 'Diagram of the LearnTune closed-loop signal flow, with photos of the custom EEG headband PCB and the experimental setup',
      caption: 'System architecture: multimodal sensing → calibration and fusion → Kalman filtering → negative-feedback music control.',
    },
    homeFigures: [
      { src: ltPcb, alt: 'Custom EEG headband circuit board with labelled components', caption: 'Custom EEG headband PCB' },
      { src: ltHeadband, alt: 'The finished EEG headband', caption: 'Finished headband' },
      { src: ltResults, alt: 'Paired chart: within-block standard deviation is lower under closed-loop feedback for 17 of 24 participants', caption: 'Results: 17 of 24 participants showed lower variability' },
    ],
    facts: [
      { label: 'Role', value: 'Student Researcher (first author)' },
      { label: 'Timeline', value: 'Nov 2025 – Present' },
      { label: 'Collaborator', value: 'Ting Jiang, Faculty of Psychology, Beijing Normal University' },
      { label: 'Participants', value: '29 behavioral · 24 EEG state analysis' },
      { label: 'Tools', value: 'Custom PCB · nRF52840 · Python · Machine learning' },
    ],
    lead:
      'I designed and built a closed-loop musical neurofeedback prototype — a custom scalp-EEG headband combined with camera-based sensing — to study whether music that responds to a learner’s state can steady that state during learning.',
    sections: [
      {
        heading: 'The question',
        paragraphs: [
          'Two learners can have the same average level of arousal but very different moment-to-moment trajectories. Research has linked this variability to attention and memory, but an association is not an intervention. I wanted to test whether music that continuously adjusts to a learner’s own state could reduce that variability — without asking the learner to actively self-regulate.',
        ],
      },
      {
        heading: 'What I built',
        steps: [
          { title: 'Custom EEG headband', body: 'A PCB with a KS1092 dual-channel EEG analog front end, an MS88SF3 (nRF52840) Bluetooth MCU, a BMI260 6-axis IMU, battery management and a low-noise regulator.' },
          { title: 'Multimodal sensing', body: 'A frontal EEG power ratio, camera-derived heart rate and facial arousal, combined into one composite state index.' },
          { title: 'Calibration & fusion', body: 'Each learner is calibrated to their own reference centre and scale; inputs are weighted by their real-time signal quality.' },
          { title: 'Closed-loop control', body: 'Kalman filtering and temporal smoothing feed a negative-feedback controller that continuously adjusts the acoustic and note parameters of the music.' },
        ],
      },
      {
        heading: 'The experiment',
        paragraphs: [
          'A within-participant design compared closed-loop music driven by each participant’s real-time state with music from the same engine using static parameters. Each participant completed four word-learning blocks, two per condition, followed by recognition tests and attention probes.',
          'Of 34 sessions, 30 produced complete records; after pre-registered exclusion rules, 29 participants entered the behavioral analysis and 24 — with sufficient raw EEG — entered the primary state analysis.',
        ],
      },
      {
        heading: 'What I found',
        bullets: [
          'Over the full feedback period, the standard deviation of the composite index was 12.8% lower under closed-loop feedback (Wilcoxon p = 0.0231; paired t-test after BH correction p = 0.0554).',
          'No significant difference was found in the mean level; changes in individual channels appeared mainly in facial arousal.',
          'No improvement was detected in recognition discriminability or reaction time — so the paper presents the system and its measurement limits, not a learning benefit.',
        ],
      },
    ],
    figures: [
      { src: ltPcb, alt: 'Custom EEG headband circuit board with labelled components', caption: 'Headband PCB with labelled components' },
      { src: ltHeadband, alt: 'The finished EEG headband', caption: 'The finished headband' },
      { src: ltResults, alt: 'Paired chart of within-block standard deviation for each participant', caption: 'Paired within-participant comparison (N = 24)' },
    ],
    videos: [
      { src: '/media/learntune-experiment.mp4', poster: posterLearntune, title: 'Experiment sessions', portrait: true },
    ],
    paper: {
      title: 'LearnTune: An Exploratory Pilot Study of Multimodal Closed-Loop Music Biofeedback During Word Learning',
      citation: 'Fan, Z., & Jiang, T. Manuscript (LNCS format).',
      href: '/papers/learntune-fan-jiang.pdf',
      note: 'Co-authored with Ting Jiang, Faculty of Psychology, Beijing Normal University.',
    },
    lesson:
      'This was my first time carrying a research idea through the full pipeline. The hardest problem in neuroengineering is often not model accuracy, but the tension between real-world signal noise and experimental control.',
  },
  {
    slug: 'smart-helmet',
    kind: 'research',
    featured: true,
    accent: 'amber',
    icon: 'helmet',
    tag: 'Hardware · Patent pending',
    title: 'Smart Safety Helmet for Delivery Riders',
    role: 'Cyclist, Designer & Researcher',
    dates: 'Mar 2024 – Oct 2025',
    summary:
      'Field research showed that delivery riders repeatedly look down at their phones for navigation, orders and notifications. I designed, built and iterated a helmet with a heads-up display so they never have to.',
    points: [
      'Translated rider observation into three goals: keep information in view, keep alerts from interfering with control, and keep the helmet’s protective structure intact.',
      'Built the full hardware pipeline: schematic, PCB layout and fabrication, ESP32 firmware and a custom 3D-printed mount for a micro-display with a reflective light guide.',
      'Wrote the “Rigonomics” posture algorithm, which computes body angles from IMU data; added LED indicators, collision detection, environmental sensing and handlebar controls.',
    ],
    hero: { src: helmetFinal, alt: 'The finished helmet with the heads-up display mounted at the edge of the rider’s view', caption: 'Final prototype: speed, posture and battery at the edge of the rider’s vision.' },
    homeFigures: [
      { src: helmetPcb, alt: 'Rendered helmet circuit board with ESP32 module and display connectors', caption: 'ESP32 control board' },
      { src: helmetSchematic, alt: 'Circuit schematic of the helmet system', caption: 'Schematic' },
      { src: helmetBench, alt: 'Bench test of the board driving two micro-displays', caption: 'First display bench test' },
    ],
    facts: [
      { label: 'Role', value: 'Sole designer & builder' },
      { label: 'Timeline', value: 'Mar 2024 – Oct 2025' },
      { label: 'Status', value: 'Patent pending' },
      { label: 'Stack', value: 'ESP32 · PCB design · IMU · 3D printing · Micro-display' },
    ],
    lead:
      'To address the distraction caused by delivery riders repeatedly checking their phones, I independently designed, built and iteratively validated a helmet-integrated heads-up vision-assistance system.',
    sections: [
      {
        heading: 'Starting from the road',
        paragraphs: [
          'As a cyclist, I noticed how often delivery riders glance down at phones mounted on their handlebars. I began with field research — observing riders in real delivery contexts — which confirmed that looking down for navigation, orders and notifications was the dominant source of riding distraction.',
        ],
      },
      {
        heading: 'Three engineering goals',
        steps: [
          { title: 'Keep information in view', body: 'Speed, posture and battery should sit at the edge of the rider’s field of vision — never in a pocket or below the handlebars.' },
          { title: 'Alert without distracting', body: 'Warnings must never compete with the rider’s control of the vehicle.' },
          { title: 'Keep the helmet a helmet', body: 'Nothing may weaken the protective structure of the shell.' },
        ],
      },
      {
        heading: 'The build',
        bullets: [
          'Schematic design, PCB layout and fabrication around an ESP32 with two display connectors, USB-C charging and serial programming.',
          'ESP32 firmware driving a micro-display that projects through a reflective light guide at the edge of the rider’s view.',
          'A custom 3D-printed mounting structure that holds the display without cutting into the helmet’s protective foam.',
          'The “Rigonomics” posture algorithm: it computes key body angles from IMU and gyroscope data and triggers alerts when posture leaves a safe range.',
          'LED indicators, collision detection, environmental sensing and handlebar-mounted controls complete the system.',
        ],
      },
    ],
    figures: [
      { src: helmetSchematic, alt: 'Circuit schematic divided into MCU, reset, Type-C, RGB indicator, serial programming, power and display blocks', caption: 'Schematic' },
      { src: helmetLayout, alt: 'PCB layout in the design tool', caption: 'PCB layout' },
      { src: helmetPcb, alt: 'Rendered helmet circuit board', caption: '3D render of the control board' },
      { src: helmet3d, alt: 'CAD model of the 3D-printed display mount', caption: 'CAD model of the display mount' },
      { src: helmetBench, alt: 'Bench test of the board driving two micro-displays', caption: 'First bench test of both displays' },
      { src: helmetFitting, alt: 'Fitting the display ribbon cable inside the helmet', caption: 'Routing the display inside the shell' },
      { src: helmetAssembly, alt: 'Installing the control board inside the helmet', caption: 'Installing the control board' },
      { src: cyclingSunset, alt: 'Zimo cycling along a coastal road at sunset', caption: 'Where it started: riding' },
    ],
    lesson:
      'The hardest part of human-centered engineering is not the technology but the trade-offs — visibility vs. bulk, functionality vs. safety, alert intensity vs. attentional load — and each can only be resolved by continuing to watch real riders.',
  },
  {
    slug: 'animal-assisted-therapy',
    kind: 'research',
    accent: 'green',
    icon: 'globe',
    tag: 'Psychology',
    title: 'Animal-Assisted Therapy Across Cultures',
    role: 'Psychology Research Scholar · Pioneer Academics',
    dates: 'Mar – Jul 2026',
    summary:
      'A comparative review of how cultural attitudes, institutions, socioeconomic access and individual factors shape animal-assisted therapy in the US, Europe, Japan, China and Hawaii. Supervised by Prof. Anre Venter, University of Notre Dame.',
    highlight: 'Grade A · 4 Oberlin College credits',
    facts: [
      { label: 'Program', value: 'Pioneer Research Institute — credit awarded by Oberlin College' },
      { label: 'Advisor', value: 'Prof. Anre Venter, Department of Psychology, University of Notre Dame' },
      { label: 'Concentration', value: 'A Social Psychological Examination of the Self' },
      { label: 'Result', value: 'Grade A · 4 college credits' },
      { label: 'Timeline', value: 'Mar – Jul 2026' },
    ],
    lead:
      'Animal-assisted therapy has growing empirical support, yet its results are inconsistent across studies. My paper argues that outcomes cannot be credited to the animal alone — they emerge from the interaction between therapy animal, patient and therapeutic context.',
    sections: [
      {
        heading: 'The program',
        paragraphs: [
          'Pioneer Academics is a fully accredited online research program for high-school students, developed with Oberlin College’s Education Program and Policy Committee. Its faculty committee independently reviewed my paper and certified it with a grade of A and four college credits.',
          'The experience took me through the complete academic cycle: repeatedly refining my research question, discussing my work with my professor, peer review, the writing centre, and a final presentation.',
        ],
      },
      {
        heading: 'Three perspectives',
        steps: [
          { title: 'Cultural systems', body: 'Religious traditions and cultural meanings shape how patients first respond to a specific therapy animal.' },
          { title: 'National institutions', body: 'Healthcare infrastructure, psychotherapy systems, animal-welfare policy and professional certification decide whether that meaning can become a therapeutic resource.' },
          { title: 'Individual circumstances', body: 'Trauma history, socioeconomic status, previous experience with animals and emotional acceptance decide whether a patient feels safe enough to engage.' },
        ],
      },
      {
        heading: 'The argument',
        paragraphs: [
          'Comparing the United States, Europe, Japan, China and Hawaii, I concluded that these influences are not additive but nested: culture determines the first meaning of an animal, the nation determines whether that meaning can be institutionalized, and the individual determines whether the resource genuinely becomes an effect.',
          'Ignoring any one layer risks universalized conclusions, unexplained institutional barriers, or a one-sided account of who benefits — so I proposed a more context-sensitive framework for interpreting intervention outcomes.',
        ],
      },
    ],
    quotes: [
      { text: 'An interesting and well written project — you identified the appropriate research and have used it well to make your argument. You have also integrated the feedback from myself and the writing center appropriately. Well done.', source: 'Prof. Anre Venter, comment on the final paper' },
      { text: 'Zimo is a dedicated, hard-working, and intelligent scholar with an inquisitive mindset.', source: 'Prof. Anre Venter, Pioneer evaluation' },
      { text: 'He is industrious and dedicated with a curious mindset and the intellectual skills that will allow him to excel.', source: 'Prof. Anre Venter, Pioneer evaluation' },
    ],
    paper: {
      title: 'A Cross-Cultural Analysis of Animal-Assisted Therapy: Culture, National Context, and Socioeconomic Access',
      citation: 'Fan, Z. Pioneer Research Institute final paper, 2026.',
      href: '/papers/animal-assisted-therapy-across-cultures.pdf',
      note: 'Final version, including the professor’s margin comments.',
    },
  },
  {
    slug: 'when-recognition-becomes-a-label',
    kind: 'research',
    accent: 'pink',
    icon: 'pen',
    tag: 'Essay · Psychology',
    title: 'When Recognition Becomes a Label',
    role: 'John Locke Institute Global Essay Prize · Psychology',
    summary:
      'Are mental illnesses overdiagnosed? Drawing on the looping effect, diagnosis data and popular culture, I argue they are both overdiagnosed and better recognized — and that the real question is whether care can be offered without requiring a label first.',
    facts: [
      { label: 'Competition', value: 'John Locke Institute Global Essay Prize' },
      { label: 'Category', value: 'Psychology' },
      { label: 'Question', value: '“Are mental illnesses overdiagnosed?”' },
    ],
    lead:
      'My answer: mental illnesses today are simultaneously overdiagnosed and better recognized — and both outcomes are driven by the same social change. People are now more willing to take psychological suffering seriously, which brings hidden conditions to light, but also creates the belief that suffering becomes legitimate only once it has a medical name.',
    sections: [
      {
        heading: 'Where the essay begins',
        paragraphs: [
          'The essay opens from my own experience of a difficult year at fourteen — real suffering that was never diagnosed — and the question of whether being seen as a patient would have helped or changed how I understood myself.',
        ],
      },
      {
        heading: 'How it is built',
        steps: [
          { title: 'Why overdiagnosis occurs', body: 'Attribution and the looping effect; the relative-age effect in ADHD diagnosis; how social media and subcultures turn psychiatric language into identity.' },
          { title: 'Recognizing unseen suffering', body: 'Why better recognition has reduced stigma and reached people whose pain was previously dismissed.' },
          { title: 'Where to draw the boundary', body: 'What role diagnosis, resilience and community support should each play — and why access to care should not depend on becoming a patient.' },
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          'Volunteering with adolescents, I met both sides: young people using mild diagnoses to explain away every difficulty, and others with severe symptoms whose parents insisted they were lazy. The question is therefore not whether to expand or reduce diagnosis, but to clarify its purpose — broad enough to support those in need, precise enough not to undermine personal agency.',
        ],
      },
    ],
    quotes: [
      { text: 'A diagnosis should help explain a person’s suffering without becoming the final explanation of who that person is.', source: 'From the essay' },
    ],
    paper: {
      title: 'When Recognition Becomes a Label',
      citation: 'Fan, Z. John Locke Institute Global Essay Prize, Psychology.',
      href: '/papers/when-recognition-becomes-a-label.pdf',
    },
  },

  // ——— Activities ———
  {
    slug: 'meditation-club',
    kind: 'activity',
    accent: 'pink',
    icon: 'lotus',
    tag: 'Community',
    title: 'SNA Meditation Club',
    role: 'Founder & Facilitator',
    summary:
      'Founded the club and advocated for a dedicated meditation space on campus. I lead weekly mindfulness and breathing sessions and low-pressure peer-support activities for students navigating academic stress.',
    highlight: '80+ unique participants · 1,000+ cumulative participations',
    cardImage: { src: meditationBowls, alt: 'Singing bowls arranged on a rug for a club session' },
    hero: { src: meditationBowls, alt: 'Singing bowls and candles arranged on a mandala rug', caption: 'Setting up for a singing-bowl sound bath.' },
    facts: [
      { label: 'Role', value: 'Founder & Facilitator' },
      { label: 'Reach', value: '80+ unique participants · 1,000+ cumulative participations' },
      { label: 'Who joins', value: 'Students and teachers' },
      { label: 'Rhythm', value: 'Weekly sessions' },
    ],
    lead:
      'I founded the club from scratch to give classmates a place to pause — without needing to explain or “fix” their stress — and advocated for a dedicated meditation space on campus.',
    sections: [
      {
        heading: 'What a session looks like',
        steps: [
          { title: 'Singing bowls & mindfulness', body: 'A short, accessible introduction to singing bowls, mindfulness and “flow”, and how each affects emotion and focus.' },
          { title: 'Breathing practice', body: 'Counted breathing in a comfortable seated posture, bringing attention back to the present, then a brief check-in.' },
          { title: 'Walking meditation', body: 'Slow walking that connects body and space, helping participants notice how they feel right now.' },
          { title: 'Sharing & integration', body: 'Reflecting on the experience together and turning awareness into a habit for daily life.' },
          { title: 'Mindfulness stories', body: 'Ways to bring meditation into everyday routines, explored through stories.' },
          { title: 'Sound bath', body: 'Deep relaxation in the layered sound of singing bowls, using sound to guide attention inward.' },
        ],
      },
      {
        heading: 'Why it matters',
        paragraphs: [
          'Many students carry academic pressure quietly. The club offers low-pressure peer support: you can come, sit and breathe, and leave a little lighter — no explanation required. Teachers have joined too.',
        ],
      },
    ],
    figures: [
      { src: meditationSession1, alt: 'Students seated on mats during a breathing session', caption: 'A breathing session' },
      { src: meditationSession2, alt: 'Students seated in a circle on mats around singing bowls', caption: 'Sitting in a circle around the bowls' },
    ],
    videos: [
      { src: '/media/meditation-session.mp4', poster: posterMeditation, title: 'Sound bath by candlelight' },
    ],
  },
  {
    slug: 'chamber-strings',
    kind: 'activity',
    accent: 'amber',
    icon: 'music',
    tag: 'Arts',
    title: 'SNA Chamber Strings',
    role: 'Founder, Ensemble Leader & Violist',
    summary:
      'Founded the school’s first chamber string ensemble: recruited members, arranged repertoire and organized rehearsals and concerts — learning to listen, blend and make space for other voices.',
    cardImage: { src: chamberQuartet, alt: 'Zimo performing with a chamber ensemble on stage' },
    hero: { src: chamberQuartet, alt: 'The ensemble performing on stage', caption: 'Performing at the SNA Chamber Music & Choir Concert.' },
    facts: [
      { label: 'Role', value: 'Founder, Ensemble Leader & Violist' },
      { label: 'Ensemble', value: 'The school’s first chamber string group' },
    ],
    lead:
      'After years of solo playing and competitions, I wanted to make music with other people — so I founded SNA’s first chamber string ensemble.',
    sections: [
      {
        heading: 'Building an ensemble',
        bullets: [
          'Recruited members across grades and instruments.',
          'Arranged repertoire to fit the players we had.',
          'Organized rehearsals and coordinated performances, including the SNA Chamber Music & Choir Concert.',
        ],
      },
      {
        heading: 'From soloist to ensemble player',
        paragraphs: [
          'Ensemble playing changed how I listen. Instead of projecting a single line, I learned to blend, adjust tempo with others, and create space for other musical voices.',
        ],
      },
    ],
    figures: [
      { src: violaSoloBlack, alt: 'Zimo performing a viola solo in concert dress', caption: 'Solo at the concert' },
    ],
    videos: [
      { src: '/media/chamber-rehearsal.mp4', poster: posterChamber, title: 'Ensemble rehearsal', portrait: true },
    ],
  },
  {
    slug: 'youth-psychology-association',
    kind: 'activity',
    accent: 'cyan',
    icon: 'heart',
    tag: 'Service',
    title: 'Suzhou Youth Psychology Association',
    role: 'Youth Support Volunteer',
    summary:
      'Join home visits and youth-support activities for adolescents facing depression, school refusal and academic withdrawal, under the guidance of mental-health professionals — listening first, and building trust from shared experience.',
    facts: [
      { label: 'Role', value: 'Youth Support Volunteer' },
      { label: 'Supervision', value: 'Mental-health professionals' },
    ],
    lead:
      'I volunteer with adolescents who are struggling with depression, school refusal and academic withdrawal — young people who are often reluctant to talk to adults.',
    sections: [
      {
        heading: 'What I do',
        bullets: [
          'Join home visits and youth-support activities under the guidance of mental-health professionals.',
          'Use shared experience and attentive listening to build trust with teenagers reluctant to engage.',
          'Help create a less judgmental setting for conversation and support.',
        ],
      },
      {
        heading: 'What it taught me',
        paragraphs: [
          'These visits shaped my John Locke essay: I met teenagers using diagnoses to explain away every difficulty, and others whose severe symptoms were dismissed as laziness. Both made me think harder about what diagnosis is for.',
        ],
      },
    ],
  },
  {
    slug: 'first-robotics',
    kind: 'activity',
    accent: 'violet',
    icon: 'robot',
    tag: 'STEM',
    title: 'FIRST Robotics Competition',
    role: 'Programmer',
    summary:
      'Responsible for programming and part of the component machining and assembly. Competed with the team across several events, winning a Third Prize and the Team Sustainability Award.',
    highlight: 'Third Prize · Team Sustainability Award',
    facts: [
      { label: 'Role', value: 'Programmer' },
      { label: 'Awards', value: 'Third Prize · Team Sustainability Award' },
    ],
    lead: 'On my FIRST Robotics team I wrote the robot’s code and helped build it.',
    sections: [
      {
        heading: 'My role',
        bullets: [
          'Responsible for programming the robot.',
          'Took part in component machining and assembly.',
          'Competed with the team at several events, winning a Third Prize and the Team Sustainability Award.',
        ],
      },
    ],
  },
  {
    slug: 'buddhist-temple',
    kind: 'activity',
    accent: 'amber',
    icon: 'lotus',
    tag: 'Reflection',
    title: 'Buddhist Temple Residency',
    role: 'Resident & Volunteer Mentor',
    summary:
      'Lived in a Buddhist temple for two months studying meditation, philosophy and contemplative practice, then returned as a long-term volunteer mentoring younger participants.',
    facts: [
      { label: 'Role', value: 'Resident, then volunteer mentor' },
      { label: 'Residency', value: 'Two months' },
    ],
    lead:
      'I spent two months living in a Buddhist temple, following its daily rhythm — and kept going back.',
    sections: [
      {
        heading: 'Living there',
        paragraphs: [
          'I followed the temple’s daily rituals while studying meditation, Buddhist philosophy and contemplative practice.',
        ],
      },
      {
        heading: 'Going back',
        paragraphs: [
          'I returned as a long-term volunteer and peer mentor, supporting younger participants. The experience deepened my interest in religion, consciousness and the role of spiritual practice in wellbeing — and later led to the meditation club.',
        ],
      },
    ],
  },
  {
    slug: 'viola',
    kind: 'activity',
    accent: 'pink',
    icon: 'music',
    tag: 'Arts',
    title: 'The Cat and the Viola',
    role: 'Violist & violinist · since age 5',
    summary:
      'Began as rehabilitation for cerebral-palsy-related fine-motor impairment; grew into public performance, youth competitions and ABRSM Grade 8 with Distinction — and later into research on music and attention.',
    highlight: 'ABRSM Viola Grade 8 · Distinction',
    cardImage: { src: violaSoloBlack, alt: 'Zimo performing a viola solo in concert dress' },
    hero: { src: violaPortrait, alt: 'Zimo playing the viola on stage', caption: 'Seitz, Concerto No. 5 — viola solo, June 2025.' },
    facts: [
      { label: 'Instruments', value: 'Viola · Violin' },
      { label: 'Started', value: 'Age 5' },
      { label: 'Qualification', value: 'ABRSM Viola Grade 8, Distinction' },
      { label: 'Recent repertoire', value: 'Seitz, Concerto No. 5, 1st mvt.' },
    ],
    lead:
      'Because of cerebral palsy, when I left the rehabilitation centre at five my doctor recommended the viola to strengthen my fingers. It became the longest thread in my life.',
    sections: [
      {
        heading: 'The viola',
        paragraphs: [
          'The viola healed and trained me, but it also brought the pain of being forced to practise — especially during the darkest days of my resistance.',
        ],
      },
      {
        heading: 'The cat',
        paragraphs: [
          'It was then that I adopted my first cat, Fantuan. He stayed by my side throughout the days I turned my back on the world. His quiet companionship, asking nothing of me, was what truly healed me.',
        ],
      },
      {
        heading: 'Today',
        paragraphs: [
          'I love both my viola and my life with Fantuan. They have given me unwavering strength and the courage to embrace who I am. Music grew from therapy into performance, youth competitions and ABRSM Grade 8 with Distinction — and became the starting point for my research on music and attention.',
        ],
      },
    ],
    figures: [
      { src: childhoodWhiteShirt, alt: 'Zimo as a young child playing the violin', caption: 'One of my first performances' },
      { src: childhoodPractice, alt: 'Young Zimo practising the violin in a classroom', caption: 'Early practice' },
      { src: childhoodCloseup, alt: 'Close-up of young Zimo holding a violin', caption: 'Learning to hold the instrument' },
      { src: childhoodRecital, alt: 'Young Zimo performing at a recital', caption: 'Childhood recital' },
      { src: childhoodTeacher, alt: 'Young Zimo with a violin teacher', caption: 'With my teacher' },
      { src: violaSoloBlack, alt: 'Zimo performing a viola solo in concert dress', caption: 'Concert solo' },
      { src: zimoFantuan, alt: 'Zimo studying with Fantuan the cat on the desk', caption: 'Fantuan, my study partner' },
      { src: fantuan, alt: 'Fantuan, a long-haired white cat', caption: 'Fantuan' },
    ],
    videos: [
      { src: '/media/seitz-concerto-viola.mp4', poster: posterSeitz, title: 'Seitz, Concerto No. 5 — viola solo (2025)' },
      { src: '/media/childhood-recital.mp4', poster: posterRecital, title: 'Childhood ensemble recital' },
      { src: '/media/viola-practice.mp4', poster: posterPractice, title: 'Practising in the library', portrait: true },
      { src: '/media/childhood-lesson.mp4', poster: posterLesson, title: 'An early lesson', portrait: true },
      { src: '/media/fantuan-play.mp4', poster: posterPlay, title: 'Playtime with Fantuan', portrait: true },
      { src: '/media/fantuan-stairs.mp4', poster: posterStairs, title: 'Fantuan on the stairs', portrait: true },
      { src: '/media/fantuan-vase.mp4', poster: posterVase, title: 'Fantuan exploring', portrait: true },
    ],
  },
];

export const researchProjects = projects.filter((p) => p.kind === 'research');
export const activityProjects = projects.filter((p) => p.kind === 'activity');
export const projectHref = (p: Project) => `/projects/${p.slug}/`;
