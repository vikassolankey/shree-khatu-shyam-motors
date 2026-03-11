import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Home, Package, Globe, MapPin, X, FileText, Download, Eye } from 'lucide-react';

export const ServicesSection = ({ limit }: { limit?: number }) => {
  const services = [
    {
      title: 'Transportation Services',
      desc: 'Reliable and safe transportation of goods across Mathura and surrounding regions with our modern fleet.',
      icon: Truck,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'House Cleaning Services',
      desc: 'Professional deep cleaning services for homes and offices, ensuring a spotless and hygienic environment.',
      icon: Home,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Goods Relocation',
      desc: 'Hassle-free shifting of household or office goods with expert packing and careful handling.',
      icon: Package,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Logistics Support',
      desc: 'Comprehensive logistics solutions for businesses, optimizing supply chain and delivery schedules.',
      icon: Globe,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Local Transport Solutions',
      desc: 'Quick and efficient local transport for small to medium loads within the city limits.',
      icon: MapPin,
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Comprehensive Solutions</h3>
          <p className="text-gray-400">Tailored services designed to meet all your transportation and maintenance needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative p-8 rounded-3xl bg-dark-secondary border border-white/5 hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${s.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <s.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              
              <h4 className="text-2xl font-display font-bold mb-4">{s.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-8">{s.desc}</p>
              
              <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                Learn More <Truck className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certificates = [
    { title: 'Udyam Registration', id: 'UDYAM-UP-52-XXXXX', type: 'Registration Certificate', image: 'https://images.unsplash.com/photo-1606857521015-7f9f14243970?auto=format&fit=crop&q=80&w=800' },
    { title: 'GST Registration', id: '09XXXXXXXXXXXXZ', type: 'Tax Certificate', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Business License', id: 'LIC-2026-XXXX', type: 'Operating License', image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section className="py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Compliance</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Certifications</h3>
          <p className="text-gray-400">We are a fully registered and compliant business entity in Uttar Pradesh.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card p-6 rounded-3xl group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-display font-bold mb-1">{cert.title}</h4>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{cert.type}</p>
                  <p className="text-gray-500 text-sm font-mono">{cert.id}</p>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-dark-secondary border border-white/10 p-8 rounded-3xl max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white">
                <X className="w-8 h-8" />
              </button>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-3xl font-display font-bold">{selectedCert.title}</h3>
                  <p className="text-gray-400">{selectedCert.type}</p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-white/5">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Download PDF
                </button>
                <button onClick={() => setSelectedCert(null)} className="flex-1 bg-white/5 text-white py-4 rounded-xl font-bold">
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
