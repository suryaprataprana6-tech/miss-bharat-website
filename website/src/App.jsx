import React, { useState, useEffect, useRef } from 'react';
import { Crown, Star, Calendar, MapPin, CheckCircle2, Phone, Mail, MessageCircle, ChevronRight, ChevronLeft, Award, Camera, TrendingUp, X, Tag, Globe, Sparkles } from 'lucide-react';
import './App.css';

import smallbanner from './smallbanner.jpeg';
import virtus from './virtus.jfif';
import heroBackground from './Landingpage011.jpg';

import SelfieCamera from './components/SelfieCamera';

const galleryImages = [
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(1).JPG?updatedAt=1781678565453",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(7).JPG?updatedAt=1781678556811",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(4).JPG?updatedAt=1781678520234",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(3).JPG?updatedAt=1781678177543",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(5).JPG?updatedAt=1781678177602",
  "https://ik.imagekit.io/ew7ar5inl/src/smallbanner.jpeg?updatedAt=1781678137070",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(3).jpeg?updatedAt=1781678137064",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(8).jpeg?updatedAt=1781678134824",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(10).jpeg?updatedAt=1781678134762",
  "https://ik.imagekit.io/ew7ar5inl/src/Gallery01%20(9).jpeg?updatedAt=1781678134330"
];

function App() {
  const applyLink = "https://indiaonematrimony.com/missbharat/apply";





  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isSelfieOpen, setIsSelfieOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextLightboxImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevLightboxImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);





  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="nav-logo">
            <img 
              src="/logo.png" 
              alt="Miss Bharat Official Logo" 
              className="site-logo" 
            />
            <span className="brand-text">Miss Bharat™</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#prizes">Prizes</a>
            <a href="#eligibility">Eligibility</a>
            <a href="#contact">Contact</a>
            <a href={applyLink} className="btn btn-primary nav-cta">Apply Now</a>
          </div>
        </div>
      </nav>

      {/* Ultra-Premium Cinematic Hero Section */}
      <section className="hero-premium" style={{ backgroundImage: `url(${heroBackground})` }}>

        <div className="hero-layout container">
          {/* Left Side: Content */}
          <div className="hero-text-content">
            <h1 className="premium-heading animate-slide-up-delay-1" style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', lineHeight: '1.2' }}>
              <span className="heading-white" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', textTransform: 'none', display: 'block' }}>
                Miss Bharat™ 2026
              </span>
              <span className="heading-gold" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)', textTransform: 'none', display: 'block', lineHeight: '1.1', marginTop: '5px' }}>
                India's Prestigious National Beauty Pageant
              </span>
            </h1>
            
            <h2 className="animate-fade-in-delay-2" style={{ color: '#E2D0ED', fontSize: '1.25rem', fontWeight: '500', marginBottom: '20px', textTransform: 'none', fontFamily: 'var(--font-body)', lineHeight: '1.4' }}>
              Register for Miss Bharat™ 2026 | Beauty, Talent, Confidence & National Recognition
            </h2>

            <div className="heading-divider animate-fade-in-delay-2">
              <div className="divider-line"></div>
              <Crown size={24} className="divider-icon text-gold" />
              <div className="divider-line"></div>
            </div>

            <p className="hero-subtext animate-slide-up-delay-2">
              Miss Bharat™ 2026 is one of India's prestigious national beauty pageants that empowers women through talent, confidence, grooming, personality development and national-level exposure. Participate in virtual auditions, state-level competitions and the grand national finale in Delhi. Build your confidence, showcase your talent and unlock opportunities in fashion, media and entertainment.
            </p>

            <div className="hero-actions animate-slide-up-delay-3">
              <a href={applyLink} className="btn-premium-solid">
                Apply Now <ChevronRight size={20} />
              </a>
              <a href="#about" className="btn-premium-outline">
                Explore The Journey <ChevronRight size={20} />
              </a>
            </div>

            {/* Benefit Highlights */}
            <div className="hero-benefits animate-fade-in-delay-4 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 bg-purple-950/20 backdrop-blur-md p-5 rounded-2xl border border-amber-500/10 w-full">
              <div className="benefit-item flex items-start gap-3">
                <Tag className="benefit-icon text-amber-400 shrink-0" size={24} />
                <div className="benefit-text">
                  <span className="b-title text-white font-bold text-sm block">Free Registration</span>
                  <span className="b-desc text-amber-500/80 text-xs block">100% Free Entry</span>
                </div>
              </div>

              <div className="benefit-item flex items-start gap-3">
                <Globe className="benefit-icon text-amber-400 shrink-0" size={24} />
                <div className="benefit-text">
                  <span className="b-title text-white font-bold text-sm block">National Level</span>
                  <span className="b-desc text-amber-500/80 text-xs block">Competition</span>
                </div>
              </div>

              <div className="benefit-item flex items-start gap-3">
                <Sparkles className="benefit-icon text-amber-400 shrink-0" size={24} />
                <div className="benefit-text">
                  <span className="b-title text-white font-bold text-sm block">Professional</span>
                  <span className="b-desc text-amber-500/80 text-xs block">Grooming</span>
                </div>
              </div>

              <div className="benefit-item flex items-start gap-3">
                <Star className="benefit-icon text-amber-400 shrink-0" size={24} />
                <div className="benefit-text">
                  <span className="b-title text-white font-bold text-sm block">Celebrity</span>
                  <span className="b-desc text-amber-500/80 text-xs block">Mentorship</span>
                </div>
              </div>

              <div className="benefit-item flex items-start gap-3">
                <Award className="benefit-icon text-amber-400 shrink-0" size={24} />
                <div className="benefit-text">
                  <span className="b-title text-white font-bold text-sm block">Media</span>
                  <span className="b-desc text-amber-500/80 text-xs block">Recognition</span>
                </div>
              </div>

              <div className="benefit-item flex items-start gap-3">
                <MapPin className="benefit-icon text-amber-400 shrink-0" size={24} />
                <div className="benefit-text">
                  <span className="b-title text-white font-bold text-sm block">Grand Finale</span>
                  <span className="b-desc text-amber-500/80 text-xs block">in Delhi</span>
                </div>
              </div>
            </div>
          </div>
          </div>

        {/* Floating Action Buttons */}
        <div className="floating-socials animate-fade-in-delay-4 z-50">
          
          {/* WhatsApp Button */}
          <div className="relative group flex items-center justify-end">
            <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-200 bg-[#0f001c]/95 text-[#ffd700] border border-amber-500/30 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg select-none pointer-events-none">
              Chat on WhatsApp
            </span>
            <a 
              href="https://wa.me/918340714813" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="floating-btn flex items-center justify-center bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border-[#25D366]/40 hover:border-[#25D366]" 
              aria-label="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.517 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.966 14.122 1.05 11.62 1.05c-5.45 0-9.875 4.37-9.879 9.799-.002 1.802.484 3.562 1.408 5.113l-.955 3.49 3.633-.941c1.554.838 3.033 1.272 4.814 1.272zm8.254-7.235c-.344-.172-2.037-1.002-2.349-1.115-.312-.113-.539-.17-.766.172-.227.341-.877 1.115-1.076 1.342-.198.228-.396.256-.74.085-.344-.173-1.452-.536-2.766-1.706-1.022-.912-1.711-2.038-1.912-2.383-.2-.344-.022-.53.149-.701.154-.154.344-.401.516-.602.172-.201.23-.344.344-.573.114-.229.057-.429-.028-.602-.086-.173-.766-1.844-1.05-2.529-.276-.665-.553-.574-.766-.585-.199-.01-.426-.011-.653-.011-.227 0-.596.085-.908.429-.312.344-1.192 1.166-1.192 2.842 0 1.677 1.22 3.298 1.39 3.527.17.229 2.4 3.665 5.812 5.112.812.344 1.446.549 1.94.707.815.259 1.558.223 2.146.135.655-.098 2.037-.833 2.321-1.636.284-.803.284-1.491.199-1.636-.086-.145-.313-.229-.656-.401z"/>
              </svg>
            </a>
          </div>

          {/* Phone Call Button */}
          <div className="relative group flex items-center justify-end">
            <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-200 bg-[#0f001c]/95 text-[#ffd700] border border-amber-500/30 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg select-none pointer-events-none">
              Call Now
            </span>
            <a 
              href="tel:+918340714813" 
              className="floating-btn flex items-center justify-center bg-blue-500/10 hover:bg-blue-600 text-blue-500 hover:text-white border-blue-500/40 hover:border-blue-600" 
              aria-label="Call Now"
            >
              <Phone size={22} />
            </a>
          </div>

          {/* AI Selfie Camera Button */}
          <div className="relative group flex items-center justify-end">
            <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all duration-200 bg-[#0f001c]/95 text-[#ffd700] border border-amber-500/30 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg select-none pointer-events-none">
              AI Selfie Camera
            </span>
            <button 
              onClick={() => setIsSelfieOpen(true)}
              className="floating-btn flex items-center justify-center bg-amber-500/10 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-600 text-amber-500 hover:text-purple-950 border-amber-500/40 hover:border-amber-400 cursor-pointer" 
              aria-label="AI Selfie Camera"
            >
              <Camera size={22} />
            </button>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-title" style={{textAlign: 'left'}}>About Miss Bharat™</h2>
              <p>Miss Bharat™ is a national beauty pageant celebrating beauty, intelligence, talent, and social impact. It empowers women across India to become leaders, role models, and ambassadors of positive change.</p>
              <p>We aim to provide women across India with opportunities to shine in fashion, modeling, leadership, and personal growth. Our mission is to inspire the next generation of women to embrace their individuality, confidence, and dreams while representing modern India with pride and elegance.</p>
              
              <ul className="feature-list" style={{marginTop: '30px'}}>
                <li><CheckCircle2 className="feature-icon" /> Professional Photoshoot & Ramp Walk Training</li>
                <li><CheckCircle2 className="feature-icon" /> Expert Grooming Sessions</li>
                <li><CheckCircle2 className="feature-icon" /> Participation in Miss Bharat Award 2026</li>
              </ul>
            </div>
            <div className="about-image">
              <img 
                src={smallbanner} 
                alt="About Miss Bharat" 
                loading="lazy"
                className="w-full h-full object-cover rounded-3xl shadow-2xl" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      {/* Why Join Miss Bharat™ 2026 Section */}
      <section id="why-participate" className="info-section">
        <div className="container">
          <h2 className="section-title">Why Join Miss Bharat™ 2026?</h2>
          <div className="grid-3">
            <div className="card">
              <Star size={40} className="card-icon" />
              <h3>National Recognition</h3>
              <p>Gain immense visibility on a prestigious national stage with official recognition across India.</p>
            </div>
            <div className="card">
              <Sparkles size={40} className="card-icon" />
              <h3>Professional Grooming Sessions</h3>
              <p>Learn from top industry experts, ramp walk choreographers, and professional beauty mentors.</p>
            </div>
            <div className="card">
              <TrendingUp size={40} className="card-icon" />
              <h3>Personality Development</h3>
              <p>Enhance your public speaking, etiquette, confidence, and leadership presence for a successful career.</p>
            </div>
            <div className="card">
              <Camera size={40} className="card-icon" />
              <h3>Media Exposure</h3>
              <p>Get featured in leading fashion magazines, digital media campaigns, and press coverage across the country.</p>
            </div>
            <div className="card">
              <Award size={40} className="card-icon" />
              <h3>Confidence Building</h3>
              <p>Overcome stage fear, build robust self-esteem, and discover your true voice and potential.</p>
            </div>
            <div className="card">
              <Globe size={40} className="card-icon" />
              <h3>Networking Opportunities</h3>
              <p>Build lasting relationships with elite designers, talent scouts, casting directors, and peer contestants.</p>
            </div>
            <div className="card">
              <Crown size={40} className="card-icon" />
              <h3>Women Empowerment</h3>
              <p>Step into a dedicated space designed to support female leaders, change-makers, and visionaries.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Prizes Section */}
      <section id="prizes" className="about">
        <div className="container">
          <h2 className="section-title">Grand Prizes & Awards</h2>
          <div className="about-grid" style={{gridTemplateColumns: '1fr 1.5fr'}}>
            <div className="about-image">
              <img 
                src={virtus} 
                alt="Volkswagen Virtus Grand Prize" 
                loading="lazy"
                className="w-full h-full object-cover rounded-3xl shadow-2xl" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              />
            </div>
            <div className="about-text">
              <h3 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--gold-dark)'}}>1st Prize: Volkswagen Virtus</h3>
              <p style={{fontSize: '1.2rem', marginBottom: '30px'}}>The headline grand prize for Miss Bharat Award 2026 - premium German engineering and standout style for our crowned winner.</p>
              
              <ul className="feature-list">
                <li><Award className="feature-icon" /> <strong>Winner Crown & Trophy:</strong> Signature ceremony moment & ambassador recognition</li>
                <li><Award className="feature-icon" /> <strong>Cash Prizes:</strong> Rewarding the excellence of our finalists</li>
                <li><Award className="feature-icon" /> <strong>Brand Endorsements:</strong> Curated introductions with aligned partner labels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="gallery" className="video-section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h2 className="section-title" style={{marginBottom: '15px'}}>Miss Bharat™ Video Gallery</h2>
            <p style={{fontSize: '1.3rem', color: 'var(--gray)', fontStyle: 'italic'}}>Experience the Glamour, Confidence and Journey of India's Most Prestigious Beauty Pageant</p>
          </div>
          
          <div className="video-grid">
            <div className="video-card">
              <video
                src="https://ik.imagekit.io/ew7ar5inl/public/video01.mp4?updatedAt=1781678065333"
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-card">
              <video
                src="https://ik.imagekit.io/ew7ar5inl/public/video02.mp4?updatedAt=1781678063580"
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="video-content-block">
              <h3 style={{fontSize: '2rem', marginBottom: '20px', color: 'var(--gold-dark)'}}>Experience Miss Bharat™ in Action</h3>
              <p style={{marginBottom: '20px', fontSize: '1.1rem', color: 'var(--gray)', lineHeight: '1.8'}}>
                Watch real moments from auditions, runway walks, grooming sessions, and crowning celebrations. Discover the confidence, talent, and transformation that define the Miss Bharat™ journey.
              </p>
              <ul className="feature-list" style={{marginBottom: '30px'}}>
                <li><CheckCircle2 className="feature-icon" /> National Level Beauty Pageant</li>
                <li><CheckCircle2 className="feature-icon" /> Professional Grooming Sessions</li>
                <li><CheckCircle2 className="feature-icon" /> Grand Finale & Crown Ceremony</li>
                <li><CheckCircle2 className="feature-icon" /> Media Coverage & Recognition</li>
                <li><CheckCircle2 className="feature-icon" /> Women Empowerment Platform</li>
              </ul>
              <a href={applyLink} className="btn btn-primary">Apply Now <ChevronRight size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="photo-gallery" className="photo-gallery-section">
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <h2 className="section-title" style={{marginBottom: '15px'}}>Miss Bharat™ Photo Gallery</h2>
            <p style={{fontSize: '1.3rem', color: 'var(--gray)', fontStyle: 'italic'}}>Capturing the Moments of Beauty, Talent and Success</p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <div 
                key={index} 
                className="gallery-item animate-fade-in" 
                onClick={() => openLightbox(index)}
              >
                <img src={src} alt={`Miss Bharat Gallery ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="gallery-content-block" style={{marginTop: '50px', textAlign: 'center', background: 'var(--white)', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '2px solid var(--gold)'}}>
            <h3 style={{fontSize: '2rem', marginBottom: '15px', color: 'var(--purple)'}}>Memories of Miss Bharat™</h3>
            <p style={{fontSize: '1.1rem', color: 'var(--gray)', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6'}}>
              Explore unforgettable moments from auditions, grooming sessions, award ceremonies, and the journey of our inspiring contestants.
            </p>
            <a href={applyLink} className="btn btn-primary" style={{transform: 'scale(1.05)'}}>Apply Now <ChevronRight size={20} /></a>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="info-section">
        <div className="container">
          <h2 className="section-title">Eligibility Criteria</h2>
          <div className="grid-3">
            <div className="card">
              <Calendar size={40} className="card-icon" />
              <h3>Age & Marital Status</h3>
              <p>Girls Age: 16–28 Years (Open to All).</p>
            </div>
            <div className="card">
              <Star size={40} className="card-icon" />
              <h3>Experience</h3>
              <p>Beginners & Freshers are welcome. No prior modeling experience is mandatory.</p>
            </div>
            <div className="card">
              <MapPin size={40} className="card-icon" />
              <h3>Location</h3>
              <p>Apply from any city in India. No height restriction.</p>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '50px'}}>
             <div style={{display: 'inline-block', background: 'var(--white)', padding: '20px 40px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '2px solid var(--gold)'}}>
                <h3 style={{marginBottom: '10px', color: 'var(--purple)'}}>Registration Fee: ₹999 Only</h3>
                <p style={{color: 'var(--gray)'}}>No Hidden Charges • No Grooming Fees</p>
             </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section id="faq" className="about" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                q: "Who can apply for Miss Bharat™ 2026?",
                a: "Women across India who meet the eligibility criteria can apply."
              },
              {
                q: "Is there any registration fee?",
                a: "No, registration is currently free."
              },
              {
                q: "What are the competition stages?",
                a: "Virtual Audition → State Level Round → National Finale in Delhi."
              },
              {
                q: "Will participants receive certificates?",
                a: "Yes, selected participants will receive recognition and certificates."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                style={{ 
                  background: 'var(--white)', 
                  padding: '25px 30px', 
                  borderRadius: '15px', 
                  boxShadow: '0 5px 15px rgba(0,0,0,0.02)',
                  borderLeft: '4px solid var(--gold)',
                  textAlign: 'left'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--purple-dark)', fontWeight: '700' }}>{faq.q}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-banner">
        <div className="container">
          <h2>Your Journey to the Crown Begins Here</h2>
          <p>Take the first step toward the runway, the crown, and a career in modeling and fashion.</p>
          <a href={applyLink} className="btn btn-primary" style={{transform: 'scale(1.1)'}}>Apply for Miss Bharat™ 2026</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="flex items-center gap-4 min-w-0 overflow-hidden" style={{marginBottom: '20px'}}>
                <img
                  src="/logo.png"
                  alt="Miss Bharat Logo"
                  loading="lazy"
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain flex-shrink-0"
                />
                <h3 className="font-bold text-[#D4AF37] whitespace-nowrap text-[28px] md:text-[36px] lg:text-[42px] min-w-0 overflow-hidden" style={{ margin: 0, fontFamily: 'var(--font-heading)' }}>
                  Miss Bharat™
                </h3>
              </div>
              <p style={{color: '#ccc', marginBottom: '18px', fontSize: '0.95rem', lineHeight: '1.6'}}>
                Miss Bharat™ is India's prestigious national beauty pageant dedicated to empowering women through confidence, talent, grooming, leadership and national-level recognition. Our mission is to inspire women across India to build successful careers in fashion, modeling, media and personal development.
              </p>

              {/* Trust Indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '22px', fontSize: '0.9rem', color: '#D4AF37', fontWeight: '600' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Award size={16} className="text-[#D4AF37]" />
                  <span>✓ MSME Registered</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Crown size={16} className="text-[#D4AF37]" />
                  <span>✓ Trademark™ Applied</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-4" style={{ marginBottom: '20px' }}>
                {[
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/missbharat__/",
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    )
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/profile.php?id=61589932738805",
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                      </svg>
                    )
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/miss-bharat-221542416/",
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )
                  },
                  {
                    name: "Twitter (X)",
                    url: "https://x.com/TheMissBharat",
                    icon: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.name} page`}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      color: 'var(--white)',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:scale-110 hover:text-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] border border-white/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '20px', fontWeight: '700' }}>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#" aria-label="Home page">Home</a></li>
                <li><a href="#about" aria-label="About Miss Bharat pageant">About Miss Bharat</a></li>
                <li><a href="#eligibility" aria-label="Check Eligibility criteria">Eligibility</a></li>
                <li><a href="#prizes" aria-label="Grand Prizes and Awards information">Prizes</a></li>
                <li><a href="#gallery" aria-label="Video and Photo Gallery">Gallery</a></li>
                <li><a href="#faq" aria-label="Frequently Asked Questions">FAQ</a></li>
                <li><a href={applyLink} target="_blank" rel="noopener noreferrer" aria-label="Apply Now registration form">Apply Now</a></li>
                <li><a href="#contact" aria-label="Contact Us support details">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '20px', fontWeight: '700' }}>Legal & Contact</h4>
              <ul className="footer-links" style={{ marginBottom: '20px' }}>
                <li><a href="https://indiaonematrimony.com/missbharat/terms" target="_blank" rel="noopener noreferrer" aria-label="Terms and Conditions page">Terms & Conditions</a></li>
                <li><a href="https://indiaonematrimony.com/missbharat/privacy" target="_blank" rel="noopener noreferrer" aria-label="Privacy Policy statement">Privacy Policy</a></li>
                <li><a href="https://indiaonematrimony.com/missbharat/refund-policy" target="_blank" rel="noopener noreferrer" aria-label="Refund Policy statement">Refund Policy</a></li>
              </ul>

              <h5 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '12px', fontWeight: '600' }}>Contact Details</h5>
              <ul className="footer-links" style={{ fontSize: '0.88rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <a href="https://wa.me/918340714813" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
                    <MessageCircle size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    WhatsApp: +91 83407 14813
                  </a>
                </li>
                <li>
                  <a href="tel:+917562931180" aria-label="Call Miss Bharat helpline">
                    <Phone size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Call: +91 75629 31180
                  </a>
                </li>
                <li>
                  <a href="mailto:missbharat@indiaonematrimony.com" aria-label="Email Miss Bharat support address">
                    <Mail size={14} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
                    Email: missbharat@indiaonematrimony.com
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '20px', fontWeight: '700' }}>Why Thousands Trust Us</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#ccc', fontSize: '0.9rem', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Star size={14} className="text-[#D4AF37]" />
                  <span>National Level Platform</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Crown size={14} className="text-[#D4AF37]" />
                  <span>Women Empowerment</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Sparkles size={14} className="text-[#D4AF37]" />
                  <span>Professional Grooming</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Award size={14} className="text-[#D4AF37]" />
                  <span>Transparent Selection</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Globe size={14} className="text-[#D4AF37]" />
                  <span>Media Recognition</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={14} className="text-[#D4AF37]" />
                  <span>Secure Registration</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* SEO Keywords semantic section - hidden visually, visible to crawlers */}
          <div className="sr-only" aria-hidden="true" style={{ display: 'none' }}>
            <h2>Miss Bharat 2026 Pageant Keywords</h2>
            <p>Miss Bharat 2026, Miss Bharat Registration, Miss Bharat Audition, Beauty Pageant India, National Beauty Pageant India, Miss Bharat Delhi Finale, Women Empowerment India, Fashion Competition India, Modeling Competition India, Beauty Contest India</p>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Miss Bharat™. All Rights Reserved.</p>
            <p style={{marginTop: '10px', fontSize: '0.8rem'}}>Powered by India One Matrimony</p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Gallery"><X size={32} /></button>
          <button className="lightbox-nav prev" onClick={prevLightboxImage} aria-label="Previous Image"><ChevronLeft size={36} /></button>
          
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={galleryImages[selectedImageIndex]} alt={`Gallery View ${selectedImageIndex + 1}`} />
          </div>

          <button className="lightbox-nav next" onClick={nextLightboxImage} aria-label="Next Image"><ChevronRight size={36} /></button>
        </div>
      )}
      {/* Selfie Camera Modal */}
      <SelfieCamera isOpen={isSelfieOpen} onClose={() => setIsSelfieOpen(false)} />
    </>
  );
}

export default App;
