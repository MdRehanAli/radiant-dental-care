import Head from 'next/head'
import Header from '@/components/Header'
import ServicesHero from '@/components/ServicesHero'
import ServicesList from '@/components/ServicesList'
import ServicesAdvanced from '@/components/ServicesAdvanced'
import ServicesCTA from '@/components/ServicesCTA'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Radiant Dental Care(RDC)</title>
        <meta name="description" content="Comprehensive dental services from general dentistry to cosmetic treatments - all in a serene environment." />
      </Head>

      <Header />

      <main className="pt-24 pb-24">
        <ServicesHero />
        <ServicesList />
        <ServicesAdvanced />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  )
}
