import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Users, Mail, Phone, MapPin } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <img src="gallery/truck-vishnu.jpeg" alt="About SKS Motors" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 md:w-64 h-48 md:h-64 bg-primary/20 blur-[80px] md:blur-[100px] rounded-full" />
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-48 md:w-64 h-48 md:h-64 bg-primary/10 blur-[80px] md:blur-[100px] rounded-full" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-10 md:-left-10 glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl z-20 w-[80%] md:w-auto"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Truck className="text-white w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-display font-black">2026</p>
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Established</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 lg:mt-0"
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Our Company</h2>
            <h3 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8 leading-tight">Driving with Faith, <br />Delivering with Trust</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
              Shree Khatu Shyam Motors is a premier transportation and services company based in the holy city of Mathura. Founded on the principles of reliability and integrity, we have quickly become a trusted name for local and regional logistics.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Shield, title: 'Reliable Transport', desc: 'Safe handling of all goods.' },
                { icon: Users, title: 'Experienced Team', desc: 'Professionals you can trust.' },
                { icon: Clock, title: 'Local Trust', desc: 'Serving Mathura since 2026.' },
                { icon: Truck, title: 'Modern Fleet', desc: 'Well-maintained vehicles.' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};
