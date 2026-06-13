import { Heart, Target, Eye, Sparkles, Users, Clock, Award, ArrowRight, Zap, MonitorPlay, Briefcase, Palette as ColorPalette, Code, PenTool } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Button from '@/components/Button/Button';
import StatsCounter from '@/components/StatsCounter/StatsCounter';
import styles from './page.module.css';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const values = [
  {
    icon: <Heart size={22} />,
    title: 'Craft Over Speed',
    desc: 'We never rush quality. Every pixel, every frame, every line of code is deliberate. Premium work takes precision, and we give it exactly that.',
  },
  {
    icon: <Target size={22} />,
    title: 'Client-First Thinking',
    desc: 'Your vision drives everything. We listen deeply, ask the right questions, and deliver work that doesn\'t just meet expectations — it redefines them.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Relentless Attention to Detail',
    desc: 'The difference between good and exceptional lives in the details. Color accuracy, timing, responsiveness — we obsess so you don\'t have to.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Always Evolving',
    desc: 'Tools change. Trends shift. We stay ahead by constantly learning, experimenting, and adopting what makes our work better — never settling.',
  },
];

const milestones = [
  { year: '2019', title: 'The Beginning', desc: 'Started as a solo video editor for small YouTube channels, fueled by late nights and a love for storytelling.' },
  { year: '2020', title: 'Expanding the Craft', desc: 'Added graphic design to the repertoire. First packaging project went viral on Behance.' },
  { year: '2021', title: 'Going Full Stack', desc: 'Launched development services. Built first SaaS dashboard for a tech startup.' },
  { year: '2022', title: 'Nuclipp Is Born', desc: 'Officially branded as Nuclipp — a creative nucleus for all things digital. Network of collaborators formed.' },
  { year: '2023', title: '100+ Projects Milestone', desc: 'Crossed 100 delivered projects with a 98% satisfaction rate. Expanded to serve international clients.' },
  { year: '2024', title: 'Premium Tier', desc: 'Introduced premium packages, ready-made projects marketplace, and YouTube automation at scale.' },
];

const teamMembers = [
  { name: 'Piyush Chouhan', role: 'Founder & YT Expert', image: '/images/piyush.jpeg', icon: <MonitorPlay size={14} /> },
  { name: 'Arman Singh', role: 'Founder & Manager', image: '/images/arman.jpeg', icon: <Briefcase size={14} /> },
  { name: 'Pragati Pandey', role: 'Creative Lead', image: '/images/pragati.jpeg', icon: <ColorPalette size={14} /> },
  { name: 'Aman Singh', role: 'Founder & Dev Lead', image: '/images/aman.jpeg', icon: <Code size={14} /> },
  { name: 'Sahil Pandey', role: 'Graphics Lead', image: '/images/sahil.jpeg', icon: <PenTool size={14} /> },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>Our Story</span>
          </div>
          <h1 className={styles.heroTitle}>
            We Don&apos;t Just Create.
            <br />
            <span className="gradient-text">We <span className="cursive-accent">Craft</span>.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Nuclipp is a premium creative network born from a simple belief:
            great work should feel effortless — even when it takes relentless effort to make.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyVisual}>
            <div className={styles.storyGlow} />
            <Image src="/nuclipp-logo.svg" alt="Nuclipp Logo" width={200} height={200} className={styles.storyLogo} />
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>
              From a Solo Editor to a <span className="cursive-accent">Creative Network</span>
            </h2>
            <p className={styles.storyParagraph}>
              It started in 2019 with a laptop, Adobe Premiere, and a determination to make YouTube videos
              that didn&apos;t look like they were edited by amateurs. What began as freelance video editing
              quickly grew into something larger.
            </p>
            <p className={styles.storyParagraph}>
              Clients didn&apos;t just want editing — they wanted thumbnails, branding, packaging, websites.
              So we learned. We grew. We built a network of specialists who share one obsession:
              making things that look and feel exceptional.
            </p>
            <p className={styles.storyParagraph}>
              Today, Nuclipp is a full-service creative partner — video editing, graphic design,
              and development — serving creators, startups, and brands worldwide. The laptop got upgraded.
              The obsession stayed the same.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsCounter stats={stats} />

      {/* Team Section */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <SectionHeading
            label="The Minds Behind Nuclipp"
            title={<>Meet the <span className="gradient-text"><span className="cursive-accent">Team</span></span></>}
            subtitle="A collective of specialists dedicated to bringing your vision to life."
          />
          <div className={styles.teamGrid}>
            {teamMembers.map((member, i) => (
              <div key={i} className={`glass-card ${styles.teamCard}`}>
                <div className={styles.teamAvatar}>
                  <img src={member.image} alt={member.name} className={styles.teamImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 className={styles.teamName}>{member.name}</h4>
                <div className={styles.teamRoleChip}>
                  {member.icon}
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SectionHeading
            label="What We Stand For"
            title={<>Our <span className="gradient-text"><span className="cursive-accent">Values</span></span></>}
            subtitle="The principles that guide every project, every decision, and every pixel."
          />
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <SectionHeading
            label="Our Journey"
            title={<>The <span className="cursive-accent">Timeline</span></>}
            subtitle="How we got from there to here."
          />
          <div className={styles.timeline}>
            {milestones.map((milestone, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineDot} />
                  {i < milestones.length - 1 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{milestone.year}</span>
                  <h4 className={styles.timelineTitle}>{milestone.title}</h4>
                  <p className={styles.timelineDesc}>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaOrb1} />
          <div className={styles.ctaOrb2} />
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <h2 className={styles.ctaTitle}>
            Ready to Work With <span className="cursive-accent">Us</span>?
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether it&apos;s your first project or your hundredth —
            we&apos;d love to bring your vision to life.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
              Start a Project
            </Button>
            <Button href="/" variant="secondary" size="lg">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
