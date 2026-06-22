import React, { useEffect } from 'react';
import { Crown, ChevronRight, HelpCircle } from 'lucide-react';

const EligibilityCriteria = () => {
  useEffect(() => {
    document.title = "Eligibility Criteria | Miss Bharat 2026";
    window.scrollTo(0, 0);
  }, []);

  const applyLink = "https://indiaonematrimony.com/missbharat/apply";

  return (
    <div className="seo-page-wrapper" style={{ padding: '120px 0 60px 0', background: 'var(--gray-light)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Crown size={48} style={{ color: 'var(--gold)', marginBottom: '15px' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--purple-dark)', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'none', margin: '0 0 10px 0' }}>
            Miss Bharat™ 2026 Eligibility Criteria
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', fontStyle: 'italic' }}>
            Requirements and guidelines for participants aspiring to join Miss Bharat 2026.
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
            Phase 1: Age and Citizenship Requirements
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            To qualify as a candidate for this prestigious national beauty pageant in India, applicants must meet specific age and citizenship guidelines. Contestants must fall within the age range of 16 to 28 years old at the time they submit their official application. Regarding nationality, the pageant is proud to open its doors globally, embracing the global Indian diaspora. We accept registrations from female Indian citizens residing in any state or territory, as well as Non-Resident Indians (NRIs) and Overseas Citizens of India (OCI) cardholders who wish to reconnect with their heritage and represent modern India. During the onboarding verification step, you will be required to upload valid government-issued records such as your Aadhaar Card, Passport, or Birth Certificate to prove your age and nationality parameters. This verification process ensures complete safety, legal compliance, transparency, and a fair, equal-opportunity environment for everyone joining the platform.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 2: Physical Attributes and Marital Status Policy
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            In line with our dedication to modern inclusivity, self-worth, and progressive values, Miss Bharat™ 2026 has completely broken away from traditional pageant restrictions. We do not impose any rigid requirements on height, weight, body measurements, skin tone, or marital status. We believe that true beauty cannot be measured by physical conventions, but is instead reflected in a candidate's self-confidence, grace, communication skills, and social intelligence. Therefore, whether you are single, married, divorced, or a mother, you are fully eligible and encouraged to apply if you meet the age criteria. This inclusive policy creates a highly democratic and supportive space where women from diverse professional, academic, and personal backgrounds can showcase their capabilities, share their unique stories, and build a lasting personal brand on a national stage without fear of bias or exclusion.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 3: Experience and Language Qualifications
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            Prior experience in professional modeling, runway walking, or beauty pageantry is absolutely not required to register for Miss Bharat™ 2026. We take great pride in discovering fresh talent and raw potential, welcoming beginners, college freshers, and women who have never stepped onto a public stage or runway before. Selected contestants will receive comprehensive grooming, ramp walk choreography, styling, and public speaking training from top fashion industry experts and celebrity mentors. Furthermore, there are no strict language restrictions or barriers. You are encouraged to express yourself in English, Hindi, or any regional Indian language of your choice during your virtual audition and Q&A rounds. We value authenticity, original thought, and the strength of your personal journey above fluent linguistics, professional portfolios, or past media exposure.
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
                q: "Are NRI or OCI cardholders eligible to register?",
                a: "Yes. Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) are fully eligible to apply and participate, provided they verify their identity records and travel to New Delhi for the finale rounds."
              },
              {
                q: "Is there any height or weight restriction?",
                a: "No. Unlike traditional pageants, Miss Bharat™ 2026 has completely eliminated height and weight restrictions, focusing entirely on personality, intelligence, talent, and public speaking confidence."
              },
              {
                q: "Do I need modeling experience to apply?",
                a: "No. Beginners and freshers are highly welcomed. Our expert team of runway mentors and beauty choreographers will provide complete training during the state-level and finale stages."
              },
              {
                q: "Can married women participate in Miss Bharat 2026?",
                a: "Yes. The pageant is open to all female candidates between 16 and 28 years of age, regardless of their marital status. Married women and mothers are fully eligible and encouraged to apply."
              },
              {
                q: "What language skills are expected?",
                a: "There are no language barriers. Candidates are free to express themselves in English, Hindi, or any regional Indian language. We value your voice, clarity of thoughts, and self-confidence above all else."
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

export default EligibilityCriteria;
