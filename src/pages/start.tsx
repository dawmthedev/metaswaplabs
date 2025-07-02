import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import type { Variants } from "framer-motion";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  ChevronRight, 
  Upload, 
  Scissors, 
  Share2, 
  BarChart3, 
  Clock,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Video,
  MessageSquare,
  Bot,
  Target
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

const workflowSteps = [
  {
    icon: Upload,
    title: "Discovery & Planning",
    description: "We collaborate to understand your vision, goals, and requirements to create a comprehensive project roadmap",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Scissors,
    title: "Design & Prototyping",
    description: "Our team creates intuitive UI/UX designs and interactive prototypes for your approval before development",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: Share2,
    title: "Development & Testing",
    description: "Expert developers bring your vision to life with clean, maintainable code and thorough quality assurance",
    color: "from-pink-600 to-red-600"
  },
  {
    icon: BarChart3,
    title: "Deployment & Support",
    description: "Seamless launch with ongoing maintenance, performance monitoring, and future enhancement options",
    color: "from-red-600 to-orange-600"
  }
];

const workflowCards = [
  {
    title: "Web Application Development",
    description: "Custom web applications built with modern frameworks that are responsive, secure, and scalable to your business needs",
    icon: Bot,
    metric: "Fast delivery",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android",
    icon: MessageSquare,
    metric: "Cross-platform",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "E-commerce Solutions",
    description: "Custom online stores with payment integration, inventory management, and optimized customer journeys",
    icon: Target,
    metric: "Increase sales",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Enterprise Software",
    description: "Robust, scalable business applications that streamline operations and boost productivity across your organization",
    icon: Video,
    metric: "Boost efficiency",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    title: "Experienced Development Team",
    description: "Our senior developers have decades of combined experience building solutions across multiple industries",
    icon: Users
  },
  {
    title: "Agile Methodology",
    description: "We follow agile principles with regular updates, transparent communication, and iterative improvements",
    icon: Clock
  },
  {
    title: "Scalable Solutions",
    description: "We build software that grows with your business, from startup MVP to enterprise-grade applications",
    icon: TrendingUp
  }
];

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  followers?: string;
  metric?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "They took our concept and transformed it into a powerful application that exceeded our expectations. Their development process was transparent and collaborative throughout.",
    author: "Sarah Chen",
    role: "Startup Founder",
    metric: "Launched in 8 weeks"
  },
  {
    quote: "Our e-commerce sales increased by 200% after launching our new custom platform. Their attention to user experience and performance optimization made all the difference.",
    author: "Marcus Johnson",
    role: "CEO, TechStart Inc",
    metric: "200% revenue growth"
  },
  {
    quote: "Working with this team was refreshingly straightforward. They delivered exactly what we needed, on time and within budget. The ongoing support has been excellent.",
    author: "Emily Rodriguez",
    role: "Product Director",
    metric: "Under budget"
  }
];

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1, once: true });

  useEffect(() => {
    type LocomotiveScrollType = {
      destroy: () => void;
    };

    let scrollInstance: LocomotiveScrollType | null = null;
    
    const initScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const container = document.querySelector<HTMLElement>('[data-scroll-container]');
        if (!container) return;
        
        scrollInstance = new LocomotiveScroll({
          el: container,
          smooth: true,
          lerp: 0.1,
        });
      } catch (error) {
        console.error('Failed to initialize scroll:', error);
      }
    };

    void initScroll();

    return () => {
      if (scrollInstance?.destroy) {
        scrollInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      void controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SoftwareDevelopment() {
  const [isScrolled, setIsScrolled] = useState(false);
  const refScrollContainer = useRef(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer} className="overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="container mx-auto text-center max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-sm font-medium text-purple-300 mb-6">
                <Bot className="w-4 h-4 mr-2" />
                Expert Software Development Services
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  Design.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Develop.
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Deploy.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                From concept to launch, we bring your digital vision to life.
                You focus on your business, we handle the tech.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
              >
                <Link href="/contact" passHref>
                  <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                    Our Process
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <button className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold text-lg hover:bg-white/5 transition-all duration-300">
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={cn(
                "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 transition-opacity duration-300",
                isScrolled && "opacity-0"
              )}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <TriangleDownIcon className="w-5 h-5 animate-bounce" />
            </motion.div>
          </div>
        </section>

        {/* Workflow Overview */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Development Process
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                From concept to launch, we transform your vision into reality
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 mx-auto`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 text-3xl font-bold text-white/10">
                      {index + 1}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Cards */}
        <section className="py-32 px-4 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Development Services
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Tailored software solutions to bring your vision to life
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workflowCards.map((card, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                  >
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center`}>
                          <card.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                            {card.metric}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {card.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {card.description}
                      </p>
                      
                      <div className="flex items-center text-purple-400 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Why Choose Us
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We bring technical excellence and business understanding to every project we undertake
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6 mx-auto">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-4 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                See how we've helped businesses transform their ideas into powerful software solutions
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={`star-${i}`} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t border-white/10 pt-4 mt-auto">
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      {testimonial.followers && (
                        <div className="text-purple-400 text-sm font-medium mt-1">{testimonial.followers}</div>
                      )}
                      {testimonial.metric && (
                        <div className="text-blue-400 text-sm font-medium mt-1">{testimonial.metric}</div>
                      )}
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="p-12 rounded-3xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30"
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                    Ready to Build Your Vision?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Let's discuss how we can transform your idea into a powerful software solution
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact" passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Book a Demo
                      <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 border-2 border-gray-500 text-gray-300 rounded-full font-bold text-xl hover:bg-white/5 hover:border-white/50 transition-all duration-300"
                  >
                    Start Now
                  </motion.button>
                </div>
                <div className="mt-8 text-gray-400 text-sm">
                  Free consultation • Transparent pricing • Dedicated support
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </Container>
  );
}
