export default function ServicesCTA() {
  return (
    <section className="mt-32 text-center max-w-3xl mx-auto px-8">
      <h2 className="font-headline text-4xl font-extrabold mb-6">
        Ready to prioritize your smile?
      </h2>
      <p className="text-on-surface-variant mb-10 text-lg">
        Join hundreds of patients who have discovered clinical serenity. Schedule your consultation today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="hero-gradient text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/25">
          Request Appointment
        </button>
        <button className="bg-surface-container text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-on-primary transition-all">
          View Pricing
        </button>
      </div>
    </section>
  )
}
