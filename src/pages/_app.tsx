import { type AppType } from "next/dist/shared/lib/utils";
import { useEffect, useState } from "react";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});

const GlassCursor = () => {
  useEffect(() => {
    // Check if device is not mobile/touch
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.matchMedia("(max-width: 768px)").matches;
    
    // Only add glass cursor on desktop devices
    if (!isMobile) {
      const cursor = document.createElement('div');
      cursor.classList.add('glass-cursor');
      document.body.appendChild(cursor);

      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };

      window.addEventListener('mousemove', moveCursor);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        if (cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
      };
    }
  }, []);

  return null;
};

const MyApp: AppType = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div lang={"en"} className={dmSans.className}>
      {mounted && <GlassCursor />}
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
