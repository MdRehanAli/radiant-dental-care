export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container border-t border-outline/10">
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
            <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-xl">social_leaderboard</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer">
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
                <a className="dark:text-on-surface-variant hover:dark:text-primary transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="dark:text-on-surface-variant hover:dark:text-primary transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="dark:bg-surface-container px-8 rounded-2xl">
          <h4 className="font-headline font-bold dark:text-on-surface mb-4">
            Visit Our Sanctuary
          </h4>
          <p className="text-sm dark:text-on-surface-variant mb-4">
            Mosarof Tower(Ground Floor)<br />
            Rajbari Road, Joydebpur, Gazipur
          </p>
          <p className="text-sm font-bold dark:text-primary mb-2">Everyday: 10am - 1pm</p>
          <p className="text-sm font-bold dark:text-primary">Everyday: 4pm - 9pm</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t dark:border-outline-variant/10 text-center">
        <p className="text-xs dark:text-on-surface-variant font-label tracking-wide uppercase">
          © 2024 Radiant Dental Care. Clinical Serenity Defined.
        </p>
      </div>
    </footer>
  )
}
