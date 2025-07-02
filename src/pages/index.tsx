import Container from "@/components/Container";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, MoveRight } from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import styles from "@/styles/Home.module.css";
import VanillaTilt from "vanilla-tilt";
import { services } from "@/data/services";

const tags = [
  "Full-Stack Development",
  "SaaS Marketing",
  "Web Apps",
  "UI/UX Design",
  "Scalable Solutions",
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
      
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tiltEls: HTMLElement[] = Array.from(document.querySelectorAll(".tilt"));
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
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Hero */}
        <section
          id="home"
          data-scroll-section
          className="flex min-h-[calc(100vh-80px)] w-full items-center justify-center py-24"
        >
          <div className="container mx-auto flex max-w-4xl flex-col items-center justify-center space-y-10 px-4 text-center">
  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
    className="p-8 md:p-12 rounded-3xl bg-black/50 backdrop-blur-sm border border-white/10 shadow-2xl">

    <div data-scroll data-scroll-direction="horizontal" data-scroll-speed=".09" className="flex flex-wrap justify-center gap-3">
      {tags.map((t) => (
        <span key={t} className={`${styles.pill} mx-1`}>
          {t}
        </span>
      ))}
    </div>
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
      Build & Scale Your Digital Future.
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
      Metaswap Labs is your dedicated partner for full-stack development and SaaS marketing. We build and scale your software, so you can focus on your business.
    </p>
    <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
      <Link href="/contact" passHref>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 mt-6"
        >
          Book a Discovery Call <ChevronRight className="ml-1 h-4 w-4" />
        </motion.button>
      </Link>
    </div>
    <div className={cn(styles.scroll, isScrolled && styles["scroll--hidden"])}>
      Scroll to discover <TriangleDownIcon className="mt-1 animate-bounce" />
    </div>
  </motion.div>
</div>
        </section>

        {/* Automation Library Preview */}
        <section id="library" data-scroll-section className="my-32 space-y-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl">Our Services</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="tilt flex flex-col items-start rounded-md glass p-6 text-left shadow-md fade-in"
              >
                <div className="flex items-center space-x-3">
                  {service.icon === "laptop" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                    </svg>
                  )}
                  {service.icon === "line-chart" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M3 3v18h18"/><path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"/></svg>}
                  {service.icon === "figma" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>}
                  {service.icon === "database" && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>}
                  <h3 className="text-lg font-medium tracking-tight text-foreground">{service.title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{service.subtitle}</p>
                <Link
                  href="/contact"
                  passHref
                  className="mt-4 inline-flex items-center text-primary hover:underline"
                >
                  Talk to Us <MoveRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" data-scroll-section className="my-32 space-y-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl">Our Process</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-2xl font-semibold">1. Discovery</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-2xl font-semibold">2. Development</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-2xl font-semibold">3. Deployment</span>
            </div>
          </div>
          <p className="mx-auto max-w-xl text-muted-foreground">A streamlined process to bring your vision to life.</p>
        </section>

        {/* Benefits */}
        <section id="benefits" data-scroll-section className="my-32 space-y-10 text-center">
          <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl">More Than a Service. A Partnership.</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-md glass p-6 fade-in">
              <span className="text-xl font-semibold">🚀 Faster Time to Market</span>
            </div>
            <div className="rounded-md glass p-6 fade-in">
              <span className="text-xl font-semibold">💡 Expert Guidance</span>
            </div>
            <div className="rounded-md glass p-6 fade-in">
              <span className="text-xl font-semibold">📈 Scalable Solutions</span>
            </div>
            <div className="rounded-md glass p-6 fade-in">
              <span className="text-xl font-semibold">🤝 Dedicated Support</span>
            </div>
          </div>
        </section>

        {/* Why Metaswap Labs */}
        <section id="why" data-scroll-section className="my-32 space-y-6 text-center">
          <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl text-foreground">Your All-in-One Partner</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We’re a full-stack agency that helps you build and scale your software. From initial concept to launch and beyond, we provide the expertise you need to succeed. We handle the technical details so you can focus on growing your business.
          </p>
        </section>

        {/* Social Proof */}
        <section id="testimonials" data-scroll-section className="my-32 space-y-10 py-20 text-center">
          <h2 className="text-4xl font-semibold tracking-tight xl:text-6xl text-foreground">What Our Clients Say</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
            <div className="rounded-md glass p-6 fade-in">
              <p className="text-sm text-muted-foreground">&quot;Metaswap Labs built our web app from the ground up and helped us scale to our first 1,000 users. Their expertise was invaluable.&quot;</p>
            </div>
            <div className="rounded-md glass p-6 fade-in">
              <p className="text-sm text-muted-foreground">&quot;The new marketing site they built for us has been a game-changer. Our conversion rates have doubled.&quot;</p>
            </div>
            <div className="rounded-md glass p-6 fade-in">
              <p className="text-sm text-muted-foreground">&quot;Working with Metaswap Labs was a breeze. They are true professionals who deliver on their promises.&quot;</p>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section id="cta" data-scroll-section className="my-32 glass py-20 text-center fade-in">
          <h2 className="text-3xl font-semibold text-background">Ready to Build and Scale Your Vision?</h2>
          <Link href="/contact" passHref>
            <button className="mt-6 rounded-md bg-background px-6 py-3 text-primary sm:text-lg">
              Let&apos;s Talk →
            </button>
          </Link>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return null; // Removing gradient elements that cause white spots
}
