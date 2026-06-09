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
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
  TimerReset,
  UserRound,
  X,
} from 'lucide-react';
import logo from '../medilogo.jpeg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Request Demo', href: '#request-demo' },
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
    text: 'Targeted evaluation and treatment pathways for painful stones with clear aftercare guidance.',
  },
  {
    icon: HeartPulse,
    title: 'Prostate Care',
    text: 'Preventive screening, symptom assessment, and personalized management plans for prostate health.',
  },
  {
    icon: TestTube2,
    title: 'Urinary Tract Infection Treatment',
    text: 'Prompt diagnosis and practical treatment support to help patients recover comfortably.',
  },
  {
    icon: UserRound,
    title: 'Male Infertility Consultation',
    text: 'Private consultations focused on fertility concerns, diagnostics, and treatment planning.',
  },
  {
    icon: ShieldCheck,
    title: 'Bladder Health',
    text: 'Comprehensive support for bladder control issues, discomfort, and long-term monitoring.',
  },
  {
    icon: Stethoscope,
    title: 'Erectile Dysfunction Care',
    text: 'Respectful care pathways that combine evaluation, counseling, and follow-up management.',
  },
  {
    icon: Sparkles,
    title: 'Pediatric Urology',
    text: 'Gentle care plans designed for children needing specialist urinary and kidney support.',
  },
  {
    icon: TimerReset,
    title: 'Post-Surgery Follow-ups',
    text: 'Structured recovery reviews with reminders, digital notes, and progress tracking.',
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
    title: 'Book Appointment',
    text: 'Choose a service, select your preferred date, and send your request in minutes.',
  },
  {
    number: '02',
    title: 'Consult Urologist',
    text: 'Meet with a specialist, review symptoms, and receive a clear treatment plan.',
  },
  {
    number: '03',
    title: 'Track Treatment & Follow-ups',
    text: 'Manage prescriptions, reports, reminders, and ongoing care through one flow.',
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
  'When should you visit a urologist?',
  'Common symptoms of kidney stones',
  'Importance of prostate screening',
  'How digital records improve patient care',
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
            <span>urologist</span>
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
            <a className="btn btn-primary nav-cta mobile-only" href="#request-demo" onClick={closeMenu}>
              Book Consultation
            </a>
          </nav>

          <a className="btn btn-primary nav-cta desktop-only" href="#request-demo">
            Book Consultation
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
                Modern urology clinic experience
              </div>
              <h1>
                Advanced Urology Care & <span>Digital Patient Management</span>
              </h1>
              <p>
                urologist helps patients and clinics manage urology consultations, appointments,
                prescriptions, reports, and follow-ups with a clean and reliable healthcare experience.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#request-demo">
                  Book Appointment
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Request Demo
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
                    <p className="panel-label">Digital Care Snapshot</p>
                    <h3>Coordinated urology visits with follow-up visibility</h3>
                  </div>
                  <div className="panel-badge">Live Care</div>
                </div>

                <div className="doctor-card">
                  <div className="doctor-avatar">
                    <Stethoscope size={34} />
                  </div>
                  <div>
                    <h4>Specialist-led guidance</h4>
                    <p>Assess symptoms, prescriptions, reports, and recovery notes in one place.</p>
                  </div>
                </div>

                <div className="stats-grid">
                  <div className="stat-card accent">
                    <strong>24/7</strong>
                    <span>Request intake</span>
                  </div>
                  <div className="stat-card">
                    <strong>Secure</strong>
                    <span>Patient history</span>
                  </div>
                  <div className="stat-card">
                    <strong>Fast</strong>
                    <span>Appointment workflows</span>
                  </div>
                  <div className="stat-card accent-soft">
                    <strong>Smart</strong>
                    <span>Follow-up reminders</span>
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
              <p>Focused care pathways designed for patients who need clarity, comfort, and reliable follow-up.</p>
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
              <p>Built to support patient communication, clinical coordination, and a smooth front-desk workflow.</p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title }) => (
                <article className="feature-card" key={title}>
                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>Designed to reduce friction across consultations, records, reminders, and daily operations.</p>
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
              <p>From first request to long-term follow-up, the experience stays clear and patient friendly.</p>
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
              <h2>What Patients Appreciate</h2>
              <p>Feedback centered on communication, clarity, and confidence during treatment.</p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.name}>
                  <div className="stars">★★★★★</div>
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

        <section className="section" id="request-demo">
          <div className="container form-layout">
            <div className="form-copy">
              <span className="section-kicker">Request Demo</span>
              <h2>Book an Appointment or Request a Demo</h2>
              <p>
                Share your details and our team will guide you toward the right urology service, consultation,
                or digital workflow setup.
              </p>
              <div className="info-list">
                <div>
                  <BadgeCheck size={18} />
                  Personalized care request handling
                </div>
                <div>
                  <BadgeCheck size={18} />
                  Streamlined appointment coordination
                </div>
                <div>
                  <BadgeCheck size={18} />
                  Clear communication with follow-up support
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
                Submit Request
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
              <p>Short educational topics to support informed care decisions and earlier consultations.</p>
            </div>
            <div className="resource-grid">
              {resources.map((item) => (
                <article className="resource-card" key={item}>
                  <h3>{item}</h3>
                  <p>Practical guidance written to help patients understand symptoms, screenings, and digital care support.</p>
                  <a href="#request-demo">
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
              <h2>Let’s Connect for Modern Urology Care</h2>
              <p>Visit, call, or message us to discuss consultations, digital patient coordination, or clinic support.</p>
            </div>
            <div className="contact-card">
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
              <span>urologist</span>
            </a>
            <p>Modern urology care platform for appointments, records, prescriptions and follow-ups.</p>
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
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
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
        <div className="container footer-bottom">All rights reserved 2026 © urologist</div>
      </footer>

      {showSuccess && (
        <div className="modal-backdrop" role="presentation" onClick={() => setShowSuccess(false)}>
          <div className="success-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="success-icon">
              <BadgeCheck size={28} />
            </div>
            <h3>Request Submitted</h3>
            <p>Thank you! Your request has been submitted successfully. Our team will contact you soon.</p>
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
