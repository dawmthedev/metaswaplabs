import Container from "@/components/Container";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, User, Mail, Rocket, Code, Smartphone, Megaphone, TrendingUp, Zap, ArrowLeft, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  selectedServices: string[];
  budget: string;
  timeline: string;
  projectDetails: string;
  goals: string;
}

interface ServiceItem {
  name: string;
  icon: React.ReactNode;
}

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    selectedServices: [],
    budget: "",
    timeline: "",
    projectDetails: "",
    goals: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prevState => {
      const services = [...prevState.selectedServices];
      if (services.includes(service)) {
        return {
          ...prevState,
          selectedServices: services.filter(s => s !== service)
        };
      } else {
        return {
          ...prevState,
          selectedServices: [...services, service]
        };
      }
    });
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log(formData);
  };

  // Define our services with icons
  const services: ServiceItem[] = [
    { name: "Web Development", icon: <Code size={24} /> },
    { name: "App Development", icon: <Smartphone size={24} /> },
    { name: "Social Media Ads", icon: <Megaphone size={24} /> },
    { name: "Growth Marketing", icon: <TrendingUp size={24} /> },
    { name: "Automation", icon: <Zap size={24} /> },
    { name: "UI/UX Design", icon: <Sparkles size={24} /> },
  ];

  return (
    <Container title="Contact">
      <section className="flex min-h-screen flex-col items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl w-full glass rounded-3xl p-10 shadow-2xl border border-white/10 text-center"
        >
          <div className="flex justify-center mb-4">
            <Sparkles size={48} className="text-fuchsia-400 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
            Let&apos;s make something amazing together!
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            Let&apos;s get started on your next project! and let&apos;s turn your vision into reality.
          </p>
          
          {/* Progress bar */}
          <div className="flex justify-between mb-8 relative">
            {[0, 1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center relative z-10">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= step 
                    ? 'bg-gradient-to-r from-fuchsia-500 to-blue-500' 
                    : 'bg-white/20'}`}
                >
                  {currentStep > step ? (
                    <CheckCircle size={16} className="text-white" />
                  ) : (
                    <span className="text-white font-bold">{step + 1}</span>
                  )}
                </div>
                <span className={`text-xs mt-1 ${currentStep >= step ? 'text-white' : 'text-gray-400'}`}>
                  {step === 0 ? 'Basics' : step === 1 ? 'Services' : step === 2 ? 'Details' : 'Review'}
                </span>
              </div>
            ))}
            {/* Progress line */}
            <div className="absolute top-4 left-0 w-full h-0.5 bg-white/20 -z-0 transform -translate-y-1/2">
              <div 
                className="h-full bg-gradient-to-r from-fuchsia-500 to-blue-500 transition-all duration-300" 
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>
          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center space-y-4"
            >
              <Rocket size={40} className="text-cyan-400 animate-bounce" />
              <div className="text-2xl font-semibold text-white">Thank you for reaching out!</div>
              <p className="text-gray-200">We&apos;ve received your project details and will be in touch shortly to discuss how we can help bring your vision to life.</p>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {currentStep === 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="name" className="font-semibold text-white flex items-center gap-2">
                      <User size={18} /> Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="What should we call you?"
                      className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="email" className="font-semibold text-white flex items-center gap-2">
                      <Mail size={18} /> Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="How can we reach you?"
                      className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="company" className="font-semibold text-white flex items-center gap-2">
                      <Sparkles size={18} /> Company (Optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company or organization"
                      className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="phone" className="font-semibold text-white flex items-center gap-2">
                      <MessageCircle size={18} /> Phone Number (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Alternative way to reach you"
                      className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Services */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-left mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">What services are you interested in?</h3>
                    <p className="text-gray-300 text-sm">Select all that apply</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.name}
                        type="button"
                        onClick={() => handleServiceToggle(service.name)}
                        className={`flex items-center gap-2 p-4 rounded-xl border transition-all ${formData.selectedServices.includes(service.name) ? 'border-fuchsia-400 bg-fuchsia-500/20' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                      >
                        <div className={`p-2 rounded-full ${formData.selectedServices.includes(service.name) ? 'bg-fuchsia-500' : 'bg-white/10'}`}>
                          {service.icon}
                        </div>
                        <span className="text-white text-left text-sm font-medium">{service.name}</span>
                        {formData.selectedServices.includes(service.name) && (
                          <CheckCircle size={16} className="ml-auto text-fuchsia-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Project Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="projectDetails" className="font-semibold text-white flex items-center gap-2">
                      <MessageCircle size={18} /> Tell us about your project
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      required
                      placeholder="What are you looking to build or accomplish?"
                      className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="goals" className="font-semibold text-white flex items-center gap-2">
                      <TrendingUp size={18} /> What are your main goals?
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      rows={2}
                      value={formData.goals}
                      onChange={handleInputChange}
                      required
                      placeholder="What outcomes are you hoping to achieve?"
                      className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 text-left">
                      <label htmlFor="budget" className="font-semibold text-white flex items-center gap-2">
                        <Sparkles size={18} /> Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="rounded-xl px-4 py-3 bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="" className="bg-gray-900">Select a range</option>
                        <option value="$1K - $5K" className="bg-gray-900">$1K - $5K</option>
                        <option value="$5K - $10K" className="bg-gray-900">$5K - $10K</option>
                        <option value="$10K - $25K" className="bg-gray-900">$10K - $25K</option>
                        <option value="$25K - $50K" className="bg-gray-900">$25K - $50K</option>
                        <option value="$50K+" className="bg-gray-900">$50K+</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                      <label htmlFor="timeline" className="font-semibold text-white flex items-center gap-2">
                        <Clock size={18} /> Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="rounded-xl px-4 py-3 bg-white/10 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                      >
                        <option value="" className="bg-gray-900">Select timeline</option>
                        <option value="ASAP" className="bg-gray-900">ASAP</option>
                        <option value="1-2 weeks" className="bg-gray-900">1-2 weeks</option>
                        <option value="1-2 months" className="bg-gray-900">1-2 months</option>
                        <option value="3+ months" className="bg-gray-900">3+ months</option>
                        <option value="Not sure yet" className="bg-gray-900">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Review */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h3 className="font-bold text-lg text-white mb-4">Review Your Information</h3>
                    
                    <div className="space-y-4">
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">Name</span>
                        <span className="text-white">{formData.name || "Not provided"}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">Email</span>
                        <span className="text-white">{formData.email || "Not provided"}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">Company</span>
                        <span className="text-white">{formData.company || "Not provided"}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">Services Needed</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {formData.selectedServices.length > 0 ? (
                            formData.selectedServices.map(service => (
                              <span key={service} className="px-2 py-1 bg-fuchsia-500/20 border border-fuchsia-500/50 rounded-md text-xs text-white">
                                {service}
                              </span>
                            ))
                          ) : (
                            <span className="text-gray-400">No services selected</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">Budget</span>
                        <span className="text-white">{formData.budget || "Not specified"}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-xs">Timeline</span>
                        <span className="text-white">{formData.timeline || "Not specified"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-400">
                    By submitting this form, you agree to be contacted about your project. We promise not to share your information.
                  </div>
                </motion.div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between pt-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 px-5 py-2 text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                )}
                
                <div className="ml-auto">
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-fuchsia-400/30 hover:scale-105 transition-all duration-300"
                    >
                      {currentStep === 0 ? "Select Services" : currentStep === 1 ? "Add Details" : "Review"} <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-fuchsia-400/30 hover:scale-105 transition-all duration-300"
                    >
                      Submit <Rocket size={16} />
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </section>
    </Container>
  );
}

