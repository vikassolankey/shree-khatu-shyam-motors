import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, Users, Package, Headphones, CheckCircle2, Truck } from 'lucide-react';

export const RelocationDetails = () => {
  return (
    <div className="bg-dark overflow-hidden">
      {/* 1. Stats Grid and Bento Layout Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Image Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 h-[400px] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                alt="Fleet" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Stats Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-4xl font-display font-bold mb-2">5000+</h4>
              <p className="text-gray-400 font-bold mb-2">Successful Shifts</p>
              <p className="text-gray-500 text-sm">Safe packing & reliable transport for every move.</p>
            </motion.div>

            {/* Image Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3 h-[400px] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://th.bing.com/th/id/OIP.F-qeFG1o8RRL97yhU5s72gHaEK?w=271&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" 
                alt="Logistics" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Stats Card 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-3 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-4xl font-display font-bold mb-2">24/7</h4>
              <p className="text-gray-400 font-bold mb-2">Customer Support</p>
              <p className="text-gray-500 text-sm">Always here to assist you with smooth moving solutions.</p>
            </motion.div>

            {/* Row 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-3 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-4xl font-display font-bold mb-2">17+</h4>
              <p className="text-gray-400 font-bold mb-2">Years of Experience</p>
              <p className="text-gray-500 text-sm">Trusted relocation services across India.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="md:col-span-6 h-[300px] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://th.bing.com/th/id/OIP.aGHa1TDZ8p71uGQG9dxg9gHaE7?w=267&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" 
                alt="Transport" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="md:col-span-3 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-4xl font-display font-bold mb-2">50+</h4>
              <p className="text-gray-400 font-bold mb-2">Cities Covered</p>
              <p className="text-gray-500 text-sm">Delivering relocation services across urban & rural India.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Text-Image Content Sections */}
      <section className="py-24 bg-dark-secondary/30">
        <div className="container mx-auto px-4 space-y-32">
          {/* First Section: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://tse1.mm.bing.net/th/id/OIP.MNVvOZLMZZVcaXbDTCpkZwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Team" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                At <span className="text-primary font-bold">Shree Khatu Shyam Motors</span>, we don't just move belongings — we move trust, comfort, and memories. With a strong focus on <span className="text-primary font-bold">safety, reliability,</span> and <span className="text-primary font-bold">timely delivery</span>, our experienced team ensures every relocation is smooth and stress-free. Whether it's a home, office, or vehicle, we handle every item with utmost care and precision.
              </p>
            </motion.div>
          </div>

          {/* Second Section: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                <img 
                  src="https://tse4.mm.bing.net/th/id/OIP._4YhYUxTr7HQmHjDNxD9uwHaEO?w=1000&h=571&rs=1&pid=ImgDetMain&o=7&rm=3" 
                  alt="Moving Truck" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent mix-blend-overlay" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Choosing <span className="text-primary font-bold">Shree Khatu Shyam Motors</span> means choosing a partner who values your trust and satisfaction. With years of expertise and a wide network across India, we provide end-to-end shifting solutions — from careful packing and secure loading to safe transport and unpacking. Our commitment is to deliver <span className="text-primary font-bold">excellence</span> and <span className="text-primary font-bold">peace of mind</span> in every move, making your transition seamless and hassle-free.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are Feature Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column - Bento Features */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#3b3561] p-8 rounded-[2rem] flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-wider">Reliable Moves</h4>
                <p className="text-white/70 text-sm leading-relaxed">Every relocation is handled with precision, ensuring complete safety of your belongings.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary p-8 rounded-[2rem] flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-wider">Timely Delivery</h4>
                <p className="text-white/90 text-sm leading-relaxed">We value your time — on-time pickup and delivery is our promise.</p>
              </motion.div>
            </div>

            {/* Middle Column - Large Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 h-full min-h-[500px] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" 
                alt="Experts" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Column - Text and Small Features */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 p-8 rounded-[2rem] border border-white/10"
              >
                <h3 className="text-3xl font-display font-bold mb-6">WHO <span className="text-primary">WE ARE?</span></h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  At <span className="text-primary font-bold">Shree Khatu Shyam Motors</span>, we go beyond shifting goods — we move your trust, comfort, and memories. Since our inception, we've built a reputation for delivering stress-free relocations across India with a strong focus on <span className="text-primary font-bold">safety, reliability,</span> and <span className="text-primary font-bold">customer satisfaction.</span>
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-[#3b3561] p-6 rounded-[2rem] flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Flexible Scheduling</h5>
                  <p className="text-white/60 text-[10px]">We adapt to your schedule.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary p-6 rounded-[2rem] flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-widest mb-2">Insured Safety</h5>
                  <p className="text-white/80 text-[10px]">Full insurance coverage.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Rates & Charges Pricing Table */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Rates & Charges - <span className="text-primary">Shree Khatu Shyam Motors</span>
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="overflow-x-auto rounded-[2.5rem] border border-white/10 bg-dark-secondary shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#3b3561] text-white">
                  <th className="p-8 font-display font-bold uppercase tracking-wider">Shifting Type</th>
                  <th className="p-8 font-display font-bold uppercase tracking-wider">Up to 50 KM</th>
                  <th className="p-8 font-display font-bold uppercase tracking-wider">Up to 500 KM</th>
                  <th className="p-8 font-display font-bold uppercase tracking-wider">Up to 1000 KM</th>
                  <th className="p-8 font-display font-bold uppercase tracking-wider">Up to 1500 KM</th>
                  <th className="p-8 font-display font-bold uppercase tracking-wider">Within 2500 KM</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  { type: '1 BHK Home', rates: ['Rs. 7,000 - 11,000', 'Rs. 12,000 - 16,000', 'Rs. 20,000 - 25,000', 'Rs. 26,000 - 32,000', 'Rs. 30,000 - 35,000'] },
                  { type: '2 BHK Home', rates: ['Rs. 12,000 - 15,000', 'Rs. 20,000 - 23,000', 'Rs. 25,000 - 30,000', 'Rs. 32,000 - 40,000', 'Rs. 40,000 - 45,000'] },
                  { type: '3 BHK Home', rates: ['Rs. 15,000 - 18,000', 'Rs. 25,000 - 30,000', 'Rs. 35,000 - 40,000', 'Rs. 45,000 - 50,000', 'Rs. 50,000 - 65,000'] },
                  { type: '4 BHK / Villa', rates: ['Rs. 25,000 - 30,000', 'Rs. 35,000 - 40,000', 'Rs. 50,000 - 60,000', 'Rs. 55,000 - 65,000', 'Rs. 70,000 - 90,000'] },
                  { type: 'Car Transportation', rates: ['Rs. 9,000 - 11,500', 'Rs. 12,000 - 14,500', 'Rs. 17,000 - 20,000', 'Rs. 21,000 - 25,000', '-'] },
                  { type: 'Bike Transportation', rates: ['Rs. 3,000 - 7,000', 'Rs. 7,000 - 10,500', 'Rs. 10,000 - 15,000', 'Rs. 15,000 - 18,000', '-'] },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold text-white bg-white/5">{row.type}</td>
                    {row.rates.map((rate, j) => (
                      <td key={j} className="p-8 text-sm">{rate}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
