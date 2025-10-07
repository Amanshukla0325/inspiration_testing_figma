import { useState } from 'react'
import './Features.css'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: 'Smart Scheduling',
      description: 'AI-powered appointment coordination that adapts to patient needs and provider availability',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="12" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M8 18H40" stroke="currentColor" strokeWidth="3"/>
          <path d="M16 8V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M32 8V14" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="18" cy="26" r="2" fill="currentColor"/>
          <circle cx="24" cy="26" r="2" fill="currentColor"/>
          <circle cx="30" cy="26" r="2" fill="currentColor"/>
          <circle cx="18" cy="32" r="2" fill="currentColor"/>
          <circle cx="24" cy="32" r="2" fill="currentColor"/>
        </svg>
      ),
      color: '#4BA3F5'
    },
    {
      title: 'Real-Time Updates',
      description: 'Keep everyone informed with instant notifications and status changes across your care team',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="24" cy="24" r="4" fill="currentColor"/>
          <path d="M24 8V4" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 44V40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M40 24H44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          <path d="M4 24H8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      color: '#66BB6A'
    },
    {
      title: 'Secure Messaging',
      description: 'HIPAA-compliant communication platform for safe patient and provider interactions',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="6" y="10" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M6 16L24 28L42 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="34" cy="32" r="8" fill="white" stroke="currentColor" strokeWidth="2"/>
          <path d="M31 32L33 34L37 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#FFC107'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into care outcomes, team performance, and patient engagement',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="28" width="8" height="14" rx="2" fill="currentColor"/>
          <rect x="20" y="20" width="8" height="22" rx="2" fill="currentColor"/>
          <rect x="32" y="12" width="8" height="30" rx="2" fill="currentColor"/>
          <path d="M4 8L16 16L24 12L44 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#FF7043'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <h2 className="section-title">Everything you need for</h2>
          <h2 className="section-title gradient-text">seamless care coordination</h2>
          <p className="section-subtitle">
            Powerful tools designed to simplify healthcare workflows and improve patient outcomes
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${activeFeature === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
              style={{ '--feature-color': feature.color } as React.CSSProperties}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className="features-visual">
          <div className="visual-bg"></div>
          <svg className="visual-decoration" width="600" height="400" viewBox="0 0 600 400">
            <path
              d="M 50,200 Q 150,50 300,200 T 550,200"
              stroke="url(#featureGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="10,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="15"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="featureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4BA3F5" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#66BB6A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FFC107" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Features
