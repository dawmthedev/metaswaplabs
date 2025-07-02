import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      data-scroll-section
      className="flex min-h-[calc(100vh-80px)] w-full items-center justify-center py-24"
    >
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center space-y-10 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9 }}
          className="p-8 md:p-12 rounded-3xl bg-black/50 backdrop-blur-sm border border-white/10 shadow-2xl"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            Digital Solutions for the Modern Web
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Creating innovative digital experiences that transform ideas into reality.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" passHref>
              <button className="rounded-md bg-primary px-6 py-3 text-primary-foreground sm:text-lg">
                Get Started
              </button>
            </Link>
            <Link href="/services" passHref>
              <button className="flex items-center space-x-1 rounded-md border border-foreground/20 bg-background/50 px-6 py-3 backdrop-blur sm:text-lg">
                <span>Our Services</span>
                <span>→</span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
