import React, { useEffect } from 'react';
import { Crown, ChevronRight, HelpCircle } from 'lucide-react';

const AgeLimit = () => {
  useEffect(() => {
    document.title = "Age Limit | Miss Bharat 2026";
    window.scrollTo(0, 0);
  }, []);

  const applyLink = "https://indiaonematrimony.com/missbharat/apply";

  return (
    <div className="seo-page-wrapper" style={{ padding: '120px 0 60px 0', background: 'var(--gray-light)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Crown size={48} style={{ color: 'var(--gold)', marginBottom: '15px' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--purple-dark)', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'none', margin: '0 0 10px 0' }}>
            Miss Bharat™ 2026 Age Limit Guidelines
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', fontStyle: 'italic' }}>
            Official age eligibility guidelines and validation rules for candidates.
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
            Phase 1: Official Age Requirements
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            To ensure a fair, dynamic, and balanced competition, the organizing committee of Miss Bharat™ 2026 has established a broad age eligibility bracket. All candidates must be between 16 and 28 years of age at the time of submitting their application form. This wide range was intentionally selected to welcome young high school and college students who are starting their pageantry careers early, as well as mature working professionals, postgraduates, and entrepreneurs who bring a wealth of diverse life experiences to the stage. If you are 28 years old when you apply but celebrate your 29th birthday during the subsequent competition cycles or grand finale, you remain fully eligible, as your eligibility is determined by your initial submission date. This ensures that every applicant has a fair window to represent their state.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 2: Consent Policy for Minor Participants
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            For participants who are 16 or 17 years old at the time of registration, they are legally classified as minors in India. Our organization prioritizes the safety, security, and well-being of all contestants, especially our younger aspirants. Therefore, minor candidates are required to obtain explicit parental or legal guardian consent to register. During the document verification phase, minor applicants must download and submit a signed guardian consent form. This form certifies that their parent or guardian approves of their participation in the online auditions, hybrid training workshops, and potential travel for physical rounds. Our support desk maintains close communication with parents and guardians to keep them informed about schedules, safety guidelines, and event formatting, ensuring a secure and positive growth experience for families.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 3: Age Verification and Validation Process
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            To maintain complete transparency and the integrity of the national competition, all registered age claims are audited by our document review board. Every participant must upload valid, government-issued identification that clearly displays their name, photograph, and date of birth. The accepted documents for age verification include an Aadhaar Card, Passport, Birth Certificate, or School leaving credential. These files must be securely uploaded through our official online registration portal. All submitted records are kept strictly confidential and are used solely for registration validation. If there are minor spelling errors or discrepancies on your primary document, you must contact our support hotline at +91 83407 14813 prior to your virtual audition slot to submit alternative records and secure your position.
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
                q: "What if I turn 29 during the pageant?",
                a: "If you are 28 at the time of submission but turn 29 before the grand finale, you remain fully eligible to participate. Eligibility is assessed relative to your application date."
              },
              {
                q: "Do minor candidates need parent consent?",
                a: "Yes. All applicants under 18 years of age must provide a signed parent or guardian consent form during the verification phase to proceed with auditions."
              },
              {
                q: "What documents are accepted for age proof?",
                a: "We accept government-issued proofs containing your name and date of birth, such as an Aadhaar Card, Passport, Birth Certificate, or Matriculation Marksheet."
              },
              {
                q: "Can I apply if I am exactly 16 years old?",
                a: "Yes. Young women who have reached the age of 16 are welcome to apply. Ensure you secure guardian consent to successfully complete your registration."
              },
              {
                q: "What happens if my documents have incorrect DOB?",
                a: "If your verification documents have a discrepancy in the date of birth, please contact our support desk at +91 83407 14813 immediately to discuss alternative valid records."
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

export default AgeLimit;
