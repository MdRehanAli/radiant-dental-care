import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 animate-in fade-in">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest uppercase">
            Experience Clinical Serenity
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold font-headline leading-[1.1] text-primary tracking-tight">
            Your Journey to a <span className="text-tertiary">Radiant</span> Smile Starts Here
          </h1>
          
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Experience exceptional dental care in a serene and modern environment designed for your absolute peace of mind.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
              Book an Appointment
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <button className="bg-surface-container-high text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary-fixed transition-all">
              Explore Our Services
            </button>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="relative hidden md:block">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
            <img
              alt="Modern Dental Office"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD78waKVSUkrfgiURLEm0Bk54QnI8lLhzlL3LmMzDD58HDeCxoPG-JuxJHdvjT8r-zxOSVJNYoCLw_5js0aPDom1fUi77dBnDin7Ty6CQobJ5s12T9T--qaVsr_pdjhJje2n_B1MHPAbREdAw-OTMnXWErxct64bPW3m8-Xw37b_zlBxJf6taYu_ZK4DUHcVjTo-v9mqx3-JwURNIy-EIsadsv5EQObXLpLm2Qim2bjmaMLvJ9eED0J-iXbBtetf78QW97_VbNEC54"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Rating Badge */}
          <div className="absolute -bottom-8 -left-8 p-6 bg-surface-container-lowest rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant/15">
            <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <div>
              <p className="font-headline font-bold text-on-surface">5.0 Patient Rating</p>
              <p className="text-xs text-on-surface-variant">Over 1,200 verified reviews</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-0 rounded-l-[5rem]"></div>
    </section>
  )
}
