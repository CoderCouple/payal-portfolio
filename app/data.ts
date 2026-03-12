type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo?: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date: string
  tags: string[]
}

type SocialLink = {
  label: string
  link: string
}

type MediaPublication = {
  title: string
  publication: string
  date: string
  link: string
  id: string
}

type SpeakingEngagement = {
  title: string
  event: string
  date: string
  location: string
  link: string
  id: string
  slug: string
  description: string
  topics: string[]
  audience: string
  organizer: string
  organizerDescription: string
  conferenceDescription: string
  image?: string
  videoUrl?: string
  slidesUrl?: string
  agendaUrl?: string
  eventUrl?: string
  speakerUrl?: string
  eventWebsiteUrl?: string
  images?: {
    src: string
    alt: string
    caption?: string
    type?: 'image' | 'video'
  }[]
}

import { JUDGING_DATA, type JudgingOpportunity } from './judging/judging-data'

type Book = {
  title: string
  publisher: string
  date: string
  description: string
  link: string
  id: string
}

type NewsPublication = {
  title: string
  publication: string
  date: string
  type: 'interview' | 'feature' | 'press-release' | 'article'
  link: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'LinkedIn Agent Platform',
    description:
      'Enterprise LLM platform for long-running AI agents with hosted runtime, skill registry, and memory orchestration.',
    link: 'https://business.linkedin.com/hire/hiring-assistant',
    video: '/LIHA_image.png',
    id: 'project1',
  },
  {
    name: 'Fulloop AI - Revolutionary Interview Platform',
    description: 'AI-powered technical interview platform transforming how companies evaluate talent. Features cheating-resistant assessments, real-world coding environments, structured evaluation rubics, and open-book workflows focused on authentic skill evaluation. Secured eBay as design partner and raised funding.',
    link: 'https://www.fulloop.ai',
    video: '/fulloop_image.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'LinkedIn',
    title: 'Engineering Manager, Agent Platform',
    start: 'Sept 2025',
    end: 'Present',
    link: 'https://linkedin.com',
    id: 'work1',
    logo: '/logos/linkedIn-logo.png',
  },
  {
    company: 'Fulloop AI',
    title: 'Founder & CEO',
    start: 'Feb 2024',
    end: 'Present',
    link: 'https://fulloop.ai',
    id: 'work2',
    logo: '/logos/fulloop-logo.png',
  },
  {
    company: 'Uber',
    title: 'Engineering Manager, Eats Growth',
    start: 'Feb 2023',
    end: 'Nov 2023',
    link: 'https://uber.com',
    id: 'work3',
    logo: '/logos/uber-logo.png',
  },
  {
    company: 'Snap Inc.',
    title: 'Staff Engineer',
    start: 'Mar 2019',
    end: 'Dec 2022',
    link: 'https://snap.com',
    id: 'work4',
    logo: '/logos/snap-logo.png',
  },
  {
    company: 'Meta (Facebook)',
    title: 'Software Engineer',
    start: 'Feb 2017',
    end: 'Mar 2019',
    link: 'https://meta.com',
    id: 'work5',
    logo: '/logos/meta-logo.png',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Developing Adaptive Context Compression',
    description: 'Intelligent context compression techniques for optimizing LLM memory while preserving critical reasoning information',
    link: 'https://pfofadiya.substack.com/p/developing-adaptive-context-compression',
    uid: 'blog-2',
    date: 'December 15, 2024',
    tags: ['AI Agents', 'LLM', 'Memory Optimization'],
  },
  {
    title: 'Designing Hierarchical Memory Systems for AI Agents',
    description: 'Deep dive into architecting memory systems that enable AI agents to learn, adapt, and retain knowledge across conversations and tasks',
    link: 'https://pfofadiya.substack.com/p/designing-hierarchical-memory-systems',
    uid: 'blog-1',
    date: 'December 1, 2024',
    tags: ['AI Agents', 'Architecture', 'Memory Systems'],
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/payalto',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/payalfofadiya',
  },
  {
    label: 'Substack',
    link: 'https://substack.com/@pfofadiya/posts',
  },
]

export const MEDIA_PUBLICATIONS: MediaPublication[] = [
  {
    title: 'Early approaches in computer vision object detection and 3D reconstruction',
    publication: 'IRAJ International Journal',
    date: 'Jan 2014',
    link: 'https://www.iraj.in/journal/journal_file/journal_pdf/12-105-142063760724-28.pdf',
    id: 'media-1',
  },
]

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    title: 'AI in the SDLC: Engineering Workflows in the Age of AI',
    event: 'QonfX San Francisco 2026',
    date: 'March 20, 2026',
    location: 'San Francisco, CA',
    link: 'https://luma.com/qonfx-sf',
    id: 'speak-3',
    slug: 'qonfx-sf-2026',
    description: 'Expert panel exploring how AI systems are evolving from assistive tools to active participants in software development workflows. Discussion covers the transformation from AI-assisted practices to AI-driven execution across the Software Development Lifecycle, including requirements translation, continuous validation, and workflow orchestration.',
    topics: ['AI in SDLC', 'Engineering Workflows', 'Continuous Validation', 'Workflow Orchestration', 'AI-Driven Development', 'Build & Release Pipelines'],
    audience: 'Engineering Leaders, QA Directors, CTOs, VP Engineering',
    organizer: 'The Test Tribe',
    organizerDescription: 'The world\'s largest Software Testing/QA community with members in 120+ countries and 44 global chapters, dedicated to advancing quality engineering practices.',
    conferenceDescription: 'QonfX is an exclusive, invite-only conference that brings together top Engineering, QA, and Business Leaders to discuss the present and future of software testing and quality assurance.',
    image: '/qonfx/qonfx-header.png',
    slidesUrl: 'https://drive.google.com/file/d/1TdNkgpvzBiJLNiHmUZ4sIiEGFnM9oGKJ/view',
    agendaUrl: 'https://drive.google.com/file/d/1IZWTJotw46cGYSwChoWttTFgZdCwjyS1/view',
    eventUrl: 'https://luma.com/qonfx-sf',
    speakerUrl: 'https://www.thetesttribe.com/qonfx/san-francisco/#speakers',
    eventWebsiteUrl: 'https://www.thetesttribe.com/qonfx/san-francisco/'
  },
  {
    title: 'GenAI for Software Development - Beyond the Hype, Into the Code',
    event: 'TechEx North America 2026: AI Developer',
    date: 'May 19, 2026',
    location: 'Santa Clara, CA',
    link: '/speaking/techex-north-america-2026',
    id: 'speak-4',
    slug: 'techex-north-america-2026',
    description: 'Panel discussion moving beyond the AI hype to explore practical applications of Generative AI in software development workflows. Discussion covers real-world implementation challenges, developer productivity impacts, and sustainable integration strategies for AI tools in development teams.',
    topics: ['Generative AI', 'Software Development', 'Developer Productivity', 'AI Tools Integration', 'Development Workflows', 'Practical AI Applications'],
    audience: 'AI Engineers, Data Scientists, Enterprise Architects, CTOs',
    organizer: 'TechEx Events',
    organizerDescription: 'Leading technology conference organizer bringing together 8,000+ innovators, 250+ speakers and 200+ exhibitors across seven co-located events focused on emerging technologies.',
    conferenceDescription: 'TechEx North America is the premier technology event in Silicon Valley, featuring AI & Big Data, Cyber Security & Cloud, IoT, Digital Transformation, Edge Computing, Intelligent Automation and Data Center technologies.',
    image: '/techex/techex-header.png',
    agendaUrl: 'https://techexevent.com/northamerica/',
    speakerUrl: 'https://www.ai-expo.net/northamerica/speaker/payal-fofadiya/',
    eventWebsiteUrl: 'https://techexevent.com/northamerica/',
  },
]

export const JUDGING_OPPORTUNITIES: JudgingOpportunity[] = JUDGING_DATA

export const BOOKS: Book[] = [
  {
    title: 'AI Agents in Production: A Practical Guide',
    publisher: 'O\'Reilly Media',
    date: 'Coming 2026',
    description: 'A comprehensive guide to building and deploying AI agent systems in enterprise environments.',
    link: '#',
    id: 'book-1',
  },
]

export const NEWS_PUBLICATIONS: NewsPublication[] = [
  {
    title: 'LinkedIn Launches Revolutionary AI Agent Platform',
    publication: 'The Information',
    date: 'October 2024',
    type: 'press-release',
    link: '#',
    id: 'news-1',
  },
  {
    title: 'How Fulloop AI is Changing Technical Recruiting',
    publication: 'VentureBeat',
    date: 'August 2024',
    type: 'feature',
    link: '#',
    id: 'news-2',
  },
  {
    title: 'Interview: The Woman Behind AI-Powered Interviews',
    publication: 'Wired',
    date: 'July 2024',
    type: 'interview',
    link: '#',
    id: 'news-3',
  },
]

export const EMAIL = 'fofadiyapayal@gmail.com'
