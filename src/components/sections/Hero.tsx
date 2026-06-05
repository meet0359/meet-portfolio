'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Smartphone, Zap, Globe } from 'lucide-react';

const techIcons = [
  { imgSrc: '/icons/flutter.png', label: 'Flutter', color: '#4f8ef7', x: 8, y: 15, delay: 0 },
  { icon: '🔥', label: 'Firebase', color: '#f97316', x: 78, y: 8, delay: 0.5 },
  { imgSrc: '/icons/dart.png', label: 'Dart', color: '#a855f7', x: 88, y: 70, delay: 1.0 },
  { icon: '📱', label: 'Mobile', color: '#22d3ee', x: 5, y: 65, delay: 1.5 },
  { icon: '🏗️', label: 'BLoC', color: '#a855f7', x: 68, y: 20, delay: 0.3 },
];

function TypedText({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = texts[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === target) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : target.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span style={{ color: '#4f8ef7' }}>
      {currentText}
      <span className="cursor-blink" style={{ color: '#a855f7', marginLeft: '1px' }}>|</span>
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 0 80px',
      }}
    >
      {/* Background orbs */}
      <div
        className="hero-orb animate-pulse-glow"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(79,142,247,0.3), transparent 70%)',
          top: '-100px',
          left: '-200px',
          opacity: 0.12,
        }}
      />
      <div
        className="hero-orb animate-pulse-glow"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent 70%)',
          top: '200px',
          right: '-150px',
          opacity: 0.12,
          animationDelay: '1.5s',
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(34,211,238,0.2), transparent 70%)',
          bottom: '100px',
          left: '30%',
          opacity: 0.08,
        }}
      />

      {/* Floating Tech Icons */}
      {techIcons.map((tech, i) => (
        <motion.div
          key={tech.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + tech.delay, duration: 0.5, type: 'spring' }}
          style={{
            position: 'absolute',
            left: `${tech.x}%`,
            top: `${tech.y}%`,
            zIndex: 1,
          }}
          className={i % 2 === 0 ? 'animate-float hidden-mobile' : 'animate-float-delay hidden-mobile'}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: `0 8px 32px rgba(0,0,0,0.3)`,
            }}
          >
            {tech.imgSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tech.imgSrc} alt={tech.label} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            ) : (
              <span style={{ fontSize: '18px' }}>{tech.icon}</span>
            )}
            <span style={{ fontSize: '12px', fontWeight: 500, color: tech.color }}>{tech.label}</span>
          </div>
        </motion.div>
      ))}

      <div className="container-custom" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              background: 'rgba(79, 142, 247, 0.08)',
              border: '1px solid rgba(79, 142, 247, 0.25)',
              borderRadius: '100px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#94a3b8',
            }}
          >
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 8px #22c55e',
              display: 'inline-block',
            }} />
            Available for opportunities
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(36px, 6vw, 76px)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#f8fafc',
            marginBottom: '16px',
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          Building Scalable<br />
          <span style={{ background: 'linear-gradient(135deg, #4f8ef7 0%, #a855f7 50%, #22d3ee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Mobile
          </span>{' '}
          Experiences
        </motion.h1>

        {/* Typed subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 22px)',
            fontWeight: 500,
            color: '#94a3b8',
            marginBottom: '16px',
            minHeight: '32px',
          }}
        >
          <TypedText texts={['Flutter Developer', 'Software Engineer', 'Mobile App Architect', 'Firebase Expert']} />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            fontSize: 'clamp(15px, 1.5vw, 18px)',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}
        >
          Software Engineer specializing in Flutter, Firebase, and scalable cross-platform applications
          that reach millions of users across Android & iOS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScrollToSection('projects')}
            className="btn-primary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}
          >
            View Projects
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScrollToSection('contact')}
            className="btn-secondary"
            style={{ fontSize: '16px' }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0',
            marginTop: '72px',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: '3+', label: 'Years Experience' },
            { value: '10+', label: 'Projects Built' },
            { value: '2', label: 'App Stores' },
            { value: '100%', label: 'Passion' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '16px 40px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #4f8ef7, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Outfit', sans-serif",
                  marginBottom: '4px',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{ marginTop: '60px', display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{
              width: '24px',
              height: '40px',
              border: '1.5px solid rgba(255,255,255,0.15)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '6px',
            }}
          >
            <div
              style={{
                width: '3px',
                height: '8px',
                background: 'linear-gradient(180deg, #4f8ef7, #a855f7)',
                borderRadius: '2px',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
