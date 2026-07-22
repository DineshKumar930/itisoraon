// src/pages/Trade.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Trade.css';
const trades = [
  { 
    name: 'Electrician', 
    duration: '2 Years', 
    seats: 20, 
    desc: 'Electrical wiring, motors, transformers, control panels and industrial electrical systems',
    icon: '⚡'
  },
  { 
    name: 'Fitter', 
    duration: '2 Years', 
    seats: 20, 
    desc: 'Machine fitting, assembly work, tools handling and mechanical fabrication',
    icon: '🔧'
  },
  { 
    name: 'Turner', 
    duration: '2 Years', 
    seats: 20, 
    desc: 'Lathe machine operation, machining process and precision component manufacturing',
    icon: '⚙️'
  },
  { 
    name: 'Welder', 
    duration: '2 Years', 
    seats: 40, 
    desc: 'Arc welding, gas welding, metal joining and fabrication techniques',
    icon: '🔥'
  },
  { 
    name: 'Electronics Mechanic', 
    duration: '2 Years', 
    seats: 24, 
    desc: 'Electronic circuits, PCB repairing, testing equipment and digital systems',
    icon: '🔌'
  },
  { 
    name: 'MMV', 
    duration: '2 Years', 
    seats: 20, 
    desc: 'Automobile engine repair, vehicle servicing and maintenance systems',
    icon: '🚗'
  },
  { 
    name: 'RAC', 
    duration: '2 Years', 
    seats: 20, 
    desc: 'Refrigeration, air conditioning systems installation and maintenance',
    icon: '❄️'
  },
  { 
    name: 'CHNM', 
    duration: '1 Year', 
    seats: 48, 
    desc: 'Computer hardware, networking, operating systems and IT support',
    icon: '🖥️'
  },
  { 
    name: 'COPA', 
    duration: '1 Year', 
    seats: 48, 
    desc: 'Computer applications, programming basics, office automation and internet technology',
    icon: '💻'
  },
  { 
    name: 'Cosmetology', 
    duration: '1 Year', 
    seats: 48, 
    desc: 'Beauty care, hair styling, skin treatment and professional makeup techniques',
    icon: '💄'
  },
  { 
    name: 'Finance Executive', 
    duration: '1 Year', 
    seats: 48, 
    desc: 'Accounting basics, financial operations, banking services and office management',
    icon: '💰'
  },
  { 
    name: 'Physiotherapy', 
    duration: '1 Year', 
    seats: 48, 
    desc: 'Basic healthcare, rehabilitation techniques and patient care support',
    icon: '🩺'
  }
];
export default function Trade() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrade, setSelectedTrade] = useState(null);

  const filteredTrades = trades.filter(trade =>
    trade.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trade.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="trade-page">
      {/* Header */}
      <div className="trade-header">
        <h1>Our Trades</h1>
        <p>Industry-relevant courses designed for your career growth</p>
      </div>

      {/* Search */}
      <div className="trade-search">
        <input
          type="text"
          placeholder="Search trades..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {/* Results Count */}
      <div className="trade-count">
        {filteredTrades.length} Trade{filteredTrades.length !== 1 ? 's' : ''} Available
      </div>

      {/* Trade Grid - 2x2 on mobile */}
      <div className="trade-grid">
        {filteredTrades.map((trade, index) => (
          <motion.div
            key={index}
            className="trade-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            onClick={() => setSelectedTrade(trade)}
          >
            <div className="trade-icon">{trade.icon}</div>
            <h3 className="trade-name">{trade.name}</h3>
            <div className="trade-info">
              <span>📅 {trade.duration}</span>
              <span>👥 {trade.seats} seats</span>
            </div>
            <p className="trade-desc">{trade.desc}</p>
            <button className="trade-btn">View Details</button>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredTrades.length === 0 && (
        <div className="no-results">
          <span>🔍</span>
          <h3>No trades found</h3>
          <p>Try adjusting your search</p>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selectedTrade && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTrade(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedTrade(null)}>✕</button>
              <div className="modal-icon">{selectedTrade.icon}</div>
              <h2>{selectedTrade.name}</h2>
              <div className="modal-info">
                <div>
                  <span>Duration</span>
                  <strong>{selectedTrade.duration}</strong>
                </div>
                <div>
                  <span>Seats</span>
                  <strong>{selectedTrade.seats}</strong>
                </div>
              </div>
              <p className="modal-desc">{selectedTrade.desc}</p>
              <button className="modal-apply">Apply Now →</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}