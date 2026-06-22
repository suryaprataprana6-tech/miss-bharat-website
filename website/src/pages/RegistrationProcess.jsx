import React, { useEffect } from 'react';
import { Crown, ChevronRight, HelpCircle } from 'lucide-react';

const RegistrationProcess = () => {
  useEffect(() => {
    document.title = "Registration Process | Miss Bharat 2026";
    window.scrollTo(0, 0);
  }, []);

  const applyLink = "https://indiaonematrimony.com/missbharat/apply";

  return (
    <div className="seo-page-wrapper" style={{ padding: '120px 0 60px 0', background: 'var(--gray-light)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Crown size={48} style={{ color: 'var(--gold)', marginBottom: '15px' }} />
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--purple-dark)', fontSize: 'clamp(2rem, 4vw, 3rem)', textTransform: 'none', margin: '0 0 10px 0' }}>
            Miss Bharat™ 2026 Registration Process
          </h1>
          <p style={{ color: 'var(--gray)', fontSize: '1.1rem', fontStyle: 'italic' }}>
            A step-by-step guide to starting your journey in India's prestigious beauty pageant.
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
            Phase 1: Online Application Submission
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            To begin your journey toward the prestigious crown, you must first access our official digital platform to submit your initial application. The Miss Bharat Registration process has been meticulously designed to be fully online, ensuring accessibility for aspiring contestants from every corner of India, including metropolitan hubs, small towns, and rural areas. During this initial step, you will be asked to fill out a comprehensive form detailing your personal background, education, career achievements, and aspirations. You will also provide contact details that must remain active throughout the competition. A processing fee of ₹999 is required at this stage to cover administrative costs, initial screening, and system slot scheduling. We prioritize financial transparency, meaning there are absolutely no hidden fees or unexpected charges down the road. Once the application form is completed and payment is securely processed, you will receive an automated notification containing your registration receipt and next instructions.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 2: Document Verification & Photo Uploads
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            Following the successful submission of your online application, the next crucial step is document verification and portfolio photo upload. To ensure safety, legal compliance, and fairness for all candidates, our selection committee requires official government-issued identification. You will need to upload high-quality scans or clear photographs of records such as your Aadhaar Card, Passport, or Birth Certificate. This allows us to verify your citizenship and ensure you meet the official age requirements. Additionally, you must upload three clean, high-resolution photographs: a face-focused headshot, a waist-up mid-shot, and a full-body presentation shot. These photos should be taken in natural light or a well-lit room against a simple, neutral background. We advise candidates to avoid using digital filters, heavy editing, or sunglasses, as our judges look for natural beauty, raw confidence, and authentic traits. Our backend team reviews all documents and media within three to five business days.
          </p>

          <h2 style={{ color: 'var(--purple)', fontSize: '1.6rem', marginBottom: '15px', fontFamily: 'var(--font-heading)', textTransform: 'none' }}>
            Phase 3: Audition Scheduling & Onboarding
          </h2>
          <p style={{ color: 'var(--gray)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '25px' }}>
            Once your documents and photographs have passed the validation audit, you will receive a verification confirmation email containing your unique contestant ID. This ID is your key to the Miss Bharat platform and onboarding resources. Along with your ID, you will receive a digital preparation guide containing tips on presentation, speech, and basic runway posture, helping you prepare for the next step. Our team will coordinate with you to schedule your virtual audition slot, which is conducted over a secure video conferencing system. During this live digital audition, mentors and judges will interact with you to evaluate your self-introduction, communication skills, confidence, and basic walking style in a home environment. Passing this round officially makes you a state representative, advancing you to hybrid grooming workshops and state-level training programs that prepare you for the national stage in New Delhi.
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
                q: "What is the fee for registration?",
                a: "The registration fee is ₹999 only, which covers processing, verification checks, and scheduling of your virtual audition session. This is a one-time non-refundable fee with complete transparency."
              },
              {
                q: "How will I know my registration is successful?",
                a: "You will immediately receive a digital payment receipt and a confirmation email containing your application ID. Please save this application ID for future reference and verification."
              },
              {
                q: "Can I edit my registration details after submission?",
                a: "If you need to make changes to your registration details after submission, you can contact our technical support hotline at +91 83407 14813 or email us with your contestant ID, and our team will update it."
              },
              {
                q: "What if I do not receive the confirmation email?",
                a: "If you don't receive an email within 24 hours, check your spam or promotions folder. If it is still missing, contact support via WhatsApp or call to verify your registration status."
              },
              {
                q: "Is it safe to pay online?",
                a: "Yes. Payments are routed through industry-standard secure gateways with end-to-end encryption. Miss Bharat™ is an MSME-registered brand that prioritizes transaction safety and user confidentiality."
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

export default RegistrationProcess;
