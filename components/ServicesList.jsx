export default function ServicesList() {
  const services = [
    {
      icon: 'cleaning_services',
      title: 'General Dentistry',
      description: 'Comprehensive oral care including professional cleanings and high-precision fillings to maintain your health.',
      link: 'Learn More',
      bgColor: 'bg-secondary-container',
      bgHover: 'group-hover:bg-background',
    },
    {
      icon: 'auto_fix_high',
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with advanced teeth whitening and custom-crafted veneers for a radiant appearance.',
      link: 'Learn More',
      bgColor: 'bg-secondary-container',
      bgHover: 'group-hover:bg-background',
    },
    {
      icon: 'rebase_edit',
      title: 'Restorative Dentistry',
      description: 'Durable implants and restorative crowns designed to return full function and aesthetics to your teeth.',
      link: 'Learn More',
      bgColor: 'bg-secondary-container',
      bgHover: 'group-hover:bg-background',
    },
    {
      icon: 'grid_view',
      title: 'Orthodontics',
      description: 'Specialized alignment solutions including Invisalign clear aligners and traditional braces for all ages.',
      link: 'Learn More',
      bgColor: 'bg-secondary-container',
      bgHover: 'group-hover:bg-background',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-background p-8 rounded-xl transition-all duration-300 hover:bg-primary hover:-translate-y-2"
          >
            <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center text-on-secondary-container mb-6 ${service.bgHover}`}>
              <span className="material-symbols-outlined text-2xl">{service.icon}</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">
              {service.title}
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 group-hover:text-on-primary">
              {service.description}
            </p>
            <a className="inline-flex items-center text-primary font-semibold group-hover:text-on-primary hover:underline transition-all" href="#">
              {service.link}
              <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
