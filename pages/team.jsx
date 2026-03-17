import Head from 'next/head'
import Header from '@/components/Header'
import TeamHero from '@/components/TeamHero'
import TeamDoctors from '@/components/TeamDoctors'
import TeamStaff from '@/components/TeamStaff'
import Footer from '@/components/Footer'

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team | Radiant Dental Care</title>
        <meta name="description" content="Meet our clinical excellence team - expert dentists and caring professionals dedicated to your dental health." />
      </Head>

      <Header />

      <main className="pt-24 pb-20">
        <TeamHero />
        <TeamDoctors />
        <TeamStaff />
      </main>

      <Footer />
    </>
  )
}
