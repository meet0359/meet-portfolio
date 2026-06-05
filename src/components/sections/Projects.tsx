'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { ExternalLink, Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Karmas',
    description:
      'A dedicated platform shaping a brighter tomorrow. Currently in active development and live on the Google Play Store.',
    tags: ['Flutter', 'Android', 'Live App'],
    image: '/unnamed.webp',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))',
    website: 'https://karmas.in.net/',
    demo: 'https://play.google.com/store/apps/details?id=com.karmas.android&hl=en_IN',
    features: ['Live on Play Store', 'Ongoing Development', 'Community platform'],
    badge: 'Ongoing 🚧',
  },
  {
    title: 'Karmas Chat Module',
    description:
      'A dedicated real-time chat module created for the Karmas platform, enabling seamless community communication and messaging.',
    tags: ['Flutter', 'Realtime', 'Android', 'Module'],
    image: '/unnamed.webp',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))',
    website: 'https://karmas.in.net/',
    features: ['Real-time messaging', 'Community interaction', 'Integrated module'],
    badge: 'Company Module',
  },
  {
    title: 'Realtime Chat',
    description:
      'A feature-rich real-time messaging application built with Flutter and Firebase, featuring authentication, user profiles, and message history.',
    tags: ['Flutter', 'Firebase', 'Realtime', 'Auth'],
    emoji: '💬',
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(168,85,247,0.03))',
    github: 'https://github.com/meet0359/flutter_chatapp',
    features: ['Real-time messaging', 'Authentication', 'User profiles'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      {/* BG orb */}
      <div style={{
        position: 'absolute', right: '-100px', bottom: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(79,142,247,0.07), transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="container-custom">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span>🚀</span> Projects
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f8fafc', marginTop: '12px',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0', lineHeight: 1.7 }}>
            Production-grade applications built with attention to detail
          </p>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((proj, i) => (
            <ScrollReveal key={proj.title} delay={i * 0.12} direction="up">
              <motion.div
                className="project-card"
                whileHover={{ y: -8, scale: 1.01 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backdropFilter: 'blur(20px)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${proj.color}30`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${proj.color}15`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Project image area */}
                <div
                  style={{
                    height: '180px',
                    background: proj.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {proj.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img 
                      src={proj.image} 
                      alt={proj.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.85,
                        transition: 'transform 0.5s ease',
                      }} 
                    />
                  ) : (
                    <div style={{
                      fontSize: '72px',
                      filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))',
                    }}>
                      {proj.emoji}
                    </div>
                  )}
                  {/* Shimmer overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: proj.image 
                      ? `linear-gradient(to top, rgba(15,23,42,1) -10%, transparent 100%)` 
                      : `radial-gradient(circle at 30% 40%, ${proj.color}10, transparent 60%)`,
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '4px 10px',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '100px',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: proj.color,
                    border: `1px solid ${proj.color}30`,
                  }}>
                    {proj.badge || 'Mobile App'}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{
                    fontSize: '20px', fontWeight: 700, color: '#f8fafc',
                    marginBottom: '10px', fontFamily: "'Outfit', sans-serif",
                  }}>
                    {proj.title}
                  </h3>

                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, marginBottom: '16px', flex: 1 }}>
                    {proj.description}
                  </p>

                  {/* Feature pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {proj.features.map((f) => (
                      <span key={f} style={{
                        padding: '3px 10px',
                        background: `${proj.color}10`,
                        border: `1px solid ${proj.color}20`,
                        borderRadius: '100px',
                        fontSize: '11px',
                        color: proj.color,
                        fontWeight: 500,
                      }}>{f}</span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {proj.tags.map((tag) => (
                      <span key={tag} className="skill-chip" style={{ fontSize: '12px', padding: '3px 12px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {proj.github && (
                      <motion.a
                        href={proj.github}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '10px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#94a3b8',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#f8fafc';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#94a3b8';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        }}
                      >
                        <FaGithub size={14} /> GitHub
                      </motion.a>
                    )}
                    {proj.website && (
                      <motion.a
                        href={proj.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '10px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#94a3b8',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#f8fafc';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#94a3b8';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        }}
                      >
                        <Globe size={14} /> Website
                      </motion.a>
                    )}
                    {proj.demo && (
                      <motion.a
                        href={proj.demo}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '10px',
                          background: `${proj.color}15`,
                          border: `1px solid ${proj.color}30`,
                          borderRadius: '10px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: proj.color,
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* View all projects CTA */}
        <ScrollReveal delay={0.4} style={{ textAlign: 'center', marginTop: '48px' }}>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 600,
              color: '#94a3b8',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#f8fafc';
              e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)';
              e.currentTarget.style.background = 'rgba(79,142,247,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
          >
            <FaGithub size={18} /> View All Projects on GitHub
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
