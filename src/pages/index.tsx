import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import styles from "@/styles/Home.module.css";

// Component imports
import Container from "@/components/Container";
import HoverVideos from "@/components/HoverVideos";
import Demos from "@/components/Demos";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import WhySection from "@/components/WhySection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Gradient from "@/components/Gradient";
import ScrollManager from "@/components/ScrollManager";
import { hoverVideoItems } from "@/components/HoverVideoData";

export default function Home() {
  const refScrollContainer = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const tiltEls: HTMLElement[] = Array.from(
      document.querySelectorAll(".tilt"),
    );
    VanillaTilt.init(tiltEls, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container className="mt-10">
      <div
        ref={refScrollContainer}
        className="flex min-h-screen w-full flex-col items-center justify-center"
      >
        <ScrollManager
          setIsScrolled={setIsScrolled}
          containerRef={refScrollContainer}
        />

        <Gradient />

        {/* Full-width Hero Demos */}
        <section
          id="demos"
          data-scroll-section
          className="relative h-screen w-full"
        >
          <Demos />

          <div
            className={cn(
              styles.scroll,
              isScrolled && styles["scroll--hidden"],
              "mt-6 py-2",
            )}
          >
            Scroll to discover{" "}
            <TriangleDownIcon className="mt-1 animate-bounce" />
          </div>
        </section>

        {/* Service Videos */}
        {/* <HoverVideos items={hoverVideoItems} /> */}

        {/* Hero Section */}
        <Hero />

        <div className="my-8 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Link href="/contact" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-5 text-xl font-bold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Get Started <ChevronRight className="ml-2 inline-block h-5 w-5" />
            </motion.button>
          </Link>
        </div>

        {/* Process Section */}
        <Process />

        {/* Benefits Section */}
        <Benefits />

        {/* Why Metaswap Labs */}
        <WhySection />

        {/* Testimonials */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />
      </div>
    </Container>
  );
}
