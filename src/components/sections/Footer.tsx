'use client';

import { motion } from 'framer-motion';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/meet0359', label: 'GitHub' },
  { icon: <FaLinkedinIn size={16} />, href: 'https://linkedin.com/in/-meet-shah', label: 'LinkedIn' },
  { icon: <Mail size={16} />, href: 'mailto:shahmeet1722@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative',
      padding: '60px 0 32px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      overflow: 'hidden',
    }}>
      {/* BG gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(79,142,247,0.4), rgba(168,85,247,0.4), transparent)',
      }} />

      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, rgba(79, 142, 247, 0.2), rgba(168, 85, 247, 0.2))',
                  zIndex: 0,
                }} />
                <span style={{
                  position: 'relative', zIndex: 1,
                  fontSize: '17px', fontWeight: 900,
                  fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.5px',
                  display: 'flex', alignItems: 'center',
                }}>
                  <span style={{ color: '#f8fafc' }}>M</span>
                  <span style={{ color: '#4f8ef7' }}>S</span>
                </span>
              </div>
              <span style={{ fontSize: '19px', fontWeight: 800, color: '#f8fafc', fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.03em' }}>
                Meet <span style={{ color: '#94a3b8', fontWeight: 400 }}>Shah</span>
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.7, maxWidth: '240px' }}>
              Flutter Developer & Software Engineer building scalable mobile experiences.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '38px', height: '38px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '10px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4f8ef7';
                    e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)';
                    e.currentTarget.style.background = 'rgba(79,142,247,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {footerLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ x: 4 }}
                  style={{
                    background: 'none', border: 'none',
                    color: '#64748b', fontSize: '14px', fontWeight: 500,
                    cursor: 'pointer', textAlign: 'left', padding: 0,
                    fontFamily: 'inherit',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#4f8ef7'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:shahmeet1722@gmail.com" style={{ color: '#64748b', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#4f8ef7'; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#64748b'; }}
              >
                shahmeet1722@gmail.com
              </a>
              <span style={{ color: '#64748b', fontSize: '14px' }}>Ahmedabad, India 🇮🇳</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 6px #22c55e' }} />
                <span style={{ color: '#22c55e', fontSize: '13px', fontWeight: 500 }}>Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px' }}>
            © {new Date().getFullYear()} Meet Shah · Crafted with
            <Heart size={12} style={{ color: '#ec4899', fill: '#ec4899' }} />
            and Flutter love
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              color: '#94a3b8', fontSize: '13px', fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#4f8ef7';
              e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            <ArrowUp size={14} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
