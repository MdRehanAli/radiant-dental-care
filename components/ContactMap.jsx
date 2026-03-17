export default function ContactMap() {
  return (
    <div className="mt-20 px-8 max-w-7xl mx-auto">
      <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-on-surface/4">
        {/* Map placeholder */}
        <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center overflow-hidden">
          <img
            alt="Clinic Location Map"
            className="w-full h-full object-cover opacity-60 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIOlMDodAUO9Wcwu2YZOYaIE0E3Q_XlXsXNQQWUqHt6O7388dcXk1lTi55oN1MHFXroWky8VI3yecmInHotMYxysPVWmWmA1sFC1O-oHSUltH0QS3vs_Suwtsl5geJz7n-RZ_X9g-8VfSOcpBQ2kN9vcd3y34vxYGrBZ7rWp-r40gvY-4pOgkrdONyfirvc-5P0U-qM4UjjMDShURcfJxyuwMsSYdtFTA6Crmwy3ZZUHxT-rHNSSAoZn1qXDW3dHmnK8ZHU2l0IxM"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-bright/80 to-transparent"></div>

          {/* Map pin mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative">
              <span
                className="material-symbols-outlined text-primary text-6xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-on-surface/10 blur-sm rounded-full"></div>
            </div>
            <div className="mt-4 bg-surface-container-lowest py-3 px-6 rounded-full shadow-xl border border-outline-variant/15 inline-flex items-center gap-3 whitespace-nowrap">
              <span className="text-sm font-bold text-primary">Radiant Dental Care</span>
              <span className="text-xs text-on-surface-variant">Open Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
