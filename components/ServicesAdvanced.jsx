export default function ServicesAdvanced() {
  return (
    <section className="mt-32 max-w-7xl mx-auto px-8">
      <div className="bg-surface-container-low rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="font-headline text-3xl font-bold mb-6 text-on-surface">
            Advanced Technology for Patient Comfort
          </h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed text-lg">
            We utilize the latest in dental innovation to ensure your visits are shorter, safer, and completely pain-free.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold">
              <span className="material-symbols-outlined text-sm mr-2">verified_user</span>
              Painless Tech
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold">
              <span className="material-symbols-outlined text-sm mr-2">health_and_safety</span>
              Insurance Accepted
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold">
              <span className="material-symbols-outlined text-sm mr-2">schedule</span>
              Same-day Emergency
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden relative shadow-2xl">
          <img
            alt="Modern Dental Equipment"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-fGITwH1kixmYnSk9Qkd5RDmQhnTswSWvpPEekDJjfAe9Q_w2h7VH66EikmC2tU5vxCp-Fti_bOnippMKN3xSt5c0_v7Tc0maUfvWObG4g24LV83wbMPoTg0noI-FNcCUYQXjmJx_Jkl2DBKJzigc42J2CoRzH3WBwV-SM0FfIA17SScSGlExBK2pRZAsSHfrbsziDgpGNjAS1Hce-rWWHDbSAhmYapPXqyhsaqeToplSqkaGrINxhs7udrKxUZRDh8gw1Kzl1dY"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  )
}
