'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#050508',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
        >
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Inner glow */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(79, 142, 247, 0.2), rgba(168, 85, 247, 0.2))',
                zIndex: 0,
              }} />
              <span style={{
                position: 'relative',
                zIndex: 1,
                fontSize: '28px',
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
            <p
              style={{
                fontSize: '16px',
                letterSpacing: '0.15em',
                fontWeight: 800,
                fontFamily: "'Outfit', sans-serif",
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: '#f8fafc' }}>Meet</span>{' '}
              <span style={{ color: '#94a3b8', fontWeight: 400 }}>Shah</span>
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ width: '200px' }}
          >
            <div
              style={{
                width: '100%',
                height: '2px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '1px',
                overflow: 'hidden',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #4f8ef7, #a855f7)',
                  borderRadius: '1px',
                  boxShadow: '0 0 10px rgba(79, 142, 247, 0.6)',
                }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <p
              style={{
                textAlign: 'center',
                marginTop: '12px',
                fontSize: '12px',
                color: '#475569',
              }}
            >
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
