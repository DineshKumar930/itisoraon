// src/pages/About.jsx
import './About.css';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaLaptop, 
  FaUsers, 
  FaTrophy, 
  FaHeart,
  FaQuoteLeft,
  FaBuilding,
  FaMicrochip,
  FaTools,
  FaEye,
  FaBullseye,
  FaStar,
  FaAward
} from 'react-icons/fa';

export default function About() {
  const stats = [
    { icon: <FaUsers />, number: "1300+", label: "Students Enrolled", color: "#4f46e5" },
    { icon: <FaTrophy />, number: "95%", label: "Placement Rate", color: "#059669" },
    { icon: <FaGraduationCap />, number: "12+", label: "Courses Offered", color: "#dc2626" },
    { icon: <FaHeart />, number: "50+", label: "Industry Partners", color: "#7c3aed" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section with College Photo */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <span className="badge">🏛️ Government Institute</span>
            <h1>राजकीय आईटीआई सोरांव में <span className="gradient-text"> आपका स्वागत है</span></h1>
            <p>        

वर्ष 2024 से युवाओं को उद्योगों की आवश्यकताओं के अनुरूप कौशल एवं तकनीकी उत्कृष्टता प्रदान करते हुए उनके उज्ज्वल भविष्य का निर्माण कर रहे हैं। हम बेहतर करियर के अवसर प्रदान कर जीवन को नई दिशा देने के लिए प्रतिबद्ध हैं।
              
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                  {stat.icon}
                </div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message Section */}
      <section className="principal-section">
        <div className="container">
          <motion.div
            className="principal-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="principal-image">
              <img 
                src="images/prince.jpeg" 
                alt="Principal"
              />
              <div className="image-border"></div>
            </div>
            <div className="principal-content">
              <FaQuoteLeft className="quote-icon" />
              <span className="label">Principal's Message</span>
              <h2>Dr. Pravin Kumar Shukla</h2>
              <p className="designation">Principal, Government ITI Soravn</p>
              <p className="message">
                "राजकीय आईटीआई सोरांव में हम विश्वस्तरीय तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध हैं, जो हमारे विद्यार्थियों को कुशल एवं सक्षम पेशेवर बनने के लिए सशक्त बनाती है। हमारा आधुनिक बुनियादी ढांचा, अनुभवी प्रशिक्षक एवं उद्योगों के साथ मजबूत साझेदारी ऐसा वातावरण तैयार करते हैं, जहाँ शिक्षा और अवसर का प्रभावी समन्वय होता है।<br/>

हम केवल तकनीकी कौशल के विकास पर ही नहीं, बल्कि विद्यार्थियों में नैतिक मूल्यों, अनुशासन, नेतृत्व क्षमता एवं नवाचार की भावना को भी विकसित करने में विश्वास रखते हैं, ताकि वे राष्ट्र के उज्ज्वल भविष्य के निर्माण में महत्वपूर्ण योगदान दे सकें।
"
              </p>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <motion.div
              className="vm-card vision-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="vm-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a premier technical training institute that produces skilled, 
                innovative, and socially responsible professionals who contribute 
                to the nation's industrial growth and economic development.
              </p>
              <ul>
                <li><FaStar /> Excellence in technical education</li>
                <li><FaStar /> Innovation-driven learning</li>
                <li><FaStar /> Global competency standards</li>
              </ul>
            </motion.div>

            <motion.div
              className="vm-card mission-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="vm-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide quality technical education through modern infrastructure, 
                industry-aligned curriculum, and hands-on training that enables 
                students to excel in their careers and become entrepreneurs.
              </p>
              <ul>
                <li><FaStar /> Industry-relevant skill development</li>
                <li><FaStar /> Practical hands-on training</li>
                <li><FaStar /> Holistic personality development</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* College Features */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose <span className="gradient-text">ITI Soravn</span></h2>
            <p>Discover what makes us the preferred choice for technical education</p>
          </motion.div>

          <div className="features-grid">
            {[
              { icon: <FaBuilding />, title: "Modern Infrastructure", desc: "State-of-the-art labs with latest equipment", color: "#4f46e5" },
              { icon: <FaMicrochip />, title: "Advanced Technology", desc: "Training on Industry 4.0 technologies", color: "#059669" },
              { icon: <FaTools />, title: "Practical Training", desc: "Hands-on workshops and real projects", color: "#dc2626" },
              { icon: <FaAward />, title: "Placement Support", desc: "95% placement rate with top companies", color: "#f59e0b" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}