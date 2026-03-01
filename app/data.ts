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
}

type JudgingOpportunity = {
  event: string
  role: string
  date: string
  organization: string
  link: string
  id: string
}

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
  },
  {
    company: 'Fulloop AI',
    title: 'Founder & CEO',
    start: 'Feb 2024',
    end: 'Present',
    link: 'https://fulloop.ai',
    id: 'work2',
  },
  {
    company: 'Uber',
    title: 'Engineering Manager, Eats Growth',
    start: 'Feb 2023',
    end: 'Nov 2023',
    link: 'https://uber.com',
    id: 'work3',
  },
  {
    company: 'Snap Inc.',
    title: 'Staff Engineer',
    start: 'Mar 2019',
    end: 'Dec 2022',
    link: 'https://snap.com',
    id: 'work4',
  },
  {
    company: 'Meta (Facebook)',
    title: 'Software Engineer',
    start: 'Feb 2017',
    end: 'Mar 2019',
    link: 'https://meta.com',
    id: 'work5',
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
    title: 'Building Scalable AI Agent Systems',
    event: 'AI Summit 2024',
    date: 'June 2024',
    location: 'San Francisco, CA',
    link: '#',
    id: 'speak-1',
  },
  {
    title: 'The Future of Technical Interviews',
    event: 'DevOps Conference',
    date: 'April 2024',
    location: 'New York, NY',
    link: '#',
    id: 'speak-2',
  },
]

export const JUDGING_OPPORTUNITIES: JudgingOpportunity[] = [
  {
    event: 'Y Combinator Demo Day',
    role: 'Technical Judge',
    date: 'Fall 2024',
    organization: 'Y Combinator',
    link: '#',
    id: 'judge-1',
  },
  {
    event: 'TechCrunch Disrupt Hackathon',
    role: 'AI/ML Track Judge',
    date: 'September 2024',
    organization: 'TechCrunch',
    link: '#',
    id: 'judge-2',
  },
]

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
