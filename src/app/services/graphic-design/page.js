import { Palette, Image, Package, CreditCard, Share2, Layers, Brush, PenTool, ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Professional Graphic Design Services — Posters, Packaging & Brand Design',
  description: 'Premium graphic design services including poster design, product packaging, business cards, social media graphics, and complete brand identity. Compatible with Adobe Suite, Figma, and more.',
  keywords: ['graphic design services', 'poster design', 'packaging design', 'business card design', 'freelance graphic designer', 'brand identity design', 'social media design'],
};

const services = [
  { icon: <Image size={22} />, title: 'Poster & Banner Design', desc: 'Stunning posters and banners for events, promotions, and advertising. Print-ready files with professional quality that demands attention.' },
  { icon: <Package size={22} />, title: 'Product Packaging', desc: 'Premium packaging design that elevates your product shelf presence. From concept to production-ready files with dieline templates.' },
  { icon: <CreditCard size={22} />, title: 'Business Cards & Stationery', desc: 'Elegant business cards, letterheads, and corporate stationery that reflect your brand\'s professionalism and attention to detail.' },
  { icon: <Share2 size={22} />, title: 'Social Media Graphics', desc: 'Scroll-stopping social media content, templates, and cover designs optimized for all major platforms.' },
  { icon: <Layers size={22} />, title: 'Brand Identity', desc: 'Complete brand identity packages including logo concepts, color palettes, typography systems, and brand guidelines.' },
  { icon: <Brush size={22} />, title: 'Custom Illustrations', desc: 'Unique hand-crafted illustrations and iconography designed to give your brand a distinctive visual language.' },
];

const projects = [
  { title: 'Luxe Botanicals — Product Line', category: 'Packaging Design', tags: ['Packaging', 'Luxury', 'Print-Ready'], accentColor: '#f59e0b' },
  { title: 'TechConf 2025 — Event Branding', category: 'Poster & Banner', tags: ['Event', 'Large Format', 'Digital'], accentColor: '#f59e0b' },
  { title: 'Artisan Roast — Complete Branding', category: 'Brand Identity', tags: ['Logo', 'Guidelines', 'Stationery'], accentColor: '#f59e0b' },
  { title: 'FitGear — Social Media Kit', category: 'Social Media', tags: ['Instagram', 'Stories', 'Templates'], accentColor: '#f59e0b' },
];

const software = [
  { icon: <Layers size={20} />, name: 'Adobe Photoshop', type: 'Raster Graphics' },
  { icon: <Brush size={20} />, name: 'Adobe Illustrator', type: 'Vector Graphics' },
  { icon: <Package size={20} />, name: 'Adobe InDesign', type: 'Layout & Print' },
  { icon: <PenTool size={20} />, name: 'Figma', type: 'UI/UX Design' },
  { icon: <Palette size={20} />, name: 'Adobe XD', type: 'Prototyping' },
  { icon: <Image size={20} />, name: 'Canva Pro', type: 'Quick Designs' },
  { icon: <Layers size={20} />, name: 'Affinity Designer', type: 'Vector Alternative' },
  { icon: <Brush size={20} />, name: 'Procreate', type: 'Digital Illustration' },
];

const pricingFeatures = [
  'High-resolution print-ready files',
  'Source files included (PSD, AI, etc.)',
  'Multiple format exports',
  'Color-accurate proofing',
  'Brand guideline compliance',
  'Unlimited revisions',
  'Fast turnaround',
  'Commercial usage rights',
];

export default function GraphicDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} data-accent="design">
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Palette size={14} />
            <span>Graphic Design Services</span>
          </div>
          <h1 className={styles.heroTitle}>
            Design That <span className="cursive-accent">Captures</span>
            <br />
            <span className="gradient-text-design">Attention &amp; Converts</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Premium graphic design for brands that refuse to blend in. Posters, packaging,
            business cards, and complete brand identities — crafted with pixel-perfect precision.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contact" variant="design" size="lg" icon={<ArrowRight size={18} />}>
              Get a Quote
            </Button>
            <Button href="#portfolio" variant="secondary" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <SectionHeading
            label="Design Services"
            title={<>What We <span className="gradient-text-design"><span className="cursive-accent">Create</span></span></>}
            subtitle="From digital to print, we deliver designs that elevate your brand across every touchpoint."
          />
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <div key={i} className={styles.serviceItem} style={{ '--item-accent': '#f59e0b' }}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Software */}
      <section className={`section`}>
        <div className="container">
          <SectionHeading
            label="Tools & Software"
            title={<>Compatible <span className="gradient-text-design"><span className="cursive-accent">Software</span></span></>}
            subtitle="We work with industry-standard tools to deliver files in any format you need."
          />
          <div className={styles.softwareGrid}>
            {software.map((sw, i) => (
              <div key={i} className={styles.softwareItem} style={{ '--item-accent': '#f59e0b' }}>
                <div className={styles.softwareIcon}>{sw.icon}</div>
                <div>
                  <div className={styles.softwareName}>{sw.name}</div>
                  <div className={styles.softwareType}>{sw.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className={`section ${styles.portfolio}`} id="portfolio">
        <div className="container">
          <SectionHeading
            label="Portfolio"
            title={<>Recent <span className="gradient-text-design"><span className="cursive-accent">Work</span></span></>}
            subtitle="A showcase of our design projects across different industries and formats."
          />
          <div className={styles.projectGrid}>
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section (Coming Soon) */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <SectionHeading
            label="Pricing"
            title={<>Design <span className="gradient-text-design"><span className="cursive-accent">Packages</span></span></>}
            subtitle="Transparent pricing for our most popular design services."
          />
          <div className={styles.comingSoonWrapper}>
            <div className={styles.placeholderGrid}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={`glass-card ${styles.placeholderCard}`}>
                  <div className={styles.skeletonLine} style={{ width: '60%', height: '24px', marginBottom: '16px' }} />
                  <div className={styles.skeletonLine} style={{ width: '40%', height: '40px', marginBottom: '32px' }} />
                  <div className={styles.skeletonLine} style={{ width: '100%', height: '12px', marginBottom: '12px' }} />
                  <div className={styles.skeletonLine} style={{ width: '80%', height: '12px', marginBottom: '12px' }} />
                  <div className={styles.skeletonLine} style={{ width: '90%', height: '12px', marginBottom: '32px' }} />
                  <div className={styles.skeletonLine} style={{ width: '100%', height: '48px', borderRadius: '8px' }} />
                </div>
              ))}
            </div>
            <div className={styles.comingSoonOverlay}>
              <div className={styles.comingSoonBadge}>Coming Soon</div>
              <h3>Pricing Chart in Development</h3>
              <p>We are finalizing our new graphic design packages. Check back soon!</p>
              <Button href="/contact" variant="design">Request Custom Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Graphic Design Services",
            provider: { "@type": "Organization", name: "Nuclipp" },
            description: "Premium graphic design services including poster design, product packaging, business cards, social media graphics, and complete brand identity.",
            serviceType: "Graphic Design",
            areaServed: "Worldwide",
          }),
        }}
      />
    </>
  );
}
