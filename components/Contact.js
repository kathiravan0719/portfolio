'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'

const WHATSAPP_NUMBER = '919123504247'
const WHATSAPP_MESSAGE_BASE = encodeURIComponent('Hi Kathiravan, I found your portfolio and would like to discuss a website project.')

const PROJECT_TYPES = [
  'Business Website',
  'Landing Page',
  'E-Commerce',
  'Web Application',
  'AI Integration',
  'Website Redesign',
  'Other',
]

const BUDGET_OPTIONS = [
  '₹5K – ₹10K',
  '₹10K – ₹20K',
  '₹20K – ₹40K',
  '₹40K+',
  'Not sure yet',
]

const TOTAL_STEPS = 5

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 80 : -80, opacity: 0 }),
}

// Replace with your EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const socials = [
  {
    label: 'Email',
    value: 'kathiravan0719@gmail.com',
    href: 'mailto:kathiravan0719@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+91 9123504247',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE_BASE}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    accentColor: '#25D366',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kathiravan0719',
    href: 'https://linkedin.com/in/kathiravan0719',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/kathiravan0719',
    href: 'https://github.com/kathiravan0719',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const [form, setForm] = useState({
    projectType: '',
    businessName: '',
    businessWebsite: '',
    industry: '',
    features: '',
    budget: '',
    deadline: '',
    references: '',
    name: '',
    email: '',
    phone: '',
  })

  const update = (key, val) => setForm((prev) => ({ ...prev, [key]: val }))

  const goNext = () => {
    setDirection(1)
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  const goBack = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          project_type: form.projectType,
          business_name: form.businessName,
          business_website: form.businessWebsite,
          industry: form.industry,
          features: form.features,
          budget: form.budget,
          deadline: form.deadline,
          references: form.references,
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full glass-input rounded-2xl px-5 py-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] placeholder:opacity-50 focus:outline-none focus:border-cyan-400/60 transition-all"
  const labelClass = "block text-[11px] font-mono text-[var(--text-secondary)] tracking-wider uppercase mb-2 ml-1 font-medium"

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 font-semibold">
            Start a Project
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-800 tracking-tight text-[var(--text-primary)] mb-6">
            🚀 Let's Build <span className="text-gradient">Together.</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto text-lg leading-relaxed font-medium">
            Fill in your project details and I'll get back to you within 24 hours. Or chat directly on WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Socials + Location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4 md:gap-5"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.015 }}
                className="flex items-center gap-4 md:gap-6 p-4 md:p-5 glass-card rounded-3xl group transition-all overflow-hidden"
              >
                <div
                  className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:border-cyan-400/40 transition-all text-[var(--text-secondary)] group-hover:text-cyan-400 shrink-0"
                  style={social.accentColor ? { color: social.accentColor } : {}}
                >
                  {social.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] md:text-[10px] font-mono text-[var(--text-secondary)] tracking-widest uppercase mb-0.5 opacity-70 italic">{social.label}</p>
                  <p className="text-sm xs:text-base font-bold text-[var(--text-primary)] break-all leading-tight italic">{social.value}</p>
                </div>
                <div className="hidden sm:block ml-auto text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </motion.a>
            ))}

            {/* Location info card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-5 rounded-3xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase mb-1 opacity-80 font-bold">Location</p>
                  <p className="text-sm font-bold text-[var(--text-primary)] italic">Chennai, India</p>
                  <p className="text-xs text-[var(--text-secondary)] opacity-60 mt-1">Available for remote projects worldwide</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Multi-step form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 rounded-[2.5rem] text-center border border-emerald-500/30"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-3xl font-display font-800 text-[var(--text-primary)] mb-4 italic">Project Received!</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8 opacity-80">
                  Thanks! I'll review your requirements and get back to you within <span className="text-emerald-400 font-bold">24 hours</span>.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE_BASE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl text-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: 'white' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Also Chat on WhatsApp
                </a>
              </motion.div>
            ) : (
              <div className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

                {/* Step header */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h3 className="text-xl font-display font-800 text-[var(--text-primary)] italic">
                    Start Your Project
                  </h3>
                  <span className="text-[10px] font-mono text-[var(--text-secondary)] opacity-60 tracking-widest uppercase font-semibold">
                    Step {step}/{TOTAL_STEPS}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/5 rounded-full mb-8 relative z-10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                    animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>

                {/* Step dots */}
                <div className="flex gap-2 mb-8 relative z-10">
                  {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i + 1 <= step
                          ? 'bg-gradient-to-r from-cyan-500 to-indigo-500'
                          : 'bg-white/10'
                      } ${i + 1 === step ? 'flex-1' : 'w-1.5'}`}
                    />
                  ))}
                </div>

                {/* Animated Steps */}
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                      {/* Step 1: Project type */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <p className="text-base font-display font-800 text-[var(--text-primary)] mb-6 italic">
                            What do you need?
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {PROJECT_TYPES.map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => update('projectType', type)}
                                className={`px-4 py-3 rounded-2xl text-sm font-bold text-left transition-all border ${
                                  form.projectType === type
                                    ? 'bg-cyan-500/20 border-cyan-400/60 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                                    : 'glass border-white/10 text-[var(--text-secondary)] hover:border-white/20 hover:text-[var(--text-primary)]'
                                }`}
                              >
                                {form.projectType === type && <span className="mr-2 text-cyan-400">✓</span>}
                                {type}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Business details */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="space-y-4"
                        >
                          <p className="text-base font-display font-800 text-[var(--text-primary)] mb-6 italic">
                            Tell me about your business.
                          </p>
                          <div>
                            <label className={labelClass}>Business / Project Name</label>
                            <input
                              type="text"
                              value={form.businessName}
                              onChange={(e) => update('businessName', e.target.value)}
                              placeholder="e.g. Acme Technologies"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Current Website (if any)</label>
                            <input
                              type="text"
                              value={form.businessWebsite}
                              onChange={(e) => update('businessWebsite', e.target.value)}
                              placeholder="e.g. www.yoursite.com"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Industry / Niche</label>
                            <input
                              type="text"
                              value={form.industry}
                              onChange={(e) => update('industry', e.target.value)}
                              placeholder="e.g. Real Estate, Education, Retail…"
                              className={inputClass}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Features */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="space-y-4"
                        >
                          <p className="text-base font-display font-800 text-[var(--text-primary)] mb-6 italic">
                            What features / pages do you need?
                          </p>
                          <div>
                            <label className={labelClass}>Describe your requirements</label>
                            <textarea
                              value={form.features}
                              onChange={(e) => update('features', e.target.value)}
                              rows={4}
                              placeholder="e.g. Home, About, Services, Contact, Blog, Payment gateway, Admin dashboard…"
                              className={`${inputClass} resize-none`}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Reference Websites (optional)</label>
                            <input
                              type="text"
                              value={form.references}
                              onChange={(e) => update('references', e.target.value)}
                              placeholder="Sites you like the look/feel of"
                              className={inputClass}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 4: Budget & Timeline */}
                      {step === 4 && (
                        <motion.div
                          key="step4"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                          <p className="text-base font-display font-800 text-[var(--text-primary)] mb-6 italic">
                            Budget & timeline.
                          </p>
                          <div className="mb-6">
                            <label className={labelClass}>Estimated Budget</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                              {BUDGET_OPTIONS.map((b) => (
                                <button
                                  key={b}
                                  type="button"
                                  onClick={() => update('budget', b)}
                                  className={`px-4 py-3 rounded-2xl text-sm font-bold transition-all border ${
                                    form.budget === b
                                      ? 'bg-indigo-500/20 border-indigo-400/60 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                                      : 'glass border-white/10 text-[var(--text-secondary)] hover:border-white/20 hover:text-[var(--text-primary)]'
                                  }`}
                                >
                                  {form.budget === b && <span className="mr-1 text-indigo-400">✓ </span>}
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass}>Expected Deadline</label>
                            <input
                              type="text"
                              value={form.deadline}
                              onChange={(e) => update('deadline', e.target.value)}
                              placeholder="e.g. Within 1 month, ASAP, Flexible…"
                              className={inputClass}
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 5: Contact details */}
                      {step === 5 && (
                        <motion.div
                          key="step5"
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="space-y-4"
                        >
                          <p className="text-base font-display font-800 text-[var(--text-primary)] mb-6 italic">
                            How can I reach you?
                          </p>
                          <div>
                            <label className={labelClass}>Your Name *</label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => update('name', e.target.value)}
                              placeholder="Full name"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>Email Address *</label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => update('email', e.target.value)}
                              placeholder="you@example.com"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className={labelClass}>WhatsApp / Phone (optional)</label>
                            <input
                              type="text"
                              value={form.phone}
                              onChange={(e) => update('phone', e.target.value)}
                              placeholder="+91 98765 43210"
                              className={inputClass}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex gap-4 mt-8">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={goBack}
                        className="flex-1 py-3.5 glass border border-white/10 text-[var(--text-secondary)] font-bold text-sm rounded-2xl hover:border-white/20 transition-all"
                      >
                        ← Back
                      </button>
                    )}
                    {step < TOTAL_STEPS ? (
                      <button
                        type="button"
                        onClick={goNext}
                        disabled={step === 1 && !form.projectType}
                        className="flex-1 py-3.5 bg-cyan-500 text-white font-bold text-sm rounded-2xl transition-all hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                      >
                        Next →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === 'sending' || !form.name || !form.email}
                        className="flex-1 py-3.5 bg-cyan-500 text-white font-bold text-sm rounded-2xl transition-all hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0 flex items-center justify-center gap-2"
                      >
                        {status === 'sending' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          'Submit Project Requirements →'
                        )}
                      </button>
                    )}
                  </div>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 text-center text-xs text-red-400 font-mono"
                    >
                      Something went wrong. Please email me directly at kathiravan0719@gmail.com
                    </motion.p>
                  )}
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
