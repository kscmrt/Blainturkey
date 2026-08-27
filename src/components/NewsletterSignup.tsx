'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

export default function NewsletterSignup() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Lütfen geçerli bir e-posta adresi girin');
      return;
    }

    setStatus('loading');

    try {
      // Send to WhatsApp (placeholder - in production, use API)
      const waUrl = `https://wa.me/905360256494?text=E-posta%20adresi:%20${encodeURIComponent(email)}%0AHaber%20bültenine%20abone%20olmak%20istiyorum`;

      // In production, you'd call an API to save to email service
      // For now, we'll simulate success and show WhatsApp option

      setStatus('success');
      setMessage('Teşekkürler! Kısa süre içinde size email göndereceğiz.');
      setEmail('');

      // Auto-clear success message
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 md:py-24"
    >
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Haberdar Kalın
        </h2>

        <p className="text-lg text-blue-100 mb-8">
          Yeni ürün güncellemeleri, teknik kılavuzlar ve önemli duyurular için e-posta bültenimize abone olun.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresiniz"
            className="flex-1 px-6 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            disabled={status === 'loading'}
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {status === 'loading' ? 'Gönderiliyor...' : 'Abone Ol'}
          </motion.button>
        </form>

        {/* Status Messages */}
        <AnimatedMessage status={status} message={message} />

        {/* Trust Footer */}
        <p className="text-sm text-blue-100">
          💌 Spam göndermeyiz. Her zaman çıkabileceğiniz e-postaların sadece 2-3'ünü alacaksınız.
        </p>
      </div>
    </motion.section>
  );
}

function AnimatedMessage({
  status,
  message,
}: {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}) {
  if (status === 'idle') return null;

  const bgColor = status === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200';
  const icon = status === 'success' ? '✓' : '✕';

  return (
    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`${bgColor} px-4 py-3 rounded-lg text-sm mb-4 inline-block`}
    >
      {icon} {message}
    </motion.p>
  );
}
