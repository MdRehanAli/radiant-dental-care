import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateTime: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dateTime: '',
      message: '',
    })
  }

  return (
    <div className="lg:col-span-7">
      <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-on-surface/4">
        <h2 className="text-3xl font-bold text-on-surface mb-4">Book Your Visit</h2>
        <p className="text-on-surface-variant mb-10">
          Fill out the form below and our patient coordinator will reach out within 2 hours during clinical hours.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">person</span> Full Name
              </label>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                name="fullName"
                onChange={handleChange}
                placeholder="John Doe"
                type="text"
                value={formData.fullName}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">mail</span> Email Address
              </label>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                name="email"
                onChange={handleChange}
                placeholder="john@example.com"
                type="email"
                value={formData.email}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">call</span> Phone Number
              </label>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                name="phone"
                onChange={handleChange}
                placeholder="(555) 000-0000"
                type="tel"
                value={formData.phone}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">calendar_today</span> Preferred Date/Time
              </label>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface-variant"
                name="dateTime"
                onChange={handleChange}
                type="datetime-local"
                value={formData.dateTime}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">chat_bubble</span> Additional Message
            </label>
            <textarea
              className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline resize-none"
              name="message"
              onChange={handleChange}
              placeholder="How can we help you today?"
              rows="4"
              value={formData.message}
            ></textarea>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary-container/30 border border-secondary-container/50">
            <span
              className="material-symbols-outlined text-on-secondary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
            <p className="text-sm text-on-secondary-container">
              Your medical data is encrypted and HIPAA compliant.
            </p>
          </div>

          <button
            className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all shadow-xl shadow-primary/20"
            type="submit"
          >
            Confirm Booking Request
          </button>
        </form>
      </div>
    </div>
  )
}
