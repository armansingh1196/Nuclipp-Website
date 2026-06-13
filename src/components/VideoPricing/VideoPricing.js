'use client';

import { useState } from 'react';
import { Check, Info } from 'lucide-react';
import Button from '@/components/Button/Button';
import styles from './VideoPricing.module.css';

const pricingData = {
  organic: [
    {
      title: '4-5 Minute Videos',
      videosPerMonth: 12,
      monthly: '$500',
      monthlyPerVideo: '$45/video',
      quarterly: '$1,449',
      quarterlyPerVideo: '$40/video',
      pitch: 'Save $51 and reduce video cost by 10%!',
      isPopular: false
    },
    {
      title: '8-10 Minute Videos',
      videosPerMonth: 12,
      monthly: '$750',
      monthlyPerVideo: '$65/video',
      quarterly: '$2,149',
      quarterlyPerVideo: '$60/video',
      pitch: 'Save $101 and reduce video cost by 10%!',
      isPopular: true
    }
  ],
  premonetized: [
    {
      title: '4-5 Minute Videos',
      videosPerMonth: 12,
      monthly: '$500 + Channel Price',
      quarterly: '$1,449 + Channel Price',
      pitch: 'Starting at $250 for a premonetized channel.',
      isPopular: false
    },
    {
      title: '8-10 Minute Videos',
      videosPerMonth: 12,
      monthly: '$750 + Channel Price',
      quarterly: '$2,149 + Channel Price',
      pitch: 'Best deal for rapid monetization!',
      isPopular: true
    }
  ],
  channels: [
    { subs: '3,000 Subscribers', price: '$250', pitch: 'Save $50 compared to growing organically!' },
    { subs: '5,000 Subscribers', price: '$300', pitch: 'Grow faster! Just $50 more for 5,000 subs.' },
    { subs: '10,000 Subscribers', price: '$400', pitch: 'Save $100 vs. spending months growing to 10k!' },
    { subs: '20,000 Subscribers', price: '$500', pitch: 'Best value! Get 20k subs for just $500.', isPopular: true },
  ],
  extras: [
    { title: 'Script (1,000 Words)', price: '$10', desc: 'Affordable, high-quality content creation.' },
    { title: 'Script (2,000 Words)', price: '$15', desc: 'Save more with longer scripts – just $7.5/1k words!' },
    { title: 'Script (5,000 Words)', price: '$30', desc: 'As low as $6/1k words for bulk orders!' },
    { title: 'Videos', price: '$40-$80 / video', desc: 'Custom pricing based on video complexity.' },
    { title: 'Thumbnails', price: '$10 / thumb', desc: 'High-converting designs for less than a coffee!' },
    { title: 'SEO & Uploading', price: '$10 / video', desc: 'Optimize and publish hassle-free.' },
    { title: 'Consultation', price: '$25 / hour', desc: 'One-on-one YouTube growth strategy session.' },
  ]
};

export default function VideoPricing() {
  const [activeTab, setActiveTab] = useState('organic');
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'quarterly'

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.negotiableNote}>
          <Info size={16} />
          <span>All prices are flexible — we can negotiate based on your specific needs and volume.</span>
        </div>
        
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'organic' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('organic')}
          >
            Organic Growth
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'premonetized' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('premonetized')}
          >
            With Premonetized Channel
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'channels' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('channels')}
          >
            Buy Channels Only
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'extras' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('extras')}
          >
            Individual Extras
          </button>
        </div>
      </div>

      <div className={styles.content}>
        {/* Organic & Premonetized Plans */}
        {(activeTab === 'organic' || activeTab === 'premonetized') && (
          <>
            <div className={styles.billingToggle}>
              <span className={billingCycle === 'monthly' ? styles.activeCycle : ''}>Monthly</span>
              <button 
                className={styles.toggleTrack}
                onClick={() => setBillingCycle(b => b === 'monthly' ? 'quarterly' : 'monthly')}
              >
                <div className={`${styles.toggleKnob} ${billingCycle === 'quarterly' ? styles.toggleRight : ''}`} />
              </button>
              <span className={billingCycle === 'quarterly' ? styles.activeCycle : ''}>3-Month Plan <span className={styles.saveBadge}>Save 10%</span></span>
            </div>

            <div className={styles.cardsGrid}>
              {pricingData[activeTab].map((plan, i) => (
                <div key={i} className={`glass-card ${styles.card} ${plan.isPopular ? styles.popularCard : ''}`}>
                  {plan.isPopular && <div className={styles.popularBadge}>Most Popular</div>}
                  <h3 className={styles.planTitle}>{plan.title}</h3>
                  <div className={styles.planSub}>12 Videos Per Month</div>
                  
                  <div className={styles.priceContainer}>
                    <div className={styles.price}>
                      {billingCycle === 'monthly' ? plan.monthly : plan.quarterly}
                    </div>
                    {plan.monthlyPerVideo && (
                      <div className={styles.pricePerVideo}>
                        {billingCycle === 'monthly' ? plan.monthlyPerVideo : plan.quarterlyPerVideo}
                      </div>
                    )}
                  </div>

                  <div className={styles.pitchBox}>
                    {billingCycle === 'quarterly' && activeTab === 'organic' ? plan.pitch : 
                     (activeTab === 'premonetized' ? plan.pitch : 'Consistent quality content to grow your channel.')}
                  </div>

                  <ul className={styles.featuresList}>
                    <li><Check size={16} /> Script to publish workflow</li>
                    <li><Check size={16} /> Professional voiceover & editing</li>
                    <li><Check size={16} /> High-CTR thumbnail included</li>
                    <li><Check size={16} /> Unlimited revisions</li>
                  </ul>

                  <Button href="/contact" variant={plan.isPopular ? "video" : "secondary"} fullWidth>
                    Select Plan
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Channels Only */}
        {activeTab === 'channels' && (
          <div className={styles.channelsGrid}>
            {pricingData.channels.map((channel, i) => (
              <div key={i} className={`glass-card ${styles.channelCard} ${channel.isPopular ? styles.popularCard : ''}`}>
                {channel.isPopular && <div className={styles.popularBadge}>Best Value</div>}
                <div className={styles.channelHeader}>
                  <h3>{channel.subs}</h3>
                  <div className={styles.channelDesc}>Ready for monetization</div>
                </div>
                <div className={styles.channelPrice}>{channel.price}</div>
                <div className={styles.channelPitch}>{channel.pitch}</div>
                <Button href="/contact" variant="secondary" fullWidth>Inquire Now</Button>
              </div>
            ))}
          </div>
        )}

        {/* Extras */}
        {activeTab === 'extras' && (
          <div className={styles.extrasList}>
            {pricingData.extras.map((extra, i) => (
              <div key={i} className={`glass-card ${styles.extraRow}`}>
                <div className={styles.extraInfo}>
                  <h4>{extra.title}</h4>
                  <p>{extra.desc}</p>
                </div>
                <div className={styles.extraPrice}>{extra.price}</div>
                <Button href="/contact" variant="outline" size="sm">Add</Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
