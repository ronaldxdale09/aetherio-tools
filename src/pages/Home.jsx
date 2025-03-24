import React from 'react';
import { Link } from 'react-router-dom';
import ToolsSection from '../components/sections/ToolsSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content animate-fadeUp">
            <h1 className="animate-gradient">Premium Tools. Zero Cost. No Signups.</h1>
            <p className="lead">Access a comprehensive suite of professional-grade tools designed to enhance productivity and simplify your workflow. No credit card, no account, just pure utility.</p>
            <div>
              <Link to="/tools" className="btn btn-primary animate-pulse">Explore Tools</Link>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="decorative-circle large" style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 70%)', top: '20%', right: '-150px', zIndex: -1, filter: 'blur(40px)' }}></div>
        
        <div className="decorative-circle small animate-float" style={{ position: 'absolute', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(4, 120, 87, 0.15), transparent 70%)', bottom: '10%', left: '5%', zIndex: -1, filter: 'blur(20px)' }}></div>
        
        <div className="decorative-dots animate-rotate" style={{ position: 'absolute', width: '200px', height: '200px', backgroundImage: 'radial-gradient(var(--primary-light) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2, top: '25%', left: '10%', zIndex: -1 }}></div>
      </section>

      <section id="tools" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="animate-gradient">Featured Tools</h2>
            <p>Discover our collection of powerful, free-to-use tools</p>
            <div className="section-underline" style={{ position: 'relative', height: '3px', width: '120px', margin: '1.5rem auto', background: 'linear-gradient(90deg, var(--primary), var(--accent-light), var(--primary))', backgroundSize: '200% 100%', animation: 'gradientShift 5s infinite' }}></div>
          </div>
          <ToolsSection />
        </div>
      </section>

      <section id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="animate-gradient">Why Choose Us</h2>
            <p>Premium features without the premium price tag</p>
            <div className="section-underline" style={{ position: 'relative', height: '3px', width: '120px', margin: '1.5rem auto', background: 'linear-gradient(90deg, var(--primary), var(--accent-light), var(--primary))', backgroundSize: '200% 100%', animation: 'gradientShift 5s infinite' }}></div>
          </div>
          <FeaturesSection />
        </div>
      </section>

      <section id="about" className="cta">
        <div className="container">
          <div className="glass-effect" style={{ padding: '3rem', margin: '2rem auto', maxWidth: '800px' }}>
            <h2 className="animate-gradient">Free Tools For Everyone</h2>
            <div className="section-underline" style={{ position: 'relative', height: '3px', width: '120px', margin: '1.5rem auto', background: 'linear-gradient(90deg, var(--primary), var(--accent-light), var(--primary))', backgroundSize: '200% 100%', animation: 'gradientShift 5s infinite' }}></div>
            <p>We believe in democratizing access to powerful digital tools. While all our tools are free to use, your support helps us maintain and develop new features.</p>
            <div className="cta-buttons">
              <Link to="/tools" className="btn btn-primary">Start Using Tools</Link>
              <a href="#" className="btn btn-donate animate-pulse">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ marginRight: '8px' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Support Our Mission
              </a>
            </div>
            
            {/* Achievement badges */}
            <div className="achievements" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem' }}>
              <div className="achievement-badge" style={{ textAlign: 'center' }}>
                <div className="badge-circle animate-float" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white' }}>10+</span>
                </div>
                <p style={{ marginTop: '1rem', fontWeight: 500 }}>Free Tools</p>
              </div>
              
              <div className="achievement-badge" style={{ textAlign: 'center' }}>
                <div className="badge-circle animate-float delay-1" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white' }}>5K+</span>
                </div>
                <p style={{ marginTop: '1rem', fontWeight: 500 }}>Daily Users</p>
              </div>
              
              <div className="achievement-badge" style={{ textAlign: 'center' }}>
                <div className="badge-circle animate-float delay-2" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white' }}>0</span>
                </div>
                <p style={{ marginTop: '1rem', fontWeight: 500 }}>Sign-ups Needed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="decorative-circle large" style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1), transparent 70%)', bottom: '-150px', left: '-100px', zIndex: -1, filter: 'blur(40px)' }}></div>
      </section>
    </main>
  );
};

export default Home;