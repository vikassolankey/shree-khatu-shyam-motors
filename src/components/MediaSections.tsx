import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const GallerySection = ({ marquee = false }: { marquee?: boolean }) => {
  const images = [
    { url: 'gallery/truck-vishnu.jpeg', category: 'Transport' },
     { url: 'gallery/gall1.jpeg', category: 'Transport' },
      { url: 'gallery/gall2.jpeg', category: 'Transport' },
       { url: 'gallery/gall3.jpeg', category: 'Transport' },
        { url: 'gallery/gall4.jpeg', category: 'Transport' },
         { url: 'gallery/gall5.jpeg', category: 'Transport' },
          { url: 'gallery/gall6.jpeg', category: 'Transport' },
           { url: 'gallery/gall7.jpeg', category: 'Transport' },
            { url: 'gallery/gall8.jpeg', category: 'Transport' },
             { url: 'gallery/gall9.jpeg', category: 'Transport' },
              { url: 'gallery/gall10.jpeg', category: 'Transport' },
               { url: 'gallery/gall11.jpeg', category: 'Transport' },
                { url: 'gallery/gall12.jpeg', category: 'Transport' },
    { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', category: 'Logistics' },
    { url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800', category: 'Fleet' },
    { url: 'https://th.bing.com/th/id/OIP.HnU9a1YLqsLJVmkLAHIV-gHaEK?w=332&h=186&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3', category: 'Cleaning' },
    { url: 'https://th.bing.com/th/id/OIP.PXixcFIjGeC8BRdB6twCvAHaFj?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', category: 'Relocation' },
    { url: 'https://tse4.mm.bing.net/th/id/OIP.ofAXphxur4IBZBYWh6Cl-AHaHa?w=3333&h=3333&rs=1&pid=ImgDetMain&o=7&rm=3', category: 'Transport' },
  ];

  if (marquee) {
    return (
      <section className="py-24 bg-dark-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Visual Journey</h3>
            <p className="text-gray-400">Highlights from our operations and fleet.</p>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.3}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 16 },
              768: { slidesPerView: 3.2, spaceBetween: 20 },
              1024: { slidesPerView: 4.2, spaceBetween: 24 },
            }}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="pb-6"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="group relative h-64 md:h-72 rounded-[2rem] overflow-hidden">
                  <img src={img.url} alt={img.category} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block">{img.category}</span>
                      <h4 className="text-lg font-display font-bold">Operational Excellence</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Visual Journey</h3>
          <p className="text-gray-400">Glimpses of our operations, fleet, and professional services in action.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer"
            >
              <img src={img.url} alt={img.category} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <div>
                  <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block">{img.category}</span>
                  <h4 className="text-xl font-display font-bold">Operational Excellence</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    { title: 'Company Overview', thumb: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', id: 'dQw4w9WgXcQ' },
    { title: 'Logistics in Action', thumb: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800', id: 'dQw4w9WgXcQ' },
    { title: 'Client Testimonial', thumb: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800', id: 'dQw4w9WgXcQ' },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Videos</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Watch Us in Action</h3>
          <p className="text-gray-400">Experience our professional services through these short videos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(vid.id)}
            >
              <img src={vid.thumb} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl shadow-primary/40">
                  <Play className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark to-transparent">
                <h4 className="text-lg font-display font-bold">{vid.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden bg-black relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setSelectedVideo(null)} className="absolute top-6 right-6 z-10 text-white/50 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md">
                <X className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const TestimonialsSection = () => {
  const reviews = [
    { name: 'Rahul Sharma', role: 'Business Owner', text: 'Shree Khatu Shyam Motors provided exceptional transport service for my factory goods. Highly reliable and professional.', avatar: 'https://i.pravatar.cc/150?u=rahul' },
    { name: 'Priya Verma', role: 'Homeowner', text: 'The house cleaning service was top-notch. My home looks brand new. The team was very respectful and thorough.', avatar: 'https://i.pravatar.cc/150?u=priya' },
    { name: 'Amit Singh', role: 'Logistics Manager', text: 'Best logistics partner in Mathura. Their response time and delivery accuracy are unmatched.', avatar: 'https://i.pravatar.cc/150?u=amit' },
  ];

  return (
    <section className="py-24 bg-dark-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">What Our Clients Say</h3>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {reviews.map((rev, i) => (
            <SwiperSlide key={i}>
              <div className="glass-card p-10 rounded-[2.5rem] h-full flex flex-col relative group">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">"{rev.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={rev.avatar} alt={rev.name} className="w-14 h-14 rounded-2xl object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-display font-bold text-white">{rev.name}</h4>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider">{rev.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
