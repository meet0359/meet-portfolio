'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor in Computer Engineering',
    institution: 'Ahmedabad Institute of Technology',
    period: '2020 – 2023',
    emoji: '🎓',
    color: '#4f8ef7',
    type: 'Bachelor\'s Degree',
    desc: 'Focused on software engineering, algorithms, data structures, and computer science fundamentals.',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Swarrnim Startup & Innovation University',
    period: '2017 – 2020',
    emoji: '📚',
    color: '#a855f7',
    type: 'Diploma',
    desc: 'Comprehensive foundation in computer engineering with emphasis on practical software development.',
  },
];

const certifications = [
  {
    name: 'Google Prompting Essentials',
    issuer: 'Google',
    emoji: '🏆',
    color: '#22d3ee',
    badge: 'Verified',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', left: '10%', bottom: '20%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(79,142,247,0.06), transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="container-custom">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span>🎓</span> Education
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f8fafc', marginTop: '12px',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Academic <span className="gradient-text">Background</span>
          </h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 0.15} direction="up">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '24px',
                  padding: '28px',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${edu.color}30`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${edu.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '16px',
                    background: `${edu.color}15`, border: `1px solid ${edu.color}25`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '24px', flexShrink: 0,
                  }}>
                    {edu.emoji}
                  </div>
                  <div>
                    <span style={{
                      display: 'inline-block', padding: '3px 10px',
                      background: `${edu.color}12`, border: `1px solid ${edu.color}25`,
                      borderRadius: '100px', fontSize: '11px', fontWeight: 600,
                      color: edu.color, marginBottom: '6px',
                    }}>
                      {edu.type}
                    </span>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', lineHeight: 1.3, fontFamily: "'Outfit', sans-serif" }}>
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <GraduationCap size={14} style={{ color: edu.color }} />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: edu.color }}>{edu.institution}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
                  <Calendar size={13} style={{ color: '#64748b' }} />
                  <span style={{ fontSize: '13px', color: '#64748b' }}>{edu.period}</span>
                </div>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{edu.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={0.3} style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span>🏆</span> Certifications
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 0.1 + 0.4} direction="up">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '24px 32px',
                  backdropFilter: 'blur(20px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  minWidth: '320px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${cert.color}30`;
                  e.currentTarget.style.boxShadow = `0 10px 40px ${cert.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '56px', height: '56px', borderRadius: '16px',
                  background: `${cert.color}15`, border: `1px solid ${cert.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
                }}>
                  {cert.emoji}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px', fontFamily: "'Outfit', sans-serif" }}>
                    {cert.name}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>{cert.issuer}</span>
                    <span style={{
                      padding: '2px 8px', background: `${cert.color}15`,
                      border: `1px solid ${cert.color}30`, borderRadius: '100px',
                      fontSize: '10px', fontWeight: 600, color: cert.color,
                    }}>
                      ✓ {cert.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
