export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah J.',
      role: 'Client since 2022',
      quote: 'I\'ve always had dental anxiety, but the atmosphere here is so different. It truly feels like a sanctuary. My procedure was completely painless.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrRijBpr5BEy_q6slE4N2Y0fu7z3HcWj_8pGXtlDhlhYgmVILBVxeyp8QheGc5frm-xQqei2JxnLzyWhgocrwCOVQBC21-5qpW3K_GDbSQdkNXGiy6FzSe_pnuC7VPHmCbDW_8zYiTYlVXVfWPcoGB3tKUgJwW-Gqgs5fK-aMEHchO1tn8j1TtyYIr-qy7XRNe4j2cI3YEVsyDETY6DKrlaULY88arbrDKveY5PXwlGTEajKi3JdLwky1b1UTaBzp3xPzzY9LPLG4',
    },
    {
      name: 'Michael R.',
      role: 'Client since 2021',
      quote: 'The technology they use is incredible. I saw my 3D crown being designed right in front of me. Fast, efficient, and very high quality.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIfBW-786VSqLruEms1lZAjC-REFzul5vxwPDUXduEsZiQlEMYrB7yzgnZgp6VWbrbS_4V_6QALnEYstJBMEgc4wzfYELDNlthMxCSnQsIQx2FBWTShO7_nXxofgUakNJ2TiR2pNbtuoseuyUc4entoUAgLIyqax8wzeueqdVQIZ46Zw22u4sqKs8HA3kZdssNeXP-tO5m_FwAtFV66aJbS0smrwuIHWXwefuiT7Uw9lZ9dy_kOLtQ4YmQ7Lx37c4_Z0BkcqhaEcc',
    },
    {
      name: 'Elena G.',
      role: 'Client since 2023',
      quote: 'Professionalism at its finest. From the moment you walk in, you\'re treated with such care. Highly recommend for any restorative work.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0VwBeEG4ZqhY8GJsO-GLPuzYQLAbbWucOfZhMiFgE5rHQo9Hfq9vA-RB-ryEFq-7iV9xVCAkw2nT9x6ZMhDTZEzbvVmDUEYCIRjD89oWmSsSkyIrGpmy897ECF5uMlIzWz3hOjV44Q12TSSy06Ilo_iM5i1VnYs-ZvTvxwDgDbSKuFBlkCGmN4bIpIcf7d0qdO3oecH6QgARa_qreoI_8CNvN1EhD6OPT97LJ_iVFVqMpO_jNXnnWyggeqrMJBzWt1ndvMwuLPsM',
    },
  ]

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-tertiary font-label text-sm font-bold tracking-[0.2em] uppercase block mb-4">
              Patient Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight">
              What Patients Say
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline-variant text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline-variant text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-8 rounded-[1.5rem] shadow-sm relative"
            >
              {/* Stars */}
              <div className="flex gap-1 text-tertiary mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-lg italic text-on-surface-variant mb-8">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">{testimonial.name}</p>
                  <p className="text-xs text-on-surface-variant font-label uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
