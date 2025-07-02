'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const images = [
  { src: '/demos/demo0.png', alt: 'Demo Image 1' },
  { src: '/demos/demo1.png', alt: 'Demo Image 2' },
  { src: '/demos/demo2.png', alt: 'Demo Image 3' },
  { src: '/demos/demo3.png', alt: 'Demo Image 4' },
  { src: '/demos/demo4.png', alt: 'Demo Image 5' },
  { src: '/demos/demo5.png', alt: 'Demo Image 6' },
];

const repeatedImages = [...images, ...images]; // Double is enough for smooth looping

const Demos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollPositionRef = useRef(0);
  const animationFrameId = useRef<number>();
  const isScrollingRef = useRef(false);

  // --- Mobile detection logic ---
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 1;
    let lastTimestamp = performance.now();

    const scroll = (timestamp: number) => {
      if (!container) return;
      
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Only auto-scroll on mobile or when hovered on desktop
      if (isMobile || isHovered) {
        scrollPositionRef.current += (speed * deltaTime) / 16; // Normalize speed by frame time
        
        // Handle infinite scroll
        const maxScroll = container.scrollWidth / 2; // Since we duplicate the images
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        container.scrollLeft = scrollPositionRef.current;
      } else if (!isScrollingRef.current) {
        // Only update scroll position if user isn't manually scrolling
        scrollPositionRef.current = container.scrollLeft;
      }
      
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (!container) return;
      isScrollingRef.current = true;
      scrollPositionRef.current = container.scrollLeft;
      
      // Reset the scrolling flag after a short delay
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 100);
    };

    // Start the animation
    animationFrameId.current = requestAnimationFrame(scroll);
    container.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      container.removeEventListener('scroll', handleScroll);
    };
  }, [isHovered, isMobile]);

  // --- Carousel markup ---
  return (
    <div className="relative w-full select-none overflow-hidden bg-black w-[100vw]  ">
      {/* Carousel section */}
      <div 
        className="w-[100vw] relative left-[50%] right-[50%] mx-[-50vw] overflow-hidden"  
        style={{ marginBottom: '2rem' }}
      >
        <div
          ref={containerRef}
          className="w-full overflow-x-auto no-scrollbar flex items-center justify-start pl-8 pr-[100vw] py-12"
          style={{
            position: 'relative',
            zIndex: 10,
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%)',
          }}
          onMouseEnter={() => {
            if (!isMobile) {
              setIsHovered(true);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              setIsHovered(false);
            }
          }}
          onTouchStart={() => isMobile && setIsHovered(true)}
          onTouchEnd={() => isMobile && setIsHovered(false)}
        >
          {repeatedImages.map((img, index) => (
            <motion.div
              key={`${img.src}-${index}`}
              className="relative flex-shrink-0 mx-[15px] w-[420px] h-[320px] md:w-[400px] md:h-[260px]"
              style={{ 
                zIndex: images.length - (index % images.length)
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Pill-shaped image container */}
              <div className="relative w-full h-full overflow-hidden z-10 border-2 border-blue-500" style={{ borderRadius: '180px' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority={index < 6} // Prioritize loading of all visible images
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Text content section with fade transition */}
      <div className="relative max-w-6xl mx-auto px-4 text-center mb-16">
        {/* Top fade effect */}
        <div className="absolute top-[-100px] left-0 right-0 h-[100px] bg-gradient-to-b from-transparent to-black"></div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Growth-Driven Web & App Development</h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Metaswap Labs, a premier web and mobile app development agency with experience across 29 countries. 
          Our designers and developers create exceptional digital experiences that drive business growth, 
          backed by a maintenance-free guarantee.
        </p>
        
        <Link href="/contact">
          <div className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-full inline-block transition-all text-lg">
            Get in touch
          </div>
        </Link>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Demos;