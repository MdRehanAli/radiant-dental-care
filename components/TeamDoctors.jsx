export default function TeamDoctors() {
  const doctors = [
    {
      name: 'Dr. Sarah Radiant',
      title: 'Principal Dentist & Cosmetic Specialist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6bs6iVO0KVMzFjx5Y3zEb_Y8JT7FhTGKc3jFf3cjfNk7r5l651bcZDu54hDXkHjLLLQ54cROSnuSoGFj3wiS1qeGEtA21pH2HtmluRYQRIiaco2ljJPvFNRbrAi5gR8hrHjCAhmcLYnbFyRwL3ZHMeZtWcBMvLojcbRSxcnUEZf56UiGxXbXQV-Q36zhkPQAiOa97hPFegNUV9tc29QVF7gDSUN9lNN9f_EbwzC7QUsNloAUY-viJFwZeUGjsMt8rx5VgG4bY2ZE',
      badge: 'FOUNDING PARTNER',
      bio: 'With over 15 years of experience in restorative dentistry, Dr. Radiant founded this practice on the principle that clinical precision should never come at the cost of patient comfort.',
      specialization: 'A graduate of the International Academy of Aesthetics, she specializes in "Micro-Smiles" a minimally invasive approach to porcelain veneers that preserves natural tooth structure while achieving brilliant results.',
      credentials: ['Board Certified', 'Pain-Free Specialist'],
      credentialIcons: ['verified', 'spa'],
      reverse: false,
    },
    {
      name: 'Dr. Michael Alpine',
      title: 'Associate Dentist & Oral Surgeon',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKrSQezVQRMyoWbYLAn3M-qRMFNz8BpqFOyr4SUItxij21b8RbBKnz3f4rkdWoxTa2MAD7NtneeTS6fFg3DzBjHPQU8OzDg691SBwyt2cLpaXGNv00XH9E5xBM9v52xdDtNTw_p8Jrj8RR34QMiirI4RGPb7tlE1FjZU1ErXNT8Hn9G6mw5AvdAhEt69UmDZcO-22rEYIWbk2nPcDNJFQ9aibd5NZxtA3g8tW_r4IucQ6Ulekbkq0QVLjjfLv7tK1T-R__BKnnl3E',
      badge: 'ASSOCIATE PARTNER',
      bio: 'Dr. Alpine brings a surgical precision to the team, specializing in dental implants and complex extractions. His patient-centric philosophy focuses on clarity, ensuring every patient understands the "why" behind their care.',
      specialization: 'He is known for his calming chaired manner, making even the most complex procedures feel routine and manageable. Dr. Alpine is a leading advocate for the use of digital guided surgery to reduce recovery times.',
      credentials: ['Implant Master', 'Patient Education'],
      credentialIcons: ['biotech', 'psychology'],
      reverse: true,
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-8 space-y-32 mb-32">
      {doctors.map((doctor, index) => (
        <div
          key={index}
          className={`flex flex-col ${doctor.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 md:gap-24`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <div
              className={`absolute ${
                doctor.reverse ? '-bottom-6 -right-6' : '-top-6 -left-6'
              } w-full h-full ${
                doctor.reverse ? 'bg-secondary' : 'bg-primary'
              } rounded-xl -z-10`}
            ></div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img
                alt={doctor.name}
                className="w-full h-full object-cover"
                src={doctor.image}
              />
            </div>
            <div
              className={`absolute ${
                doctor.reverse ? 'bottom-6 -left-6' : 'bottom-6 -right-6'
              } bg-secondary-container px-6 py-4 rounded-full shadow-lg`}
            >
              <span className="text-on-secondary-container font-label font-bold text-sm">
                {doctor.badge}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="font-headline text-4xl font-bold mb-2">{doctor.name}</h2>
            <p className="text-primary font-semibold text-xl mb-6 font-headline">
              {doctor.title}
            </p>
            <div className="space-y-6 text-on-surface-variant text-lg">
              <p>{doctor.bio}</p>
              <p>{doctor.specialization}</p>
              <div className="flex items-center gap-4 pt-4">
                {doctor.credentials.map((cred, credIndex) => (
                  <span
                    key={credIndex}
                    className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15 text-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-sm">
                      {doctor.credentialIcons[credIndex]}
                    </span>
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
