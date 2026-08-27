'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import Troubleshooting from '@/components/Troubleshooting';

interface FormErrors {
  name?: string;
  company?: string;
  valve?: string;
  issue?: string;
  general?: string;
}

export default function ServicePage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formSuccess, setFormSuccess] = useState(false);

  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};

    const name = String(formData.get('name') || '').trim();
    if (!name) errors.name = 'Ad soyad gereklidir';
    if (name.length < 3) errors.name = 'Ad soyad en az 3 karakter olmalıdır';

    const company = String(formData.get('company') || '').trim();
    if (!company) errors.company = 'Firma adı gereklidir';
    if (company.length < 2) errors.company = 'Firma adı en az 2 karakter olmalıdır';

    const valve = String(formData.get('valve') || '').trim();
    if (!valve) errors.valve = 'Valf modeli seçiniz';

    const issue = String(formData.get('issue') || '').trim();
    if (!issue) errors.issue = 'Sorunu açıklayınız';
    if (issue.length < 10) errors.issue = 'Sorun açıklaması en az 10 karakter olmalıdır';

    return errors;
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitting(true);

    const name = formData.get('name');
    const company = formData.get('company');
    const valve = formData.get('valve');
    const issue = formData.get('issue');

    const message = `Merhaba, ismim ${name}. ${company} firmasından yazıyorum. ${valve} model valfimizde şöyle bir servis talebimiz var:\n\n${issue}`;
    const waUrl = `https://wa.me/905360256494?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');

    setFormSuccess(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSuccess(false);
      e.currentTarget.reset();
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafb 50%, #f0f4f8 100%)',
        }}
      >
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-100/10 rounded-full blur-3xl -mb-32" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
              Teknik Destek & Arıza Arama
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Valf sorunlarını aşağıdan interaktif olarak tespit edebilir veya yandaki formu kullanarak servis ekibimize WhatsApp üzerinden hızlıca ulaşabilirsiniz.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section
        ref={contentRef}
        className="relative py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Left: Troubleshooting Widget (2/3 width) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden">
                {/* Widget Header */}
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-8 md:px-10 py-6 md:py-8 border-b border-slate-200/50">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    İnteraktif Arıza Arama
                  </h2>
                  <p className="text-slate-600 mt-2">Probleminizi adım adım tanımlayın</p>
                </div>

                {/* Widget Content */}
                <div className="p-8 md:p-10">
                  <Troubleshooting />
                </div>
              </div>
            </motion.div>

            {/* Right: WhatsApp Form (1/3 width) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:sticky lg:top-8"
            >
              <div className="bg-white rounded-3xl shadow-xl border border-green-200/30 p-8 md:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200/50">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Hızlı Destek</h3>
                    <p className="text-green-600 font-semibold text-sm">WhatsApp Servis Hattı</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Kılavuzda aradığınızı bulamadınız mı? Formu doldurun, uzman ekibimiz çözüm için size hemen dönüş yapsın.
                </p>

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Success Message */}
                  {formSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2"
                    >
                      <span>✓</span>
                      <span>Formunuz başarıyla gönderildi! WhatsApp'ta sizi bekliyoruz.</span>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      name="name"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all text-sm ${
                        formErrors.name
                          ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                          : 'border-slate-300 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      }`}
                      placeholder="Ahmet Yılmaz"
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      name="company"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all text-sm ${
                        formErrors.company
                          ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                          : 'border-slate-300 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      }`}
                      placeholder="ABC Asansör"
                    />
                    {formErrors.company && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.company}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Valf Modeli
                    </label>
                    <select
                      name="valve"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all text-sm cursor-pointer ${
                        formErrors.valve
                          ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                          : 'border-slate-300 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      }`}
                    >
                      <option value="">Seçiniz</option>
                      <option value="EV Serisi">EV Serisi</option>
                      <option value="KV Serisi">KV Serisi</option>
                      <option value="Diğer / Emin Değilim">Diğer / Emin Değilim</option>
                      <option value="L Serisi">L Serisi (Güvenlik)</option>
                      <option value="EV40">EV40 (Akıllı)</option>
                    </select>
                    {formErrors.valve && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.valve}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                      Sorununuz
                    </label>
                    <textarea
                      name="issue"
                      rows={4}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg outline-none transition-all text-sm resize-none ${
                        formErrors.issue
                          ? 'border-red-500 focus:ring-2 focus:ring-red-100'
                          : 'border-slate-300 focus:bg-white focus:border-green-500 focus:ring-2 focus:ring-green-100'
                      }`}
                      placeholder="Karşılaştığınız teknik sorunu kısaca özetleyin..."
                    />
                    {formErrors.issue && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.issue}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        WhatsApp'a Git
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Footer Note */}
                <p className="text-xs text-slate-500 text-center mt-6 pt-6 border-t border-slate-200">
                  Hızlı yanıt için mesai saatlerinde yazmanız önerilir
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
