import { Code, Globe, Monitor, Smartphone, Database, ShoppingCart, Rocket, Server, ArrowRight, Check, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Web Development & Software Services — Websites, Apps & Ready-Made Projects',
  description: 'Custom website development, web applications, and software solutions. Plus, browse our collection of ready-made projects available for purchase. Built with modern tech stacks like React, Next.js, and Node.js.',
  keywords: ['web development services', 'freelance web developer', 'custom website development', 'web application development', 'software development', 'React developer', 'Next.js developer'],
};

const services = [
  { icon: <Globe size={22} />, title: 'Website Development', desc: 'Custom, responsive websites that look stunning on every device. Built with modern frameworks for speed, SEO, and user experience.' },
  { icon: <Monitor size={22} />, title: 'Web Applications', desc: 'Full-stack web applications with complex functionality — dashboards, SaaS platforms, CRMs, and custom business tools.' },
  { icon: <Smartphone size={22} />, title: 'Landing Pages', desc: 'High-converting landing pages designed for campaigns, product launches, and lead generation with A/B testing built in.' },
  { icon: <ShoppingCart size={22} />, title: 'E-Commerce', desc: 'Online stores and marketplace platforms with secure payment processing, inventory management, and analytics.' },
  { icon: <Database size={22} />, title: 'Backend & APIs', desc: 'Robust server-side solutions, RESTful APIs, database architecture, and cloud infrastructure setup.' },
  { icon: <Rocket size={22} />, title: 'Performance Optimization', desc: 'Speed audits, Core Web Vitals optimization, SEO improvements, and scalability enhancements for existing projects.' },
];

const projects = [
  { title: 'SaaS Analytics Dashboard', category: 'Web Application', tags: ['React', 'Node.js', 'PostgreSQL'], accentColor: '#06b6d4' },
  { title: 'E-Commerce Marketplace', category: 'Full Stack', tags: ['Next.js', 'Stripe', 'MongoDB'], accentColor: '#06b6d4' },
  { title: 'Portfolio Template Pro', category: 'Website', tags: ['React', 'Framer Motion', 'CSS'], accentColor: '#06b6d4' },
  { title: 'Task Management App', category: 'Web Application', tags: ['TypeScript', 'Express', 'Redis'], accentColor: '#06b6d4' },
];

const techStack = [
  { icon: <Code size={20} />, name: 'React / Next.js', type: 'Frontend Framework' },
  { icon: <Server size={20} />, name: 'Node.js / Express', type: 'Backend Runtime' },
  { icon: <Database size={20} />, name: 'PostgreSQL / MongoDB', type: 'Databases' },
  { icon: <Globe size={20} />, name: 'HTML / CSS / JS', type: 'Web Fundamentals' },
  { icon: <Smartphone size={20} />, name: 'React Native', type: 'Mobile Apps' },
  { icon: <Rocket size={20} />, name: 'Vite / Webpack', type: 'Build Tools' },
  { icon: <ShoppingCart size={20} />, name: 'Stripe / PayPal', type: 'Payment Integration' },
  { icon: <Monitor size={20} />, name: 'AWS / Vercel', type: 'Cloud & Hosting' },
];

const projectsForSale = [
  {
    title: 'CreatorHub — YouTube Analytics Dashboard',
    desc: 'Full-stack analytics dashboard for YouTube creators. Track subscribers, views, revenue, and content performance.',
    tags: ['React', 'Node.js', 'Charts'],
    price: '$299',
    badge: 'Popular',
  },
  {
    title: 'ShopifyClone — E-Commerce Starter Kit',
    desc: 'Complete e-commerce platform with product management, cart, checkout, and admin panel. Ready to customize.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    price: '$499',
    badge: 'Premium',
  },
  {
    title: 'DevFolio — Portfolio Template',
    desc: 'Beautiful developer portfolio template with dark mode, animations, blog integration, and CMS support.',
    tags: ['React', 'MDX', 'Framer Motion'],
    price: '$99',
    badge: 'Starter',
  },
];

const pricingFeatures = [
  'Fully responsive design',
  'SEO-optimized from the start',
  'Modern tech stack',
  'Clean, documented code',
  'Performance optimized',
  'Cross-browser tested',
  'Post-launch support',
  'Source code ownership',
];

export default function DevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} data-accent="dev">
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Code size={14} />
            <span>Development Services</span>
          </div>
          <h1 className={styles.heroTitle}>
            Code That <span className="cursive-accent">Powers</span>
            <br />
            <span className="gradient-text-dev">Your Next Big Idea</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Custom websites, web apps, and software solutions built with cutting-edge technology.
            Plus, explore our collection of ready-made projects available for instant deployment.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contact" variant="dev" size="lg" icon={<ArrowRight size={18} />}>
              Start a Project
            </Button>
            <Button href="#projects-for-sale" variant="secondary" size="lg">
              Browse Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <SectionHeading
            label="Development Services"
            title={<>What We <span className="gradient-text-dev"><span className="cursive-accent">Build</span></span></>}
            subtitle="From simple landing pages to complex web applications — we turn ideas into production-ready software."
          />
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <div key={i} className={styles.serviceItem} style={{ '--item-accent': '#06b6d4' }}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Tech Stack"
            title={<>Our <span className="gradient-text-dev">Technology</span></>}
            subtitle="We use modern, battle-tested technologies to build fast, scalable, and maintainable software."
          />
          <div className={styles.softwareGrid}>
            {techStack.map((tech, i) => (
              <div key={i} className={styles.softwareItem} style={{ '--item-accent': '#06b6d4' }}>
                <div className={styles.softwareIcon}>{tech.icon}</div>
                <div>
                  <div className={styles.softwareName}>{tech.name}</div>
                  <div className={styles.softwareType}>{tech.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects for Sale */}
      <section className={`section ${styles.servicesSection}`} id="projects-for-sale">
        <div className="container">
          <SectionHeading
            label="Ready-Made"
            title={<>Projects <span className="gradient-text-dev">For Sale</span></>}
            subtitle="Skip the development time. Get a professionally built project, customize it, and launch faster."
          />
          <div className={styles.saleGrid}>
            {projectsForSale.map((project, i) => (
              <div key={i} className={styles.saleCard}>
                <div className={styles.saleImageArea}>
                  <div className={styles.salePlaceholder}>
                    <Code size={24} />
                  </div>
                </div>
                <div className={styles.saleContent}>
                  <span className={styles.saleBadge}>{project.badge}</span>
                  <h3 className={styles.saleTitle}>{project.title}</h3>
                  <p className={styles.saleDesc}>{project.desc}</p>
                  <div className={styles.saleTags}>
                    {project.tags.map((tag, j) => (
                      <span key={j} className={styles.saleTag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.saleFooter}>
                  <span className={styles.salePrice}>{project.price}</span>
                  <Button href="/contact" variant="dev" size="sm" icon={<ExternalLink size={14} />}>
                    Get It
                  </Button>
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
            label="Custom Work"
            title={<>Recent <span className="gradient-text-dev">Projects</span></>}
            subtitle="A selection of custom development projects we've delivered."
          />
          <div className={styles.projectGrid}>
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote Section */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <SectionHeading
            label="Pricing"
            title={<>Project-Based <span className="gradient-text-dev">Quotes</span></>}
            subtitle="Every software project is entirely unique in scope, architecture, and complexity."
          />
          <div className={`glass-card ${styles.customQuoteCard}`} style={{ '--card-accent': '#06b6d4' }}>
            <div className={styles.quoteContent}>
              <Code size={48} className={styles.quoteIcon} />
              <h3>Custom Built, Custom Quoted</h3>
              <p>
                Because no two codebases are the same, we do not use cookie-cutter pricing tiers. 
                Instead, we evaluate your specific requirements, desired tech stack, and timeline to 
                provide a comprehensive, transparent project quote.
              </p>
              <div className={styles.quoteSteps}>
                <div className={styles.qStep}><span>1</span> Discovery</div>
                <div className={styles.qStep}><span>2</span> Scoping</div>
                <div className={styles.qStep}><span>3</span> Custom Quote</div>
              </div>
            </div>
            <div className={styles.quoteAction}>
              <Button href="/contact" variant="dev" size="lg" icon={<ArrowRight size={18} />}>
                Tell Us About Your Project
              </Button>
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
            name: "Web Development Services",
            provider: { "@type": "Organization", name: "Nuclipp" },
            description: "Custom website development, web applications, and software solutions built with modern technology stacks.",
            serviceType: "Web Development",
            areaServed: "Worldwide",
          }),
        }}
      />
    </>
  );
}
