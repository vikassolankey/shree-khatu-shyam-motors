import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's Discuss Your Needs</h3>
            <p className="text-gray-400 mb-12 text-lg">
              Have questions about our services or want a custom quote? Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              {[
                { 
                  icon: MapPin, 
                  label: 'Our Office', 
                  val: 'Ground Floor, Service Rd, nearby 1 Mandi Chauraha, Surya Nagar, Mathura, UP 281004',
                  link: 'https://www.google.com/maps/place/Shree+Khatu+Shyam+Motors+Mathura/@27.4866826,77.6552841,18z/data=!4m14!1m7!3m6!1s0x3973718a0232c591:0xa7c1ba73dd87cf74!2sShree+Khatu+Shyam+Motors+Mathura!8m2!3d27.4865898!4d77.6553136!16s%2Fg%2F11n54qjyl1!3m5!1s0x3973718a0232c591:0xa7c1ba73dd87cf74!8m2!3d27.4865898!4d77.6553136!16s%2Fg%2F11n54qjyl1?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'
                },
                { icon: Phone, label: 'Call Us', val: '+91 8218258915', link: 'tel:+918218258915' },
                { icon: Mail, label: 'Email Us', val: 'Info@shreekhatushyammotors.co.in', link: 'mailto:Info@shreekhatushyammotors.co.in' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="flex gap-6 items-start group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-1">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.link.startsWith('http') ? "_blank" : undefined}
                        rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-white text-lg font-medium hover:text-primary transition-colors block"
                      >
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-white text-lg font-medium">{item.val}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-between">
              <div>
                <p className="text-primary font-bold mb-1">Need instant help?</p>
                <p className="text-gray-400 text-sm">Chat with us on WhatsApp for quick support.</p>
              </div>
              <a href="https://wa.me/918218258915" className="bg-primary hover:bg-primary-light text-white p-4 rounded-2xl transition-all">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-1">Your Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-light text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-primary/20">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 h-[450px] rounded-[2.5rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 relative group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.123456789!2d77.6552841!3d27.4866826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973718a0232c591%3A0xa7c1ba73dd87cf74!2sShree+Khatu+Shyam+Motors+Mathura!5e0!3m2!1sen!2sin!4v1710400000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <a 
            href="https://www.google.com/maps/place/Shree+Khatu+Shyam+Motors+Mathura/@27.4866826,77.6552841,18z/data=!4m14!1m7!3m6!1s0x3973718a0232c591:0xa7c1ba73dd87cf74!2sShree+Khatu+Shyam+Motors+Mathura!8m2!3d27.4865898!4d77.6553136!16s%2Fg%2F11n54qjyl1!3m5!1s0x3973718a0232c591:0xa7c1ba73dd87cf74!8m2!3d27.4865898!4d77.6553136!16s%2Fg%2F11n54qjyl1?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all hover:scale-105"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
