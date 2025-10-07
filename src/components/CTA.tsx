import './CTA.css'

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-background">
          <svg className="cta-decoration deco-1" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="url(#ctaGradient1)" opacity="0.4">
              <animate attributeName="r" values="80;90;80" dur="4s" repeatCount="indefinite"/>
            </circle>
            <defs>
              <radialGradient id="ctaGradient1">
                <stop offset="0%" stopColor="#FFC107" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#FFC107" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>

          <svg className="cta-decoration deco-2" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="70" fill="url(#ctaGradient2)" opacity="0.3">
              <animate attributeName="r" values="70;85;70" dur="5s" repeatCount="indefinite"/>
            </circle>
            <defs>
              <radialGradient id="ctaGradient2">
                <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#66BB6A" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="cta-content">
          <div className="cta-icon">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="35" fill="white" opacity="0.2"/>
              <path d="M40 20C29.5 20 21 28.5 21 39C21 45.3 24.1 50.9 28.9 54.4V63C28.9 65.2 30.7 67 32.9 67H47.1C49.3 67 51.1 65.2 51.1 63V54.4C55.9 50.9 59 45.3 59 39C59 28.5 50.5 20 40 20ZM40 28C45.5 28 50 32.5 50 38C50 40.1 49.3 42 48.1 43.5L47 45V58H33V45L31.9 43.5C30.7 42 30 40.1 30 38C30 32.5 34.5 28 40 28Z" fill="white"/>
              <rect x="35" y="71" width="10" height="4" rx="2" fill="white"/>
            </svg>
          </div>

          <h2 className="cta-title">Ready to transform your healthcare practice?</h2>
          <p className="cta-subtitle">
            Join thousands of providers who trust CareGrid for seamless care coordination
          </p>

          <div className="cta-actions">
            <button className="cta-primary">Start Free Trial</button>
            <button className="cta-secondary">Schedule Demo</button>
          </div>

          <div className="cta-features">
            <div className="cta-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="cta-feature">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 10L9 12L13 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2"/>
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
