import Head from 'next/head'
import Header from '@/components/Header'
import BookAppointmentHero from '@/components/BookAppointmentHero'
import BookAppointmentForm from '@/components/BookAppointmentForm'
import Footer from '@/components/Footer'

export default function BookAppointment() {
  return (
    <>
      <Head>
        <title>Book Appointment | Radiant Dental Care</title>
        <meta name="description" content="Schedule your dental appointment with Radiant Dental Care. Choose your service, doctor, and preferred time for exceptional care." />
      </Head>

      <Header />

      <main className="pt-24 pb-20">
        <BookAppointmentHero />
        <BookAppointmentForm />
      </main>

      <Footer />
    </>
  )
}