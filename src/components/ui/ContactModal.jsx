import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [step, setStep] = useState(1);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };
  
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the form data to your backend
    // For demonstration, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ name: '', email: '', message: '', subject: '' });
        setStep(1);
        onClose();
      }, 3000);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
  };
  
  const renderFormStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">👋</span> Let's start with your info
            </h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Your name"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>
            
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-button hover:bg-button/80 px-6 py-2 rounded-full transition-colors flex items-center gap-2"
                onClick={nextStep}
              >
                Next <span className="text-lg">→</span>
              </motion.button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">📝</span> What's this about?
            </h3>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
              <motion.select
                whileFocus={{ scale: 1.02 }}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Select a topic...</option>
                <option value="collaboration">Collaboration Opportunity</option>
                <option value="project">Project Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </motion.select>
            </div>
            
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-button hover:text-white px-4 py-2 flex items-center gap-2"
                onClick={prevStep}
              >
                <span className="text-lg">←</span> Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-button hover:bg-button/80 px-6 py-2 rounded-full transition-colors flex items-center gap-2"
                onClick={nextStep}
              >
                Next <span className="text-lg">→</span>
              </motion.button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">💬</span> Your message
            </h3>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="What would you like to say?"
              />
            </div>
            
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-button hover:text-white px-4 py-2 flex items-center gap-2"
                onClick={prevStep}
              >
                <span className="text-lg">←</span> Back
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="bg-button hover:bg-button/80 px-6 py-2 rounded-full transition-colors flex items-center gap-2 disabled:opacity-50"
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send <span className="text-lg">✨</span>
                  </span>
                )}
              </motion.button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };
  
  const renderProgressBar = () => {
    return (
      <div className="mb-6">
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-button"
            initial={{ width: "33.33%" }}
            animate={{ width: `${step * 33.33}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-400">
          <span className={step >= 1 ? "text-button font-bold" : ""}>Your Info</span>
          <span className={step >= 2 ? "text-button font-bold" : ""}>Topic</span>
          <span className={step >= 3 ? "text-button font-bold" : ""}>Message</span>
        </div>
      </div>
    );
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-background border border-gray-800 rounded-lg shadow-xl z-50"
          >
            <div className="absolute top-2 right-2">
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2"
              >
                ✕
              </motion.button>
            </div>
            
            <motion.h2 
              className="text-2xl font-bold mb-4 flex items-center gap-2"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-button">Get In Touch</span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                ✉️
              </motion.span>
            </motion.h2>
            
            {submitSuccess ? (
              <motion.div 
                className="text-center py-8"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" }}
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <motion.p 
                  className="text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Message sent successfully! ✨
                </motion.p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => e.preventDefault()}>
                {renderProgressBar()}
                <AnimatePresence mode="wait">
                  {renderFormStep()}
                </AnimatePresence>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 