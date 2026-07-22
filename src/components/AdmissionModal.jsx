import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./AdmissionModal.css";

export default function AdmissionModal({ closeModal }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Auto close after 5 seconds (optional)
    const timer = setTimeout(() => {
      closeModal();
    }, 5000);

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, [closeModal]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div 
      className="modal-overlay" 
      onClick={handleOverlayClick}
    >
      <div className="admission-modal">
        <button 
          className="close-btn"
          onClick={closeModal}
        >
          ×
        </button>

        <img
          src="/images/banner.png"
          alt="Admission Open"
          className="admission-image"
        />
      </div>
    </div>,
    document.body
  );
}