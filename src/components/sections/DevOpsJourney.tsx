'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Server, Cloud, GitBranch, Terminal, Shield, ArrowRight, CheckCircle2, Clock, Circle } from 'lucide-react';

const cards = [
  {
    title: 'Deployment Experience',
    icon: <Server size={20} color="#22d3ee" />,
    points: [
      'Worked on deploying applications to AWS ECS',
      'Supported environment setup and deployment processes',
      'Understanding containerized application workflows',
    ],
  },
  {
    title: 'Infrastructure Learning',
    icon: <Cloud size={20} color="#4f8ef7" />,
    points: [
      'Using Pulumi for Infrastructure as Code (IaC)',
      'Learning infrastructure provisioning and environment management',
      'Exploring scalable deployment architecture',
    ],
  },
  {
    title: 'CI/CD Experience',
    icon: <GitBranch size={20} color="#a855f7" />,
    points: [
      'Created Continuous Deployment pipelines',
      'Automated artifact version deployments',
      'Improved release workflow and reduced manual deployment effort',
    ],
  },
];

const techStack = [
  'Flutter', 'AWS ECS', 'Pulumi', 'CI/CD', 'Docker', 'GitHub', 'Linux', 'Cloud Infrastructure'
];

const roadmap = [
  'Application Development', 'Deployment', 'Infrastructure', 'Cloud', 'DevOps'
];

const progressStatus = [
  { label: 'Flutter Development', icon: '✅' },
  { label: 'Production Application Delivery', icon: '✅' },
  { label: 'AWS ECS (Hands-on)', icon: '🟡' },
  { label: 'Pulumi (Learning & Implementation)', icon: '🟡' },
  { label: 'CI/CD Automation', icon: '🟡' },
  { label: 'DevOps & Infrastructure (Growing)', icon: '🔵' },
];

export default function DevOpsJourney() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="devops" ref={containerRef} style={{ padding: '120px 0', position: 'relative' }}>
      {/* BG orb */}
      <div style={{
        position: 'absolute', left: '-10% ', top: '10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(34,211,238,0.05), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span>☁️</span> Cloud & DevOps
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f8fafc', marginTop: '12px',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Beyond <span className="gradient-text">Development</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#94a3b8',
            maxWidth: '650px',
            margin: '16px auto 0',
            lineHeight: 1.7,
          }}>
            Growing beyond application development. I primarily work as a Software Engineer and Flutter Developer, and I am currently expanding into Cloud and DevOps practices through hands-on deployment and infrastructure work.
          </p>
        </motion.div>

        {/* Learning Roadmap UI */}
        <div style={{ marginBottom: '60px', padding: '0 20px' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexWrap: 'wrap',
            gap: '12px',
            background: 'rgba(15, 23, 42, 0.5)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}>
            {roadmap.map((step, index) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    padding: '8px 16px',
                    background: index === 0 ? 'rgba(79, 142, 247, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                    color: index === 0 ? '#4f8ef7' : '#94a3b8',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    border: `1px solid ${index === 0 ? 'rgba(79, 142, 247, 0.3)' : 'rgba(255, 255, 255, 0.05)'}`
                  }}
                >
                  {step}
                </motion.div>
                {index < roadmap.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <ArrowRight size={16} color="#475569" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                background: '#0f172a',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="card-hover"
            >
              {/* Terminal Header */}
              <div style={{
                background: '#1e293b',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <div style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontSize: '12px',
                  color: '#64748b',
                  fontFamily: 'monospace'
                }}>
                  ~/devops/{card.title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
              
              <div style={{ padding: '24px', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <div style={{
                    padding: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '10px'
                  }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#f8fafc', margin: 0 }}>
                    {card.title}
                  </h3>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {card.points.map((point, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <Terminal size={14} color="#64748b" style={{ marginTop: '4px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.5, fontFamily: 'monospace' }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress & Tech Stack Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {/* Progress Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <h3 style={{ fontSize: '20px', color: '#f8fafc', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} color="#22d3ee" /> Progress Status
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {progressStatus.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '18px' }}>{item.icon}</span>
                  <span style={{ fontSize: '15px', color: '#cbd5e1' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack & Tagline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '20px', color: '#f8fafc', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Server size={20} color="#a855f7" /> Technology Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '100px',
                      fontSize: '13px',
                      color: '#94a3b8',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              padding: '24px',
              background: 'linear-gradient(135deg, rgba(79, 142, 247, 0.1), rgba(168, 85, 247, 0.1))',
              borderRadius: '12px',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: '16px',
                color: '#f8fafc',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: 1.5
              }}>
                &ldquo;Building applications today and learning how to deploy and scale them for tomorrow.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
