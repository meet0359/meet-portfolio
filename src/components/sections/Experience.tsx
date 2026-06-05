'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Savitriya Technologies',
    role: 'Software Engineer',
    period: 'Jan 2023 – Present',
    type: 'Full-time',
    color: '#4f8ef7',
    projects: [
      {
        name: 'OPS CRM',
        tags: ['Cross-platform', 'BLoC', 'CRM'],
        points: [
          'Built a responsive cross-platform CRM platform for managing customer profiles',
          'Developed reporting dashboards with real-time data visualization',
          'Implemented BLoC/Cubit architecture for scalable state management',
        ],
      },
      {
        name: 'Optimis',
        tags: ['Flutter', 'Firebase', 'Office'],
        points: [
          'Office management application with attendance and asset tracking',
          'Built project allocation and reporting modules',
          'Integrated real-time Firebase sync for team coordination',
        ],
      },
      {
        name: 'PlanitEasy',
        tags: ['Flutter', 'iOS', 'Android'],
        points: [
          'Travel itinerary mobile app deployed on Android & iOS',
          'Features: reservation management, travel documents, and itinerary builder',
          'Published to Play Store and App Store',
        ],
      },
    ],
  },
  {
    company: 'InfoLabz Pvt Ltd',
    role: 'Flutter Developer Intern',
    period: 'Earlier Experience',
    type: 'Internship',
    color: '#a855f7',
    projects: [
      {
        name: 'Real-time News App',
        tags: ['Flutter', 'REST API', 'Dart'],
        points: [
          'Built a real-time News App using Flutter with live API integration',
          'Implemented clean UI with category filtering and bookmarks',
          'Learned production Flutter development practices',
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      {/* BG orb */}
      <div style={{
        position: 'absolute', left: '-100px', top: '30%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(79,142,247,0.06), transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="container-custom">
        {/* Heading */}
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span>💼</span> Experience
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f8fafc', marginTop: '12px',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0', lineHeight: 1.7 }}>
            Building impactful products across multiple industries
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '48px' }}>
          {/* Vertical line */}
          <div className="timeline-line" />

          {experiences.map((exp, ei) => (
            <ScrollReveal key={exp.company} delay={ei * 0.15} direction="left">
              <div style={{ marginBottom: '48px', position: 'relative' }}>
                {/* Dot */}
                <div
                  className="timeline-dot"
                  style={{
                    top: '20px',
                    background: `linear-gradient(135deg, ${exp.color}, ${exp.color === '#4f8ef7' ? '#a855f7' : '#22d3ee'})`,
                    boxShadow: `0 0 15px ${exp.color}60`,
                  }}
                />

                {/* Company header */}
                <motion.div
                  whileHover={{ scale: 1.005 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '20px',
                    padding: '28px 28px 8px',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <h3 style={{
                          fontSize: '20px', fontWeight: 700, color: '#f8fafc',
                          fontFamily: "'Outfit', sans-serif",
                        }}>
                          {exp.company}
                        </h3>
                        <span
                          style={{
                            padding: '3px 10px',
                            background: exp.type === 'Full-time'
                              ? 'rgba(79,142,247,0.12)'
                              : 'rgba(168,85,247,0.12)',
                            border: `1px solid ${exp.type === 'Full-time' ? 'rgba(79,142,247,0.25)' : 'rgba(168,85,247,0.25)'}`,
                            borderRadius: '100px',
                            fontSize: '11px',
                            fontWeight: 600,
                            color: exp.type === 'Full-time' ? '#4f8ef7' : '#a855f7',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: exp.color, fontSize: '14px', fontWeight: 600 }}>
                          <Briefcase size={14} />
                          {exp.role}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '13px' }}>
                          <Calendar size={13} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '20px' }}>
                    {exp.projects.map((proj, pi) => (
                      <motion.div
                        key={proj.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: pi * 0.1 }}
                        style={{
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          borderRadius: '14px',
                          padding: '18px 20px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                          <ChevronRight size={14} style={{ color: exp.color, flexShrink: 0 }} />
                          <span style={{ fontWeight: 700, color: '#f8fafc', fontSize: '15px' }}>{proj.name}</span>
                          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                            {proj.tags.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  padding: '2px 10px',
                                  background: `${exp.color}12`,
                                  border: `1px solid ${exp.color}25`,
                                  borderRadius: '100px',
                                  fontSize: '11px',
                                  color: exp.color,
                                  fontWeight: 500,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {proj.points.map((point, idx) => (
                            <li
                              key={idx}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '8px',
                                fontSize: '14px',
                                color: '#94a3b8',
                                lineHeight: 1.6,
                              }}
                            >
                              <span style={{ color: exp.color, marginTop: '2px', flexShrink: 0 }}>•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
