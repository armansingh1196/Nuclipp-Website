import { Video, Film, Clapperboard, MonitorPlay, Wand2, Music, Palette as ColorPalette, Clock, ArrowRight, Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import Button from '@/components/Button/Button';
import VideoPricing from '@/components/VideoPricing/VideoPricing';
import styles from './page.module.css';

export const metadata = {
  title: 'Professional Video Editing Services — YouTube Automation & More',
  description: 'Expert video editing services for YouTube creators. Specializing in YouTube automation, motion graphics, color grading, and sound design. 5+ years of experience with 200+ projects delivered.',
  keywords: ['video editing services', 'youtube video editor', 'youtube automation editing', 'freelance video editor', 'motion graphics', 'video post production'],
};

const services = [
  { icon: <Film size={22} />, title: 'YouTube Automation', desc: 'End-to-end video production for faceless YouTube channels. Script-to-publish workflow with optimized content for maximum reach and retention.' },
  { icon: <Clapperboard size={22} />, title: 'Professional Editing', desc: 'Cinematic cuts, seamless transitions, and storytelling-driven editing that keeps viewers hooked from start to finish.' },
  { icon: <Wand2 size={22} />, title: 'Motion Graphics', desc: 'Custom animated intros, lower thirds, call-to-action overlays, and visual effects that elevate your content quality.' },
  { icon: <Music size={22} />, title: 'Sound Design', desc: 'Professional audio mixing, background music selection, sound effects, and voiceover synchronization for polished output.' },
  { icon: <ColorPalette size={22} />, title: 'Color Grading', desc: 'Cinematic color correction and grading that sets the mood, enhances visual consistency, and gives your videos a professional look.' },
  { icon: <MonitorPlay size={22} />, title: 'Thumbnail Design', desc: 'Eye-catching, click-worthy thumbnails designed with proven YouTube optimization strategies to maximize CTR.' },
];

const projects = [
  { title: 'TechVision — AI Documentary Series', category: 'YouTube Automation', tags: ['Documentary', 'AI Voiceover', '4K'], accentColor: '#ef4444' },
  { title: 'FitLife — Workout Compilation', category: 'Professional Editing', tags: ['Fitness', 'Fast Cuts', 'Music Sync'], accentColor: '#ef4444' },
  { title: 'GameZone — Weekly Highlights', category: 'Gaming Content', tags: ['Gaming', 'Highlights', 'Effects'], accentColor: '#ef4444' },
  { title: 'History Unveiled — Narrated Series', category: 'YouTube Automation', tags: ['History', 'Narration', 'B-Roll'], accentColor: '#ef4444' },
];

const pricingFeatures = [
  'Raw footage to polished video',
  'Custom motion graphics & intros',
  'Color grading & correction',
  'Background music & sound design',
  'Thumbnail design included',
  'Unlimited revisions until satisfied',
  '48-72 hour turnaround',
  'Dedicated project manager',
];

export default function VideoEditingPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} data-accent="video">
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Video size={14} />
            <span>Video Editing Services</span>
          </div>
          <h1 className={styles.heroTitle}>
            <span className="cursive-accent">Cinematic</span> Video Editing
            <br />
            <span className="gradient-text-video">That Drives Views</span>
          </h1>
          <p className={styles.heroSubtitle}>
            5+ years crafting high-retention YouTube content. From raw footage to viral-ready
            videos — we handle the editing so you can focus on growing your channel.
          </p>
          <div className={styles.heroCtas}>
            <Button href="/contact" variant="video" size="lg" icon={<ArrowRight size={18} />}>
              Get a Quote
            </Button>
            <Button href="#portfolio" variant="secondary" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <SectionHeading
            label="Our Expertise"
            title={<>What We <span className="gradient-text-video"><span className="cursive-accent">Deliver</span></span></>}
            subtitle="Comprehensive video editing services tailored for YouTube creators and content-driven brands."
          />
          <div className={styles.servicesGrid}>
            {services.map((service, i) => (
              <div key={i} className={styles.serviceItem} style={{ '--item-accent': '#ef4444' }}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
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
            title={<>Recent <span className="gradient-text-video"><span className="cursive-accent">Projects</span></span></>}
            subtitle="A selection of video editing projects showcasing our range and quality."
          />
          <div className={styles.projectGrid}>
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className={`section ${styles.pricingSection}`}>
        <div className="container">
          <SectionHeading
            label="Pricing"
            title={<>Transparent <span className="gradient-text-video"><span className="cursive-accent">Plans</span></span></>}
            subtitle="Choose a plan that fits your growth stage, or buy individual services to boost your workflow."
          />
          <VideoPricing />
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Video Editing Services",
            provider: { "@type": "Organization", name: "Nuclipp" },
            description: "Professional video editing services for YouTube creators. Specializing in YouTube automation, motion graphics, color grading, and sound design.",
            serviceType: "Video Editing",
            areaServed: "Worldwide",
          }),
        }}
      />
    </>
  );
}
