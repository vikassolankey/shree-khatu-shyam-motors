import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { TopHeader, Navbar, Footer, FloatingActions, ScrollToTop } from './components/Shared';
import { Hero, Stats, WhyChooseUs, TeamSection } from './components/HomeSections';
import { AboutSection } from './components/AboutSection';
import { ServicesSection, CertificatesSection } from './components/ServiceSections';
import { GallerySection, VideoSection, TestimonialsSection } from './components/MediaSections';
import { ContactSection } from './components/ContactSection';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 1.02, y: -10 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Home = () => (
  <PageWrapper>
    <Hero />
    <Stats />
    <AboutSection />
    <TeamSection />
    <ServicesSection limit={3} />
    <WhyChooseUs />
    <GallerySection marquee />
    <TestimonialsSection />
    <ContactSection />
  </PageWrapper>
);

const About = () => (
  <PageWrapper>
    <div className="pt-20 pb-10 bg-dark-secondary text-center">
      <h1 className="text-5xl md:text-7xl font-display font-black mb-4">About Us</h1>
      <p className="text-primary font-bold tracking-widest uppercase">Drive with Faith, Delivering with Trust</p>
    </div>
    <AboutSection />
    <Stats />
    <WhyChooseUs />
  </PageWrapper>
);

const Services = () => (
  <PageWrapper>
    <div className="pt-20 pb-10 bg-dark-secondary text-center">
      <h1 className="text-5xl md:text-7xl font-display font-black mb-4">Our Services</h1>
      <p className="text-primary font-bold tracking-widest uppercase">Professional Solutions for Every Need</p>
    </div>
    <ServicesSection />
    <WhyChooseUs />
  </PageWrapper>
);

const Gallery = () => (
  <PageWrapper>
    <div className="pt-20 pb-10 bg-dark-secondary text-center">
      <h1 className="text-5xl md:text-7xl font-display font-black mb-4">Gallery</h1>
      <p className="text-primary font-bold tracking-widest uppercase">Operational Excellence in Action</p>
    </div>
    <GallerySection />
  </PageWrapper>
);

const Certificates = () => (
  <PageWrapper>
    <div className="pt-20 pb-10 bg-dark-secondary text-center">
      <h1 className="text-5xl md:text-7xl font-display font-black mb-4">Certificates</h1>
      <p className="text-primary font-bold tracking-widest uppercase">Our Official Compliance & Registrations</p>
    </div>
    <CertificatesSection />
  </PageWrapper>
);

const Videos = () => (
  <PageWrapper>
    <div className="pt-20 pb-10 bg-dark-secondary text-center">
      <h1 className="text-5xl md:text-7xl font-display font-black mb-4">Videos</h1>
      <p className="text-primary font-bold tracking-widest uppercase">Watch Our Journey</p>
    </div>
    <VideoSection />
  </PageWrapper>
);

const Contact = () => (
  <PageWrapper>
    <div className="pt-20 pb-10 bg-dark-secondary text-center">
      <h1 className="text-5xl md:text-7xl font-display font-black mb-4">Contact Us</h1>
      <p className="text-primary font-bold tracking-widest uppercase">We're Here to Help You</p>
    </div>
    <ContactSection />
  </PageWrapper>
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <TopHeader />
      <Navbar />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingActions />
      <ScrollToTop />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX: useScrollProgress() }}
      />
    </div>
  );
}

function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const update = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(winScroll / height);
    };
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);
  return progress;
}
