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
    title: 'Designing Hierarchical Memory Systems for AI Agents',
    description: 'Deep dive into architecting memory systems that enable AI agents to learn, adapt, and retain knowledge across conversations and tasks',
    link: 'https://pfofadiya.substack.com/p/designing-hierarchical-memory-systems',
    uid: 'blog-1',
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
    title: 'The Rise of AI Agent Platforms in Enterprise',
    publication: 'TechCrunch',
    date: 'March 2024',
    link: '#',
    id: 'media-1',
  },
  {
    title: 'From Engineering to Entrepreneurship: Building in the AI Era',
    publication: 'Forbes',
    date: 'January 2024',
    link: '#',
    id: 'media-2',
  },
]

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    title: 'Leadership in AI-First Era',
    event: 'QonfX San Francisco 2025',
    date: 'March 20, 2026',
    location: 'San Francisco, CA',
    link: 'https://luma.com/qonfx-sf',
    id: 'speak-3',
    slug: 'qonfx-sf-2025',
    description: 'Expert panel discussion on leadership strategies and challenges in the AI-first era, exploring how leaders can navigate the transformation of organizations, teams, and processes in an AI-driven world.',
    topics: ['AI Leadership', 'Digital Transformation', 'Organizational Change', 'AI Strategy', 'Future of Work'],
    audience: 'Engineering Leaders, QA Directors, CTOs, VP Engineering',
    organizer: 'The Test Tribe',
    organizerDescription: 'The world\'s largest Software Testing/QA community with members in 120+ countries and 44 global chapters, dedicated to advancing quality engineering practices.',
    conferenceDescription: 'QonfX is an exclusive, invite-only conference that brings together top Engineering, QA, and Business Leaders to discuss the present and future of software testing and quality assurance.',
    image: '/speaking-qonfx-sf-2025.jpg',
    slidesUrl: 'https://drive.google.com/file/d/1TdNkgpvzBiJLNiHmUZ4sIiEGFnM9oGKJ/view',
    agendaUrl: 'https://drive.google.com/file/d/1IZWTJotw46cGYSwChoWttTFgZdCwjyS1/view',
    eventUrl: 'https://luma.com/qonfx-sf',
    images: [
      {
        src: '/speaking-qonfx-sf-2025-1.jpg',
        alt: 'Payal speaking at QonfX San Francisco panel discussion',
        caption: 'Leadership in AI-First Era panel discussion at QonfX SF 2025'
      },
      {
        src: '/speaking-qonfx-sf-2025-2.jpg',
        alt: 'QonfX San Francisco conference venue and audience',
        caption: 'QonfX San Francisco exclusive conference venue'
      },
      {
        src: '/speaking-qonfx-sf-2025-3.jpg',
        alt: 'Expert panel with industry leaders at QonfX',
        caption: 'Expert panel featuring top QA and Engineering leaders'
      }
    ]
  },
  {
    title: 'AI Agents in Enterprise: From POC to Production Scale',
    event: 'TechEx North America - AI & Big Data Expo',
    date: 'June 4-5, 2025',
    location: 'Santa Clara, CA',
    link: '/speaking/techex-north-america-2025',
    id: 'speak-4',
    slug: 'techex-north-america-2025',
    description: 'Comprehensive session on scaling AI agent systems in enterprise environments, covering architecture patterns, deployment strategies, and lessons learned from production implementations.',
    topics: ['AI Agents', 'Enterprise Scale', 'Production Deployment', 'Big Data', 'ML Operations'],
    audience: 'AI Engineers, Data Scientists, Enterprise Architects, CTOs',
    organizer: 'TechEx Events',
    organizerDescription: 'Leading technology conference organizer bringing together 8,000+ innovators, 250+ speakers and 200+ exhibitors across seven co-located events focused on emerging technologies.',
    conferenceDescription: 'TechEx North America is the premier technology event in Silicon Valley, featuring AI & Big Data, Cyber Security & Cloud, IoT, Digital Transformation, Edge Computing, Intelligent Automation and Data Center technologies.',
    image: '/speaking-techex-na-2025.jpg',
    slidesUrl: 'https://drive.google.com/file/d/1IZWTJotw46cGYSwChoWttTFgZdCwjyS1/view',
    agendaUrl: 'https://techexevent.com/northamerica/',
  },
]

export const JUDGING_OPPORTUNITIES: JudgingOpportunity[] = JUDGING_DATA

export const BOOKS: Book[] = [
  {
    title: 'AI Agents in Production: A Practical Guide',
    publisher: 'O\'Reilly Media',
    date: 'Coming 2025',
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
