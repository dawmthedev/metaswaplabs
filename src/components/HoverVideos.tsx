import { useState, useEffect, useRef, useLayoutEffect } from "react";
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

  // Adjust these values to control when the video fades in/out
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.02, 0.98, 1],
    [1, 1, 1, 0], // Start fully visible, fade out only at the very end
  );

  // Smoother parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // Track the last video index to detect changes
  const lastVideoIndex = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile && items?.length) {
      const totalItems = items.length;
      const newIndex = Math.min(
        totalItems - 1,
        Math.max(0, Math.floor(latest * totalItems * 1.1)), // Slight adjustment for better timing
      );

      // Only update if index changes and not currently animating
      if (newIndex !== hoveredIndex && !isAnimating) {
        setHoveredIndex(newIndex);

        // Trigger animation
        if (
          lastVideoIndex.current !== null &&
          lastVideoIndex.current !== newIndex
        ) {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 300); // Match this with your CSS transition
        }
        lastVideoIndex.current = newIndex;
      }
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
        <MobileParallaxVideos items={items} />
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

// --- MobileParallaxVideos Component ---
import { AnimatePresence } from "framer-motion";

const MobileParallaxVideos: React.FC<HoverVideosProps> = ({ items }) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [sectionInView, setSectionInView] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure sectionInView is true on initial render
  useEffect(() => {
    setSectionInView(true);

    // Force check viewport on load
    setTimeout(() => {
      checkViewport();
      setInitialLoad(false);
    }, 100);

    // Force another check after images might have loaded
    setTimeout(checkViewport, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load videos eagerly before component fully mounts
  useEffect(() => {
    if (!items?.length) return;

    // Set initial video as loaded to avoid yellow placeholder
    setVideoLoaded(true);

    // Start with first item and aggressively preload
    if (items[0]?.videoSrc) {
      const firstVideo = new Image();
      firstVideo.src = items[0].videoSrc.startsWith("/")
        ? window.location.origin + items[0].videoSrc
        : items[0].videoSrc;

      setFocusedIndex(0);
      preloadVideos(); // Preload all videos

      // Force immediate video loading
      setTimeout(() => {
        if (items[0]?.videoSrc) loadAndPlayVideo(items[0].videoSrc, true);
      }, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load and play the video whenever the focused index changes
  useEffect(() => {
    if (items?.[focusedIndex]?.videoSrc) {
      loadAndPlayVideo(items[focusedIndex].videoSrc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedIndex, items]);

  // Preload all videos for smoother transitions
  const preloadVideos = () => {
    if (!items) return;
    items.forEach((item) => {
      if (!item.videoSrc) return;
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.as = "video";
      preloadLink.href = item.videoSrc.startsWith("/")
        ? window.location.origin + item.videoSrc
        : item.videoSrc;
      document.head.appendChild(preloadLink);
    });
  };

  // Helper function to load and play videos
  const loadAndPlayVideo = (videoSrc: string, skipLoadedReset = false) => {
    if (!videoRef.current) return;

    // Optionally skip setting loaded to false (for initial load)
    if (!skipLoadedReset) {
      setVideoLoaded(false);
    }

    // Ensure absolute path
    const absoluteVideoSrc = videoSrc.startsWith("/")
      ? window.location.origin + videoSrc
      : videoSrc;

    // Create and load the video first to check if it's ready
    const tempVideo = document.createElement("video");
    tempVideo.muted = true;
    tempVideo.src = absoluteVideoSrc;
    tempVideo.onloadeddata = () => {
      if (videoRef.current) {
        videoRef.current.src = absoluteVideoSrc;
        videoRef.current.load();
        videoRef.current
          .play()
          .catch((error) => console.error("Mobile video play failed:", error));
      }
    };
    tempVideo.load();
  };

  // Helper function to check if section is in viewport
  const checkViewport = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    setSectionInView(rect.top < viewportCenter && rect.bottom > viewportCenter);
  };

  // Scroll tracking: update focusedIndex to the item closest to the center of viewport
  useLayoutEffect(() => {
    if (!items.length) return;

    const onScroll = () => {
      if (!sectionRef.current) return;
      checkViewport(); // Use the extracted function

      // Find closest item
      let minDist = Infinity;
      let closest = 0;
      itemRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const itemCenter = (rect.top + rect.bottom) / 2;
        const dist = Math.abs(itemCenter - window.innerHeight / 2);
        if (dist < minDist) {
          minDist = dist;
          closest = idx;
        }
      });

      setFocusedIndex(closest);
    };

    // Run immediately (important for first load)
    onScroll();

    // Then attach the scroll listener
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Also trigger when images might have affected layout
    window.addEventListener("load", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, [items.length]);

  return (
    <div ref={sectionRef} className="relative grid grid-cols-1">
      {/* Text content - scrolls normally */}
      <div className="z-10 col-start-1 row-start-1 mx-auto max-w-7xl px-6 pb-[100vh]">
        <h2 className="text-3xl font-bold">Our services</h2>
        <ul className="mt-12 space-y-14">
          {items.map((item, idx) => (
            <li
              key={item.title}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className="transition-colors duration-300"
            >
              <h3 className="text-4xl font-extrabold">{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
      {/* Sticky, centered video parallax */}
      <AnimatePresence mode="wait">
        {(sectionInView || initialLoad) && (
          <div className="pointer-events-none fixed inset-0 z-20 flex items-center justify-center">
            <div className="relative h-[200px] w-[300px]">
              <motion.div
                key={focusedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.08, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="h-full w-full overflow-hidden rounded-lg bg-yellow-400 shadow-xl"
                style={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  backgroundColor: "transparent", // Always transparent to avoid yellow flash
                }}
              >
                {/* Use videoRef to control the video directly through useEffect */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="eager"
                  className="h-full w-full object-cover"
                  onLoadedData={() => setVideoLoaded(true)}
                  style={{ opacity: 1 }} // Always visible
                />
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverVideos;
