// All site copy lives here. Edit this file to update the portfolio content.
import type { ImageMetadata } from 'astro';

import avatar from '../assets/img/avatar.jpg';
import aboutViola from '../assets/img/about-viola.jpg';
import violaPortrait from '../assets/img/viola-portrait.jpg';
import campusWalk from '../assets/img/campus-walk.jpg';
import cyclingSunset from '../assets/img/cycling-sunset.jpg';
import ltHeadband from '../assets/img/learntune-headband.jpg';
import helmetFinal from '../assets/img/helmet-final.jpg';
import helmetAssembly from '../assets/img/helmet-assembly.jpg';
import meditationBowls from '../assets/img/meditation-bowls.jpg';
import fantuan from '../assets/img/fantuan.jpg';
import zimoFantuan from '../assets/img/zimo-fantuan.jpg';
import performancePoster from '../assets/img/performance-poster.jpg';
import childhoodWhiteShirt from '../assets/img/childhood-white-shirt.jpg';
import posterStairs from '../assets/img/poster-fantuan-stairs.jpg';
import posterPractice from '../assets/img/poster-viola-practice.jpg';
import posterChamber from '../assets/img/poster-chamber-rehearsal.jpg';
import posterLearntune from '../assets/img/poster-learntune-experiment.jpg';

export type Accent = 'cyan' | 'violet' | 'pink' | 'amber' | 'green';
export type IconName =
  | 'wave' | 'helmet' | 'globe' | 'book' | 'scale' | 'pen' | 'atom' | 'sigma'
  | 'flask' | 'code' | 'chart' | 'leaf' | 'brain' | 'landmark' | 'trophy'
  | 'medal' | 'music' | 'robot' | 'bulb' | 'grad' | 'heart' | 'cat' | 'lotus'
  | 'users' | 'planet';

export interface Figure { src: ImageMetadata; alt: string; caption?: string }
export interface Clip { src: string; poster: ImageMetadata; title: string }

export const profile = {
  name: 'Zimo (Ethan) Fan',
  firstName: 'Zimo',
  lastName: 'Fan',
  school: 'Suzhou North America High School',
  schoolShort: 'SNA',
  location: 'Suzhou, China',
  classOf: '2027',
  email: 'zimofan_ethan@126.com',
  avatar,
  intro:
    'Student researcher and maker exploring how the brain pays attention — through EEG experiments, wearable hardware, psychology research, and the viola I have played since I was five.',
  description:
    'Portfolio of Zimo (Ethan) Fan — student researcher at Suzhou North America High School working across neuroscience, psychology, engineering and music.',
};

// Shown right under the hero, so the work is visible on the first screen.
export const highlights: (Figure & { href: string })[] = [
  { src: ltHeadband, alt: 'The custom EEG headband', caption: 'LearnTune — custom EEG headband', href: '/projects/learntune/' },
  { src: helmetFinal, alt: 'The finished helmet prototype with a heads-up display', caption: 'Heads-up display helmet prototype', href: '/projects/smart-helmet/' },
  { src: violaPortrait, alt: 'Zimo playing the viola on stage', caption: 'Seitz Concerto No. 5 — viola solo', href: '/projects/viola/' },
];

export const about = {
  image: aboutViola,
  imageAlt: 'Zimo playing the viola on stage',
  heading: ['Steady Hands,', 'Curious Mind'],
  paragraphs: [
    'I started the viola at five, on a doctor’s advice, to strengthen fingers affected by cerebral palsy. The instrument trained me — and, in the years I resisted it, my cat Fantuan kept me company without asking anything of me. Both taught me how much the body, the mind and the things around us shape one another.',
    'That question now runs through everything I do: building a closed-loop EEG system that adapts music to attention, designing a heads-up helmet to help delivery riders keep their eyes on the road, researching animal-assisted therapy across cultures, creating quiet spaces for classmates under pressure, supporting teenagers who have stepped away from school, and learning to listen inside an ensemble.',
  ],
  early: { src: childhoodWhiteShirt, alt: 'Zimo as a young child playing a small violin', caption: 'Where it started — prescribed, not chosen.' } as Figure,
  // Shown right under the first paragraph, which introduces Fantuan.
  clips: [
    { src: '/media/fantuan-stairs.mp4', poster: posterStairs, title: 'Fantuan on the stairs' },
    { src: '/media/viola-practice.mp4', poster: posterPractice, title: 'Practising the viola' },
  ] as Clip[],
  clipsNote: 'No expectations — just presence.',
  facts: [
    { label: 'School', value: 'Suzhou North America High School' },
    { label: 'Graduation', value: 'June 2027' },
    { label: 'Interests', value: 'Neuroscience · Psychology · Engineering' },
  ],
};

export const academics = {
  summary:
    'A STEM-heavy course load alongside psychology and research — attending SNA on a full-ride merit scholarship from Grade 9 through Grade 12.',
  scholarship: {
    title: 'Full-Ride Merit Scholarship',
    detail: 'Suzhou North America High School · Grade 9 to Grade 12',
  },
  ap: [
    { course: 'Calculus BC', score: 5, icon: 'sigma', area: 'Mathematics' },
    { course: 'Calculus AB', score: 5, icon: 'sigma', area: 'Mathematics' },
    { course: 'Statistics', score: 5, icon: 'chart', area: 'Mathematics' },
    { course: 'Physics C: Mechanics', score: 5, icon: 'atom', area: 'Science' },
    { course: 'Physics C: Electricity & Magnetism', score: 5, icon: 'atom', area: 'Science' },
    { course: 'Chemistry', score: 5, icon: 'flask', area: 'Science' },
    { course: 'Computer Science A', score: 5, icon: 'code', area: 'Computing' },
    { course: 'English Language & Composition', score: 5, icon: 'pen', area: 'Humanities' },
    { course: 'Research', score: 5, icon: 'book', area: 'Capstone' },
    { course: 'Biology', score: 4, icon: 'leaf', area: 'Science' },
    { course: 'Psychology', score: 4, icon: 'brain', area: 'Social Science' },
    { course: 'United States History', score: 4, icon: 'landmark', area: 'Humanities' },
  ] satisfies { course: string; score: number; icon: IconName; area: string }[],
};

export const gallery: (Figure & { tall?: boolean })[] = [
  { src: violaPortrait, alt: 'Zimo playing the viola on stage', caption: 'Seitz Concerto No. 5 — on stage', tall: true },
  { src: helmetAssembly, alt: 'Fitting the circuit board inside the helmet', caption: 'Fitting the helmet electronics' },
  { src: ltHeadband, alt: 'The custom EEG headband', caption: 'LearnTune headband' },
  { src: posterLearntune, alt: 'A participant wearing the EEG headband during an experiment session', caption: 'LearnTune experiment session' },
  { src: cyclingSunset, alt: 'Zimo cycling along a coastal road at sunset', caption: 'Evening ride', tall: true },
  { src: zimoFantuan, alt: 'Zimo studying with Fantuan the cat on the desk', caption: 'Study partner' },
  { src: meditationBowls, alt: 'Singing bowls for a meditation session', caption: 'Meditation club sound bath' },
  { src: campusWalk, alt: 'Zimo walking along a snowy campus path at dusk', caption: 'Winter walk', tall: true },
  { src: fantuan, alt: 'Fantuan, a long-haired white cat, sitting on a stack of books', caption: 'Fantuan' },
  { src: helmetFinal, alt: 'The finished helmet prototype', caption: 'Helmet HUD prototype' },
];

export const performance = {
  title: 'Featured Performance',
  subtitle: 'Friedrich Seitz — Concerto No. 5, 1st movement · Viola solo · SNA Chamber Music & Choir Concert · June 2025',
  video: '/media/seitz-concerto-viola.mp4',
  poster: performancePoster,
};

export const ensembleClip: Clip = {
  src: '/media/chamber-rehearsal.mp4',
  poster: posterChamber,
  title: 'Rehearsal clip — five players, one score. Learning to listen instead of lead.',
};

export const awards = [
  { icon: 'grad' as IconName, title: 'Pioneer Research Program — Grade A', org: 'Pioneer Academics · credit awarded by Oberlin College', year: '2026', body: 'Paper independently reviewed by Oberlin faculty; rated “Excellent” in originality, communication, synthesis and curiosity.' },
  { icon: 'atom' as IconName, title: 'Physics Bowl — National Silver Award', org: 'American Association of Physics Teachers', year: '2025', body: 'National silver recognition in the AAPT high-school physics competition.' },
  { icon: 'sigma' as IconName, title: 'AMC 10 — AIME Qualifier', org: 'Mathematical Association of America', year: '2025', body: 'Scored 111, qualifying for the American Invitational Mathematics Examination.' },
  { icon: 'music' as IconName, title: 'ABRSM Viola Grade 8 — Distinction', org: 'Associated Board of the Royal Schools of Music', year: '', body: 'Highest graded level, awarded with Distinction.' },
  { icon: 'robot' as IconName, title: 'FIRST Robotics — Third Prize', org: 'FIRST Robotics Competition', year: '', body: 'Third Prize and the Team Sustainability Award as team programmer.' },
  { icon: 'bulb' as IconName, title: 'Invention Patent Application — Smart Helmet HUD', org: 'Application filed · pending examination', year: '', body: 'Filed for the heads-up display helmet described under Research & Engineering.' },
];

export const nav = [
  { href: '/#about', label: 'About' },
  { href: '/#research', label: 'Research' },
  { href: '/#academics', label: 'Academics' },
  { href: '/#activities', label: 'Activities' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#awards', label: 'Awards' },
];
