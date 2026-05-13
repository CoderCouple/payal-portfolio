import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JUDGING_DATA } from '../judging-data'
import { JudgingDetail } from './judging-detail'

const SITE_URL = 'https://fofadiyapayal.com'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return JUDGING_DATA.map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const judging = JUDGING_DATA.find((j) => j.slug === slug)

  if (!judging) {
    return {
      title: 'Judging Event Not Found',
      robots: { index: false, follow: false },
    }
  }

  const title = `${judging.role} — ${judging.event}`
  const description = `${judging.description} Judging at ${judging.event} on ${judging.date} in ${judging.location}.`
  const url = `${SITE_URL}/judging/${judging.slug}`
  const ogImage = judging.image ? `${SITE_URL}${judging.image}` : `${SITE_URL}/opengraph-image`

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      'Payal Fofadiya',
      'AI judge',
      judging.event,
      judging.organization,
      judging.role,
      'startup judge',
      'hackathon judge',
      'AI competition judge',
      'tech advisor',
    ],
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      siteName: 'Payal Fofadiya',
      images: [{ url: ogImage, alt: `${judging.role} at ${judging.event}` }],
      locale: 'en_US',
      authors: ['Payal Fofadiya'],
      publishedTime: judging.date,
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

export default async function JudgingDetailPage({ params }: PageProps) {
  const { slug } = await params
  const judging = JUDGING_DATA.find((j) => j.slug === slug)

  if (!judging) {
    notFound()
  }

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: judging.event,
    description: judging.description,
    startDate: judging.date,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: judging.location,
      address: judging.location,
    },
    organizer: {
      '@type': 'Organization',
      name: judging.organization,
      description: judging.organizationDescription,
    },
    performer: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Payal Fofadiya',
      url: SITE_URL,
      jobTitle: judging.role,
    },
    url: `${SITE_URL}/judging/${judging.slug}`,
    image: judging.image ? `${SITE_URL}${judging.image}` : undefined,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <JudgingDetail judging={judging} />
    </>
  )
}
