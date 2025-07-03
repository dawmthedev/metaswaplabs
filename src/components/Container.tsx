import Head from "next/head";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";

// Type definitions removed as they're not used

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  className?: string;
};



// Scroll functionality moved to individual components



export default function Container(props: ContainerProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInitialPageLoad, setIsInitialPageLoad] = useState<boolean>(true);
  const router = useRouter();
  const isIndexPage = router.pathname === "/";
  
  const { children, ...customMeta } = props;
  const meta = {
    title: "Metaswap Labs",
    description: `Premium AI automation & integration platform.`,
    image: "/assets/logo/logomain.svg",
    type: "website",
    ...customMeta,
  };

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      // Scroll handling logic if needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check for initial page load
  useEffect(() => {
    const handleRouteChange = () => {
      // Mark that the initial page load is done when navigating
      setIsInitialPageLoad(false);
    };

    // Set up router event listeners
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  // Preloader effect
  useEffect(() => {
    // Different loading time depending on if it's the index page
    const loadingTime = isIndexPage && isInitialPageLoad ? 2000 : 800;
    
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, loadingTime);
  }, [isIndexPage, isInitialPageLoad]);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#7B82FE" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.metaswaplabs.com`} />
        <link rel="canonical" href={`https://www.metaswaplabs.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Metaswap Labs" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Metaswap Labs" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>
      <Navbar />
      {/* Preloader - Show original preloader only on index page initial load */}
      <AnimatePresence mode="wait">
        {isLoading && (
          isIndexPage && isInitialPageLoad ? (
            <Preloader />
          ) : (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-8 w-8 border-2 border-t-transparent border-white animate-spin rounded-full" />
              </motion.div>
            </motion.div>
          )
        )}
      </AnimatePresence>
      {/* Main content */}
      <main className={cn("w-full", props.className)}>
        {children}
      </main>
      {/* Full width content */}
      <Footer />
    </>
  );
}


