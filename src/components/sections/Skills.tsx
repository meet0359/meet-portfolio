'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';

const skillGroups = [
  {
    category: 'Mobile & Frontend',
    emoji: '📱',
    color: '#4f8ef7',
    skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Kotlin', 'Java', 'Swift'],
  },
  {
    category: 'Backend & APIs',
    emoji: '🔧',
    color: '#a855f7',
    skills: ['Firebase', 'REST API', 'Firestore', 'Node.js', 'SQL'],
  },
  {
    category: 'Architecture & State',
    emoji: '🏗️',
    color: '#22d3ee',
    skills: ['BLoC', 'Cubit', 'Provider', 'GetX', 'MVC', 'Clean Architecture'],
  },
  {
    category: 'Tools & DevOps',
    emoji: '⚙️',
    color: '#f97316',
    skills: ['Git', 'GitHub', 'Play Store', 'App Store', 'Figma', 'VS Code'],
  },
  {
    category: 'Soft Skills',
    emoji: '🧠',
    color: '#22c55e',
    skills: ['UI/UX Design', 'Agile', 'Problem Solving', 'Team Collaboration', 'Communication'],
  },
];

const coreSkills = [
  { name: 'Flutter / Dart', level: 80, color: '#4f8ef7' },
  { name: 'Firebase', level: 75, color: '#a855f7' },
  { name: 'REST APIs', level: 80, color: '#22d3ee' },
  { name: 'BLoC Architecture', level: 70, color: '#f97316' },
  { name: 'Android (Kotlin)', level: 70, color: '#22c55e' },
  { name: 'iOS (Swift)', level: 65, color: '#ec4899' },
  { name: 'DevOps & Cloud', level: 25, color: '#eab308' },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <ScrollReveal delay={delay} direction="left">
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#f8fafc' }}>{name}</span>
          <span style={{ fontSize: '13px', color: color, fontWeight: 600 }}>{level}%</span>
        </div>
        <div style={{
          height: '6px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{
              height: '100%',
              background: `linear-gradient(90deg, ${color}, ${color}aa)`,
              borderRadius: '3px',
              boxShadow: `0 0 10px ${color}50`,
            }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', left: '50%', top: '20%', transform: 'translateX(-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(168,85,247,0.05), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container-custom">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span>⚡</span> Skills
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f8fafc', marginTop: '12px',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0', lineHeight: 1.7 }}>
            Technologies I work with to bring ideas to life
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Skill bars */}
          <div>
            <ScrollReveal>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '28px', fontFamily: "'Outfit', sans-serif" }}>
                Core Proficiency
              </h3>
            </ScrollReveal>
            {coreSkills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
            ))}
          </div>

          {/* Skill chips grid */}
          <div>
            <ScrollReveal>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '28px', fontFamily: "'Outfit', sans-serif" }}>
                Technologies & Tools
              </h3>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {skillGroups.map((group, gi) => (
                <ScrollReveal key={group.category} delay={gi * 0.1} direction="right">
                  <div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px',
                    }}>
                      <span style={{ fontSize: '16px' }}>{group.emoji}</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: group.color, letterSpacing: '0.05em' }}>
                        {group.category}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {group.skills.map((skill, si) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: gi * 0.05 + si * 0.04, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="skill-chip"
                          style={{ cursor: 'default' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
