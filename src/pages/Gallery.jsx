// src/pages/Gallery.jsx
import { useState, useEffect } from 'react';
import './Gallery.css';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    { 
      id: 1, 
      image: 'images/fr.jpeg', 
      category: 'campus', 
      title: 'College Campus', 
      date: '2026',
      description: 'Beautiful campus view during spring semester'
    },
    { 
      id: 2, 
      image: 'images/cls.jpeg', 
      category: 'campus', 
      title: 'Class Room', 
      date: '2026',
      description: 'Modern library facility with digital resources'
    },
    { 
      id: 3, 
      image: 'images/drw.jpeg', 
      category: 'campus', 
      title: 'Drawing Class Room', 
      date: '2026',
      description: 'Hub of student activities and events'
    },
    { 
      id: 4, 
      image: 'images/akb.jpeg', 
      category: 'events', 
      title: 'Event', 
      date: '2026',
      description: 'Celebrating the class of 2024 achievements'
    },
    { 
      id: 5, 
      image: 'images/meet.jpeg', 
      category: 'events', 
      title: 'Events', 
      date: '2026',
      description: 'Annual inter-college sports competition'
    },
    { 
      id: 6, 
      image: 'images/akb2.jpeg', 
      category: 'Award Destribution', 
      title: 'Art Exhibition', 
      date: '2025',
      description: 'Showcasing student artwork and creativity'
    },
    { 
      id: 7, 
      image: 'images/exvi.jpeg', 
      category: 'workshop', 
      title: 'Exhibition', 
      date: '2025',
      description: 'Hands-on session on latest technologies'
    },
    { 
      id: 8, 
      image: 'images/ct.jpeg', 
      category: 'workshop', 
      title: 'cosmetology Events', 
      date: '2025',
      description: 'Intensive programming workshop series'
    },
    { 
      id: 9, 
      image: 'images/tbt.jpeg', 
      category: 'workshop', 
      title: 'Tablet Distribution', 
      date: '2025',
      description: 'Connecting students with top employers'
    },
    { 
      id: 10, 
      image: 'images/plac.jpeg', 
      category: 'workshop', 
      title: 'Career Fair', 
      date: '2025',
      description: 'Connecting students with top employers'
    },
    { 
      id: 11, 
      image: 'images/aw1.jpeg', 
      category: 'workshop', 
      title: 'Award Distribution', 
      date: '2025',
      description: 'Connecting students with top employers'
    },
    { 
      id: 12, 
      image: 'images/bd.jpeg', 
      category: 'workshop', 
      title: 'Class Room', 
      date: '2025',
      description: 'Connecting students with top employers'
    },
    { 
      id: 13, 
      image: 'images/ms.jpeg', 
      category: 'workshop', 
      title: 'Freshers Party', 
      date: '2025',
      description: 'Connecting students with top employers'
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Re-enable body scroll when modal is closed
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
  };

  const navigateImage = (direction) => {
    const filteredArray = filteredItems;
    let newIndex = currentIndex + direction;
    
    if (newIndex < 0) newIndex = filteredArray.length - 1;
    if (newIndex >= filteredArray.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setSelectedImage(filteredArray[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Clean up: remove body styles if component unmounts
      document.body.style.overflow = 'auto';
      document.body.classList.remove('modal-open');
    };
  }, [selectedImage, currentIndex]);

  // Filter categories
  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h2>📸 Gallery</h2>
        <p className="gallery-subtitle">Moments that tell our story</p>
      </div>

     

      <div className="masonry">
        {filteredItems.map((item, i) => (
          <div 
            className="gallery-item" 
            key={item.id}
            onClick={() => openModal(item, i)}
          >
            <div className="gallery-item-content">
              <img 
                src={item.image} 
                alt={item.title} 
                className="gallery-image"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="%23e2e8f0"%3E%3Crect width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-size="16"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Page Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <button 
              className="nav-btn prev-btn" 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(-1);
              }}
            >
              ‹
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="modal-image"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" fill="%23e2e8f0"%3E%3Crect width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-size="16"%3EImage Not Found%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            
            <button 
              className="nav-btn next-btn" 
              onClick={(e) => {
                e.stopPropagation();
                navigateImage(1);
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}