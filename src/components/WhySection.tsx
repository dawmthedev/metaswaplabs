import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "End-to-End Solutions",
    description:
      "From concept to deployment and beyond, we handle every aspect of your software development lifecycle.",
    icon: "🚀",
  },
  {
    title: "Scalable Architecture",
    description:
      "We build with growth in mind, ensuring your application can handle increasing demand seamlessly.",
    icon: "📈",
  },
  {
    title: "Cutting-Edge Tech",
    description:
      "Leveraging the latest technologies and frameworks to deliver high-performance, future-proof solutions.",
    icon: "💻",
  },
  {
    title: "Dedicated Team",
    description:
      "Your success is our priority, with a dedicated team that becomes an extension of your business.",
    icon: "👥",
  },
];

const WhySection = () => {
  return (
    <section
      id="why"
      data-scroll-section
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl"
          >
            Your All-in-One{" "}
            <span className="text-foreground">Tech Partner</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            We&apos;re not just developers - we&apos;re your strategic partners
            in digital transformation. Our full-stack expertise turns your
            vision into scalable, high-performance software that drives business
            growth.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative rounded-2xl border border-border/40 bg-background/50 p-6 backdrop-blur-sm transition-all hover:bg-background/80 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 text-2xl transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
