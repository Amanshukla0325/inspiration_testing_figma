import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero">
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">
            <img src="/caregridlogo_landingpage.jpeg" alt="CareGrid" className="logo-img" />
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#community">Community</a>
            <button className="nav-btn">Get Started</button>
          </div>
        </div>
      </nav>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Healthcare coordination
            <br />
            <span className="gradient-text">in minutes</span>
          </h1>
          <p className="hero-subtitle">
            Connect patients, providers, and caregivers seamlessly. CareGrid simplifies healthcare management with intelligent coordination tools built for modern care teams.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">Watch Demo</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4ZM16 10C17.1 10 18 10.9 18 12C18 13.1 17.1 14 16 14C14.9 14 14 13.1 14 12C14 10.9 14.9 10 16 10ZM19 22H13V20H14V16H13V14H17V20H19V22Z" fill="#4BA3F5"/>
              </svg>
            </div>
            <h4>Patient Records</h4>
            <p>Secure & instant access</p>
          </div>

          <div className="floating-card card-2">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M26 6H20C20 3.8 18.2 2 16 2C13.8 2 12 3.8 12 6H6C4.9 6 4 6.9 4 8V26C4 27.1 4.9 28 6 28H26C27.1 28 28 27.1 28 26V8C28 6.9 27.1 6 26 6ZM16 4C17.1 4 18 4.9 18 6C18 7.1 17.1 8 16 8C14.9 8 14 7.1 14 6C14 4.9 14.9 4 16 4ZM22 18L14 26L10 22L11.4 20.6L14 23.2L20.6 16.6L22 18Z" fill="#FFC107"/>
              </svg>
            </div>
            <h4>Care Plans</h4>
            <p>Coordinated treatment</p>
          </div>

          <div className="floating-card card-3">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2C8.3 2 2 8.3 2 16C2 23.7 8.3 30 16 30C23.7 30 30 23.7 30 16C30 8.3 23.7 2 16 2ZM16 6C18.2 6 20 7.8 20 10C20 12.2 18.2 14 16 14C13.8 14 12 12.2 12 10C12 7.8 13.8 6 16 6ZM16 26C12.7 26 9.8 24.4 8 21.9C8 19.3 13.3 17.9 16 17.9C18.7 17.9 24 19.3 24 21.9C22.2 24.4 19.3 26 16 26Z" fill="#66BB6A"/>
              </svg>
            </div>
            <h4>Team Collaboration</h4>
            <p>Real-time updates</p>
          </div>

          <svg className="connection-line line-1" width="200" height="150" viewBox="0 0 200 150">
            <path d="M10,10 Q100,50 190,140" stroke="url(#gradient1)" strokeWidth="3" fill="none" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4BA3F5" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFC107" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          <svg className="connection-line line-2" width="200" height="150" viewBox="0 0 200 150">
            <path d="M10,140 Q100,100 190,10" stroke="url(#gradient2)" strokeWidth="3" fill="none" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1.2s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="gradient2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#66BB6A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4BA3F5" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          <div className="lightbulb-glow">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="40" fill="url(#lightbulb-gradient)" />
              <path d="M60 30C48.9 30 40 38.9 40 50C40 56.4 43.1 62.1 47.8 65.6V75C47.8 77.2 49.6 79 51.8 79H68.2C70.4 79 72.2 77.2 72.2 75V65.6C76.9 62.1 80 56.4 80 50C80 38.9 71.1 30 60 30ZM60 38C65.5 38 70 42.5 70 48C70 50.1 69.3 52 68.1 53.5L67 55V70H53V55L51.9 53.5C50.7 52 50 50.1 50 48C50 42.5 54.5 38 60 38ZM54 85H66V88H54V85Z" fill="white" />
              <defs>
                <radialGradient id="lightbulb-gradient">
                  <stop offset="0%" stopColor="#FFC107" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFC107" stopOpacity="0.1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
