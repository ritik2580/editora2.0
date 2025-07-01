import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);
    
    // Simulate form submission
    try {
      // This is where you would integrate the Web3Forms API
      // Replace with actual Web3Forms integration when adding your email
      /*
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });
      */
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitResult({
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={ref}
      className="py-20 px-5 bg-[#0a0a0a]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 font-['Syncopate',_sans-serif]">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#ff00c8] mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Create Something Amazing</h3>
            <p className="text-gray-300 mb-8">
              Ready to bring your vision to life? Contact us to discuss your project and discover how EDITORA can transform your ideas into stunning visual experiences.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-400">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#ff00c8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 9536428507</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#ff00c8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 7668128424</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#ff00c8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>singhpanwarlaxman55@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#ff00c8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Dehradun</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border-none rounded-lg text-white focus:outline-none focus:bg-white/10 transition-all duration-300"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="form-highlight absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border-none rounded-lg text-white focus:outline-none focus:bg-white/10 transition-all duration-300"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="form-highlight absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-white/5 border-none rounded-lg text-white focus:outline-none focus:bg-white/10 transition-all duration-300"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <div className="form-highlight absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border-none rounded-lg text-white focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <div className="form-highlight absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#ff00c8] to-[#00e5ff] transition-all duration-300 group-focus-within:w-full"></div>
              </div>
              
              {submitResult && (
                <div className={`px-4 py-3 rounded-lg text-white ${
                  submitResult.success ? 'bg-green-500/20' : 'bg-red-500/20'
                }`}>
                  {submitResult.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#ff00c8] to-[#ff0037] bg-size-200 gradient-flow text-white font-semibold uppercase text-sm tracking-wider transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,43,81,0.3)] hover-glow-neon disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
