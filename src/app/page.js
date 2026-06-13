import { Video, Palette, Code, ArrowRight, Sparkles, Zap, Shield, Clock } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ServiceCard from '@/components/ServiceCard/ServiceCard';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard';
import Button from '@/components/Button/Button';
import ParallaxImage from '@/components/ParallaxImage/ParallaxImage';
import StaggerText from '@/components/StaggerText/StaggerText';
import styles from './page.module.css';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const testimonials = [
  {
    name: 'Alex Turner',
    role: 'YouTube Creator — 1.2M Subscribers',
    content: 'Nuclipp transformed my channel completely. The editing quality is cinematic, turnaround is fast, and they understand YouTube algorithms better than most editors I\'ve worked with.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'E-commerce Brand Owner',
    content: 'The packaging designs Nuclipp created for our product line were stunning. They perfectly captured our brand essence and the quality rivaled top agencies at a fraction of the cost.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Tech Startup Founder',
    content: 'We needed a web app built fast without sacrificing quality. Nuclipp delivered a polished, performant product that exceeded our expectations. Highly recommend their development services.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'Digital Marketing Manager',
    content: 'Working with Nuclipp has been a game-changer for our social media strategy. Their eye for detail and incredibly fast delivery time gives us a serious competitive edge.',
    rating: 5,
  },
];

const featuredProjects = [
  { title: 'TechVision YouTube Series', category: 'Video Editing', tags: ['YouTube', 'Automation', 'Motion Graphics'], accentColor: '#ef4444' },
  { title: 'Luxe Botanicals Packaging', category: 'Graphic Design', tags: ['Packaging', 'Branding', 'Print'], accentColor: '#f59e0b' },
  { title: 'SaaS Dashboard Platform', category: 'Development', tags: ['React', 'Next.js', 'Full Stack'], accentColor: '#06b6d4' },
  { title: 'Gaming Channel Rebrand', category: 'Video Editing', tags: ['Intros', 'Thumbnails', 'Editing'], accentColor: '#ef4444' },
  { title: 'Artisan Coffee Branding', category: 'Graphic Design', tags: ['Logo', 'Cards', 'Social Media'], accentColor: '#f59e0b' },
  { title: 'Portfolio Website Builder', category: 'Development', tags: ['SaaS', 'Vite', 'Node.js'], accentColor: '#06b6d4' },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGrid} />
          {/* Abstract Doodles */}
          <ParallaxImage src="/images/doodle_purple.png" alt="Purple Spark" width={100} height={100} className={styles.parallaxImage1} intensity={15} />
          <ParallaxImage src="/images/doodle_orange.png" alt="Orange Burst" width={80} height={80} className={styles.parallaxImage2} intensity={-20} />
          <ParallaxImage src="/images/doodle_cyan.png" alt="Cyan Bracket" width={90} height={90} className={styles.parallaxImage3} intensity={25} />

          {/* Role-Based Doodles */}
          <ParallaxImage src="/images/doodle_editor.png" alt="Video Editor Doodle" width={120} height={120} className={styles.parallaxImage4} intensity={-15} />
          <ParallaxImage src="/images/doodle_designer.png" alt="Designer Doodle" width={120} height={120} className={styles.parallaxImage5} intensity={18} />
          <ParallaxImage src="/images/doodle_developer.png" alt="Developer Doodle" width={120} height={120} className={styles.parallaxImage6} intensity={-25} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Premium Creative Services Network</span>
          </div>
          <h1 className={styles.heroTitle}>
            We Craft Digital
            <br />
            <span className="gradient-text"><span className="cursive-accent">Experiences</span> That</span>
            <br />
            <span className={styles.heroHighlight}>Stand Out</span>
          </h1>
          <p className={styles.heroSubtitle}>
            From cinematic YouTube edits to stunning designs and powerful software —
            Nuclipp is your all-in-one creative partner with 5+ years of proven excellence.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Start Your Project
            </Button>
            <Button href="/services/video-editing" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
          <div className={styles.heroTrust}>
            <div className={styles.trustAvatars}>
              {['A', 'S', 'D', 'M'].map((letter, i) => (
                <div key={i} className={styles.trustAvatar}>{letter}</div>
              ))}
            </div>
            <p className={styles.trustText}>
              Trusted by <strong>50+</strong> creators & businesses worldwide
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Section ── */}
      <section className={`section ${styles.services}`} id="services">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title={<><span className="cursive-accent">Services</span></>}
            subtitle="Three pillars of creative excellence, each backed by years of experience and hundreds of satisfied clients."
          />
          <div className={styles.servicesGrid}>
            <ServiceCard
              icon={<Video size={24} />}
              title="Video Editing"
              description="Professional YouTube automation editing with cinematic quality. We handle everything from raw footage to publish-ready content that drives views and engagement."
              href="/services/video-editing"
              accentColor="#ef4444"
              features={[
                'YouTube channel automation',
                'Motion graphics & transitions',
                'Color grading & sound design',
                'Thumbnail creation',
              ]}
            />
            <ServiceCard
              icon={<Palette size={24} />}
              title="Graphic Design"
              description="Premium visual design for brands that want to stand out. From packaging to social media, we create designs that captivate and convert."
              href="/services/graphic-design"
              accentColor="#f59e0b"
              features={[
                'Poster & banner design',
                'Product packaging',
                'Business cards & stationery',
                'Social media graphics',
              ]}
            />
            <ServiceCard
              icon={<Code size={24} />}
              title="Development"
              description="Custom websites, web applications, and software solutions built with modern technology. Plus, ready-made projects available for purchase."
              href="/services/development"
              accentColor="#06b6d4"
              features={[
                'Custom website development',
                'Web applications & SaaS',
                'Ready-made projects for sale',
                'Maintenance & support',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── Anatomy Section ── */}
      <section className={`section ${styles.anatomySection}`}>
        <div className={`container ${styles.anatomyInner}`}>
          <div className={styles.anatomyTitleBox}>
            <SectionHeading
              title="What is Nuclipp?"
              subtitle="The anatomy of our brand"
              align="left"
            />
          </div>
          
          <div className={styles.anatomyVisual}>
            <div className={styles.anatomyGlow} />
            <Image src="/nuclipp-logo.svg" alt="Nuclipp Logo" width={240} height={240} className={styles.anatomyLogo} />
          </div>
          
          <div className={`glass-card ${styles.anatomyLexicon}`}>
            <div className={styles.lexiconHeader}>
              <h2 className="gradient-text"><span className="cursive-accent">nu·clipp</span></h2>
              <span className={styles.lexiconType}>/noun/</span>
            </div>
            <p className={styles.lexiconDef}>Your all-in-one creative epicenter.</p>
            
            <div className={styles.originTimeline}>
              <div className={styles.originNode}>
                <div className={styles.nodePoint} />
                <div className={styles.nodeContent}>
                  <h4>Nucleus</h4>
                  <p>The epicenter of a system; the core where growth, energy, and ideas originate.</p>
                </div>
              </div>
              <div className={styles.originNode}>
                <div className={styles.nodePoint} />
                <div className={styles.nodeContent}>
                  <h4>Clips</h4>
                  <p>Denoting any form of creative digital content, from cinematic video to stunning design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <StatsCounter stats={stats} />

      {/* ── Featured Work Section ── */}
      <section className={`section ${styles.work}`} id="work">
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title={<>Featured <span className="cursive-accent">Work</span></>}
            subtitle="A selection of projects that showcase our range, quality, and attention to detail across all service verticals."
          />
          <div className={styles.projectGrid}>
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className={`section ${styles.whyUs}`}>
        <div className="container">
          <SectionHeading
            label="Why Nuclipp"
            title={<>The Nuclipp <span className="gradient-text"><span className="cursive-accent">Advantage</span></span></>}
            subtitle="What sets us apart from the rest"
          />
          <div className={styles.advantageGrid}>
            {[
              { icon: <Zap size={22} />, title: 'Lightning Fast', desc: 'Quick turnaround without compromising quality. Most projects delivered within 48-72 hours.' },
              { icon: <Shield size={22} />, title: 'Proven Track Record', desc: '5+ years of consistent excellence with 200+ projects delivered and 98% client satisfaction rate.' },
              { icon: <Sparkles size={22} />, title: 'Premium Quality', desc: 'Every deliverable goes through rigorous quality checks. We don\'t do mediocre — only exceptional.' },
              { icon: <Clock size={22} />, title: 'Reliable & Available', desc: 'Consistent communication, on-time delivery, and revision support. Your project is in safe hands.' },
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
            label="Client Love"
            title={<>What Our Clients <span className="cursive-accent">Say</span></>}
            subtitle="Don't just take our word for it — hear from creators and businesses who've worked with us."
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
        <div className={styles.ctaBackground}>
          <div className={styles.ctaOrb1} />
          <div className={styles.ctaOrb2} />
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <h2 className={styles.ctaTitle}>
            <StaggerText text="Ready to Bring Your" />
            <br />
            <StaggerText text="Vision to Life?" wordClassName="gradient-text" delay={0.2} />
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether it&apos;s a YouTube channel, a brand identity, or a custom application —
            let&apos;s make something extraordinary together.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Get Started Today
            </Button>
            <Button href="mailto:business.nuclipp@gmail.com" variant="secondary" size="lg">
              business.nuclipp@gmail.com
            </Button>
          </div>
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
            description: "Premium freelance creative services network offering video editing, graphic design, and web development.",
            foundingDate: "2019",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              email: "business.nuclipp@gmail.com",
              contactType: "customer service",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Creative Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Editing", description: "Professional YouTube automation and video editing services" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design", description: "Premium poster, packaging, and brand design services" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Custom website and software development services" } },
              ],
            },
          }),
        }}
      />
    </>
  );
}
