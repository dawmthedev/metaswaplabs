import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business needs and goals to craft a tailored solution.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Our experts build your solution with cutting-edge technology and best practices.",
  },
  {
    number: "03",
    title: "Deployment",
    description:
      "We launch your project seamlessly and provide ongoing support for success.",
  },
];

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="process"
      data-scroll-section
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-metaswapBlue to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent text-white sm:text-5xl md:text-6xl">
            Our Process
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            A streamlined process to bring your vision to life with precision
            and excellence.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative rounded-2xl bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-metaswapBlue/10 hover:to-blue-500/10 hover:shadow-xl hover:shadow-metaswapBlue/10"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-metaswapBlue to-blue-500 opacity-0 transition duration-1000 group-hover:opacity-20" />
              <div className="relative">
                <span className="text-6xl font-bold text-metaswapBlue/20">
                  {step.number}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-300">{step.description}</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-metaswapBlue to-blue-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-metaswapBlue to-blue-500 px-8 py-4 text-base font-medium text-white shadow-lg shadow-metaswapBlue/20 transition-all duration-300 hover:from-metaswapBlue/90 hover:to-blue-500/90 hover:shadow-xl hover:shadow-metaswapBlue/30"
          >
            Get Started
            <svg
              className="ml-3 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
