import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SPEAKING_ENGAGEMENTS } from '../../data'
import { SpeakingDetail } from './speaking-detail'

const SITE_URL = 'https://fofadiyapayal.com'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return SPEAKING_ENGAGEMENTS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const speaking = SPEAKING_ENGAGEMENTS.find((s) => s.slug === slug)

  if (!speaking) {
    return {
      title: 'Talk Not Found',
      robots: { index: false, follow: false },
    }
  }

  const title = `${speaking.title} — ${speaking.event}`
  const description = `${speaking.description.split('\n')[0]} Speaking at ${speaking.event} on ${speaking.date} in ${speaking.location}.`
  const url = `${SITE_URL}/speaking/${speaking.slug}`
  const ogImage = speaking.image ? `${SITE_URL}${speaking.image}` : `${SITE_URL}/opengraph-image`

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      'Payal Fofadiya',
      'AI thought leader',
      speaking.event,
      speaking.organizer,
      ...speaking.topics,
      'AI speaker',
      'tech conference speaker',
      'AI agents speaker',
    ],
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Payal Fofadiya',
      images: [{ url: ogImage, alt: `${speaking.title} at ${speaking.event}` }],
      locale: 'en_US',
      authors: ['Payal Fofadiya'],
      publishedTime: speaking.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@payalfofadiya',
    },
  }
}

export default async function SpeakingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const speaking = SPEAKING_ENGAGEMENTS.find((s) => s.slug === slug)

  if (!speaking) {
    notFound()
  }

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: speaking.event,
    description: speaking.description,
    startDate: speaking.date,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: speaking.location,
      address: speaking.location,
    },
    organizer: {
      '@type': 'Organization',
      name: speaking.organizer,
      description: speaking.organizerDescription,
    },
    performer: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Payal Fofadiya',
      url: SITE_URL,
    },
    url: `${SITE_URL}/speaking/${speaking.slug}`,
    image: speaking.image ? `${SITE_URL}${speaking.image}` : undefined,
    about: speaking.topics,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <SpeakingDetail speaking={speaking} />
    </>
  )
}
