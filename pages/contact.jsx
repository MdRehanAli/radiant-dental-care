import Head from 'next/head'
import Header from '@/components/Header'
import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import ContactForm from '@/components/ContactForm'
import ContactMap from '@/components/ContactMap'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Radiant Dental Care</title>
        <meta name="description" content="Get in touch with Radiant Dental Care. Visit us, call us, or book an appointment online." />
      </Head>

      <Header />

      <main className="pt-24 pb-20">
        <ContactHero />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>

        <ContactMap />
      </main>

      <Footer />
    </>
  )
}
