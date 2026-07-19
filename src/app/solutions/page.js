'use client';

import { useState, useRef } from 'react';
import { Bot, LineChart, MessageCircle, Database, Code, Smartphone, Video, Palette, ChevronRight, X, Clock, Banknote, ListChecks, Wrench } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading/SectionHeading';
import Button from '@/components/Button/Button';
import styles from './page.module.css';
const solutions = [
  {
    icon: <Code size={28} />,
    title: 'Website Development',
    desc: 'Custom, high-performance websites built from scratch to perfectly represent your brand and convert visitors into clients.',
    features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast'],
    detailedDesc: 'Your website is your digital storefront. We don\'t rely on clunky templates; we code blazing-fast, custom websites using modern frameworks. Our focus is on striking aesthetics, flawless mobile responsiveness, technical SEO, and optimized conversion funnels to turn traffic into revenue.',
    steps: [
      { title: 'UI/UX Wireframing', desc: 'Creating structural blueprints and visual prototypes using Figma.' },
      { title: 'Frontend Development', desc: 'Translating designs into clean, responsive, and performant code.' },
      { title: 'CMS Integration & Launch', desc: 'Connecting a content management system so you can easily edit text and images.' }
    ],
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Sanity / Strapi CMS'],
    timeline: '4 - 6 Weeks',
    price: 'Starting at $500'
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Application Development',
    desc: 'Scalable web and mobile applications tailored to your business needs, delivering seamless user experiences.',
    features: ['Cross-Platform', 'Custom Architecture', 'Secure & Reliable'],
    detailedDesc: 'From complex SaaS platforms to native mobile apps, we engineer robust software solutions. We focus on scalable cloud architectures, secure authentication, real-time databases, and intuitive interfaces that keep users coming back. Whether it\'s an internal tool or a public-facing product, we build it to last.',
    steps: [
      { title: 'Architecture Planning', desc: 'Defining database schemas, API routes, and cloud infrastructure requirements.' },
      { title: 'Full-Stack Development', desc: 'Building the frontend interface alongside a secure, robust backend.' },
      { title: 'QA & App Store Submission', desc: 'Rigorous testing and handling the Apple/Google store approval processes.' }
    ],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'AWS / Google Cloud'],
    timeline: '8 - 12+ Weeks',
    price: 'Starting at $8,000'
  },
  {
    icon: <Video size={28} />,
    title: 'Video Editing Services',
    desc: 'Premium video editing that turns raw footage into compelling stories, perfect for YouTube, ads, and social media.',
    features: ['Engaging Cuts', 'Color Grading', 'Motion Graphics'],
    detailedDesc: 'Attention is the new currency. Our video editing team specializes in high-retention formats designed for YouTube, TikTok, and Instagram Reels. We incorporate dynamic pacing, professional color grading, crisp audio mixing, and engaging motion graphics to ensure your content stands out and stops the scroll.',
    steps: [
      { title: 'Footage Review & Scripting', desc: 'Analyzing raw files and outlining the narrative structure.' },
      { title: 'A-Cut & Pacing', desc: 'Trimming the fat and establishing a rhythm that maximizes viewer retention.' },
      { title: 'VFX & Sound Design', desc: 'Adding color grades, B-roll, motion graphics, and mixing the final audio track.' }
    ],
    techStack: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Logic Pro'],
    timeline: '3 - 5 Days / Video',
    price: 'Starting at $100 / Video'
  },
  {
    icon: <Palette size={28} />,
    title: 'Graphic Design',
    desc: 'Eye-catching visuals, branding, and packaging that make your product stand out in a crowded marketplace.',
    features: ['Brand Identity', 'Thumbnails & Ads', 'UI/UX Design'],
    detailedDesc: 'Design is silent ambassador of your brand. We craft visually stunning brand identities, high-converting ad creatives, and professional marketing collateral. By combining aesthetic principles with market psychology, we create designs that not only look beautiful but actually drive business results.',
    steps: [
      { title: 'Brand Discovery', desc: 'Understanding your target audience, competitors, and core messaging.' },
      { title: 'Concept Exploration', desc: 'Developing mood boards and initial design directions for feedback.' },
      { title: 'Refinement & Delivery', desc: 'Polishing the chosen concept and delivering all necessary file formats.' }
    ],
    techStack: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Midjourney'],
    timeline: '1 - 3 Weeks',
    price: 'Starting at $250'
  },
  {
    icon: <Bot size={28} />,
    title: 'AI Customer Support',
    desc: 'Intelligent chatbots that resolve queries 24/7, reducing ticket volume and providing instant answers to your customers.',
    features: ['24/7 Availability', 'Human Handoff', 'Multi-language Support'],
    detailedDesc: 'Our AI Customer Support solution integrates seamlessly with your existing helpdesk software to provide instant, accurate responses to common customer inquiries. By leveraging advanced Natural Language Processing (NLP), our bots understand context, sentiment, and intent, ensuring your customers feel heard while drastically reducing your support team\'s workload.',
    steps: [
      { title: 'Knowledge Base Ingestion', desc: 'We train the AI on your historical tickets, FAQs, and product documentation.' },
      { title: 'Workflow Design', desc: 'Mapping out escalation paths for complex queries that require human intervention.' },
      { title: 'Integration & Testing', desc: 'Deploying the bot to your live environment (Zendesk, Intercom, etc.) and testing edge cases.' }
    ],
    techStack: ['OpenAI / Anthropic', 'LangChain', 'Pinecone', 'Zendesk API'],
    timeline: '2 - 3 Weeks',
    price: 'Starting at $500'
  },
  {
    icon: <LineChart size={28} />,
    title: 'Lead Qualification AI',
    desc: 'Automated systems that engage visitors, ask qualifying questions, and route high-value leads directly to your sales team.',
    features: ['Instant Engagement', 'Custom Lead Scoring', 'Seamless Integration'],
    detailedDesc: 'Stop losing leads to slow response times. Our Lead Qualification AI engages website visitors the moment they land, asking targeted questions to score their purchasing intent. High-value leads are instantly routed to your CRM or directly to a sales rep via Slack/Email, ensuring you strike while the iron is hot.',
    steps: [
      { title: 'Discovery & Scoring Criteria', desc: 'Defining what makes a "qualified lead" for your specific business model.' },
      { title: 'Conversational Flow Setup', desc: 'Building dynamic chat flows that adapt based on user responses.' },
      { title: 'CRM & Alert Integration', desc: 'Connecting the AI to Salesforce/HubSpot and setting up instant notifications.' }
    ],
    techStack: ['Voiceflow / Botpress', 'Make.com', 'HubSpot API', 'Slack API'],
    timeline: '1 - 2 Weeks',
    price: 'Starting at $500'
  },
  {
    icon: <Database size={28} />,
    title: 'CRM Automation',
    desc: 'Eliminate manual data entry. Our solutions automatically sync data, update records, and trigger workflows in your CRM.',
    features: ['Automated Syncing', 'Workflow Triggers', 'Error Reduction'],
    detailedDesc: 'Manual data entry is the enemy of productivity. We build robust, error-free automation pipelines that connect your marketing, sales, and operations tools directly to your CRM. From automatic deal stage progression to customized onboarding emails, we make your systems talk to each other so your team doesn\'t have to.',
    steps: [
      { title: 'Process Audit', desc: 'Analyzing your current manual workflows and identifying bottlenecks.' },
      { title: 'Pipeline Construction', desc: 'Building the automated triggers and actions connecting your software stack.' },
      { title: 'Data Migration & Go-Live', desc: 'Ensuring existing data is formatted correctly before activating the automations.' }
    ],
    techStack: ['Zapier', 'Make.com', 'Airtable', 'Salesforce / HubSpot'],
    timeline: '2 - 4 Weeks',
    price: 'Starting at $1500'
  },
  {
    icon: <MessageCircle size={28} />,
    title: 'WhatsApp Automation',
    desc: 'Engage customers where they already are. Send notifications, process orders, and provide support directly through WhatsApp.',
    features: ['Direct Messaging', 'Automated Replies', 'Broadcast Campaigns'],
    detailedDesc: 'With over 2 billion active users, WhatsApp is the most direct channel to your customers. We build verified WhatsApp Business API solutions that can handle everything from automated order confirmations and appointment reminders to interactive catalog browsing and customer support—all within the chat interface.',
    steps: [
      { title: 'Meta Business Setup', desc: 'Securing API access and verifying your WhatsApp Business account.' },
      { title: 'Template Creation', desc: 'Designing and getting approval for highly-converting message templates.' },
      { title: 'Backend Integration', desc: 'Linking WhatsApp to your eCommerce store or booking system.' }
    ],
    techStack: ['WhatsApp Cloud API', 'Twilio', 'Node.js', 'Meta Graph API'],
    timeline: '2 - 3 Weeks',
    price: 'Starting at $500'
  }
];

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState(null);
  const cardsRef = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGrid} />
          <div className={styles.heroOrb} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Our <span className="gradient-text"><span className="cursive-accent">Solutions</span></span>
          </h1>
          <p className={styles.heroSubtitle}>
            From intelligent AI systems to premium creative services. We build exactly what your business needs to scale effortlessly.
          </p>
        </div>
      </section>

      <section className={styles.mainArea}>
        <div className="container">
          <div className={styles.grid}>
            {solutions.map((solution, i) => (
              <div
                key={i}
                className={`${styles.card} ${styles.cardClickable}`}
                ref={(el) => (cardsRef.current[i] = el)}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onClick={() => setSelectedSolution(solution)}
              >
                <div className={styles.iconWrapper}>
                  {solution.icon}
                </div>
                <h3 className={styles.title}>{solution.title}</h3>
                <p className={styles.desc}>{solution.desc}</p>
                <div className={styles.features}>
                  {solution.features.map((feature, j) => (
                    <div key={j} className={styles.feature}>
                      <ChevronRight size={14} className={styles.featureIcon} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center' }}>
            <SectionHeading
              title="Ready to automate and elevate?"
              subtitle="Let's discuss which solutions are right for your business."
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <Button href="/contact" variant="accent" size="lg">
                Book a Free Audit
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Modal Overlay */}
      {selectedSolution && (
        <div className={styles.modalOverlay} onClick={() => setSelectedSolution(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedSolution(null)}>
              <X size={20} />
            </button>

            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{selectedSolution.title}</h2>
              <p className={styles.modalDesc}>{selectedSolution.detailedDesc}</p>

              <div className={styles.priceTimelineGrid}>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}><Clock size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Timeline</span>
                  <span className={styles.detailValue}>{selectedSolution.timeline}</span>
                </div>
                <div className={styles.detailCard}>
                  <span className={styles.detailLabel}><Banknote size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> Starting Price</span>
                  <span className={styles.detailValue}>{selectedSolution.price}</span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              {/* Left Column: Steps */}
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}><ListChecks size={18} /> Implementation Steps</h4>
                <div className={styles.stepsList}>
                  {selectedSolution.steps.map((step, idx) => (
                    <div key={idx} className={styles.stepItem}>
                      <div className={styles.stepNumber}>{idx + 1}</div>
                      <div className={styles.stepContent}>
                        <h5>{step.title}</h5>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Tech Stack */}
              <div className={styles.modalSection}>
                <h4 className={styles.modalSectionTitle}><Wrench size={18} /> Tools & Technologies</h4>
                <div className={styles.techStack}>
                  {selectedSolution.techStack.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--space-2xl)', borderTop: '1px solid var(--border)', paddingTop: 'var(--space-xl)', display: 'flex', justifyContent: 'flex-end' }}>
              <Button href="/contact" variant="accent" size="md">
                Discuss this Solution
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
