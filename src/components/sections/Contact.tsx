'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'shahmeet1722@gmail.com',
    href: 'mailto:shahmeet1722@gmail.com',
    color: '#4f8ef7',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 6353091098',
    href: 'tel:+916353091098',
    color: '#a855f7',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Ahmedabad, India',
    href: 'https://maps.google.com/?q=Ahmedabad,India',
    color: '#22d3ee',
  },
];

const socialLinks = [
  {
    icon: <FaLinkedinIn size={16} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/meetshah',
    color: '#4f8ef7',
  },
  {
    icon: <FaGithub size={16} />,
    label: 'GitHub',
    href: 'https://github.com/meetshah',
    color: '#a855f7',
  },
];

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    try {
      // Setup Instructions:
      // 1. Go to https://web3forms.com/
      // 2. Enter your email (shahmeet1722@gmail.com) to get a free Access Key sent to your inbox
      // 3. Replace 'YOUR_ACCESS_KEY_HERE' below with your actual key
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c76374be-d5e4-430b-8f33-118d0ead552e',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setForm({ name: '', email: '', subject: '', message: '' });
        setFormState('sent');
      } else {
        console.error(result);
        setFormState('error');
      }
    } catch (error) {
      console.error(error);
      setFormState('error');
    }

    setTimeout(() => setFormState('idle'), 4000);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      {/* BG orb */}
      <div style={{
        position: 'absolute', left: '50%', top: '30%', transform: 'translateX(-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(79,142,247,0.06), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container-custom">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span>✉️</span> Contact
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f8fafc', marginTop: '12px',
            fontFamily: "'Outfit', sans-serif",
          }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: '#64748b', marginTop: '12px', maxWidth: '500px', margin: '12px auto 0', lineHeight: 1.7 }}>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>

          {/* Left — Contact info */}
          <div>
            <ScrollReveal direction="left">
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px', fontFamily: "'Outfit', sans-serif" }}>
                Get in Touch
              </h3>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.7, marginBottom: '32px' }}>
                I&apos;m currently open to new opportunities. Whether it&apos;s a full-time role,
                freelance project, or just a chat — feel free to reach out!
              </p>
            </ScrollReveal>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {contactInfo.map((info, i) => (
                <ScrollReveal key={info.label} delay={i * 0.1} direction="left">
                  <motion.a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 6, scale: 1.01 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 20px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '16px',
                      backdropFilter: 'blur(10px)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${info.color}30`;
                      e.currentTarget.style.background = `${info.color}06`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: `${info.color}15`, border: `1px solid ${info.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: info.color, flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 500, marginBottom: '2px' }}>{info.label}</div>
                      <div style={{ fontSize: '14px', color: '#f8fafc', fontWeight: 600 }}>{info.value}</div>
                    </div>
                  </motion.a>
                </ScrollReveal>
              ))}
            </div>

            {/* Social links */}
            <ScrollReveal delay={0.4} direction="left">
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      background: `${social.color}10`,
                      border: `1px solid ${social.color}25`,
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: social.color,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${social.color}18`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${social.color}10`;
                    }}
                  >
                    {social.icon}
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Contact form */}
          <ScrollReveal delay={0.2} direction="right">
            <motion.form
              onSubmit={handleSubmit}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '24px',
                padding: '32px',
                backdropFilter: 'blur(20px)',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '24px', fontFamily: "'Outfit', sans-serif" }}>
                Send a Message
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  id="contact-subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project collaboration / Job opportunity"
                  className="form-input"
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input"
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={formState === 'sending' || formState === 'sent'}
                whileHover={formState === 'idle' ? { scale: 1.03, y: -2 } : {}}
                whileTap={formState === 'idle' ? { scale: 0.97 } : {}}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: formState === 'sent'
                    ? 'rgba(34,197,94,0.15)'
                    : 'linear-gradient(135deg, #4f8ef7, #a855f7)',
                  border: formState === 'sent' ? '1px solid rgba(34,197,94,0.3)' : 'none',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: formState === 'sent' ? '#22c55e' : 'white',
                  cursor: formState === 'idle' ? 'pointer' : 'default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  boxShadow: formState === 'idle' ? '0 8px 30px rgba(79,142,247,0.3)' : 'none',
                }}
              >
                {formState === 'idle' && <><Send size={16} /> Send Message</>}
                {formState === 'sending' && <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>}
                {formState === 'sent' && <><CheckCircle size={16} /> Message Sent! 🎉</>}
                {formState === 'error' && <><Send size={16} /> Try Again</>}
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}
