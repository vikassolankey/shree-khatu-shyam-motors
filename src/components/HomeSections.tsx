import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Truck, ArrowRight, Shield, Users, Clock, ThumbsUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Counter = ({ value }: { value: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  
  const numericMatch = value.match(/\d+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    if (isInView && numericValue > 0) {
      let startTime: number | null = null;
      const duration = 2000;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * numericValue));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="inline-block min-h-[1em]">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

const heroImages = [
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1501700489910-fb3a7eaa0d71?auto=format&fit=crop&q=80&w=1920'
];

export const Hero = () => {
  return (
    <section className="relative flex flex-col lg:block lg:h-[90vh] lg:min-h-[600px] overflow-hidden">
      <div className="relative h-[45vh] sm:h-[55vh] lg:absolute lg:inset-0 lg:h-full">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-dark/40 lg:bg-dark/60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12 lg:py-0 lg:h-full lg:flex lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs md:text-sm font-bold mb-6"
          >
            <Truck className="w-4 h-4" />
            TRUSTED TRANSPORT PARTNER
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1]"
          >
            Reliable Transport & <br />
            <span className="text-primary">
              <Typewriter texts={['Trusted Services', 'Expert Logistics', 'Safe Relocation', 'Deep Cleaning']} />
            </span> in Mathura
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
          >
            Experience exceptional service with Shree Khatu Shyam Motors. We deliver with faith and trust, ensuring your goods reach safely and on time.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary/20">
              Book Service <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all">
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Watermark */}
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none hidden lg:block">
        <Truck className="w-64 h-64 text-white" />
      </div>
    </section>
  );
};

export const Stats = () => {
  const stats = [
    { label: 'Partner Companies', value: '10+', icon: Shield },
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Deliveries Completed', value: '1000+', icon: Truck },
    { label: 'Support Available', value: '24/7', icon: Clock },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              className="glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl text-center group hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="text-2xl md:text-4xl font-display font-black text-white mb-1 md:mb-2">
                <Counter value={stat.value} />
              </div>
              <div className="text-gray-400 text-xs md:text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs = () => {
  const features = [
    { title: 'Trusted Local Service', desc: 'Deeply rooted in Mathura with years of local expertise.', icon: Shield },
    { title: 'Professional Team', desc: 'Skilled drivers and cleaning professionals at your service.', icon: Users },
    { title: 'Affordable Pricing', desc: 'Premium quality services that fit your budget perfectly.', icon: ThumbsUp },
    { title: 'Fast Response', desc: 'Quick turnaround time for all your transport and cleaning needs.', icon: Clock },
    { title: 'Customer Satisfaction', desc: 'Our priority is your peace of mind and satisfaction.', icon: Star },
  ];

  return (
    <section className="py-24 bg-dark-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Excellence in Every Delivery</h3>
          <p className="text-gray-400">We combine traditional values with modern logistics to provide the best experience in Mathura.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-display font-bold mb-4">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
