'use client'

import { motion } from 'motion/react'
import { BLOG_POSTS } from '@/app/data'
import { CalendarIcon, ArrowRightIcon } from 'lucide-react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}


export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={VARIANTS_CONTAINER}
      >
        {/* Page Header */}
        <motion.div variants={VARIANTS_ITEM} className="space-y-2 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-zinc-500 dark:text-zinc-400">
            Thoughts on AI agents, platform engineering, and building intelligent systems
          </p>
        </motion.div>

        {/* Blog Posts Grid - 2 columns */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2"
          variants={VARIANTS_CONTAINER}
        >
          {BLOG_POSTS.map((post) => (
            <motion.article
              key={post.uid}
              className="group relative overflow-hidden rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow"
              variants={VARIANTS_ITEM}
            >
              {/* Date */}
              <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <CalendarIcon className="h-4 w-4" />
                <time>{post.date}</time>
              </div>
              
              {/* Title */}
              <h2 className="mb-3 text-xl font-bold leading-7 tracking-tight">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </a>
              </h2>
              
              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Description */}
              <p className="mb-4 text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {post.description}
              </p>
              
              {/* Read more link */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Read on Substack
                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={VARIANTS_ITEM}
          className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-8"
        >
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Stay updated
            </h3>
            <p className="text-center text-zinc-600 dark:text-zinc-400">
              Subscribe to get notified when I publish new articles about AI and engineering
            </p>
            <a
              href="https://substack.com/@pfofadiya/posts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Subscribe on Substack
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}