import './Community.css'

const Community = () => {
  return (
    <section className="community" id="community">
      <div className="community-container">
        <div className="community-visual">
          <div className="illustration-container">
            <svg className="community-illustration" viewBox="0 0 500 400" fill="none">
              <circle cx="250" cy="200" r="180" fill="url(#communityBg)" opacity="0.1"/>

              <g className="person person-1">
                <circle cx="150" cy="180" r="35" fill="#4BA3F5"/>
                <path d="M150 225 C120 225 100 245 100 275 L100 290 L200 290 L200 275 C200 245 180 225 150 225Z" fill="#4BA3F5" opacity="0.8"/>
                <circle cx="145" cy="175" r="3" fill="white"/>
                <circle cx="155" cy="175" r="3" fill="white"/>
                <path d="M145 190 Q150 193 155 190" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </g>

              <g className="person person-2">
                <circle cx="250" cy="150" r="40" fill="#66BB6A"/>
                <path d="M250 200 C215 200 190 225 190 260 L190 280 L310 280 L310 260 C310 225 285 200 250 200Z" fill="#66BB6A" opacity="0.8"/>
                <circle cx="245" cy="145" r="3" fill="white"/>
                <circle cx="255" cy="145" r="3" fill="white"/>
                <path d="M245 160 Q250 165 255 160" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </g>

              <g className="person person-3">
                <circle cx="350" cy="180" r="35" fill="#FFC107"/>
                <path d="M350 225 C320 225 300 245 300 275 L300 290 L400 290 L400 275 C400 245 380 225 350 225Z" fill="#FFC107" opacity="0.8"/>
                <circle cx="345" cy="175" r="3" fill="white"/>
                <circle cx="355" cy="175" r="3" fill="white"/>
                <path d="M345 190 Q350 193 355 190" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </g>

              <path className="connection-curve curve-1" d="M185 200 Q217 175 250 175" stroke="#4BA3F5" strokeWidth="3" strokeDasharray="5,5" fill="none" opacity="0.6">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
              </path>

              <path className="connection-curve curve-2" d="M290 175 Q320 175 315 200" stroke="#66BB6A" strokeWidth="3" strokeDasharray="5,5" fill="none" opacity="0.6">
                <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite"/>
              </path>

              <defs>
                <radialGradient id="communityBg">
                  <stop offset="0%" stopColor="#4BA3F5"/>
                  <stop offset="100%" stopColor="#66BB6A"/>
                </radialGradient>
              </defs>
            </svg>

            <div className="pulse-ring ring-1"></div>
            <div className="pulse-ring ring-2"></div>
            <div className="pulse-ring ring-3"></div>
          </div>
        </div>

        <div className="community-content">
          <h2 className="community-title">
            Join thousands of
            <br />
            <span className="gradient-text">healthcare professionals</span>
          </h2>
          <p className="community-description">
            CareGrid is trusted by medical practices, hospitals, and care facilities worldwide to streamline their operations and deliver exceptional patient care.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">15K+</div>
              <div className="stat-label">Healthcare Providers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Patients Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>

          <div className="testimonial">
            <div className="testimonial-content">
              <div className="quote-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M10 18C10 14.6863 12.6863 12 16 12V8C10.4772 8 6 12.4772 6 18C6 20.2091 6.89543 22.2091 8.34315 23.6569L10 22C8.89543 20.8954 8 19.5228 8 18H10ZM22 18C22 14.6863 24.6863 12 28 12V8C22.4772 8 18 12.4772 18 18C18 20.2091 18.8954 22.2091 20.3431 23.6569L22 22C20.8954 20.8954 20 19.5228 20 18H22Z" fill="#4BA3F5"/>
                </svg>
              </div>
              <p className="testimonial-text">
                CareGrid has transformed how we coordinate care. We've reduced administrative overhead by 40% and our patients love the seamless experience.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#E8EDF4"/>
                    <circle cx="20" cy="16" r="6" fill="#4BA3F5"/>
                    <path d="M10 32C10 26 14 22 20 22C26 22 30 26 30 32" fill="#4BA3F5"/>
                  </svg>
                </div>
                <div className="author-info">
                  <div className="author-name">Dr. Sarah Mitchell</div>
                  <div className="author-title">Chief Medical Officer, CareFirst Health</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
