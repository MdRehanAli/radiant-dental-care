export default function BookAppointmentHero() {
  return (
    <div className="max-w-7xl mx-auto px-8 mb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-container p-12 md:p-20 text-on-primary">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-medium text-sm mb-6 uppercase tracking-wider">
            Book Appointment
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Schedule Your Visit Today
          </h1>
          <p className="text-xl text-on-primary leading-relaxed">
            Take the first step towards a healthier, brighter smile. Our expert team is ready to provide you with exceptional care in a serene environment.
          </p>
        </div>
        {/* Decorative overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none ">
          {/* Calendar icon decoration */}
          <div className="absolute top-10 right-10 text-primary/20 scale-[3]">
            <span className="material-symbols-outlined" style={{ fontSize: '120px' }}>calendar_month</span>
          </div>
          {/* Clock icon decoration */}
          <div className="absolute bottom-10 -right-5 text-primary/15 scale-[2.5]">
            <span className="material-symbols-outlined" style={{ fontSize: '120px' }}>schedule</span>
          </div>
        </div>
      </div>
    </div>
  )
}