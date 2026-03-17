export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-12">
      <section>
        <h2 className="text-3xl font-bold text-on-surface mb-8">Reach Out Directly</h2>
        <div className="space-y-6">
          {/* Location */}
          <div className="flex items-start gap-6 p-6 rounded-2xl bg-surface-container transition-all hover:bg-primary-fixed group">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Our Clinic</h3>
              <p className="text-on-surface-variant">
                123 Serenity Plaza, Wellness District
                <br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-6 p-6 rounded-2xl bg-surface-container transition-all hover:bg-primary-fixed group">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Phone Number</h3>
              <p className="text-on-surface-variant">+1 (555) 789-2040</p>
              <p className="text-sm text-tertiary mt-1">Available for emergency calls 24/7</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-6 p-6 rounded-2xl bg-surface-container transition-all hover:bg-primary-fixed group">
            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email Address</h3>
              <p className="text-on-surface-variant">hello@radiantdental.care</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-on-surface mb-8">Clinical Hours</h2>
        <div className="bg-surface-container-low rounded-3xl p-8 space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
            <span className="font-medium">Monday — Thursday</span>
            <span className="text-on-surface-variant">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
            <span className="font-medium">Friday</span>
            <span className="text-on-surface-variant">8:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-outline-variant/15">
            <span className="font-medium text-tertiary">Saturday</span>
            <span className="text-on-surface-variant">By Appointment Only</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="font-medium text-on-surface-variant">Sunday</span>
            <span className="font-bold text-error">Closed</span>
          </div>
        </div>
      </section>
    </div>
  )
}
