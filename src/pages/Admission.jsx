// Admission.jsx
import React, { useState } from 'react';
import './Admission.css';
import {
  FaGraduationCap,
  FaClipboardList,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaCalendarAlt,
  FaUser,
  FaMobileAlt,
  FaAddressCard,
  FaDownload,
} from 'react-icons/fa';

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    trade: '',
    qualification: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const trades = [
    { name: 'Electrician', eligibility: '10th Pass', duration: '2 Years', govtFee: '₹780/yr', privateFee: '₹18,000/yr' },
    { name: 'Fitter', eligibility: '10th Pass', duration: '2 Years', govtFee: '₹780/yr', privateFee: '₹18,000/yr' },
    { name: 'MMV', eligibility: '10th Pass', duration: '2 Years', govtFee: '₹780/yr', privateFee: '₹18,000/yr' },
    { name: 'RAC', eligibility: '10th Pass', duration: '2 Years', govtFee: '₹780/yr', privateFee: '₹18,000/yr' },
    { name: 'Turner', eligibility: '10th Pass', duration: '2 Years', govtFee: '₹780/yr', privateFee: '₹18,000/yr' },
    { name: 'Electronics Mechanic', eligibility: '10th Pass', duration: '2 Years', govtFee: '₹780/yr', privateFee: '₹18,000/yr' },   
    { name: 'Welder', eligibility: '8th Pass', duration: '1 Year', govtFee: '₹780/yr', privateFee: '₹18,000/yr' },
    { name: 'COPA', eligibility: '10th Pass', duration: '1 Year', govtFee: '₹780/yr', privateFee: '₹15,400/yr' },
    { name: 'CHNM', eligibility: '10th Pass', duration: '1 Year', govtFee: '₹780/yr', privateFee: '₹15,400/yr' },
    { name: 'Cosmetology', eligibility: '10th Pass', duration: '1 Year', govtFee: '₹780/yr', privateFee: '₹15,400/yr' },
    { name: 'Finance Executive', eligibility: '10th Pass', duration: '1 Year', govtFee: '₹780/yr', privateFee: '₹15,400/yr' },
    { name: 'Physiotherapy', eligibility: '8th Pass', duration: '1 Year', govtFee: '₹780/yr', privateFee: '₹15,400/yr' },
   
  ];

  const steps = [
    { icon: <FaClipboardList />, title: 'Fill Application', desc: 'Submit online form' },
    { icon: <FaFileAlt />, title: 'Merit List', desc: 'Submit documents' },
    { icon: <FaCheckCircle />, title: 'Verification', desc: 'Merit-based selection' },
    { icon: <FaMoneyCheckAlt />, title: 'Fee Payment', desc: 'Complete admission' },
  ];

  const documents = [
    '10th Marksheet & Certificate',
    'Caste Certificate (if applicable)',
    'Residence Proof',
    'Passport size photographs (4)',
    'Aadhar Card copy',
  ];

  const highlights = [
    '100% scholarship for SC/ST/OBC',
    'Placement assistance guaranteed',
    'Industry visits & guest lectures',
    'Tool kit provided for some trades',
  ];

  return (
    <div className="admission-page">
      {/* Hero */}
      <div className="hero-section-aa">
        <div className="hero-content">
          <FaGraduationCap className="hero-icon" />
          <h2>Admission 2026-27</h2>
          <p>Shape your future with industry-relevant skills</p>
        </div>
      </div>

      {/* Steps - 2x2 grid on large, 1x on small */}
      <div className="section">
        <h3 className="section-title small-heading">
          <FaClipboardList className="title-icon" /> Admission Process
        </h3>
        <div className="steps-grid two-col-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card card-soft">
          
              <div className="step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

   

      {/* Fee Table */}
      <div className="section">
        <h3 className="section-title small-heading">
          <FaMoneyCheckAlt className="title-icon" /> Fee Structure & Trades
        </h3>
        <div className="table-container">
          <table className="fee-table">
            <thead>
              <tr>
                <th>Trade</th>
                <th>Eligibility</th>
                <th>Duration</th>
                <th>Govt. Seat</th>
                <th>Private Seat</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((t, i) => (
                <tr key={i}>
                  <td><strong>{t.name}</strong></td>
                  <td>{t.eligibility}</td>
                  <td>{t.duration}</td>
                  <td className="govt-fee">{t.govtFee}</td>
                  <td className="private-fee">{t.privateFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="fee-note">
          <p><strong>SC/ST Students:</strong> Government Seat Fee only ₹300 per year.</p>
        </div>
      </div>

      {/* Documents & Highlights - 2 columns */}
      <div className="section">
        <div className="two-column-grid">
          <div className="documents-section card-soft">
            <h4 className="small-heading">
              <FaFileAlt className="title-icon" /> Documents Required
            </h4>
            <ul className="documents-list">
              {documents.map((doc, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="check-icon" /> {doc}
                </li>
              ))}
            </ul>
          </div>
          <div className="highlights-section card-soft">
            <h4 className="small-heading">
              <FaGraduationCap className="title-icon" /> Important Info
            </h4>
            <ul className="highlights-list">
              {highlights.map((item, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="check-icon" /> {item}
                </li>
              ))}
            </ul>
            <div className="contact-info">
              <p><FaPhone /> +91 7217739743, 7217756874</p>
              <p><FaEnvelope /> itijunglekodiya@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="download-section">
        <button className="download-btn">
          <FaDownload /> Download Prospectus
        </button>
      </div>
    </div>
  );
}
