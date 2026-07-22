// src/pages/News.jsx
import { useState } from 'react';
import './News.css';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedNews, setExpandedNews] = useState(null);

  const newsItems = [
    {
      id: 1,
      title: 'Admission 2026-27 Open',
      date: 'June 15, 2026',
      category: 'admission',
      priority: 'high',
      summary: 'Apply online by 30th June 2026',
      description: 'New admissions are now open for the academic year 2026-27. Various trades available including Electrician, Fitter, COPA, and more. Limited seats available. Apply now to secure your spot.',
      link: '#',
      icon: '🎓',
      color: '#3b82f6',
      badge: 'New'
    },
    {
      id: 2,
      title: 'Placement Drive 2026',
      date: 'July 5, 2026',
      category: 'placement',
      priority: 'high',
      summary: '20+ companies visiting on 15th July',
      description: 'Major companies including Tata, Reliance, Infosys, and L&T will be conducting campus interviews. Over 200 positions available across various trades. Registration mandatory.',
      link: '#',
      icon: '💼',
      color: '#10b981',
      badge: 'Hot'
    },
    {
      id: 3,
      title: 'Independence Day Celebration',
      date: 'August 10, 2026',
      category: 'event',
      priority: 'medium',
      summary: 'Cultural event on 15th August 2026',
      description: 'Join us for a grand Independence Day celebration featuring cultural performances, flag hoisting ceremony, speech competition, and prize distribution. All students must attend.',
      link: '#',
      icon: '🇮🇳',
      color: '#f59e0b',
      badge: 'Upcoming'
    },
    {
      id: 4,
      title: 'Semester Exam Schedule',
      date: 'July 20, 2026',
      category: 'exam',
      priority: 'high',
      summary: 'Final exams from 1st August 2026',
      description: 'The semester examination schedule has been released. Practical exams will be held from 1st-10th August followed by theory exams. Hall tickets available online.',
      link: '#',
      icon: '📝',
      color: '#ef4444',
      badge: 'Important'
    },
    {
      id: 5,
      title: 'Workshop on AI & ML',
      date: 'July 25, 2026',
      category: 'workshop',
      priority: 'medium',
      summary: '3-day workshop starting 5th August',
      description: 'Free workshop on Artificial Intelligence and Machine Learning for all students. Certificate will be provided. Industry experts from Google and Microsoft will be conducting sessions.',
      link: '#',
      icon: '🤖',
      color: '#8b5cf6',
      badge: 'Free'
    },
    {
      id: 6,
      title: 'Sports Meet Registration',
      date: 'July 30, 2026',
      category: 'event',
      priority: 'low',
      summary: 'Annual sports meet in September',
      description: 'Registration open for annual sports meet. Events include cricket, football, athletics, and indoor games. Last date for registration is 15th August.',
      link: '#',
      icon: '🏆',
      color: '#06b6d4',
      badge: 'Register'
    },
    {
      id: 7,
      title: 'Industrial Visit - Tata Motors',
      date: 'August 1, 2026',
      category: 'visit',
      priority: 'medium',
      summary: 'Visit scheduled for 20th August',
      description: 'Educational industrial visit to Tata Motors plant. Transportation and lunch provided. Limited to 50 students. First come first served basis.',
      link: '#',
      icon: '🏭',
      color: '#6366f1',
      badge: 'Limited'
    },
    {
      id: 8,
      title: 'Scholarship Applications',
      date: 'August 5, 2026',
      category: 'admission',
      priority: 'high',
      summary: 'Apply for merit scholarship by 30th August',
      description: 'Merit-based scholarships available for deserving students. Covers up to 50% of tuition fees. Income certificate and marksheets required for application.',
      link: '#',
      icon: '💰',
      color: '#f97316',
      badge: 'Apply Now'
    },
  ];

  const categories = [
    { key: 'all', label: 'All Notices', icon: '📋' },
    { key: 'admission', label: 'Admission', icon: '🎓' },
    { key: 'placement', label: 'Placement', icon: '💼' },
    { key: 'exam', label: 'Exams', icon: '📝' },
    { key: 'event', label: 'Events', icon: '🎉' },
    { key: 'workshop', label: 'Workshops', icon: '🔧' },
    { key: 'visit', label: 'Visits', icon: '🏭' },
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  const toggleExpand = (id) => {
    setExpandedNews(expandedNews === id ? null : id);
  };

  return (
    <div className="news">
      <div className="news-header">
        <div className="header-content">
          <h2>📰 News & Notices</h2>
          <p className="header-subtitle">Stay updated with the latest announcements</p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">{newsItems.length}</span>
            <span className="stat-label">Total Notices</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">New Today</span>
          </div>
        </div>
      </div>

      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`category-btn ${activeCategory === cat.key ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.key)}
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-label">{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="news-timeline">
        {filteredNews.map((news, index) => (
          <div 
            key={news.id} 
            className={`news-card ${expandedNews === news.id ? 'expanded' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => toggleExpand(news.id)}
          >
            <div className="news-card-inner">
              <div className="news-icon-container" style={{ background: `${news.color}15` }}>
                <span className="news-icon">{news.icon}</span>
                <div className="priority-indicator" style={{ background: news.color }}></div>
              </div>

              <div className="news-content">
                <div className="news-meta">
                  <span className="news-date">
                    📅 {news.date}
                  </span>
                  <span 
                    className="news-badge" 
                    style={{ 
                      background: `${news.color}20`, 
                      color: news.color,
                      borderColor: news.color 
                    }}
                  >
                    {news.badge}
                  </span>
                </div>

                <h3 className="news-title">{news.title}</h3>
                <p className="news-summary">{news.summary}</p>
                
                {expandedNews === news.id && (
                  <div className="news-details">
                    <p className="news-description">{news.description}</p>
                    <div className="news-actions">
                      <button 
                        className="download-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle download
                        }}
                      >
                        <span>📥</span> Download Notice
                      </button>
                      <button 
                        className="share-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle share
                        }}
                      >
                        <span>🔗</span> Share
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="news-expand-icon">
                <span className={`expand-arrow ${expandedNews === news.id ? 'rotated' : ''}`}>
                  ▼
                </span>
              </div>
            </div>

            <div className="card-progress" style={{ background: news.color }}></div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <h3>No notices found</h3>
          <p>No notices available for this category</p>
        </div>
      )}

      <div className="news-footer">
        <button className="view-all-btn">
          View All Notices →
        </button>
      </div>
    </div>
  );
}