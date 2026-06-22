import React, { useEffect } from 'react';
import { Crown, ChevronRight, HelpCircle } from 'lucide-react';

const AuditionProcess = () => {
  useEffect(() => {
    document.title = "Audition Process | Miss Bharat 2026";
    window.scrollTo(0, 0);
  }, []);

  const applyLink = "https://indiaonematrimony.com/missbharat/apply";

  return (
    <div className="seo-page-wrapper" style={{ padding: '120px 0 60px 0', background: 'var(--gray-light)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Crown size={48} style={{ color: 'var(--gold)', marginBottom: '15px' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--purple-dark)', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'none', margin: '0 0 10px 0' }}>
            Miss Bharat™ 2026 Audition Process
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', fontStyle: 'italic' }}>
            A comprehensive overview of virtual and state-level audition stages.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', margin: '20px 0' }}>
            <div style={{ height: '2px', width: '60px', background: 'var(--gold)' }}></div>
            <Crown size={18} style={{ color: 'var(--gold)' }} />
            <div style={{ height: '2px', width: '60px', background: 'var(--gold)' }}></div>
          </div>
        </div>

        {/* Content Section */}
        <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '40px', border: '1px solid #edf2f7' }}>
          
          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 1: Online Digital Audition
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            To ensure complete safety, comfort, and equal accessibility for candidates across all states and union territories of India, the preliminary audition rounds are conducted entirely online. Once your registration is completed and verified, you will be assigned a specific digital audition slot and receive a secure video conferencing link via email. During this live virtual audition session, you will present a brief self-introduction and perform a simple, confident runway walk in your home environment. We advise candidates to prepare a well-lit, quiet room with a clean, uncluttered, neutral background. You should wear a neat, basic casual outfit, such as a simple t-shirt and jeans, and keep your makeup natural and minimal. This digital format completely removes the financial and geographical barriers of travel, allowing every young woman to showcase her potential comfortably and safely from her own home.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 2: Interview and Self-Introduction Round
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            Simultaneous with your runway walk, the digital audition features an interactive interview round with our selection panel. This phase is designed to assess your communication skills, clarity of thoughts, self-confidence, and overall personality. Miss Bharat™ is not just a search for aesthetic presence; we seek individuals who possess a strong voice, social awareness, and a positive, encouraging mindset. During the interview, you will be asked about your personal goals, your views on women empowerment, and the unique story you bring to the platform. We warmly welcome regional languages, and there is no pressure regarding prior public speaking or modeling exposure. What matters most is your authenticity, warmth, and the genuineness of your aspirations as an ambassador of modern India, representing your community with pride.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 3: State-Level Evaluations and Grand Finale
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            Contestants who successfully qualify through the virtual auditions will be designated as official state representatives. They will enter an intensive, structured training and grooming phase designed to build their professional skills for the grand national stage. This phase features a hybrid model combining comprehensive online workshops with physical state-level training programs covering runway posture, poise, voice modulation, media interaction, and styling. The entire journey culminates in a grand offline national finale week held in New Delhi, featuring premium hotel stays and full event hospitality. Finalists will participate in live runway shows, talent rounds, and final Q&A interviews judged by celebrity experts. The winner is crowned on a national platform, receiving a premium Volkswagen Virtus sedan and direct introductions to top modeling agencies, launching her career in fashion, modeling, and media.
          </p>

          {/* CTA Button */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={applyLink} className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
              Apply Now <ChevronRight size={20} />
            </a>
          </div>
        </div>

        {/* Page specific FAQs */}
        <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
          <h2 style={{ color: 'var(--purple-dark)', fontSize: '1.8rem', marginBottom: '30px', fontFamily: 'var(--font-heading)', textTransform: 'none', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              {
                q: "Is the first audition round completely online?",
                a: "Yes. The initial audition is conducted virtually via secure video call links, allowing candidates from any city or village in India to participate comfortably from their homes."
              },
              {
                q: "What should I wear for my digital audition?",
                a: "Please wear a solid-colored top and simple jeans. Choose a well-lit, quiet room with a plain wall as your background. Keep makeup minimal and natural."
              },
              {
                q: "How will I be informed about my audition slot?",
                a: "Once your application fee and document proofs are verified, you will receive a scheduling email containing your slot date, time, and instructions."
              },
              {
                q: "What happens if I miss my assigned virtual audition?",
                a: "If you face an emergency, notify our support team at least 24 hours in advance. Rescheduling is subject to slot availability and panel discretion."
              },
              {
                q: "What are the judges looking for in auditions?",
                a: "The panel looks for confidence, self-expression, communication clarity, and a positive mindset. Your unique story and personality are evaluated above modeling experience."
              }
            ].map((item, index) => (
              <div key={index} style={{ borderBottom: index < 4 ? '1px solid #edf2f7' : 'none', paddingBottom: index < 4 ? '20px' : '0' }}>
                <h3 style={{ color: 'var(--purple)', fontSize: '1.15rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={18} style={{ color: 'var(--gold-dark)', flexShrink: 0 }} />
                  {item.q}
                </h3>
                <p style={{ color: 'var(--gray)', lineHeight: '1.7', fontSize: '1rem', paddingLeft: '28px', margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditionProcess;
