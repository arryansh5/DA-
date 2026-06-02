import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const CONTACT_INFO = [
  { icon: Phone, label: 'Call Us', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: Mail, label: 'Email Us', value: 'studio@designaura.in', href: 'mailto:studio@designaura.in' },
  { icon: MapPin, label: 'Visit Us', value: 'New Delhi, India', href: '#' },
  { icon: Clock, label: 'Studio Hours', value: 'Mon–Sat, 9am–7pm IST', href: null },
];

const PROJECT_TYPES = ['Hospital', 'Clinic / OPD', 'Surgical Centre', 'Diagnostics', 'Rehabilitation', 'Renovation', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', projectType: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-[#F7F7F5] py-28 md:py-36 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-maroon/6 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 xl:px-20">
        <AnimatedSection delay={0}>
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-maroon" />
            <span className="eyebrow-label">Get In Touch</span>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl mb-16 heading-hover cursor-default">
            Let's Design Your
            <br />
            <em>Next Landmark.</em>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={100}>
              <p className="text-slate-aura/65 text-base md:text-lg leading-relaxed mb-10">
                Whether you're planning a new hospital, renovating an existing facility, or exploring how design can improve your healthcare brand — we'd love to hear from you.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-5 mb-12">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }, i) => (
                <AnimatedSection key={label} delay={150 + i * 60}>
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-black/10 flex items-center justify-center text-maroon flex-shrink-0 group-hover:border-maroon group-hover:bg-maroon/5 transition-all duration-300">
                      <Icon size={15} />
                    </div>
                    <div>
                      <p className="eyebrow-label text-slate-aura/40 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-charcoal text-sm hover:text-maroon transition-colors duration-200">{value}</a>
                      ) : (
                        <p className="text-charcoal text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={300}>
              <div className="relative aspect-video overflow-hidden border border-black/8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9514026454!2d76.76354795!3d28.6273928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1717305634891!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Design Aura Location"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={200} direction="left">
              <form onSubmit={handleSubmit} className="bg-white border border-black/8 shadow-sm p-8 md:p-10">
                <p className="eyebrow-label mb-8">Send Us a Brief</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  {[
                    { name: 'name', label: 'Full Name *', placeholder: 'Dr. / Mr. / Ms. …', type: 'text' },
                    { name: 'email', label: 'Email Address *', placeholder: 'you@hospital.in', type: 'email' },
                  ].map(({ name, label, placeholder, type }) => (
                    <div key={name}>
                      <label className="eyebrow-label text-slate-aura/50 block mb-2">{label}</label>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full bg-[#F7F7F5] border border-black/10 px-4 py-3 text-charcoal placeholder-slate-aura/30 text-sm focus:outline-none focus:border-maroon/50 transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="eyebrow-label text-slate-aura/50 block mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 …"
                      className="w-full bg-[#F7F7F5] border border-black/10 px-4 py-3 text-charcoal placeholder-slate-aura/30 text-sm focus:outline-none focus:border-maroon/50 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="eyebrow-label text-slate-aura/50 block mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full bg-[#F7F7F5] border border-black/10 px-4 py-3 text-charcoal/80 text-sm focus:outline-none focus:border-maroon/50 transition-colors duration-200 appearance-none"
                    >
                      <option value="">Select type…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="eyebrow-label text-slate-aura/50 block mb-2">Project Brief *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your facility, project scale, location, timeline, and any specific requirements…"
                    required
                    className="w-full bg-[#F7F7F5] border border-black/10 px-4 py-3 text-charcoal placeholder-slate-aura/30 text-sm focus:outline-none focus:border-maroon/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`group w-full flex items-center justify-center gap-3 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-400 ${
                    status === 'sent'
                      ? 'bg-green-100 border border-green-300 text-green-700'
                      : status === 'error'
                      ? 'bg-red-100 border border-red-300 text-red-700'
                      : 'btn-maroon'
                  }`}
                >
                  {status === 'idle' && (<>Send Project Brief <Send size={13} className="group-hover:translate-x-0.5 transition-transform" /></>)}
                  {status === 'sending' && (<><div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>)}
                  {status === 'sent' && (<><CheckCircle size={14} />Message Received — We'll Be In Touch</>)}
                  {status === 'error' && (<><AlertCircle size={14} />Something Went Wrong — Please Retry</>)}
                </button>

                <p className="text-slate-aura/40 text-xs font-mono mt-4 text-center">
                  We respond to all enquiries within 24 business hours.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
