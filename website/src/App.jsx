import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Crown, Star, CheckCircle2, Phone, Mail, MessageCircle, ChevronRight, X, Award, Sparkles, Search, Globe, Minus, Headphones } from 'lucide-react';
import './App.css';

import Home from './pages/Home';
import RegistrationProcess from './pages/RegistrationProcess';
import EligibilityCriteria from './pages/EligibilityCriteria';
import AgeLimit from './pages/AgeLimit';
import AuditionProcess from './pages/AuditionProcess';

const faqs = [
  {
    q: "How can I register for Miss Bharat™ 2026?",
    a: (
      <span>
        To begin your exciting journey, you can easily register for Miss Bharat™ 2026 by visiting our official digital portal. The Miss Bharat Registration process is fully streamlined online to ensure ease of access for young women across India. Start by visiting our dedicated page at <a href="/registration-process" style={{ color: 'var(--gold-dark)', textDecoration: 'underline' }}>/registration-process</a> to fill out the online application form with your personal details, achievements, and future goals. You will also need to upload high-quality photographs matching our official submission guidelines. This Miss Bharat Application Process is specifically designed to identify promising talent and celebrate individuality. Once you submit your details, our expert selection committee will review your profile and update you on your status via email. Please make sure that all the details entered are accurate and correct to avoid any delays in processing your application. We are looking forward to seeing your submission and welcoming you.
      </span>
    )
  },
  {
    q: "What is the age limit for Miss Bharat™ 2026?",
    a: (
      <span>
        The official age limit to participate in Miss Bharat™ 2026 is between 16 and 28 years old at the time of your application. This wide range ensures that both young aspirants and mature individuals have a fair platform to showcase their personality. For detailed instructions regarding age verification and category divisions, you can check the <a href="/age-limit" style={{ color: 'var(--gold-dark)', textDecoration: 'underline' }}>/age-limit</a> guidelines on our website. Please note that you must provide valid proof of age, such as an Aadhaar Card or Passport, during the onboarding stage. Whether you are a college student or a working professional, if you fall in this bracket, we encourage you to apply. If you are under 18, you will need parent or guardian consent to register. This ensures we comply with all legal requirements and maintain safety for our younger participants throughout the pageant.
      </span>
    )
  },
  {
    q: "Who is eligible to participate in Miss Bharat™ 2026?",
    a: (
      <span>
        To check who is eligible to participate, you must review the official Miss Bharat Eligibility criteria. The pageant is open to Indian citizens, NRI, and OCI cardholders who identify as female and fall within the 16 to 28 age range. Unlike other pageants, we do not impose strict height, weight, or marital status restrictions to ensure maximum inclusivity for all candidates. You can view the comprehensive checklist of requirements at <a href="/eligibility-criteria" style={{ color: 'var(--gold-dark)', textDecoration: 'underline' }}>/eligibility-criteria</a> to verify your eligibility. This national beauty pageant India aims to provide a welcoming platform for women from diverse cultural, academic, and professional backgrounds to showcase their talent and leadership. If you are passionate about personal growth, social impact, and representing modern India, you are highly encouraged to apply today. Your background, heritage, and unique journey are valuable additions to our stage.
      </span>
    )
  },
  {
    q: "Is prior modelling experience required?",
    a: (
      <span>
        No, prior modeling experience is absolutely not required to apply for Miss Bharat™ 2026. This national beauty pageant India prides itself on discovering fresh talent, freshers, and raw potential. We welcome beginners from all backgrounds who have the passion and confidence to learn. Every selected participant receives extensive professional training, ramp walk choreography, and grooming from top industry experts to prepare them for the national stage. If you meet the basic Miss Bharat Eligibility criteria, you are fully encouraged to complete your Beauty Pageant Registration India without worrying about your past experience in the fashion industry. We value confidence, personality, and intelligence above all else. This platform is designed to help you build those skills from scratch and succeed in your modeling journey. We look forward to helping you grow.
      </span>
    )
  },
  {
    q: "Is the audition process online or offline?",
    a: (
      <span>
        The initial rounds of the Miss Bharat Audition are conducted online to allow contestants from all parts of India to participate comfortably from their homes. For a detailed breakdown of the digital and physical stages, please visit our page at <a href="/audition-process" style={{ color: 'var(--gold-dark)', textDecoration: 'underline' }}>/audition-process</a>. If you pass the virtual round, the subsequent training, grooming, and state-level evaluations may feature hybrid formats. The grand national finale is held offline as a live event in New Delhi. This hybrid approach ensures safety, accessibility, and high standards, helping us evaluate your overall confidence, speech, and runway walk through multiple interactive steps. Detailed schedules and links for the online meetings will be emailed to you once your registration details are successfully verified. This ensures you have ample time to prepare your setup.
      </span>
    )
  },
  {
    q: "What documents are required?",
    a: (
      <span>
        To participate in Miss Bharat™ 2026, you will need to submit standard identification and residency documents for verification. The key required documents include proof of age and nationality, such as your Aadhaar Card, Passport, or Birth Certificate. Additionally, you will need to provide your academic certificates, proof of state residency, and a professional portfolio if available. These records must be uploaded during the online Miss Bharat Application Process. Rest assured, all submitted documents are kept strictly confidential and secure. Having these documents ready beforehand will ensure a smooth verification process when you progress through the state and national rounds. We want to make sure your journey is as smooth and successful as possible, so please ensure that scan quality is high and readable.
      </span>
    )
  },
  {
    q: "Is there a registration fee?",
    a: (
      <span>
        Yes, the initial registration fee for the Miss Bharat™ 2026 beauty pageant registration India is ₹999 only. This fee covers the cost of processing your application, virtual audition review, and initial assessment. Unlike other pageants, Miss Bharat maintains complete financial transparency, and there are absolutely no hidden charges, grooming fees, or unexpected costs later in the journey. This fee helps us maintain high standards of evaluation and select the most dedicated contestants for our professional grooming sessions. Please complete your registration on our official portal using the secure payment gateway provided. A digital receipt will be emailed immediately to confirm your successful payment. It is highly recommended to complete this step as soon as possible to officially secure your audition slot and receive the preparatory training materials.
      </span>
    )
  },
  {
    q: "What prizes do winners receive?",
    a: (
      <span>
        The winners of Miss Bharat™ 2026 receive an array of grand prizes designed to launch their careers in fashion and media. The headline first prize for the crowned winner of the Miss Bharat Award 2026 is a premium Volkswagen Virtus sedan. In addition to this premium vehicle, winners and runners-up receive substantial cash rewards, official crowns, designer trophies, and exclusive brand endorsement contracts. Finalists also benefit from guaranteed media exposure in leading publications and direct introductions to top modeling agencies, opening doors to acting, modeling, and elite influencer opportunities across the country. The total value of these awards is completely unmatched in the industry, offering a truly massive launchpad for your career goals, personal brand building, and long-term professional development in fashion.
      </span>
    )
  },
  {
    q: "Will participants receive certificates?",
    a: (
      <span>
        Yes, all participants who register and successfully take part in the Miss Bharat Audition rounds will receive official digital participation certificates. These certificates serve as prestigious recognition of your effort, talent, and commitment to self-development. For the contestants who qualify for the state-level and national finale, we provide special physical merit certificates and trophies. Earning a certificate from a recognized national beauty pageant India adds immense value to your professional portfolio, highlighting your communication skills, public speaking confidence, and grooming achievements to potential agencies and employers. These credentials are verifiable, signed by our directors, and mailed directly to your address. These official credentials serve as a lasting testament to your hard work, dedication, and personal growth throughout this national competition, helping you stand out in future endeavors.
      </span>
    )
  },
  {
    q: "How can I contact the Miss Bharat™ team?",
    a: (
      <span>
        We are always here to help and guide you through your pageantry journey. You can contact the Miss Bharat™ 2026 support team directly through our official WhatsApp hotline at +91 83407 14813. For calling support, you can reach out to our team at +91 75629 31180. Additionally, you can send detailed inquiries via email to missbharat@indiaonematrimony.com. Our support desk operates from Monday to Saturday, helping candidates with queries regarding the Miss Bharat Registration process, document submissions, audition scheduling, and general eligibility. Please feel free to reach out to our team at any time, and we will make sure to reply promptly to ensure your application goes smoothly, all your queries are resolved, and you feel completely supported throughout your journey.
      </span>
    )
  },
  {
    q: "What should I prepare for the Talent Round in the Miss Bharat Award?",
    a: (
      <span>
        The Talent Round is a vital segment of the Miss Bharat Award 2026, allowing you to showcase your unique capabilities and creativity. You are free to choose any skill that represents your individuality, such as classical or modern dance, singing, public speaking, acting, painting, or playing a musical instrument. You should prepare a performance that is between 1.5 to 2 minutes long. Focus on stage presence, originality, and self-confidence. Since the initial talent evaluations may happen during the online audition, ensure you have a clean, quiet space to record your video. Our judges look for passion, dedication, and how well you connect with the audience. This is your chance to shine and show who you are beyond the runway, showing your true depth.
      </span>
    )
  },
  {
    q: "What are the core judging criteria for the national beauty pageant India?",
    a: (
      <span>
        Our judging panel evaluates contestants on a holistic set of criteria to find the true ambassadors of modern India. In this national beauty pageant India, candidates are judged on their communication skills, confidence, talent, intelligence, and grace. We focus heavily on your unique story, social awareness, and leadership qualities rather than just physical appearance or height. During the final rounds, your performance on the runway, response to the question-and-answer session, and overall attitude during the training and grooming workshops will also play a key role in deciding the winners. We value honesty, intelligence, positive mindset, and cultural representation above everything else in our candidates, ensuring the crown goes to a well-rounded leader who represents modern India with pride and dignity.
      </span>
    )
  },
  {
    q: "What are the long-term winner benefits of winning the Miss Bharat Award?",
    a: (
      <span>
        Winning the Miss Bharat Award comes with extensive long-term professional benefits. The crowned winner becomes the national brand ambassador for the pageant, leading various social impact campaigns and public events. The winner gains massive media exposure through press conferences, magazine covers, and digital media feature stories. Additionally, we provide direct casting introductions for modeling, television, and film industries. The title serves as a life-changing launchpad, helping you build a personal brand, network with elite fashion designers, and establish a successful career as an influential role model in India. This title remains a lifetime achievement that opens endless professional doors and creates countless business opportunities, leading to immense personal growth, premium brand partnerships, and sustainable career success in fashion. Our team continues to support our alumni long after their reign ends.
      </span>
    )
  },
  {
    q: "Are travel and accommodation expenses covered for the national finale in Delhi?",
    a: (
      <span>
        Yes, for the final rounds in Delhi, Miss Bharat™ provides comfortable accommodation, local transport, and meals for all the national finalists during the official pageant week. We arrange premium hotel stays where contestants can rest, practice, and attend grooming sessions safely. While candidates are responsible for their initial travel to the host city, all internal arrangements, venue transfers, and event hospitality are fully managed by our organizing team. We ensure that our finalists can focus entirely on their preparation, interviews, and runway walks without any logistical stress. The safety, health, and comfort of finalists is our top priority. We promise a world-class experience, premium hospitality, and a supportive environment for everyone who makes it to the final stage of this national event in New Delhi.
      </span>
    )
  },
  {
    q: "How does the pageant guarantee safety and transparency for all candidates?",
    a: (
      <span>
        Safety, dignity, and transparency are our highest priorities. Miss Bharat is an MSME-registered national beauty pageant India with applied trademarks, operating under strict ethical guidelines. All audition results, selection criteria, and fees are clearly communicated without hidden costs. During the offline finale week in New Delhi, we provide round-the-clock security, female chaperones, and professional coordinators to ensure a safe environment for all female contestants. Parents and guardians are kept informed about scheduling, guidelines, and safety protocols, making the Miss Bharat Application Process a trusted platform for aspiring models. Your trust, security, and safety are extremely important to us, and we take this responsibility very seriously at every single stage of this national pageantry competition. We ensure a secure, respectful, and encouraging atmosphere for all.
      </span>
    )
  },
  {
    q: "What are the specific guidelines and rules for photo submissions?",
    a: (
      <span>
        To ensure your application is reviewed successfully, please follow these simple photo submission guidelines. Submit three clear, high-resolution photographs: a headshot (face focus), a mid-shot (waist up), and a full-body shot. The images should be taken in natural daylight or a well-lit room against a plain, neutral background. Avoid using heavy beauty filters, sunglasses, hats, or digital edits. Wear clean, simple clothing like a basic t-shirt and jeans to showcase your natural features. High-quality and realistic photos significantly speed up your evaluation during the Miss Bharat Registration process. Make sure all the uploaded files are not blurry, heavily edited, or digitally modified in any way before submitting them, as this helps our judges see your raw potential and natural features clearly.
      </span>
    )
  },
  {
    q: "What are the major rules and regulations that participants must adhere to?",
    a: (
      <span>
        All participants of Miss Bharat 2026 must adhere to our official code of conduct to maintain the pageant's integrity. Contestants must provide accurate personal information and documents during registration. Punctuality during all online auditions and grooming sessions is mandatory. Any form of indiscipline, harassment, or negative behavior towards fellow contestants, mentors, or staff will result in immediate disqualification. Candidates must also respect the decision of the judging panel, which is final and binding. Following these rules ensures a positive, supportive, and professional environment for everyone involved. Integrity, discipline, and respect are key pillars of success in this pageant, and our team expects high standards of conduct from all future applicants who seek to win this prestigious crown. Compliance with these rules is essential for participation.
      </span>
    )
  },
  {
    q: "What is the refund policy for registration or audition related fees?",
    a: (
      <span>
        The Miss Bharat Registration fee of ₹999 is strictly non-refundable and non-transferable under any circumstances. This fee is immediately allocated toward processing your digital application, verifying your submitted documents, and scheduling your virtual Miss Bharat Audition. We strongly advise all candidates to carefully review the eligibility criteria, terms and conditions, and age limit before making the payment. If you have any questions or experience technical errors during the payment process, please contact our support team immediately before attempting any multiple transactions on our portal. We appreciate your cooperation, patience, and understanding in this matter. Thank you for your interest and active support in joining our national beauty pageant, and we wish you the very best of luck with your audition process.
      </span>
    )
  },
  {
    q: "How can I verify the authenticity of my Miss Bharat Registration?",
    a: (
      <span>
        Once you complete your registration, you will receive an official confirmation email containing your unique application ID and receipt. This registration confirmation serves as proof of your entry. You can verify your status at any time by contacting our helpline or writing to our official email address. Miss Bharat™ is a transparent, MSME-registered national beauty pageant India. We advise contestants to avoid third-party agents or unverified websites claiming to represent us. Official communication regarding auditions, scheduling, and selection will only come from our verified email domain and contact numbers. Stay alert, safe, and secure at all times during the registration phase, and always check our website for authentic news updates, official announcements, and verified program details. If you suspect any fraudulent activity, please report it to us immediately.
      </span>
    )
  },
  {
    q: "What happens if I miss my scheduled Miss Bharat Audition slot?",
    a: (
      <span>
        We understand that emergencies or scheduling conflicts can occur. If you are unable to attend your assigned virtual Miss Bharat Audition slot, you must inform our support team at least 24 hours in advance. You can request a reschedule by sending an email with your application ID to our support desk. Rescheduling is subject to slot availability and the judges' discretion. If you fail to notify us and miss the slot, your application may be cancelled without a refund. We try our best to accommodate genuine cases where communication is clear, timely, and sent through proper channels. Your prompt and clear communication will help our organizing team reschedule and manage your audition session smoothly, efficiently, and fairly for all participating candidates.
      </span>
    )
  }
];

const bubbleMessages = [
  "👋 Need any help?",
  "💬 Ask me anything about Miss Bharat.",
  "📄 Need registration help?",
  "🎯 Check eligibility instantly.",
  "🎤 Know about auditions.",
  "🏆 Explore prizes and benefits.",
  "📑 Required documents?"
];

function AppContent() {
  const applyLink = "https://indiaonematrimony.com/missbharat/apply";
  const location = useLocation();

  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(() => {
    const saved = sessionStorage.getItem('miss_faq_selected_index');
    return saved !== null ? parseInt(saved, 10) : null;
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState(() => {
    const savedMode = sessionStorage.getItem('miss_faq_view_mode');
    if (savedMode) return savedMode;
    const onboardingShown = sessionStorage.getItem('miss_faq_onboarding_shown') === 'true';
    return onboardingShown ? 'chat' : 'onboarding';
  });
  const [isTyping, setIsTyping] = useState(false);
  const [isFaqAnswerTyping, setIsFaqAnswerTyping] = useState(false);

  // Unread badge state: "3 Popular Questions"
  const [badgeVisible, setBadgeVisible] = useState(() => {
    return sessionStorage.getItem('miss_faq_badge_hidden') !== 'true';
  });

  // Idle and hover tooltip states
  const [isIdleTooltipVisible, setIsIdleTooltipVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Typing bubble states and rotation messages
  const [bubbleIndex, setBubbleIndex] = useState(0);
  const [bubbleState, setBubbleState] = useState('typing'); // 'typing' | 'message' | 'fadeout'

  // Reset typing bubble state to typing when popup opens or closes to reset animation properly
  useEffect(() => {
    setBubbleState('typing');
  }, [isAssistantOpen]);

  // Typing bubble rotation timer logic
  useEffect(() => {
    if (isAssistantOpen) {
      return;
    }

    if (isHovered) {
      if (bubbleState !== 'message') {
        setBubbleState('message');
      }
      return;
    }

    let timer;
    if (bubbleState === 'typing') {
      timer = setTimeout(() => {
        setBubbleState('message');
      }, 1500);
    } else if (bubbleState === 'message') {
      timer = setTimeout(() => {
        setBubbleState('fadeout');
      }, 4000);
    } else if (bubbleState === 'fadeout') {
      timer = setTimeout(() => {
        setBubbleIndex((prev) => (prev + 1) % bubbleMessages.length);
        setBubbleState('typing');
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [bubbleState, bubbleIndex, isHovered, isAssistantOpen]);

  const panelRef = useRef(null);
  const dropdownRef = useRef(null);
  const chatFeedRef = useRef(null);
  const idleTimerRef = useRef(null);
  const hideTimerRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Idle timer: 10s delay, 6s auto-hide on route change or when assistant is closed
  useEffect(() => {
    setIsIdleTooltipVisible(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    if (!isAssistantOpen) {
      idleTimerRef.current = setTimeout(() => {
        setIsIdleTooltipVisible(true);
        hideTimerRef.current = setTimeout(() => {
          setIsIdleTooltipVisible(false);
        }, 6000);
      }, 10000);
    }

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [location.pathname, isAssistantOpen]);

  // Esc key closure listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseAssistant();
        setIsDropdownOpen(false);
      }
    };
    if (isAssistantOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAssistantOpen]);

  // Click outside closure listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Don't close if clicking on the launcher itself or its elements
      if (e.target.closest('.faq-floating-avatar')) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
      if (isAssistantOpen && panelRef.current && !panelRef.current.contains(e.target)) {
        handleCloseAssistant();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isAssistantOpen]);

  // Auto-scroll chat feed
  useEffect(() => {
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTop = chatFeedRef.current.scrollHeight;
    }
  }, [selectedFaqIndex, isFaqAnswerTyping]);

  // Unified popup opening handler
  const handleOpenAssistant = () => {
    console.log("Popup opened");
    setIsAssistantOpen(true);
    
    // Hide unread badge and stop idle timers
    setBadgeVisible(false);
    sessionStorage.setItem('miss_faq_badge_hidden', 'true');
    setIsIdleTooltipVisible(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    const onboardingShown = sessionStorage.getItem('miss_faq_onboarding_shown') === 'true';
    if (!onboardingShown) {
      // Welcome bubble once per session
      setViewMode('onboarding');
      setIsTyping(true);
      setSelectedFaqIndex(null);
      setSearchQuery("");
      setIsDropdownOpen(false);
      
      setTimeout(() => {
        setIsTyping(false);
        sessionStorage.setItem('miss_faq_onboarding_shown', 'true');
        sessionStorage.setItem('miss_faq_view_mode', 'onboarding');
      }, 800);
    } else {
      // Subsequent opens in the session go straight to the last active screen
      const savedMode = sessionStorage.getItem('miss_faq_view_mode') || 'chat';
      setViewMode(savedMode);
      setIsDropdownOpen(false);
    }
  };

  // Close handler for FAQ assistant
  const handleCloseAssistant = () => {
    console.log("Popup closed");
    setIsAssistantOpen(false);
  };

  // Click handler for assistant launcher circular icon
  const handleLauncherClick = (e) => {
    if (e) {
      e.stopPropagation();
    }
    console.log("Launcher clicked");
    handleOpenAssistant();
  };

  // FAQ item select handler with typing indicator simulation
  const handleSelectFaq = (index) => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    setSelectedFaqIndex(index);
    sessionStorage.setItem('miss_faq_selected_index', index);
    setViewMode('chat');
    sessionStorage.setItem('miss_faq_view_mode', 'chat');
    setIsDropdownOpen(false);
    
    setIsFaqAnswerTyping(true);
    typingTimeoutRef.current = setTimeout(() => {
      setIsFaqAnswerTyping(false);
      typingTimeoutRef.current = null;
    }, 800);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <a href="/" className="nav-logo">
            <img 
              src="/logo.png" 
              alt="Miss Bharat Official Logo" 
              className="site-logo" 
            />
            <span className="brand-text">Miss Bharat™</span>
          </a>
          <div className="nav-links">
            <a href="/#about">About</a>
            <a href="/#prizes">Prizes</a>
            <a href="/#eligibility">Eligibility</a>
            <a href="/#contact">Contact</a>
            <a href={applyLink} className="btn btn-primary nav-cta">Apply Now</a>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home handleOpenAssistant={handleOpenAssistant} />} />
        <Route path="/registration-process" element={<RegistrationProcess />} />
        <Route path="/eligibility-criteria" element={<EligibilityCriteria />} />
        <Route path="/age-limit" element={<AgeLimit />} />
        <Route path="/audition-process" element={<AuditionProcess />} />
      </Routes>

      {/* Floating circular assistant button launcher and interactive typing bubble */}
      {!isAssistantOpen && (
        <div className="faq-launcher-container">
          {/* Aside Typing Bubble */}
          <div 
            className={`faq-typing-bubble-aside ${bubbleState}`}
            onClick={handleLauncherClick}
            style={{ pointerEvents: 'auto' }}
          >
            {bubbleState === 'typing' ? (
              <div className="faq-bubble-dots">
                <span className="faq-bubble-dot"></span>
                <span className="faq-bubble-dot"></span>
                <span className="faq-bubble-dot"></span>
              </div>
            ) : (
              <span className="faq-bubble-message">{bubbleMessages[bubbleIndex]}</span>
            )}
          </div>

          <button 
            className="faq-floating-avatar"
            onClick={handleLauncherClick}
            onMouseDown={(e) => {
              e.stopPropagation();
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Open Miss Bharat FAQ Assistant"
          >
            <img 
              src="/ai-avatar.png" 
              alt="Miss Bharat AI Concierge" 
              className="faq-floating-avatar-img"
            />
            
            {/* Notification Badge */}
            {badgeVisible && (
              <span className="faq-floating-avatar-badge animate-pulse">
                3 Popular Questions
              </span>
            )}
            
            {/* Tooltip: displays on idle or on hover */}
            {isIdleTooltipVisible && !isHovered && (
              <span className="faq-floating-avatar-tooltip">
                👋 Need help? Ask Miss Bharat Assistant
              </span>
            )}
            {isHovered && (
              <span className="faq-floating-avatar-tooltip">
                Need help? Ask Miss Bharat Assistant
              </span>
            )}
          </button>
        </div>
      )}

      {/* Upgraded Floating FAQ Assistant Chat Panel */}
      <div 
        className={`faq-assistant-overlay ${isAssistantOpen ? 'active' : ''}`}
      >
        <div 
          className="faq-assistant-panel"
          ref={panelRef}
        >
          {/* Header with Minimize and Close actions */}
          <div className="faq-panel-header">
            <div>
              <h3>💬 Miss Bharat Live Assistant</h3>
              <p>Your guide to Miss Bharat™ 2026</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button 
                className="faq-panel-minimize-btn"
                onClick={() => handleCloseAssistant()}
                aria-label="Minimize Assistant"
              >
                <Minus size={16} />
              </button>
              <button 
                className="faq-panel-close"
                onClick={() => handleCloseAssistant()}
                aria-label="Close FAQ Assistant"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body content based on viewMode */}
          {viewMode === 'onboarding' ? (
            <div className="faq-onboarding-container">
              {/* Avatar header */}
              <div className="faq-avatar-wrapper">
                <div className="faq-avatar">
                  <Sparkles size={16} />
                </div>
                <span className="faq-avatar-name">Miss Bharat AI Guide</span>
              </div>

              {isTyping ? (
                /* Typing animation screen */
                <div className="faq-chat-bubble faq-typing-bubble faq-animate-bubble">
                  <div className="faq-typing-dots">
                    <span className="faq-dot"></span>
                    <span className="faq-dot"></span>
                    <span className="faq-dot"></span>
                  </div>
                </div>
              ) : (
                /* Welcome Onboarding Screen */
                <>
                  <div className="faq-chat-bubble faq-welcome-bubble faq-animate-bubble">
                    <p className="faq-welcome-text">Hello 👋</p>
                    <p className="faq-welcome-text" style={{ marginTop: '8px' }}>Welcome to Miss Bharat™ 2026.</p>
                    <p className="faq-welcome-text" style={{ marginTop: '8px' }}>I can instantly help you with:</p>
                    <ul className="faq-welcome-list">
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Registration Process</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Eligibility Criteria</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Age Limit</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Audition Process</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Required Documents</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Participation Fees</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Winner Benefits</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Certificates & Awards</li>
                      <li className="faq-welcome-item"><span className="faq-welcome-bullet">•</span> Rules & Regulations</li>
                    </ul>
                    <p className="faq-welcome-text" style={{ marginTop: '8px' }}>Please choose a topic below or search your question.</p>
                  </div>

                  {/* Quick Action Chips */}
                  <div className="faq-chips-section faq-animate-bubble" style={{ animationDelay: '0.1s' }}>
                    <p className="faq-chips-title">Quick Topics:</p>
                    <div className="faq-chips-container">
                      <button 
                        className="faq-chip"
                        onClick={() => handleSelectFaq(0)} /* Q1: Registration Process */
                      >
                        📄 Registration Process
                      </button>
                      <button 
                        className="faq-chip"
                        onClick={() => handleSelectFaq(2)} /* Q3: Eligibility Criteria */
                      >
                        🎯 Eligibility Criteria
                      </button>
                      <button 
                        className="faq-chip"
                        onClick={() => handleSelectFaq(4)} /* Q5: Audition Process */
                      >
                        🎤 Audition Process
                      </button>
                      <button 
                        className="faq-chip"
                        onClick={() => handleSelectFaq(5)} /* Q6: Required Documents */
                      >
                        📑 Required Documents
                      </button>
                      <button 
                        className="faq-chip"
                        onClick={() => handleSelectFaq(12)} /* Q13: Winner Benefits */
                      >
                        🏆 Winner Benefits
                      </button>
                      <button 
                        className="faq-chip"
                        onClick={() => handleSelectFaq(8)} /* Q9: Certificates & Awards */
                      >
                        🎁 Awards & Certificates
                      </button>
                    </div>
                  </div>

                  {/* Two Buttons */}
                  <div className="faq-onboarding-actions faq-animate-bubble" style={{ animationDelay: '0.2s' }}>
                    <button 
                      className="btn btn-primary faq-onboarding-btn-primary"
                      onClick={() => {
                        setViewMode('chat');
                        sessionStorage.setItem('miss_faq_view_mode', 'chat');
                        setIsDropdownOpen(false);
                      }}
                    >
                      Start Asking Questions
                    </button>
                    <button 
                      className="btn btn-secondary faq-onboarding-btn-secondary"
                      onClick={() => {
                        setViewMode('chat');
                        sessionStorage.setItem('miss_faq_view_mode', 'chat');
                        setIsDropdownOpen(false);
                      }}
                    >
                      Skip & Open FAQ
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            /* Chatbot interface view */
            <>
              {/* Chat feed containing conversation bubbles */}
              <div className="faq-chat-feed" ref={chatFeedRef}>
                {selectedFaqIndex === null ? (
                  /* Placeholder when no question is selected yet */
                  <div className="faq-chat-placeholder">
                    <Sparkles className="faq-placeholder-icon" size={32} />
                    <p>Select a question from the dropdown list below or search to find answers.</p>
                  </div>
                ) : (
                  /* Conversation UI: only the active question and answer are displayed */
                  <>
                    <div className="faq-avatar-wrapper" style={{ alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
                      <div className="faq-avatar" style={{ background: 'var(--purple-dark)', color: 'var(--white)', border: '1px solid var(--gold)' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>U</span>
                      </div>
                      <span className="faq-avatar-name">You</span>
                    </div>
                    <div className="faq-chat-bubble faq-chat-user faq-animate-bubble">
                      {faqs[selectedFaqIndex]?.q}
                    </div>

                    <div className="faq-avatar-wrapper" style={{ marginTop: '10px' }}>
                      <div className="faq-avatar">
                        <Sparkles size={16} />
                      </div>
                      <span className="faq-avatar-name">Miss Bharat AI Guide</span>
                    </div>
                    
                    {isFaqAnswerTyping ? (
                      /* Typing indicator before showing the answer */
                      <div className="faq-chat-bubble faq-typing-bubble faq-animate-bubble">
                        <div className="faq-typing-dots">
                          <span className="faq-dot"></span>
                          <span className="faq-dot"></span>
                          <span className="faq-dot"></span>
                        </div>
                      </div>
                    ) : (
                      /* Loaded Answer Bubble */
                      <div className="faq-chat-bubble faq-chat-agent faq-animate-bubble">
                        {faqs[selectedFaqIndex]?.a}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Upgraded Search & Searchable Dropdown sticky area */}
              <div className="faq-search-container-upgraded">
                {/* Helper text */}
                <p className="faq-helper-text" style={{ fontSize: '0.9rem', color: 'var(--gray)', margin: '0 0 12px 0', textAlign: 'center', fontWeight: '500', fontFamily: 'var(--font-body)' }}>
                  Type a keyword or select a question below.
                </p>

                <div 
                  className={`faq-dropdown-container ${isDropdownOpen ? 'open' : ''}`}
                  ref={dropdownRef}
                >
                  {/* Dropdown Overlay: Scrollable options filtered by keyword */}
                  <div className="faq-dropdown-overlay">
                    <div className="faq-dropdown-list" role="listbox">
                      {faqs
                        .map((faq, index) => ({ faq, index }))
                        .filter(({ faq }) => faq.q.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map(({ faq, index }) => (
                          <button
                            key={index}
                            role="option"
                            aria-selected={selectedFaqIndex === index}
                            className={`faq-dropdown-item ${selectedFaqIndex === index ? 'active' : ''}`}
                            onClick={() => {
                              handleSelectFaq(index);
                              setSearchQuery("");
                            }}
                          >
                            {faq.q}
                          </button>
                        ))
                      }
                      {faqs.filter(faq => faq.q.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                        <div className="faq-dropdown-no-results">
                          No matching questions. Try searching for "Registration", "Eligibility", "Age Limit", etc.
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 52px Search Input (Trigger for searchable dropdown) */}
                  <div className="faq-search-input-wrapper">
                    <Search className="faq-search-icon-left" size={20} />
                    <input 
                      type="text" 
                      placeholder="🔍 Search by keyword (Registration, Eligibility, Age Limit...)"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setIsDropdownOpen(true);
                      }}
                      onFocus={() => setIsDropdownOpen(true)}
                      onClick={() => setIsDropdownOpen(true)}
                      className="faq-search-input-field"
                    />
                    <button 
                      className="faq-dropdown-toggle-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsDropdownOpen(!isDropdownOpen);
                      }}
                      aria-label="Toggle Question List"
                    >
                      <ChevronRight 
                        size={20} 
                        className="faq-dropdown-arrow-icon" 
                        style={{ transform: isDropdownOpen ? 'rotate(-90deg)' : 'rotate(90deg)' }} 
                      />
                    </button>
                  </div>

                </div>
              </div>
            </>
          )}

          {/* SEO friendly visuals-hidden block (no display: none) mapping all 20 FAQs */}
          <div className="seo-faq-crawler" aria-hidden="true">
            {faqs.map((faq, idx) => (
              <article key={idx}>
                <h2>{faq.q}</h2>
                <div>{faq.a}</div>
              </article>
            ))}
          </div>
        </div>
      </div>

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
                <li><a href="/" aria-label="Home page">Home</a></li>
                <li><a href="/#about" aria-label="About Miss Bharat pageant">About Miss Bharat</a></li>
                <li><a href="/#eligibility" aria-label="Check Eligibility criteria">Eligibility</a></li>
                <li><a href="/#prizes" aria-label="Grand Prizes and Awards information">Prizes</a></li>
                <li><a href="/#gallery" aria-label="Video and Photo Gallery">Gallery</a></li>
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
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
