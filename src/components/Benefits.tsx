import './Benefits.css'

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits-container">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2 className="benefits-title">
              Built for healthcare
              <br />
              <span className="gradient-text">professionals like you</span>
            </h2>
            <p className="benefits-description">
              CareGrid streamlines complex healthcare workflows, giving you more time to focus on what matters most - patient care.
            </p>

            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Reduce Administrative Time</h4>
                  <p>Save up to 10 hours per week on coordination tasks</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Improve Patient Satisfaction</h4>
                  <p>Better communication leads to better outcomes</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Enhance Team Collaboration</h4>
                  <p>Keep everyone on the same page, in real-time</p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h4>Ensure Compliance</h4>
                  <p>HIPAA-compliant and audit-ready documentation</p>
                </div>
              </div>
            </div>

            <button className="benefits-cta">Learn How It Works</button>
          </div>

          <div className="benefits-visual">
            <div className="visual-card main-card">
              <div className="card-header">
                <div className="header-dot"></div>
                <div className="header-dot"></div>
                <div className="header-dot"></div>
              </div>
              <div className="card-body">
                <div className="stat-row">
                  <span className="stat-label">Active Patients</span>
                  <span className="stat-value">248</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill" style={{ width: '85%' }}></div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Care Team Members</span>
                  <span className="stat-value">32</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill" style={{ width: '64%' }}></div>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Appointments Today</span>
                  <span className="stat-value">18</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-fill" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>

            <div className="floating-badge badge-1">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" fill="#66BB6A"/>
                <path d="M12 16L14.5 18.5L20 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>99.9% Uptime</span>
            </div>

            <div className="floating-badge badge-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L20 12L28 13L22 19L24 28L16 23L8 28L10 19L4 13L12 12L16 4Z" fill="#FFC107"/>
              </svg>
              <span>HIPAA Certified</span>
            </div>

            <svg className="benefits-decoration" width="400" height="400" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="150" stroke="url(#benefitGradient)" strokeWidth="2" fill="none" strokeDasharray="8,8">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 200 200"
                  to="360 200 200"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="200" cy="200" r="180" stroke="url(#benefitGradient)" strokeWidth="2" fill="none" strokeDasharray="12,12" opacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 200 200"
                  to="0 200 200"
                  dur="25s"
                  repeatCount="indefinite"
                />
              </circle>
              <defs>
                <linearGradient id="benefitGradient">
                  <stop offset="0%" stopColor="#4BA3F5" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#66BB6A" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
