'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { Code2, Smartphone, GitBranch, Cpu, Globe, Shield } from 'lucide-react';

const highlights = [
  { icon: <Cpu size={20} />, label: '3+ Years', sub: 'Experience', color: '#4f8ef7' },
  { icon: <Smartphone size={20} />, label: '5+', sub: 'Production Apps', color: '#a855f7' },
  { icon: <Globe size={20} />, label: 'App Stores', sub: 'Deployed', color: '#22d3ee' },
  { icon: <Shield size={20} />, label: 'Clean', sub: 'Architecture', color: '#f97316' },
  { icon: <Code2 size={20} />, label: 'BLoC / Cubit', sub: 'State Management', color: '#22c55e' },
  { icon: <GitBranch size={20} />, label: 'Real-time', sub: 'Applications', color: '#ec4899' },
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      {/* Background orb */}
      <div
        style={{
          position: 'absolute',
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          {/* Left — Text content */}
          <div>
            <ScrollReveal>
              <div className="section-tag">
                <span>👤</span> About Me
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 44px)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  color: '#f8fafc',
                  marginBottom: '24px',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Crafting{' '}
                <span className="gradient-text">Premium</span>{' '}
                Digital Experiences
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#94a3b8', marginBottom: '20px' }}>
                I&apos;m an experienced Flutter Developer with a strong foundation in building beautiful,
                performant mobile applications. I specialize in creating scalable architectures
                using <span style={{ color: '#4f8ef7', fontWeight: 500 }}>Flutter & Dart</span>,{' '}
                <span style={{ color: '#a855f7', fontWeight: 500 }}>Firebase</span>,{' '}
                <span style={{ color: '#22d3ee', fontWeight: 500 }}>REST APIs</span>, and{' '}
                <span style={{ color: '#f97316', fontWeight: 500 }}>BLoC/Cubit</span> architecture.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#94a3b8', marginBottom: '36px' }}>
                From ideation to App Store deployment, I deliver production-ready applications that
                users love. My focus on clean code, real-time capabilities, and seamless UX has
                led to multiple successful product launches across Android and iOS platforms.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                  style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Let&apos;s Work Together
                </motion.a>
                <motion.a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  See My Work
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Highlights grid */}
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}
            >
              {highlights.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.1 + i * 0.08} direction="up">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '20px',
                      padding: '24px',
                      backdropFilter: 'blur(20px)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${item.color}30`;
                      e.currentTarget.style.background = `${item.color}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}25`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color,
                        marginBottom: '12px',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#f8fafc',
                        marginBottom: '2px',
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>{item.sub}</div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Profile avatar */}
            <ScrollReveal delay={0.6} direction="up">
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  marginTop: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '20px 24px',
                  backdropFilter: 'blur(20px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(79, 142, 247, 0.2), rgba(168, 85, 247, 0.2))',
                    zIndex: 0,
                  }} />
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontSize: '22px',
                    fontWeight: 900,
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: '-1px',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <span style={{ color: '#f8fafc' }}>M</span>
                    <span style={{ color: '#4f8ef7' }}>S</span>
                  </span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#f8fafc', fontSize: '16px' }}>Meet Shah</div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Flutter Developer · Ahmedabad, India 🇮🇳</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                    <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 6px #22c55e' }} />
                    <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 500 }}>Open to opportunities</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
