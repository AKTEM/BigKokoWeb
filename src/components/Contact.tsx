import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Globe, Calendar, Users, Youtube, Linkedin, Instagram, Building, Clock, ArrowRight, Headphones as UserHeadphone } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const generateReferenceNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `BKG-${year}${month}${day}-${random}`;
  };

  const offices = [
    { city: 'Stockholm', country: 'Sweden', type: 'Head Office' },
    { city: 'Kigali', country: 'Rwanda', type: 'Regional Office' },
    { city: 'Accra', country: 'Ghana', type: 'Regional Office' },
    { city: 'Enugu', country: 'Nigeria', type: 'Regional Office' }
  ];

  const collaborationTypes = [
    'Local security providers & armed responders',
    'Governments and donor agencies',
    'Technology integrators & distributors',
    'NGOs focused on rural development or anti-banditry programs'
  ];

  const socialLinks = [
    { platform: 'YouTube', handle: '@BigkokoAegis', icon: Youtube },
    { platform: 'LinkedIn', handle: 'Bigkoko Group', icon: Linkedin },
    { platform: 'Instagram', handle: '@bigkoko_defense', icon: Instagram }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const referenceNumber = generateReferenceNumber();
    const formData = new FormData(formRef.current);
    formData.append('reference', referenceNumber);

    try {
      await emailjs.sendForm(
        'service_nedh2wg',
        'template_xmfc692',
        formRef.current,
        'oAsSNdUjVd7eCeddf'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-400 mb-4">
            We're here to listen, assist, and collaborate.
          </p>
          <p className="text-gray-400">
            Whether you're a government agency, private security firm, non-profit organization, or rural community leader, 
            Bigkoko Smart Defense Systems is ready to help you build a safer, smarter, and more secure environment with our Aegis-1 SDS.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="reference" value={generateReferenceNumber()} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-[#EDAF3D]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-[#EDAF3D]/20 rounded-lg focus:outline-none focus:border-[#EDAF3D]"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-[#EDAF3D]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-[#EDAF3D]/20 rounded-lg focus:outline-none focus:border-[#EDAF3D]"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number <span className="text-[#EDAF3D]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-[#EDAF3D]/20 rounded-lg focus:outline-none focus:border-[#EDAF3D]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Location <span className="text-[#EDAF3D]">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-[#EDAF3D]/20 rounded-lg focus:outline-none focus:border-[#EDAF3D]"
                  placeholder="Enter your location"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  Type of Service <span className="text-[#EDAF3D]">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-[#EDAF3D]/20 rounded-lg focus:outline-none focus:border-[#EDAF3D]"
                >
                  <option value="">Select a service</option>
                  <option value="smart-defense">SDS Purchase</option>
                  <option value="consultancy">Consultancy</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black/40 border border-[#EDAF3D]/20 rounded-lg focus:outline-none focus:border-[#EDAF3D]"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#EDAF3D] text-black rounded-lg hover:bg-[#EDAF3D]/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully! We'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">Failed to send message. Please try again or contact us directly.</p>
              )}
            </form>
          </div>

          {/* Company Information */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="text-[#EDAF3D]" />
                Bigkoko Transcontinental Gruppen Filial
              </h3>
              
              <div className="space-y-6">
                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#EDAF3D] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Head Office</h4>
                    <p className="text-white">Org N0: 5164134289</p>
                    <p className="text-gray-400">Östgötagatan 12, 116 25 Stockholm, Sweden</p>
                  </div>
                </div>

                {/* Regional Offices */}
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-[#EDAF3D] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Regional Offices</h4>
                    <div className="space-y-2 mt-2">
                      <div className="text-gray-400">Kigali, Rwanda</div>
                      <div className="text-gray-400">Accra, Ghana</div>
                      <div className="text-gray-400">Enugu, Nigeria</div>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#EDAF3D]" />
                    <div>
                      <p className="text-gray-400">Sweden: +46 (0) 734039923</p>
                      <p className="text-gray-400">Africa: +250 790927281</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#EDAF3D]" />
                    <p className="text-gray-400">info@bigkokogroup.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-[#EDAF3D]" />
                    <a href="https://sds.bigkokogroup.com" className="text-[#EDAF3D] hover:underline">
                      sds.bigkokogroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6 flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#EDAF3D]" />
              <p className="text-gray-400">We respond to all serious inquiries within 24–48 hours.</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Follow Us for Updates</h3>
          <p className="text-center text-gray-400 mb-8">
            Stay connected for product updates, field success stories, and security innovation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href="#"
                className="flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg hover:bg-[#EDAF3D]/10 transition-all group"
              >
                <social.icon className="w-8 h-8 text-[#EDAF3D] mb-3" />
                <span className="font-semibold mb-1">{social.platform}</span>
                <span className="text-gray-400 text-sm truncate w-full text-center">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Let us help you build a smart, secure future—today.</h3>
          <a
            href="mailto:sds@bigkokogroup.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#EDAF3D] text-black rounded-full hover:bg-[#EDAF3D]/90 transition-all transform hover:scale-105 font-semibold"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}