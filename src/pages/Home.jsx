// src/pages/Home.jsx
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

export default function Home() {
  const [counts, setCounts] = useState({ students: 0, trade: 0, placement: 0, faculty: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const counterRef = useRef(null);

  // Hero Slides
  const slides = [
    {
      id: 1,
      title: 'Welcome to Government ITI Soravn',
      subtitle: 'Skill Development for Better Future',
      description: 'Empowering Youth Through Technical Education',
      image: 'images/fr.jpeg',
      cta: 'Apply Now'
    },
    {
      id: 2,
      title: 'State-of-the-Art Infrastructure',
      subtitle: 'Modern Labs & Workshops',
      description: 'Learn with the latest industry equipment',
      image: 'images/drw.jpeg',
      cta: 'Explore Campus'
    },
    {
      id: 3,
      title: '100% Placement Assistance',
      subtitle: 'Top Companies Recruit Here',
      description: 'Join our successful alumni network',
      image: 'images/plac.jpeg',
      cta: 'View Placements'
    },
    {
      id: 4,
      title: 'Exhibition of Creativity and Innovation',
      subtitle: 'Showcasing Innovation, Creativity, and Student Excellence.',
      description: 'A platform where innovation, creativity, and student talent come together to inspire the future.',
      image: 'images/exvi.jpeg',
      cta: 'View Placements'
    },
    {
      id: 5,
      title: 'Classroom Learning Environment',
      subtitle: 'Empowering Minds Through Education',
      description: 'A vibrant space where students learn, collaborate, and build the foundation for a brighter future',
      image: 'images/cls.jpeg',
      cta: 'View Placements'
    },
    {
  id: 6,
  title: 'Campus Sports Activities',
  subtitle: 'Fitness, Teamwork & Leadership',
  description: 'Encouraging students to participate in indoor and outdoor sports for holistic development and a healthy lifestyle.',
  image: 'images/cmp.jpeg',
  cta: 'View Activities'
}
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Vishal Kumar',
      role: 'Alumni (2024)',
      company: 'EAT Club',
      image: 'images/vishal.jpeg',
      text: 'मेरा नाम विशाल प्रजापति है। मैंने Government ITI Soraon, Prayagraj से Turner ट्रेड का प्रशिक्षण प्राप्त किया। वर्तमान में मैं EAT Club में उद्योग विहार सेक्टर-22, सिकंदरपुर मेट्रो स्टेशन के पास, गुरुग्राम (हरियाणा) में कार्यरत हूँ में प्राप्त तकनीकी प्रशिक्षण, अनुशासन और प्रैक्टिकल ज्ञान ने मुझे उद्योग में कार्य करने के योग्य बनाया। यहां काम करते हुए मैंने मशीन संचालन, गुणवत्ता, समय प्रबंधन और टीमवर्क जैसी महत्वपूर्ण कार्य-कुशलताएँ सीखी हैं।'
    },
    {
      id: 2,
      name: 'Sumit Kumar',
      role: 'Turner Trade Alumni',
      company: 'Electronics Mechanic',
      image: 'images/sumit.png',
      text: 'मेरा नाम सुमित है। मैंने Government ITI Soraon, Prayagraj से Turner ट्रेड का प्रशिक्षण प्राप्त किया। ITI में मिले तकनीकी ज्ञान, प्रैक्टिकल ट्रेनिंग और अनुशासन ने मुझे उद्योग में कार्य करने के लिए तैयार किया वर्तमान में मैं एक प्रतिष्ठित कंपनी में Turner के रूप में कार्यरत हूँ, जहाँ मुझे मशीन ऑपरेशन, प्रिसिजन माप, ड्राइंग के अनुसार जॉब तैयार करना, गुणवत्ता बनाए रखना और टीम के साथ कार्य करने का अनुभव प्राप्त हो रहा है।'
    },
    {
  id: 3,
  name: 'Priyanshu Mishra',
  role: 'ITI Alumni',
  company: 'Finance Executive, Adani Pipeline',
  image: 'images/priyanshu.png',
  text: 'मेरा नाम प्रियंशु मिश्रा है। मैंने Government ITI Soraon, Prayagraj से अपना प्रशिक्षण प्राप्त किया। ITI में प्राप्त तकनीकी शिक्षा, अनुशासन और व्यक्तित्व विकास कार्यक्रमों ने मुझे कॉर्पोरेट क्षेत्र में आगे बढ़ने के लिए प्रेरित किया। वर्तमान में मैं Adani Pipeline में Finance Executive के पद पर कार्यरत हूँ, जहाँ मुझे वित्तीय प्रबंधन, डेटा विश्लेषण, रिपोर्ट तैयार करने तथा संगठन की वित्तीय प्रक्रियाओं को सुचारू रूप से संचालित करने का अनुभव प्राप्त हो रहा है।'
},
{
  id: 4,
  name: 'Om Prakash',
  role: 'ITI Alumni',
  company: 'Finance Executive, Madherson International',
  image: 'images/omprakash.png',
  text: 'मेरा नाम ओम प्रकाश है। मैंने Government ITI Soraon, Prayagraj से अपना तकनीकी प्रशिक्षण प्राप्त किया। संस्थान में मिले ज्ञान, अनुशासन और कौशल विकास ने मुझे पेशेवर जीवन में सफलता प्राप्त करने में महत्वपूर्ण योगदान दिया। वर्तमान में मैं Madherson International में Finance Executive के रूप में कार्यरत हूँ, जहाँ मैं वित्तीय रिपोर्टिंग, अकाउंट प्रबंधन, डेटा विश्लेषण तथा कंपनी की वित्तीय गतिविधियों के संचालन में अपनी सेवाएँ प्रदान कर रहा हूँ।'
},
{
  id: 5,
  name: 'Arti Maurya',
  role: 'ITI Alumni',
  company: 'Cosmetologist',
  image: 'images/artimaurya.png',
  text: 'मेरा नाम आरती मौर्या है। मैंने Government ITI Soraon, Prayagraj से अपना प्रशिक्षण प्राप्त किया। संस्थान में मिले तकनीकी ज्ञान, आत्मविश्वास और व्यावसायिक कौशल ने मुझे अपने करियर में आगे बढ़ने के लिए प्रेरित किया। वर्तमान में मैं एक पेशेवर Cosmetologist के रूप में कार्यरत हूँ, जहाँ मैं ब्यूटी, स्किन केयर, मेकअप, हेयर ट्रीटमेंट तथा ग्राहकों को आधुनिक सौंदर्य सेवाएँ प्रदान कर रही हूँ।'
},
  ];

  // Achievements
  const achievements = [
    { icon: '🏆', value: '10+', label: 'Awards Won' },
    { icon: '🎓', value: '95%', label: 'Passing Rate' },
    { icon: '💼', value: '85%', label: 'Placement Rate' },
    { icon: '📚', value: '50+', label: 'Qualified Faculty' },
    { icon: '🏫', value: '25+', label: 'Years of Excellence' },

      
     
  ];

  // Counter Animation
  useEffect(() => {
    const target = { students: 1300, trade: 12, placement: 923, faculty: 29 };
    const interval = setInterval(() => {
      setCounts(prev => {
        let newState = { ...prev };
        let allDone = true;
        for (let key in target) {
          if (prev[key] < target[key]) {
            const increment = Math.max(1, Math.floor(target[key] / 25));
            newState[key] = Math.min(prev[key] + increment, target[key]);
            allDone = false;
          }
        }
        if (allDone) clearInterval(interval);
        return newState;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Auto-testimonial
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="home">
      {/* Hero Slider */}
      <section className="hero-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            style={{
              backgroundImage: `linear-gradient(rgba(0,20,60,0.6), rgba(0,20,60,0.7)), url(${slides[currentSlide].image})`
            }}
          >
            <div className="slide-content">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="slide-badge"
              >
                Government ITI Soravn
              </motion.div>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="slide-cta"
              >
                {slides[currentSlide].cta} →
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

      

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="stat-card-h"
            >
              <h3>{counts.students}+</h3>
              <span>👨‍🎓 Students</span>
            </motion.div>
          </div>
          <div className="stat-item">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="stat-card-h"
            >
              <h3>{counts.trade}+</h3>
              <span>🔧 Trades</span>
            </motion.div>
          </div>
          <div className="stat-item">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="stat-card-h"
            >
              <h3>{counts.placement}+</h3>
              <span>💼 Placements</span>
            </motion.div>
          </div>
          <div className="stat-item">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="stat-card-h"
            >
              <h3>{counts.faculty}+</h3>
              <span>👨‍🏫 Instructor</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="section director-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="director-container"
        >
          <div className="director-image">
            <img
              src="images/dir.png"
              alt="Director"
            />
            <div className="director-badge">Director</div>
          </div>
          <div className="director-content">
            <h2>Director's Message</h2>
            <div className="director-quote">"</div>
            <p className="director-message">
              राजकीय आईटीआई सोरांव का नेतृत्व करना मेरे लिए अत्यंत गर्व और सम्मान की बात है। 
              हमारा संस्थान तकनीकी शिक्षा के भविष्य को सशक्त बनाने तथा युवाओं को कुशल, आत्मनिर्भर 
              एवं जिम्मेदार पेशेवर बनाने के लिए समर्पित है। हमारा उद्देश्य ऐसे प्रशिक्षित युवाओं का 
              निर्माण करना है जो भारत के विकास और प्रगति में महत्वपूर्ण योगदान दे सकें। हम पारंपरिक 
              मूल्यों और आधुनिक तकनीक का समन्वय करते हुए ऐसा शैक्षिक वातावरण प्रदान करते हैं, 
              जहाँ प्रत्येक छात्र अपनी प्रतिभा का पूर्ण विकास कर सके।
            </p>
            <p className="director-message">
              अत्याधुनिक अधोसंरचना, अनुभवी प्रशिक्षकों तथा उद्योग जगत से मजबूत संबंधों के माध्यम से 
              हम अपने छात्रों को भविष्य की चुनौतियों के लिए तैयार करते हैं। मैं आप सभी को इस 
              परिवर्तनकारी एवं प्रेरणादायक यात्रा का हिस्सा बनने के लिए हार्दिक आमंत्रण देता हूँ।
            </p>
            <div className="director-signature">
              <p className="director-name">Mr. Akhil Kumar</p>
              <p className="director-title">Director, Government ITI Soraon</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid - Updated 2x2 with compact design */}
      <section className="section features-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose ITI Soravn?
        </motion.h2>
        <div className="features-grid">
          {[
            { icon: '💡', title: 'Smart Classrooms', desc: 'Digital learning with interactive tools' },
            { icon: '🖥️', title: 'Computer Labs', desc: 'Modern computing facilities' },
            { icon: '🔧', title: 'Workshop Training', desc: 'Hands-on practical experience' },
            { icon: '🤝', title: 'Placement Support', desc: '100% placement assistance' },
            { icon: '📜', title: 'Government Certification', desc: 'Recognized certifications' },
            { icon: '🏗️', title: 'Industry Exposure', desc: 'Regular industry visits' },
            { icon: '📶', title: 'Campus-Wide Wi-Fi', desc: 'Regular industry visits' },
            { icon: '💧', title: 'RO Purified Water', desc: 'Regular industry visits' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="feature-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Students Say
        </motion.h2>
        <div className="testimonials-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              className="testimonial-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-header">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="testimonial-avatar"
                  loading="lazy"
                />
                <div>
                  <h4>{testimonials[activeTestimonial].name}</h4>
                  <p className="testimonial-role">
                    {testimonials[activeTestimonial].role}
                    {testimonials[activeTestimonial].company && ` at ${testimonials[activeTestimonial].company}`}
                  </p>
                </div>
              </div>
              <div className="testimonial-text">"{testimonials[activeTestimonial].text}"</div>
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
            </motion.div>
          </AnimatePresence>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`tdot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section achievements-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Achievements
        </motion.h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="achievement-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="achievement-icon">{item.icon}</div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Ticker */}
      <section className="section ticker-section">
        <div className="ticker">
          <span className="ticker-label">📢 Latest News</span>
          <div className="ticker-text">
            <span>Admission Open 2026-27 | </span>
            <span>Placement Drive on 20th July | </span>
            <span>New Trade: Electronics Mechanic | </span>
            <span>Scholarship Applications Available | </span>
            <span>Industrial Visit Scheduled</span>
          </div>
        </div>
      </section>

      {/* Placement Partners */}
      <section className="section partners-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Placement Partners
        </motion.h2>
        <div className="partners-grid">
  {[
    { name: "Maruti Suzuki India", icon: "/images/maruti.png" },
    { name: "Honda Motorcycle & Scooter India", icon: "/images/honda.png" },
    { name: "Hero MotoCorp", icon: "/images/hero.png" },
    { name: "Tenneco Automotive", icon: "/images/tenneco.png" },
    { name: "Sandhar Technologies", icon: "/images/sandhar.png" },
    { name: "Denso Haryana", icon: "/images/denso.png" },
    { name: "JTEKT India", icon: "/images/jtekt.png" },
    { name: "YKK India", icon: "/images/ykk.png" }
  ].map((partner, index) => (
    <motion.div
      key={index}
      className="partner-logo"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <img
        src={partner.icon}
        alt={partner.name}
        className="partner-icon"
      />

      
    </motion.div>
  ))}
</div>
      </section>

      {/* Google Map Section */}
<section className="map-section">
  <div className="container">
    <div className="section-header">
      <h2>Locate Our Campus</h2>
<p>Government Polytechnic Sahjanwa, Gorakhpur, Uttar Pradesh</p>
    </div>

    <div className="map-container">
      <iframe
        title="Campus Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.735118595126!2d81.86887377409842!3d25.646915313341154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ab998037a07bb%3A0x4dc2d25d9841cf0e!2sGovernment%20ITI!5e0!3m2!1sen!2sin!4v1784611579927!5m2!1sen!2sin"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>
    </main>
  );
}
