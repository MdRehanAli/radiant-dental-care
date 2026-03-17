export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="hero-gradient rounded-[3rem] p-12 md:p-20 text-center text-on-primary shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight">
              Ready for a brighter, healthier smile?
            </h2>
            <p className="text-xl text-primary-fixed/80 leading-relaxed">
              Join our patient community and experience the highest standard of dental care in a space designed for your comfort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="bg-surface-container-lowest text-primary px-10 py-5 rounded-xl font-bold hover:scale-105 transition-all text-lg shadow-lg">
                Book Your Appointment
              </button>
              <button className="bg-primary/20 backdrop-blur-md border border-on-primary/20 text-on-primary px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all text-lg">
                Call Us Now
              </button>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
