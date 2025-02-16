import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden md:block p-12 bg-amber-400">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-white/90 mb-8">
                Fill up the form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4 text-white/90">
                <p>contact@organization.com</p>
                <p>+1 234 567 890</p>
                <p>123 Business Avenue, Suite 100</p>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 md:hidden">Get in Touch</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-3 bg-amber-400 text-white rounded-lg hover:bg-amber-300 transition-all duration-300 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;