export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="text-xl font-bold text-primary font-headline">
            Radiant Dental Care
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Clinical Serenity Defined. Providing premium dental experiences with a focus on patient tranquility and surgical excellence.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined text-xl">social_leaderboard</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all cursor-pointer">
              <span className="material-symbols-outlined text-xl">camera_alt</span>
            </div>
          </div>
        </div>

        {/* Resources and Legal */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 text-sm uppercase tracking-widest">
              Resources
            </h4>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Patient Portal
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Insurance Partners
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                  New Patient Form
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-on-surface mb-6 text-sm uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-4 text-sm font-body">
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-surface-container p-8 rounded-2xl">
          <h4 className="font-headline font-bold text-on-surface mb-4">
            Visit Our Sanctuary
          </h4>
          <p className="text-sm text-on-surface-variant mb-4">
            1200 Serenity Blvd, Suite 400<br />
            Modern Heights, NY 10012
          </p>
          <p className="text-sm font-bold text-primary mb-2">Mon - Fri: 8am - 7pm</p>
          <p className="text-sm font-bold text-primary">Sat: 9am - 2pm</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-xs text-on-surface-variant font-label tracking-wide uppercase">
          © 2024 Radiant Dental Care. Clinical Serenity Defined.
        </p>
      </div>
    </footer>
  )
}
