import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

// --- Interfaces ---
interface HoverVideoItem {
  title: string;
  videoSrc: string;
}

interface HoverVideosProps {
  items: HoverVideoItem[];
}

interface CustomCursorProps {
  position: { x: number; y: number };
  isVisible: boolean;
  isHovering: boolean;
  videoSrc: string | null;
}

// --- CustomCursor Component ---
const CustomCursor: React.FC<CustomCursorProps> = ({
  position,
  isVisible,
  isHovering,
  videoSrc,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoSrc) {
      const absoluteVideoSrc = videoSrc.startsWith("/")
        ? window.location.origin + videoSrc
        : videoSrc;
      if (videoRef.current.src !== absoluteVideoSrc) {
        videoRef.current.src = absoluteVideoSrc;
        videoRef.current.load();
        videoRef.current
          .play()
          .catch((error) => console.error("Cursor video play failed:", error));
      }
    }
  }, [videoSrc]);

  return (
    <motion.div
      className="pointer-events-none fixed z-[1000] h-32 w-48 overflow-hidden rounded-lg bg-black shadow-xl"
      style={{ left: 0, top: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHovering ? 1 : 0.8,
        x: position.x - 96,
        y: position.y - 64,
      }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
    >
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      )}
    </motion.div>
  );
};

// --- HoverVideos Component ---
const HoverVideos: React.FC<HoverVideosProps> = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseInSection, setIsMouseInSection] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isSmallScreen || isTouchDevice);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (items?.length) {
      const webExpIndex = items.findIndex((item) =>
        item.title.toLowerCase().includes("web experiment"),
      );
      const initialIndex =
        webExpIndex !== -1 ? Math.max(0, webExpIndex - 3) : 0;
      setHoveredIndex(isMobile ? initialIndex : null);
    }
  }, [items, isMobile]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0],
  );
  const y = useTransform(scrollYProgress, [0.4, 1], ["0%", "-100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) {
      const newIndex = Math.min(
        items.length - 1,
        Math.floor(latest * items.length),
      );
      setHoveredIndex(newIndex);
    }
  });

  const currentVideoSrc = items?.[hoveredIndex ?? -1]?.videoSrc ?? null;

  useEffect(() => {
    if (isMobile && mobileVideoRef.current && currentVideoSrc) {
      const newSrc = currentVideoSrc;
      if (mobileVideoRef.current.src !== window.location.origin + newSrc) {
        mobileVideoRef.current.src = newSrc;
        mobileVideoRef.current.load();
        mobileVideoRef.current
          .play()
          .catch((error) => console.error("Mobile video play failed:", error));
      }
    }
  }, [currentVideoSrc, isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onMouseEnter={!isMobile ? () => setIsMouseInSection(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsMouseInSection(false) : undefined}
      className={`relative py-20 ${isMouseInSection && !isMobile ? "cursor-none" : ""}`}
    >
      {!isMobile && (
        <CustomCursor
          position={position}
          isVisible={isMouseInSection}
          isHovering={hoveredIndex !== null}
          videoSrc={currentVideoSrc}
        />
      )}

      {isMobile ? (
        <div className="grid grid-cols-1">
          {/* Text content - scrolls normally */}
          <div className="z-10 col-start-1 row-start-1 mx-auto max-w-7xl px-6 pb-[100vh]">
            <h2 className="text-3xl font-bold">Our services</h2>
            <ul className="mt-12 space-y-14">
              {items.map((item) => (
                <li key={item.title}>
                  <h3 className="text-4xl font-extrabold">{item.title}</h3>
                </li>
              ))}
            </ul>
          </div>

          {/* Video container - layered on top and sticks to the screen */}
          <div className="z-20 col-start-1 row-start-1 flex h-full items-start justify-center">
            <div className="sticky top-1/4">
              <motion.div
                className="h-[200px] w-[300px] overflow-hidden rounded-lg bg-black shadow-xl"
                style={{ y, opacity }}
              >
                <video
                  ref={mobileVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop layout */
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h2 className="text-5xl font-bold">Our services</h2>
          <ul className="mt-12 space-y-14">
            {items.map((item, index) => (
              <li key={item.title}>
                <h3
                  className="cursor-pointer text-6xl font-extrabold transition-colors duration-300 hover:scale-105 hover:text-yellow-300 "
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default HoverVideos;
