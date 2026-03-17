export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-on-surface/4 blur-[48px]">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <div className="text-2xl font-bold text-primary tracking-tight font-headline">
          Radiant Dental Care
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-primary font-bold border-b-2 border-primary pb-1 font-label text-sm tracking-wide"
            href="#"
          >
            Home
          </a>
          <a
            className="text-on-surface hover:text-primary transition-colors font-label text-sm tracking-wide"
            href="#"
          >
            Services
          </a>
          <a
            className="text-on-surface hover:text-primary transition-colors font-label text-sm tracking-wide"
            href="#"
          >
            Our Team
          </a>
          <a
            className="text-on-surface hover:text-primary transition-colors font-label text-sm tracking-wide"
            href="#"
          >
            Contact
          </a>
        </div>
        
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
          Book Appointment
        </button>
      </div>
    </nav>
  )
}
