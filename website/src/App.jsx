import React, { useState, useEffect, useRef } from 'react';
import { Crown, Star, Calendar, MapPin, CheckCircle2, Phone, Mail, MessageCircle, ChevronRight, ChevronLeft, Award, Camera, TrendingUp, X, Tag, Globe, Sparkles } from 'lucide-react';
import './App.css';

import smallbanner from './smallbanner.jpeg';
import virtus from './virtus.jfif';
import heroBackground from './Landingpage011.jpg';

const galleryImages = Object.values(
  import.meta.glob('./Gallery01*.{jpg,JPG,jpeg,JPEG}', {
    eager: true,
    import: 'default'
  })
);

function App() {
  const applyLink = "https://indiaonematrimony.com/missbharat/apply";





  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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
            <h1 className="premium-heading animate-slide-up-delay-1">
              <span className="heading-white">Beyond The Crown</span>
              <br />
              <span className="heading-gold">Own The Stage</span>
            </h1>
            
            <div className="heading-divider animate-fade-in-delay-2">
              <div className="divider-line"></div>
              <Crown size={24} className="divider-icon text-gold" />
              <div className="divider-line"></div>
            </div>

            <p className="hero-subtext animate-slide-up-delay-2">
              A transformative journey where elegance meets confidence, talent meets opportunity, and dreams turn into legacy. This is more than a pageant. This is Miss Bharat™.
            </p>

            <div className="hero-actions animate-slide-up-delay-3">
              <a href={applyLink} className="btn-premium-solid">
                REGISTER NOW <ChevronRight size={20} />
              </a>
              <a href="#about" className="btn-premium-outline">
                EXPLORE THE JOURNEY <ChevronRight size={20} />
              </a>
            </div>

            {/* Benefit Highlights */}
            <div className="hero-benefits animate-fade-in-delay-4">
              <div className="benefit-item">
                <Tag className="benefit-icon" />
                <div className="benefit-text">
                  <span className="b-title">NO REGISTRATION FEE</span>
                  <span className="b-desc">100% FREE</span>
                </div>
              </div>
              <div className="benefit-separator"></div>
              
              <div className="benefit-item">
                <Star className="benefit-icon" />
                <div className="benefit-text">
                  <span className="b-title">NATIONAL RECOGNITION</span>
                  <span className="b-desc">&amp; EXPOSURE</span>
                </div>
              </div>
              <div className="benefit-separator"></div>

              <div className="benefit-item">
                <Sparkles className="benefit-icon" />
                <div className="benefit-text">
                  <span className="b-title">CELEBRITY MENTORSHIP</span>
                  <span className="b-desc">&amp; GROOMING</span>
                </div>
              </div>
              <div className="benefit-separator"></div>

              <div className="benefit-item">
                <Globe className="benefit-icon" />
                <div className="benefit-text">
                  <span className="b-title">GLOBAL OPPORTUNITIES</span>
                  <span className="b-desc">AWAIT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Action Buttons */}
          <div className="floating-socials animate-fade-in-delay-4">
            <a href="#" className="floating-btn fb-whatsapp" aria-label="WhatsApp">
              <MessageCircle size={24} />
            </a>
            <a href="#" className="floating-btn fb-call" aria-label="Call Us">
              <Phone size={24} />
            </a>
            <a href="#" className="floating-btn fb-instagram" aria-label="Instagram">
              <Camera size={24} />
            </a>
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
                className="w-full h-full object-cover rounded-3xl shadow-2xl" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section id="why-participate" className="info-section">
        <div className="container">
          <h2 className="section-title">Why Participate?</h2>
          <div className="grid-3">
            <div className="card">
              <Star size={40} className="card-icon" />
              <h3>National Recognition</h3>
              <p>Visibility on a respected national stage and media coverage across India.</p>
            </div>
            <div className="card">
              <Camera size={40} className="card-icon" />
              <h3>Professional Portfolio</h3>
              <p>Editorial-quality photoshoot and ramp walk training for your career.</p>
            </div>
            <div className="card">
              <TrendingUp size={40} className="card-icon" />
              <h3>Career Opportunities</h3>
              <p>Fashion brand collaborations and magazine feature opportunities.</p>
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
                src="/video01.mp4"
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
                src="/video02.mp4"
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
              <div className="nav-logo" style={{marginBottom: '20px'}}>
                <img 
                  src="/logo.png" 
                  alt="Miss Bharat Official Logo" 
                  className="site-logo" 
                />
                <span className="brand-text">Miss Bharat™</span>
              </div>
              <p style={{color: '#aaa', marginBottom: '20px'}}>Discover • Connect • Achieve Dreams. India's platform celebrating confidence, talent, and the modern Indian woman.</p>
              <div className="social-links">
                <a href="#"><MessageCircle size={18} /></a>
                <a href="#"><Mail size={18} /></a>
                <a href="#"><Phone size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Miss Bharat</a></li>
                <li><a href={applyLink}>Apply Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4>Legal</h4>
              <ul className="footer-links">
                <li><a href="https://indiaonematrimony.com/missbharat/terms">Terms & Conditions</a></li>
                <li><a href="https://indiaonematrimony.com/missbharat/refund-policy">Refund Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4>Contact Us</h4>
              <ul className="footer-links">
                <li><a href="https://wa.me/918340714813?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Miss%20Bharat%20Award%202026."><MessageCircle size={14} style={{display: 'inline', marginRight: '8px'}} />WhatsApp: +91 83407 14813</a></li>
                <li><a href="tel:+917562931180"><Phone size={14} style={{display: 'inline', marginRight: '8px'}} />Call: +91 75629 31180</a></li>
                <li><a href="mailto:missbharat@indiaonematrimony.com"><Mail size={14} style={{display: 'inline', marginRight: '8px'}} />Email: missbharat@indiaonematrimony.com</a></li>
              </ul>
            </div>
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
    </>
  );
}

export default App;
