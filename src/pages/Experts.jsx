// src/pages/Experts.jsx
import { useState } from 'react';
import './Experts.css';

export default function Experts() {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const faculty = [
  {
    id: 1,
    name: 'Dr. Pravin Kumar Shukla',
    designation: 'Principal',
    qual: 'Ph.D',
    exp: '3.5 yrs',
    department: 'Administration Department',
    specialization: 'Educational Leadership, Institutional Management, Academic Planning',
    bio: 'Dr. Pravin Kumar Shukla has extensive experience in technical education administration and institutional leadership with a strong focus on quality education and skill development.',
    image: 'images/prince.jpeg',
    color: '#3b82f6'
  },
  {
    id: 2,
    name: 'Mr. Pradeep Kumar Yadav',
    designation: 'Foreman-Training Officer & Placement Incharge',
    qual: 'ITI, CITS, NAC Welder',
    exp: '14 yrs',
    department: 'Training & Placement Department',
    specialization: 'Industrial Training, Skill Development, Industry Relations',
    bio: 'Experienced in industrial training and placement activities with expertise in connecting students with industry opportunities.',
    image: 'images/pradeep.jpg',
    color: '#f59e0b'
  },
  {
    id: 3,
    name: 'Mr. Ashish Kumar Maurya',
    designation: 'Foreman-Training Officer & Placement Cell',
    qual: 'Diploma  in Electrical engineering ',
    exp: '10 yrs',
    department: 'Computer Applications Department',
    specialization: 'Programming, Web Development, Database Management',
    bio: 'Specializes in computer applications, software development and practical IT training methodologies.',
    image: 'images/ashish maurya.jpg',
    color: '#8b5cf6'
  },
  {
    id: 4,
    name: 'Mr. Shakti Singh Yadav',
    designation: 'Clerk',
    qual: 'BA, ITI',
    exp: '7 yrs',
    department: 'Administrative Department',
    specialization: 'Office Administration, Documentation, MIS Management',
    bio: 'Responsible for institutional administration, office coordination and digital record management.',
    image: 'images/shakti.jpg',
    color: '#ec4899'
  },
  {
    id: 5,
    name: 'Mr. Ranjeet Kumar',
    designation: 'Instructor-COPA & Placement Cell',
    qual: 'MBA(IT & HR), BTech(CSE), Diploma(IT)',
    exp: '3.7 yrs',
    department: 'Computer Applications Department',
    specialization: 'Computer Fundamentals, Office Automation, Web Technologies',
    bio: 'Provides industry-oriented training in computer applications and placement preparation.',
    image: 'images/ranjeet.jpg',
    color: '#f97316'
  },
  {
    id: 6,
    name: 'Ms. Priti Patel',
    designation: 'Instructor-COPA',
    qual: 'ITI, CITS',
    exp: '3.5 yrs',
    department: 'Computer Applications Department',
    specialization: 'Networking, Cloud Computing, Office Automation',
    bio: 'Focused on practical computer education, networking technologies and employability skills.',
    image: 'images/priti.jpg',
    color: '#06b6d4'
  },
  {
    id: 7,
    name: 'Mr. Sonu Yadav',
    designation: 'Instructor-Fitter',
    qual: 'Diploma, ITI, CTIS',
    exp: '3 yrs',
    department: 'Mechanical Engineering Department',
    specialization: 'Machine Fitting, Industrial Maintenance, Workshop Technology',
    bio: 'Experienced in machine fitting practices and industrial workshop operations.',
    image: 'images/sonu.jpg',
    color: '#6366f1'
  },
  {
    id: 8,
    name: 'Mr. Sudhir Kumar Maurya',
    designation: 'Instructor-Fitter',
    qual: 'Diploma in Mechanical, CITS',
    exp: '3.10 yrs',
    department: 'Mechanical Engineering Department',
    specialization: 'Mechanical Maintenance, Workshop Practices',
    bio: 'Provides practical and theoretical knowledge in fitting and mechanical workshop operations.',
    image: 'images/sudhir.jpg',
    color: '#3b82f6'
  },
  {
    id: 9,
    name: 'Mr. Umesh Chandra',
    designation: 'Instructor-Turner & Placement Cell',
    qual: 'ITI, NAC, ATI/CTI',
    exp: '16.9 yrs',
    department: 'Mechanical Engineering Department',
    specialization: 'Lathe Operations, Precision Machining, CNC Basics',
    bio: 'Specializes in turning operations and modern machining technologies.',
    image: 'images/umesh chnadra.jpg',
    color: '#f59e0b'
  },
  {
    id: 10,
    name: 'Mr. Dheeraj Kumar',
    designation: 'Instructor-Turner',
    qual: 'Diploma in mechanical, TOT',
    exp: '4.10 yrs',
    department: 'Mechanical Engineering Department',
    specialization: 'Machine Tools, Turning Operations, Workshop Technology',
    bio: 'Focused on practical machining skills and industrial production techniques.',
    image: 'images/dheeraj kr.jpg',
    color: '#8b5cf6'
  },
  {
    id: 11,
    name: 'Mr. Ashutosh Yadav',
    designation: 'Instructor-Electrician',
    qual: 'Diploma, CITS',
    exp: '3 yrs',
    department: 'Electrical Engineering Department',
    specialization: 'Electrical Wiring, Motor Control, Industrial Automation',
    bio: 'Provides training in electrical systems, wiring practices and automation technologies.',
    image: 'images/atul kr.jpg',
    color: '#10b981'
  },
  {
    id: 12,
    name: 'Mr. Roshan Saroj',
    designation: 'Instructor-RAC',
    qual: 'Diploma(MEP), CITS',
    exp: '4 yrs',
    department: 'Refrigeration & Air Conditioning Department',
    specialization: 'HVAC Systems, Refrigeration Maintenance, Cooling Technologies',
    bio: 'Specializes in refrigeration systems and air-conditioning maintenance practices.',
    image: 'images/roshan.jpg',
    color: '#06b6d4'
  },
  {
    id: 13,
    name: 'Mr. Sushil Kumar',
    designation: 'Instructor-Physiotherapy Technician',
    qual: 'Diploma in Physiotherapy',
    exp: '10 yrs',
    department: 'Allied Health Sciences Department',
    specialization: 'Exercise Therapy, Rehabilitation Techniques, Patient Care',
    bio: 'Focused on physiotherapy techniques, rehabilitation and healthcare training.',
    image: 'images/sushil.jpg',
    color: '#6366f1'
  },
  {
    id: 14,
    name: 'Mr. Rohit Kumar Yadav',
    designation: 'Instructor-Physiotherapy Technician',
    qual: 'Diploma in Physiotherapy, Bse',
    exp: '4 yrs',
    department: 'Allied Health Sciences Department',
    specialization: 'Clinical Physiotherapy, Rehabilitation Management',
    bio: 'Experienced in healthcare education and physiotherapy practices.',
    image: 'images/rohit kr.jpg',
    color: '#3b82f6'
  },
  {
    id: 15,
    name: 'Mr. Ratan Kumar Srivastava',
    designation: 'Instructor-Draughtsman (Mechanical)',
    qual: 'MA, BED, ITI, CITS',
    exp: '15 yrs',
    department: 'Mechanical Design Department',
    specialization: 'Engineering Drawing, AutoCAD, Machine Design',
    bio: 'Provides practical training in engineering drawing and CAD applications.',
    image: 'images/ratan.jpg',
    color: '#f59e0b'
  },
  {
    id: 16,
    name: 'Ms. Fiza Hayat',
    designation: 'Instructor-Finance Executive',
    qual: 'M.COM',
    exp: '3 yrs',
    department: 'Finance & Management Department',
    specialization: 'Accounting, Financial Administration, Tally ERP',
    bio: 'Specializes in finance, accounting and office management systems.',
    image: 'images/fiza.jpg',
    color: '#8b5cf6'
  },
  {
    id: 17,
    name: 'Mr. Aditya Jaiswal',
    designation: 'Instructor-Finance Executive & Placement Cell',
    qual: 'MBA in Finance, ToT Pedagogy',
    exp: '3 yrs',
    department: 'Finance & Placement Department',
    specialization: 'Financial Management, Industry Coordination',
    bio: 'Experienced in financial administration and student placement activities.',
    image: 'images/aditya.jpg',
    color: '#10b981'
  },
  {
    id: 18,
    name: 'Ms. Anjali Maurya',
    designation: 'Instructor-Electronics Mechanic',
    qual: 'ITI, CITS',
    exp: '5 yrs',
    department: 'Electronics Engineering Department',
    specialization: 'Electronic Circuits, Embedded Systems, PCB Design',
    bio: 'Focused on electronics systems, embedded technologies and practical applications.',
    image: 'images/anjali.jpg',
    color: '#ec4899'
  },
  {
    id: 19,
    name: 'Mr. Atul Kumar',
    designation: 'Workshop Superintendent',
    qual: 'Mechanical Engineering (Automobile),CITS(MMV)',
    exp: '9 yrs',
    department: 'Workshop Administration Department',
    specialization: 'Workshop Management, Industrial Safety, Training Coordination',
    bio: 'Oversees workshop administration and practical training activities.',
    image: 'images/atul kr.jpg',
    color: '#f97316'
  },
  {
    id: 20,
    name: 'Mr. Chandra Bhan Maurya',
    designation: 'Instructor-Welder',
    qual: 'Mechanical Engineering(Automobile), CITS',
    exp: '4 yrs',
    department: 'Welding Technology Department',
    specialization: 'Arc Welding, Gas Welding, Fabrication Techniques',
    bio: 'Provides practical training in welding technologies and industrial fabrication processes.',
    image: 'images/chandrabhan.jpg',
    color: '#06b6d4'
  },
  {
    id: 21,
    name: 'Mr. Sapna Kushwaha',
    designation: 'Instructor-Electronics Mechanic',
    qual: 'Diploma in Electronics Engineering, CITS',
    exp: '5 yrs',
    department: 'Electronics Engineering Department',
    specialization: 'Industrial Electronics, Embedded Systems',
    bio: 'Experienced in electronics education and modern embedded technologies.',
    image: 'images/sapna.jpg',
    color: '#3b82f6'
  },
  {
    id: 22,
    name: 'Mr. Rohit Kumar',
    designation: 'Instructor-Electronics Mechanic',
    qual: 'ITI, CITS',
    exp: '4.10 yrs',
    department: 'Electronics Engineering Department',
    specialization: 'Electronic Devices, PCB Design, Circuit Troubleshooting',
    bio: 'Provides practical knowledge in electronic circuits and industrial electronics.',
    image: 'images/rohit.jpg',
    color: '#f59e0b'
  },
  {
    id: 23,
    name: 'Ms. Shubhi Gaurav',
    designation: 'Instructor-Draughtsman (Civil)',
    qual: 'Diploma in Civil Engineering, CITS',
    exp: '2 yrs',
    department: 'Civil Engineering Department',
    specialization: 'Building Planning, Surveying, AutoCAD Civil',
    bio: 'Specializes in civil drafting, construction planning and engineering drawing.',
    image: 'images/shubhi.jpg',
    color: '#8b5cf6'
  },
  {
    id: 24,
    name: 'Ms. Akanksha Jaiswal',
    designation: 'Instructor-Cosmetology',
    qual: 'ITI, CITS, TOT, Pedagogy',
    exp: '4 yrs',
    department: 'Beauty & Wellness Department',
    specialization: 'Beauty Therapy, Hair Care, Salon Management',
    bio: 'Provides training in cosmetology, beauty care and wellness management.',
    image: 'images/akanksha.jpg',
    color: '#10b981'
  },
  {
    id: 25,
    name: 'Ms. Pooja Yadav',
    designation: 'Instructor-Cosmetology',
    qual: 'ITI Cosmetology, CITS Cosmetology',
    exp: '4.5 yrs',
    department: 'Beauty & Wellness Department',
    specialization: 'Skin Care, Makeup Techniques, Beauty Therapy',
    bio: 'Focused on modern beauty techniques and professional cosmetology training.',
    image: 'images/pooja.jpg',
    color: '#ec4899'
  },
  {
    id: 26,
    name: 'Mr. Rahul Kumar',
    designation: 'Instructor-CHNM',
    qual: 'ITI, CITS',
    exp: '4 yrs',
    department: 'Computer Science & Networking Department',
    specialization: 'Computer Networking, Network Security, Cloud Computing',
    bio: 'Specializes in computer networking',
    image: 'images/rahul.jpg',
    color: '#f97316'
  },
  {
    id: 27,
    name: 'Ms. Kirti Mishra',
    designation: 'Instructor-CHNM',
    qual: 'BTech(CSE), CITS',
    exp: '1.10 yrs',
    department: 'Computer Science & Networking Department',
    specialization: 'Computer Networking,Server Administration',
    bio: 'Specializes in computer networking, cloud technologies and server administration',
    image: 'images/kirti.jpg',
    color: '#06b6d4'
  }
];

  const departments = ['all', ...new Set(faculty.map(f => f.department))];
  
  const filteredFaculty = activeFilter === 'all' 
    ? faculty 
    : faculty.filter(f => f.department === activeFilter);

  const openModal = (expert) => {
    setSelectedExpert(expert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExpert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="experts">
      <div className="experts-header">
        <h2>👨‍🎓 Meet Our Experts</h2>
        <p className="experts-subtitle">Guiding minds, shaping futures</p>
      </div>

      <div className="expert-grid">
        {filteredFaculty.map((faculty) => (
          <div 
            className="expert-card" 
            key={faculty.id}
            onClick={() => openModal(faculty)}
          >
            <div className="card-glow" style={{ '--glow-color': faculty.color }}></div>
            <div className="card-image-container">
              <img 
                src={faculty.image} 
                alt={faculty.name}
                className="expert-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop';
                }}
              />
              <div className="image-overlay" style={{ background: `linear-gradient(to top, ${faculty.color}dd, transparent)` }}></div>
            </div>
            <div className="card-content">
              <h4 className="expert-name">{faculty.name}</h4>
              <span className="expert-designation" style={{ color: faculty.color, borderColor: faculty.color }}>
                {faculty.designation}
              </span>
              
              <div className="card-action">
                <span className="view-profile">View Profile →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expert Modal */}
      {selectedExpert && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container-e" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-hero-e" style={{ background: `linear-gradient(135deg, ${selectedExpert.color}15, ${selectedExpert.color}05)` }}>
              <div className="modal-image-container-e">
                <img 
                  src={selectedExpert.image} 
                  alt={selectedExpert.name}
                  className="modal-expert-image-e"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop';
                  }}
                />
                <div className="modal-image-ring" style={{ borderColor: selectedExpert.color }}></div>
              </div>
              <h3 className="modal-name">{selectedExpert.name}</h3>
              <span className="modal-designation" style={{ color: selectedExpert.color }}>
                {selectedExpert.designation}
              </span>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4 className="section-title">📋 About</h4>
                <p className="expert-bio">{selectedExpert.bio}</p>
              </div>

              <div className="modal-grid">
                <div className="info-card">
                  <span className="info-icon">🎯</span>
                  <div className="info-content">
                    <span className="info-label">Specialization</span>
                    <span className="info-value">{selectedExpert.specialization}</span>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-icon">🏛️</span>
                  <div className="info-content">
                    <span className="info-label">Department</span>
                    <span className="info-value">{selectedExpert.department}</span>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-icon">🎓</span>
                  <div className="info-content">
                    <span className="info-label">Qualification</span>
                    <span className="info-value">{selectedExpert.qual}</span>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-icon">⏳</span>
                  <div className="info-content">
                    <span className="info-label">Experience</span>
                    <span className="info-value">{selectedExpert.exp}</span>
                  </div>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      )}
    </div>
  );
}