import { ArrowRight, Bot, MessageSquare, Workflow, Phone, FileText, Code, Clock, Shield, Zap, TrendingUp, CheckCircle2, ChevronRight, Sparkles, Video, Palette, Smartphone, Package, Terminal } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

const stats = [
  { value: 100, suffix: '+', label: 'Hours Saved Monthly' },
  { value: 3, suffix: 's', label: 'Avg. Response Time' },
  { value: 99.9, suffix: '%', label: 'System Uptime' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: <Bot size={24} />,
    title: 'AI Customer Support',
    description: 'Intelligent chatbots trained on your knowledge base that handle Tier-1 support 24/7, reducing ticket volume by up to 60%.',
    href: '/solutions',
    accentColor: '#D97706',
    features: ['Custom knowledge base training', 'Multi-channel deployment', 'Human handoff workflows', 'Analytics dashboard'],
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Lead Qualification AI',
    description: 'AI agents that engage, qualify, and book meetings with your leads on WhatsApp, web, and social — while you sleep.',
    href: '/solutions',
    accentColor: '#0891B2',
    features: ['Instant lead scoring', 'Calendly auto-booking', 'CRM auto-sync', 'Multi-language support'],
  },
  {
    icon: <Workflow size={24} />,
    title: 'CRM & Workflow Automation',
    description: 'End-to-end workflow automation connecting your CRM, email, invoicing, and internal tools into one seamless system.',
    href: '/solutions',
    accentColor: '#7C3AED',
    features: ['Make.com / Zapier integration', 'Custom API connections', 'Automated reporting', 'Error handling & alerts'],
  },
  {
    icon: <Phone size={24} />,
    title: 'WhatsApp Automation',
    description: 'Automated WhatsApp flows for order updates, appointment reminders, lead nurturing, and customer engagement.',
    href: '/solutions',
    accentColor: '#059669',
    features: ['Broadcast campaigns', 'Auto-reply sequences', 'Payment collection', 'Template management'],
  },
  {
    icon: <FileText size={24} />,
    title: 'Document AI',
    description: 'Intelligent document processing — extract data from invoices, contracts, and forms with 99% accuracy using AI.',
    href: '/solutions',
    accentColor: '#DC2626',
    features: ['Invoice OCR processing', 'Contract summarization', 'Data extraction pipelines', 'Automated filing'],
  },
  {
    icon: <Code size={24} />,
    title: 'Custom AI Software',
    description: 'Bespoke AI-powered applications built for your unique business needs. From internal tools to customer-facing products.',
    href: '/solutions',
    accentColor: '#2563EB',
    features: ['RAG-based knowledge systems', 'AI dashboards & analytics', 'Internal AI assistants', 'Full-stack development'],
  },
  {
    icon: <Code size={24} />,
    title: 'Website Development',
    description: 'Custom, high-performance websites built from scratch to perfectly represent your brand and convert visitors into clients.',
    href: '/solutions',
    accentColor: '#10B981',
    features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast', 'Modern Frameworks'],
  },
  {
    icon: <Terminal size={24} />,
    title: 'Software Development',
    description: 'Bespoke enterprise software, internal tools, and specialized scripts that automate and scale your core business operations.',
    href: '/solutions',
    accentColor: '#F59E0B',
    features: ['Custom Logic', 'Scalable Arch', 'API Integrations', 'Secure Backends'],
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Application Development',
    description: 'Scalable web and mobile applications tailored to your business needs, delivering seamless user experiences.',
    href: '/solutions',
    accentColor: '#3B82F6',
    features: ['Cross-Platform', 'Custom Architecture', 'Secure & Reliable', 'App Store Deploy'],
  },
  {
    icon: <Video size={24} />,
    title: 'Video Editing Services',
    description: 'Premium video editing that turns raw footage into compelling stories, perfect for YouTube, ads, and social media.',
    href: '/solutions',
    accentColor: '#8B5CF6',
    features: ['Engaging Cuts', 'Color Grading', 'Motion Graphics', 'Sound Design'],
  },
  {
    icon: <Palette size={24} />,
    title: 'Graphic Design',
    description: 'Eye-catching visuals, branding, and packaging that make your product stand out in a crowded marketplace.',
    href: '/solutions',
    accentColor: '#EC4899',
    features: ['Brand Identity', 'Thumbnails & Ads', 'UI/UX Design', 'Social Content'],
  },
  {
    icon: <Package size={24} />,
    title: 'Ready-Made Projects',
    description: 'Pre-built, high-quality project templates and boilerplates that jumpstart your development or business launch.',
    href: '/solutions',
    accentColor: '#6366F1',
    features: ['Instant Setup', 'Production Ready', 'Customizable', 'Full Source Code'],
  },
];

const processSteps = [
  { number: '01', title: 'Discovery & Audit', description: 'We map your workflows, identify automation opportunities, and calculate potential ROI for your business.', duration: 'Week 1' },
  { number: '02', title: 'Prototype & Design', description: 'We build a working prototype of your AI system, test it with real scenarios, and iterate based on your feedback.', duration: 'Week 2' },
  { number: '03', title: 'Deploy & Integrate', description: 'Production deployment with full integration into your existing tools — CRM, WhatsApp, Slack, or custom APIs.', duration: 'Week 3' },
  { number: '04', title: 'Monitor & Optimize', description: 'Ongoing monitoring, performance optimization, and monthly reporting. We maintain it so you don\'t have to.', duration: 'Ongoing' },
];

const testimonials = [
  {
    name: 'Rahul Mehta',
    role: 'Founder, PropConnect Real Estate',
    content: 'Nuclipp built us a WhatsApp lead qualification bot that now handles 80% of our initial enquiries. Our sales team only talks to hot leads now. Response time went from 4 hours to under 30 seconds.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Operations Head, ShopEase E-commerce',
    content: 'The AI customer support system handles 200+ tickets daily without breaking a sweat. Our support costs dropped by 45% in the first month. Best investment we\'ve made this year.',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    role: 'CEO, ScaleUp SaaS',
    content: 'They automated our entire onboarding workflow — from lead capture to CRM entry to welcome emails. What used to take our team 2 hours per client now happens in 2 minutes.',
    rating: 5,
  },
];

const caseStudies = [
  {
    title: 'AI Support Bot for E-commerce',
    category: 'Customer Support',
    metric: '60%',
    metricLabel: 'reduction in support tickets',
    tags: ['Chatbot', 'Knowledge Base', 'Shopify'],
    accentColor: '#D97706',
  },
  {
    title: 'WhatsApp Lead Qualifier for Real Estate',
    category: 'Lead Generation',
    metric: '3x',
    metricLabel: 'increase in qualified meetings',
    tags: ['WhatsApp', 'Calendly', 'CRM'],
    accentColor: '#059669',
  },
  {
    title: 'Invoice Processing Pipeline',
    category: 'Document AI',
    metric: '95%',
    metricLabel: 'time saved on data entry',
    tags: ['OCR', 'Automation', 'ERP Integration'],
    accentColor: '#2563EB',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Tech & Creative Solutions</span>
          </div>
          <h1 className={styles.heroTitle}>
            Future-Proof Your Business
            <br />
            with <span className="cursive-accent gradient-text">Code, Creation & AI</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We engineer bespoke applications, craft stunning visual identities, and deploy smart automations to help your brand move faster and look better than the competition.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Start Your Next Project
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              Explore Solutions
            </Button>
          </div>
          <div className={styles.heroTrust}>
            <div className={styles.trustLogos}>
              {['E-commerce', 'Real Estate', 'SaaS', 'Healthcare'].map((industry, i) => (
                <span key={i} className={styles.trustTag}>{industry}</span>
              ))}
            </div>
            <p className={styles.trustText}>
              Trusted across <strong>10+ industries</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── Problem / Agitation Section ── */}
      <section className={`section ${styles.problemSection}`}>
        <div className="container">
          <SectionHeading
            label="The Problem"
            title="Still Running Your Business Manually?"
            subtitle="Your team is spending hours on tasks that AI can do in seconds. Here's what that actually costs you."
          />
          <div className={styles.problemGrid}>
            {[
              { icon: <Clock size={22} />, problem: 'Slow response times', impact: 'Leads go cold within 5 minutes. Your team responds in 4 hours.', cost: '60% of leads lost' },
              { icon: <TrendingUp size={22} />, problem: 'Manual data entry', impact: 'Your staff copies data between 5 different tools every single day.', cost: '20+ hours wasted/week' },
              { icon: <MessageSquare size={22} />, problem: 'Repetitive support tickets', impact: '70% of customer questions are the same. Your team answers them individually.', cost: '₹3-5L/year in support costs' },
              { icon: <Workflow size={22} />, problem: 'Disconnected workflows', impact: 'Information gets lost between CRM, email, WhatsApp, and spreadsheets.', cost: 'Missed deals & errors' },
            ].map((item, i) => (
              <div key={i} className={styles.problemCard}>
                <div className={styles.problemIcon}>{item.icon}</div>
                <h4 className={styles.problemTitle}>{item.problem}</h4>
                <p className={styles.problemImpact}>{item.impact}</p>
                <span className={styles.problemCost}>{item.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className={`section ${styles.services}`} id="services">
        <div className="container">
          <SectionHeading
            label="What We Build"
            title={<>AI Solutions That <span className="serif-accent">Deliver ROI</span></>}
            subtitle="Every solution is designed to either save you time, increase revenue, or both. No vanity projects — only measurable business outcomes."
          />
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <SectionHeading
            label="How We Work"
            title={<>From Idea to <span className="serif-accent">Production</span> in 3 Weeks</>}
            subtitle="A proven, transparent process that keeps you in control at every step."
          />
          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <div key={i} className={styles.processCard}>
                <div className={styles.processNumber}>{step.number}</div>
                <div className={styles.processContent}>
                  <div className={styles.processDuration}>{step.duration}</div>
                  <h4 className={styles.processTitle}>{step.title}</h4>
                  <p className={styles.processDesc}>{step.description}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className={styles.processConnector}>
                    <ChevronRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <StatsCounter stats={stats} />

      {/* ── Case Studies Section ── */}
      <section className={`section ${styles.caseStudies}`} id="work">
        <div className="container">
          <SectionHeading
            label="Results"
            title={<>Real Projects, <span className="serif-accent">Real Impact</span></>}
            subtitle="See how our AI systems are transforming businesses across industries."
          />
          <div className={styles.caseStudyGrid}>
            {caseStudies.map((study, i) => (
              <div key={i} className={styles.caseStudyCard} style={{ '--card-accent': study.accentColor }}>
                <span className={styles.caseStudyCategory}>{study.category}</span>
                <h3 className={styles.caseStudyTitle}>{study.title}</h3>
                <div className={styles.caseStudyMetric}>
                  <span className={styles.metricValue}>{study.metric}</span>
                  <span className={styles.metricLabel}>{study.metricLabel}</span>
                </div>
                <div className={styles.caseStudyTags}>
                  {study.tags.map((tag, j) => (
                    <span key={j} className={styles.caseStudyTag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <SectionHeading
            label="Why Nuclipp"
            title={<>The Nuclipp <span className="serif-accent">Advantage</span></>}
            subtitle="What sets us apart from generic dev shops and freelancers."
          />
          <div className={styles.advantageGrid}>
            {[
              { icon: <Zap size={22} />, title: 'Built for Speed', desc: 'Most projects go live within 2-3 weeks. We don\'t do 6-month timelines.' },
              { icon: <Shield size={22} />, title: 'Enterprise-Grade', desc: 'Secure, scalable, and battle-tested systems. 99.9% uptime guaranteed.' },
              { icon: <TrendingUp size={22} />, title: 'ROI-Focused', desc: 'Every solution comes with measurable KPIs. We track the numbers that matter.' },
              { icon: <CheckCircle2 size={22} />, title: 'End-to-End Ownership', desc: 'From strategy to deployment to maintenance. One team, zero handoff friction.' },
            ].map((item, i) => (
              <div key={i} className={styles.advantageCard}>
                <div className={styles.advantageIcon}>{item.icon}</div>
                <h4 className={styles.advantageTitle}>{item.title}</h4>
                <p className={styles.advantageDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <SectionHeading
            label="Client Stories"
            title={<>Trusted by Teams That <span className="serif-accent">Move Fast</span></>}
            subtitle="Hear from founders and operators who've automated their businesses with Nuclipp."
          />
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaContent}`}>
          <span className={styles.ctaLabel}>Ready to scale?</span>
          <h2 className={styles.ctaTitle}>
            Let&apos;s Build Your Next Project
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether you need a high-converting website, custom software, or intelligent automation—we&apos;ll map out a solution that saves time and drives revenue.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="accent" size="lg" icon={<ArrowRight size={18} />}>
              Start Your Project
            </Button>
            <Button href="https://wa.me/917903118040" variant="secondaryInverse" size="lg">
              Chat on WhatsApp
            </Button>
          </div>
          <p className={styles.ctaNote}>No commitment required · Response within 2 hours</p>
        </div>
      </section>

      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nuclipp",
            url: "https://nuclipp.com",
            description: "AI Automation Agency offering custom AI chatbots, lead qualification, CRM automation, and intelligent workflow solutions for businesses.",
            foundingDate: "2019",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              email: "business.nuclipp@gmail.com",
              contactType: "sales",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Automation Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Customer Support", description: "Intelligent chatbots trained on your knowledge base" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Qualification AI", description: "AI agents that qualify and book meetings with leads" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & Workflow Automation", description: "End-to-end workflow automation for business processes" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp Automation", description: "Automated WhatsApp flows for customer engagement" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Document AI", description: "Intelligent document processing and data extraction" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom AI Software", description: "Bespoke AI-powered applications for unique business needs" } },
              ],
            },
          }),
        }}
      />
    </>
  );
}
