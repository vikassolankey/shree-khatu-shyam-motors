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
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920',
  'gallery/hero1.jpeg',
  'gallery/hero2.png',
  'gallery/hero3.png',
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

export const TeamSection = () => {
  const team = [
    { name: 'Vishnu Sharma', role: 'Senior Driver', avatar: 'data:image/webp;base64,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' },
    { name: 'Anita Gupta', role: 'Cleaning Lead', avatar: 'https://i.pinimg.com/originals/1a/5f/4f/1a5f4f37c7df3a498b87b62e62cfa05b.jpg?nii=t' },
    { name: 'Rohit Verma', role: 'Logistics Coordinator', avatar: 'data:image/webp;base64,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' },
    { name: 'Pooja Singh', role: 'Customer Support', avatar: 'https://ociphotoservice.com/dist/samplepp.jpg' },
    { name: 'Arjun Mehta', role: 'Fleet Supervisor', avatar: 'https://th.bing.com/th/id/OIP.KaslBAJqT34oAwE3NFm5EgAAAA?w=186&h=239&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3' },
    { name: 'Neha Patel', role: 'Operations Exec', avatar: 'https://www.bing.com/th/id/OIP.hnTE6Uql0Pn6gbSDGjlQsgHaJh?w=157&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.8&pid=3.1&rm=2' },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Team</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Dedicated Professionals</h3>
          <p className="text-gray-400">Meet the people who keep our operations running smoothly.</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 20 },
            768: { slidesPerView: 3.2, spaceBetween: 24 },
            1024: { slidesPerView: 4.2, spaceBetween: 28 },
          }}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="pb-6"
        >
          {team.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="group relative h-72 rounded-[2rem] overflow-hidden glass-card p-6 flex items-end">
                <img src={member.avatar} alt={member.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                <div className="relative z-10">
                  <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block">{member.role}</span>
                  <h4 className="text-2xl font-display font-bold">{member.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
