// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Spinner from './components/Spinner';
import AdmissionModal from './components/AdmissionModal';

import Home from './pages/Home';
import About from './pages/About';
import Trade from './pages/Trade';
import Admission from './pages/Admission';
import Gallery from './pages/Gallery';
import Experts from './pages/Experts';
import News from './pages/News';
import Contact from './pages/Contact';

import './App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);
  const [showAdmission, setShowAdmission] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      // Show modal only once per session
      const modalShown = sessionStorage.getItem('admissionModalShown');
      if (!modalShown) {
        setShowAdmission(true);
        sessionStorage.setItem('admissionModalShown', 'true');
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
    <ScrollToTop/>
      {showAdmission && (
        <AdmissionModal 
          closeModal={() => setShowAdmission(false)}
        />
      )}

      <Header />
      <div className="content-spacer"></div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;