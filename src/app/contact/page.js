'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Clock, CheckCircle, Phone, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

const serviceOptions = [
  'Video Editing',
  'Graphic Design',
  'Website Development',
  'Web Application',
  'Software Development',
  'Ready-Made Project',
  'Other',
];

const budgetOptions = [
  { label: 'Under $500', value: 'under-500' },
  { label: '$500 — $1,000', value: '500-1000' },
  { label: '$1,000 — $5,000', value: '1000-5000' },
  { label: '$5,000+', value: '5000+' },
  { label: 'Not sure yet', value: 'not-sure' },
];

const CustomSelect = ({ options, value, onChange, label, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.customSelectContainer}
      tabIndex={0}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className={`${styles.customSelectHeader} ${isOpen ? styles.open : ''} ${value ? styles.hasValue : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.selectedValue}>
          {value ? (options.find((opt) => opt.value === value)?.label || value) : ''}
        </span>
        <ChevronDown size={16} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
      </div>

      <label className={`${styles.floatingLabel} ${(isOpen || value) ? styles.floatingLabelActive : ''}`}>
        {label}
      </label>

      {isOpen && (
        <div className={styles.customSelectDropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`${styles.customSelectOption} ${value === opt.value ? styles.selectedOption : ''}`}
              onClick={() => {
                onChange({ target: { name, value: opt.value } });
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Post to our custom API route
    const apiUrl = '/api/contact';
    
    // Your Cal.com Scheduling Link
    const calendlyUrl = 'https://cal.id/arman-singh/product-walkthrough';

    try {
      // 1. Send data to our custom Next.js API route
      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      // 2. Redirect to Calendly with pre-filled fields
      const redirectUrl = new URL(calendlyUrl);
      redirectUrl.searchParams.append('name', formState.name);
      redirectUrl.searchParams.append('email', formState.email);
      
      // Navigate to Calendly
      window.location.href = redirectUrl.toString();
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an issue submitting your form. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>
          <h1 className={styles.heroTitle}>
            Let&apos;s Start Your
            <br />
            <span className="gradient-text"><span className="cursive-accent">Next Project</span></span>
          </h1>
          <p className={styles.heroSubtitle}>
            We build digital experiences that elevate brands. Tell us about your vision,
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className={styles.mainArea}>
        <div className="container">
          <div className={styles.overlapContainer}>

            {/* Form Side */}
            <div className={`glass-card ${styles.formCard}`}>
              <div className={styles.formHeader}>
                <h2>Send a Message</h2>
                <p>Fill out the details below. All inquiries are securely logged into our Trello CRM to ensure your project is managed with complete transparency from day one.</p>
              </div>

              {isSubmitted ? (
                <div className={styles.successState}>
                  <CheckCircle size={48} className={styles.successIcon} />
                  <h3 className={styles.successTitle}>Message Sent!</h3>
                  <p className={styles.successDesc}>
                    Thank you for reaching out. We&apos;ll review your project details and
                    get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="secondary" size="md">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="name" className={styles.floatingLabel}>Your Name</label>
                    </div>
                    <div className={styles.inputGroup}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={styles.input}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="email" className={styles.floatingLabel}>Email Address</label>
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <CustomSelect
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        options={serviceOptions.map(opt => ({ label: opt, value: opt }))}
                        label="Service Needed"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <CustomSelect
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        options={budgetOptions}
                        label="Budget Range"
                      />
                    </div>
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className={styles.textarea}
                      rows={5}
                      required
                      placeholder=" "
                    />
                    <label htmlFor="message" className={styles.floatingLabel}>Project Details</label>
                  </div>
                  <Button type="submit" variant="primary" size="lg" fullWidth icon={!isSubmitting && <Send size={16} />} disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info Side */}
            <div className={styles.infoColumn}>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <Mail size={24} className={styles.infoIcon} />
                  <div>
                    <h4 className={styles.infoTitle}>Email Us</h4>
                    <a href="mailto:business.nuclipp@gmail.com" className={styles.infoLink}>
                      business.nuclipp@gmail.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <Phone size={24} className={styles.infoIcon} />
                  <div>
                    <h4 className={styles.infoTitle}>WhatsApp</h4>
                    <a href="https://wa.me/917903118040" className={styles.infoLink}>
                      +91 7903118040
                    </a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <MapPin size={24} className={styles.infoIcon} />
                  <div>
                    <h4 className={styles.infoTitle}>Location</h4>
                    <p className={styles.infoText}>Remote Worldwide</p>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <Clock size={24} className={styles.infoIcon} />
                  <div>
                    <h4 className={styles.infoTitle}>Availability</h4>
                    <p className={styles.infoText}>Mon — Sat, 9 AM — 9 PM IST</p>
                  </div>
                </div>
              </div>

              <div className={styles.premiumBox}>
                <h3>Ready to collaborate?</h3>
                <p>We usually respond within 1-2 hours during business times. Let&apos;s make something extraordinary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Process Timeline */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <SectionHeading title="Our Process" subtitle="How we turn your vision into reality" />
          <div className={styles.timeline}>
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements.' },
              { step: '02', title: 'Proposal', desc: 'Custom quote and transparent timeline.' },
              { step: '03', title: 'Execution', desc: 'We build, design, or edit your project.' },
              { step: '04', title: 'Delivery', desc: 'Revisions and final handoff.' },
            ].map((item, i) => (
              <div key={i} className={styles.timelineNode}>
                <div className={styles.timelinePoint}>
                  <span className={styles.stepNum}>{item.step}</span>
                </div>
                <h4 className={styles.timelineTitle}>{item.title}</h4>
                <p className={styles.timelineDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
