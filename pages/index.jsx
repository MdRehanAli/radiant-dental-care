import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Radiant Dental Care | Clinical Serenity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Experience exceptional dental care in a serene and modern environment designed for your absolute peace of mind." />
      </Head>

      <Header />
      
      <main className="pt-20">
        <Hero />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </>
  )
}
