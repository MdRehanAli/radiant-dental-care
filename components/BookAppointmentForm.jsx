import { useState } from 'react'

export default function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
  })

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Restorative Dentistry',
    'Orthodontics',
  ]

  const doctors = [
    'Dr. Sarah Radiant',
    'Dr. Michael Alpine',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Appointment booked:', formData)
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      doctor: '',
      date: '',
      time: '',
      message: '',
    })
    alert('Appointment request submitted! We will contact you shortly.')
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-background rounded-3xl p-8 md:p-12 shadow-on-surface/4">
        <h2 className="text-3xl font-bold text-on-surface mb-4">Book Your Appointment</h2>
        <p className="text-on-surface-variant mb-10">
          Fill out the form below and our patient coordinator will reach out within 2 hours during clinical hours to confirm your appointment.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">person</span> Full Name
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                name="fullName"
                onChange={handleChange}
                placeholder="John Doe"
                type="text"
                value={formData.fullName}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">mail</span> Email Address
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                name="email"
                onChange={handleChange}
                placeholder="john@example.com"
                type="email"
                value={formData.email}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">call</span> Phone Number
              </label>
              <input
                className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline"
                name="phone"
                onChange={handleChange}
                placeholder="(555) 000-0000"
                type="tel"
                value={formData.phone}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">medical_services</span> Service
              </label>
              <select
                className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface"
                name="service"
                onChange={handleChange}
                value={formData.service}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">person_4</span> Preferred Doctor
              </label>
              <select
                className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface"
                name="doctor"
                onChange={handleChange}
                value={formData.doctor}
              >
                <option value="">Any doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor} value={doctor}>{doctor}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs">calendar_today</span> Preferred Date
              </label>
              <input
                className="w-full bg-surface-container-highest border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface-variant"
                name="date"
                onChange={handleChange}
                type="date"
                value={formData.date}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">schedule</span> Preferred Time
            </label>
            <select
              className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface"
              name="time"
              onChange={handleChange}
              value={formData.time}
              required
            >
              <option value="">Select a time</option>
              <option value="09:00">9:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              <option value="15:00">3:00 PM</option>
              <option value="16:00">4:00 PM</option>
              <option value="17:00">5:00 PM</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">chat_bubble</span> Additional Message
            </label>
            <textarea
              className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline resize-none"
              name="message"
              onChange={handleChange}
              placeholder="Tell us about your dental concerns or any special requirements..."
              rows="4"
              value={formData.message}
            />
          </div>

          <button
            className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 px-8 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            type="submit"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  )
}