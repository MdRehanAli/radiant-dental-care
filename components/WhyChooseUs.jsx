export default function WhyChooseUs() {
  const cards = [
    {
      icon: 'school',
      title: 'Elite Expertise',
      description: 'Our clinical team brings decades of combined experience from the world\'s leading dental institutions.',
      action: 'Learn more',
      bgColor: 'bg-surface-container-lowest',
      iconBg: 'bg-primary-container',
      iconColor: 'text-on-primary',
    },
    {
      icon: 'biotech',
      title: 'Advanced Tech',
      description: 'From 3D imaging to laser dentistry, we use the most advanced tools for painless, precise results.',
      action: 'View equipment',
      bgColor: 'bg-surface-container',
      iconBg: 'bg-secondary',
      iconColor: 'text-on-secondary',
    },
    {
      icon: 'spa',
      title: 'Pure Comfort',
      description: 'Heated massage chairs, noise-canceling headphones, and aromatherapy ensure a spa-like visit.',
      action: 'Our amenities',
      bgColor: 'bg-surface-container-lowest',
      iconBg: 'bg-tertiary',
      iconColor: 'text-on-tertiary',
    },
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-tertiary font-label text-sm font-bold tracking-[0.2em] uppercase block mb-4">
            The Radiant Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface tracking-tight">
            Why Choose Our Practice?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-10 rounded-[2rem] flex flex-col justify-between hover:bg-primary-fixed transition-all duration-500 border border-outline-variant/10 shadow-sm`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-8`}>
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-2xl font-headline font-extrabold mb-4">{card.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{card.description}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                {card.action}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
