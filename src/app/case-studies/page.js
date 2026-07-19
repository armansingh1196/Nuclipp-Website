import { ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Button from '@/components/Button/Button';
import styles from './page.module.css';

const caseStudies = [
  {
    category: 'Mobile App & IoT Development',
    title: 'JeoSwap EcoSmart App',
    desc: 'Engineered the JeoSwap EcoSmart mobile application — a React Native (Expo) platform for EV battery swapping station management. Features real-time battery monitoring via IoT TCP sockets, live Google Maps tracking, OTP authentication via MSG91, and a comprehensive analytics dashboard powered by TimescaleDB for historical battery health trends.',
    metrics: [
      { label: 'Live Screens', value: '25+' },
      { label: 'IoT Latency', value: '< 200ms' },
      { label: 'Uptime', value: '99.99%' },
    ],
    tags: ['React Native', 'Expo', 'Supabase', 'TimescaleDB', 'IoT', 'Google Maps'],
    theme: 'jeoswap-project',
    liveUrl: null,
    iframeUrl: null,
    appImages: ['/images/case-studies/ss2.png', '/images/case-studies/ss1.png', '/images/case-studies/ss3.png'],
  },
  {
    category: 'Web Design & Frontend Development',
    title: 'JeoSwap Website',
    desc: 'Designed and developed the user-facing application for JeoSwap. The goal was to make decentralized finance accessible through an intuitive UI, featuring real-time data visualization and a seamless wallet connection experience.',
    metrics: [
      { label: 'User Retention', value: '+45%' },
      { label: 'Page Load', value: '< 1s' },
      { label: 'Conversion', value: '12%' },
    ],
    tags: ['Next.js', 'UI/UX Design', 'Web3 Integration'],
    theme: 'jeoswap-website',
    liveUrl: 'https://www.jeoswap.com/',
    iframeUrl: 'https://www.jeoswap.com/',
  },
  {
    category: 'Custom Platform Development',
    title: 'Trackademix Platform',
    desc: 'Developed Trackademix, a comprehensive educational tracking platform. We built a custom dashboard for educators and students, featuring automated progress tracking, analytics, and interactive learning modules.',
    metrics: [
      { label: 'Active Users', value: '5,000+' },
      { label: 'Hrs Saved/Wk', value: '20+' },
      { label: 'Engagement', value: '+60%' },
    ],
    tags: ['SaaS', 'Dashboard', 'Analytics'],
    theme: 'trackademix',
    liveUrl: 'https://trackademix-mocha.vercel.app/',
    iframeUrl: 'https://trackademix-mocha.vercel.app/',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Our <span className="gradient-text"><span className="cursive-accent">Case Studies</span></span>
          </h1>
          <p className={styles.heroSubtitle}>
            Explore how we&apos;ve helped businesses scale, innovate, and dominate their industries through intelligent design and robust engineering.
          </p>
        </div>
      </section>

      <section className={styles.mainArea}>
        <div className="container">
          <div className={styles.projectList}>
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className={`${styles.projectSpotlight} ${i % 2 !== 0 ? styles.reverse : ''}`}
              >
                {/* Project Number Watermark */}
                <span className={styles.projectNumber}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Browser Mockup */}
                {/* Visual: Phone Mockup for Apps, Browser Frame for Websites */}
                {study.appImages ? (
                  <div className={styles.phoneMockupContainer}>
                    {study.appImages.map((img, idx) => (
                      <div key={idx} className={styles.phoneMockup}>
                        <div className={styles.phoneNotch} />
                        <div className={styles.phoneScreen}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={img} alt={`${study.title} screenshot ${idx + 1}`} className={styles.phoneScreenImg} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.browserFrame}>
                    <div className={styles.browserBar}>
                      <div className={styles.browserDots}>
                        <span className={styles.browserDot} />
                        <span className={styles.browserDot} />
                        <span className={styles.browserDot} />
                      </div>
                      <div className={styles.browserUrl}>
                        {study.liveUrl || `nuclipp.com/projects/${study.theme}`}
                      </div>
                    </div>
                    <div className={styles.browserBody}>
                      {study.iframeUrl ? (
                        <iframe
                          src={study.iframeUrl}
                          title={study.title}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                        />
                      ) : (
                        <div
                          className={styles.browserPlaceholder}
                          style={{
                            background: 'linear-gradient(135deg, #4F46E5, #3B82F6)',
                          }}
                        >
                          {study.title}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Content Side */}
                <div className={styles.contentSide}>
                  <div className={styles.category}>{study.category}</div>
                  <h2 className={styles.title}>{study.title}</h2>
                  <p className={styles.desc}>{study.desc}</p>

                  {/* Metric Pills */}
                  <div className={styles.metricPills}>
                    {study.metrics.map((metric, j) => (
                      <span key={j} className={styles.metricPill}>
                        <span className={styles.metricPillValue}>{metric.value}</span>
                        <span className={styles.metricPillLabel}>{metric.label}</span>
                      </span>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className={styles.tags}>
                    {study.tags.map((tag, j) => (
                      <span key={j} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  {/* View Live Button */}
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewLiveBtn}
                    >
                      View Live <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-5xl)', textAlign: 'center' }}>
            <SectionHeading
              title="Want results like these?"
              subtitle="Let's discuss how we can bring your next big idea to life."
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
