import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BellRing,
  CalendarDays,
  CircleDollarSign,
  ClipboardList,
  FileBarChart2,
  FileText,
  HeartPulse,
  LifeBuoy,
  Mail,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  Pill,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
  TimerReset,
  UserRound,
  X,
} from 'lucide-react';
import logo from '../logo.PNG';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Appointments', href: '#appointments' },
  { label: 'Contact', href: '#contact' },
];

const heroHighlights = [
  'Kidney & Urinary Care',
  'Prostate Health',
  'Male Fertility',
  'Stone Treatment',
  'Follow-up Management',
];

const services = [
  {
    icon: Activity,
    title: 'Kidney Stone Treatment',
    text: 'Evidence-based assessment and minimally disruptive treatment planning for stone disease, supported by clear recovery guidance.',
  },
  {
    icon: HeartPulse,
    title: 'Prostate Care',
    text: 'Comprehensive review for prostate enlargement, screening needs, and symptom-led management strategies.',
  },
  {
    icon: TestTube2,
    title: 'Urinary Tract Infection Treatment',
    text: 'Clinical evaluation for recurrent or acute urinary infections with appropriate diagnostics and follow-up advice.',
  },
  {
    icon: UserRound,
    title: 'Male Infertility Consultation',
    text: 'Confidential consultations addressing fertility concerns, hormonal review, and further diagnostic planning where required.',
  },
  {
    icon: ShieldCheck,
    title: 'Bladder Health',
    text: 'Structured care for bladder function concerns, urinary frequency, discomfort, and ongoing symptom monitoring.',
  },
  {
    icon: Stethoscope,
    title: 'Erectile Dysfunction Care',
    text: 'Professional assessment and management planning delivered with privacy, sensitivity, and continuity of care.',
  },
  {
    icon: Sparkles,
    title: 'Pediatric Urology',
    text: 'Specialist support for children requiring careful evaluation of urinary, bladder, or kidney-related conditions.',
  },
  {
    icon: TimerReset,
    title: 'Post-Surgery Follow-ups',
    text: 'Planned post-procedure review pathways with recovery monitoring, medication review, and symptom tracking.',
  },
];

const features = [
  { icon: ClipboardList, title: 'Digital Patient Records' },
  { icon: CalendarDays, title: 'Appointment Scheduling' },
  { icon: FileText, title: 'Prescription Management' },
  { icon: Microscope, title: 'Lab & Ultrasound Reports' },
  { icon: BellRing, title: 'Follow-up Reminders' },
  { icon: ShieldCheck, title: 'Secure Patient History' },
  { icon: CircleDollarSign, title: 'Billing & Payments' },
  { icon: FileBarChart2, title: 'Analytics Dashboard' },
];

const steps = [
  {
    number: '01',
    title: 'Request an Appointment',
    text: 'Share your concern, preferred date, and contact details so the clinic can schedule the most suitable consultation slot.',
  },
  {
    number: '02',
    title: 'Consult DR. JAMIL RAHEEM',
    text: 'Attend a focused urology consultation with symptom review, clinical discussion, and individualized recommendations.',
  },
  {
    number: '03',
    title: 'Continue Treatment & Follow-up',
    text: 'Stay aligned with prescriptions, investigations, procedural advice, and planned review appointments.',
  },
];

const testimonials = [
  {
    text: 'The appointment process was smooth and the doctor explained my kidney stone treatment clearly.',
    name: 'Ahmed R.',
  },
  {
    text: 'Very professional urology care with proper follow-up reminders.',
    name: 'Hassan K.',
  },
  {
    text: 'My reports and prescriptions were managed digitally, which made everything easier.',
    name: 'Bilal M.',
  },
  {
    text: 'Clean, simple and reliable system for urology patients.',
    name: 'Usman A.',
  },
];

const trustItems = [
  'Trusted Urology Care',
  'Secure Records',
  'Modern Consultation',
  'Patient Friendly',
  'Fast Appointments',
];

const resources = [
  'When should you schedule a urology consultation?',
  'Recognizing the common symptoms of kidney stones',
  'Why timely prostate screening matters',
  'How organized digital records improve continuity of care',
];

const quickLinks = ['Home', 'Services', 'Features', 'Testimonials', 'Contact'];
const serviceLinks = ['Kidney Stone', 'Prostate Care', 'Male Fertility', 'Pediatric Urology', 'Follow-ups'];

const formDefaults = {
  fullName: '',
  phone: '',
  email: '',
  service: 'Kidney Stone',
  date: '',
  message: '',
};

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState(formDefaults);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
    setFormData(formDefaults);
  };

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="page-shell">
      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={() => setActiveLink('Home')}>
            <img src={logo} alt="urologist logo" className="brand-logo" />
            <span className="brand-text">
              <strong>DR. JAMIL RAHEEM</strong>
              <em>urologist</em>
            </span>
          </a>

          <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={activeLink === link.label ? 'active' : ''}
                onClick={() => {
                  setActiveLink(link.label);
                  closeMenu();
                }}
              >
                {link.label}
              </a>
            ))}
            <a className="btn btn-primary nav-cta mobile-only" href="#appointments" onClick={closeMenu}>
              Schedule Visit
            </a>
          </nav>

          <a className="btn btn-primary nav-cta desktop-only" href="#appointments">
            Schedule Visit
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <BadgeCheck size={16} />
                Consultant Urologist Care Pathway
              </div>
              <h1>
                Advanced Urology Care & <span>Digital Patient Management</span>
              </h1>
              <p>
                DR. JAMIL RAHEEM provides structured urology consultations for kidney, prostate, urinary,
                fertility, and post-treatment concerns with organized appointments, clinical documentation,
                prescriptions, reports, and follow-up coordination.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#appointments">
                  Schedule Consultation
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Contact Clinic
                </a>
              </div>
              <div className="hero-tags">
                {heroHighlights.map((item) => (
                  <div className="tag-card" key={item}>
                    <span className="tag-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-panel">
                <div className="panel-top">
                  <div>
                    <p className="panel-label">Clinical Care Overview</p>
                    <h3>Consultation-led urology care with clear follow-up coordination</h3>
                  </div>
                  <div className="panel-badge">Specialist Care</div>
                </div>

                <div className="doctor-card">
                  <div className="doctor-avatar">
                    <Stethoscope size={34} />
                  </div>
                  <div>
                    <h4>DR. JAMIL RAHEEM</h4>
                    <p>
                      Consultant Urologist providing professional assessment, treatment planning, and
                      clinically organized follow-up care.
                    </p>
                  </div>
                </div>

                <div className="stats-grid">
                  <div className="stat-card accent">
                    <strong>Kidney</strong>
                    <span>Stone and urinary care</span>
                  </div>
                  <div className="stat-card">
                    <strong>Prostate</strong>
                    <span>Screening and symptom review</span>
                  </div>
                  <div className="stat-card">
                    <strong>Male Health</strong>
                    <span>Fertility and dysfunction support</span>
                  </div>
                  <div className="stat-card accent-soft">
                    <strong>Follow-up</strong>
                    <span>Reports and recovery planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Services</span>
              <h2>Specialized Urology Services</h2>
              <p>Clinical services designed to support accurate assessment, appropriate treatment planning, and continuity of care.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Features</span>
              <h2>Smart Features for Better Urology Care</h2>
              <p>Operational tools that support streamlined appointments, organized records, and a more reliable patient experience.</p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title }) => (
                <article className="feature-card" key={title}>
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>Structured to support safer documentation, clearer communication, and efficient clinic coordination.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">How It Works</span>
              <h2>Simple Steps to Start Care</h2>
              <p>From appointment request to ongoing review, each step is organized to keep care timely and clinically clear.</p>
            </div>
            <div className="timeline">
              {steps.map((step) => (
                <article className="timeline-card" key={step.number}>
                  <span className="timeline-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section" id="testimonials">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Testimonials</span>
              <h2>Patient Experience Highlights</h2>
              <p>Experiences centered on professional communication, treatment clarity, and dependable follow-up.</p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.name}>
                  <div className="stars">5.0 / 5.0</div>
                  <p>"{item.text}"</p>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container">
            <div className="trust-strip">
              {trustItems.map((item) => (
                <div className="trust-chip" key={item}>
                  <LifeBuoy size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="appointments">
          <div className="container form-layout">
            <div className="form-copy">
              <span className="section-kicker">Appointments</span>
              <h2>Request an Appointment with DR. JAMIL RAHEEM</h2>
              <p>
                Submit your details for appointment coordination. The clinic team will review your request and
                contact you to confirm the most appropriate consultation schedule and service category.
              </p>
              <div className="info-list">
                <div>
                  <BadgeCheck size={18} />
                  Professional clinical intake for urology concerns
                </div>
                <div>
                  <BadgeCheck size={18} />
                  Structured appointment scheduling support
                </div>
                <div>
                  <BadgeCheck size={18} />
                  Clear communication regarding follow-up planning
                </div>
              </div>
            </div>

            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <label>
                  Full Name
                  <input name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                </label>
                <label>
                  Phone Number
                  <input name="phone" value={formData.phone} onChange={handleInputChange} required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" value={formData.email} onChange={handleInputChange} required />
                </label>
                <label>
                  Select Service
                  <select name="service" value={formData.service} onChange={handleInputChange}>
                    <option>Kidney Stone</option>
                    <option>Prostate Care</option>
                    <option>UTI</option>
                    <option>Male Fertility</option>
                    <option>General Urology</option>
                  </select>
                </label>
                <label>
                  Preferred Date
                  <input name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                </label>
                <label className="full-width">
                  Message
                  <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} />
                </label>
              </div>
              <button className="btn btn-primary submit-btn" type="submit">
                Submit Appointment Request
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>

        <section className="section muted-section" id="resources">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Resources</span>
              <h2>Helpful Urology Reading</h2>
              <p>Short educational topics to support informed decisions, symptom awareness, and timely specialist review.</p>
            </div>
            <div className="resource-grid">
              {resources.map((item) => (
                <article className="resource-card" key={item}>
                  <h3>{item}</h3>
                  <p>Patient-focused guidance to better understand symptoms, investigations, screening needs, and care continuity.</p>
                  <a href="#appointments">
                    Learn more <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div>
              <span className="section-kicker">Contact</span>
              <h2>Contact the Clinic</h2>
              <p>Reach out for appointment scheduling, consultation guidance, and urology-related care coordination.</p>
            </div>
            <div className="contact-card">
              <div className="contact-item">
                <Pill size={18} />
                <span>DR. JAMIL RAHEEM, Consultant Urologist</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <span>info@urologist.pk</span>
              </div>
              <div className="contact-item">
                <MapPinIcon />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="contact-actions">
                <a href="tel:+923000000000" aria-label="Call urologist">
                  <Phone size={20} />
                </a>
                <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp urologist">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-layout">
          <div className="footer-brand">
            <a className="brand footer-brand-row" href="#home">
              <img src={logo} alt="urologist logo" className="brand-logo" />
              <span className="brand-text">
                <strong>DR. JAMIL RAHEEM</strong>
                <em>urologist</em>
              </span>
            </a>
            <p>Professional urology consultation platform for appointments, clinical records, prescriptions, and follow-up coordination.</p>
            <div className="footer-socials">
              <a href="tel:+923000000000" aria-label="Call">
                <Phone size={18} />
              </a>
              <a href="https://wa.me/923000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="mailto:info@urologist.pk" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href={item === 'Home' ? '#home' : item === 'Services' ? '#services' : item === 'Features' ? '#features' : item === 'Testimonials' ? '#testimonials' : item === 'Contact' ? '#contact' : '#appointments'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#services">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="container footer-bottom">All rights reserved 2026 (c) urologist</div>
      </footer>

      {showSuccess && (
        <div className="modal-backdrop" role="presentation" onClick={() => setShowSuccess(false)}>
          <div className="success-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="success-icon">
              <BadgeCheck size={28} />
            </div>
            <h3>Appointment Request Received</h3>
            <p>Thank you. Your appointment request has been received successfully. Our clinic team will contact you shortly to confirm the consultation details.</p>
            <button type="button" className="btn btn-primary" onClick={() => setShowSuccess(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default App;
