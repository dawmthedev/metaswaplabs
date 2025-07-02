import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/start", label: "How we work" },
  { href: "/benefits", label: "Benefits" },
  { href: "/why-us", label: "Why Us" },
];

// NavItem component for individual navigation links
const NavItem = ({ 
  href, 
  label, 
  isActive, 
  onClick,
  className = "" 
}: { 
  href: string; 
  label: string; 
  isActive: boolean; 
  onClick: () => void;
  className?: string;
}) => {
  // Handle multi-word labels that need to be kept on a single line
  const formattedLabel = label === "How It Works" ? "How It\u00A0Works" : label;
  
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={`relative whitespace-nowrap px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 ${
          isActive ? "text-white" : "text-gray-300 hover:text-white"
        } ${className}`}
        aria-current={isActive ? "page" : undefined}
      >
        {formattedLabel}
        <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 transform bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
}

// Logo component
const Logo = ({ onClick }: { onClick: () => void }) => (
  <Link
    href="/"
    onClick={onClick}
    className="flex items-center gap-2 focus:outline-none focus-visible:ring-2"
  >
    <div className="rounded-full p-1 transition-opacity hover:opacity-90">
      <Image
        src="/assets/logo/logo.png"
        alt="Metaswap Labs"
        width={24}
        height={24}
      />
    </div>
    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-base font-bold text-transparent">
      Metaswap Labs
    </span>
  </Link>
);

// Desktop navigation component
const DesktopNav = ({ 
  links, 
  currentPath,
  onNavigate 
}: { 
  links: NavLink[]; 
  currentPath: string;
  onNavigate: () => void;
}) => (
  <nav className="hidden items-center space-x-4 lg:flex">
    <ul className="flex items-center space-x-2">
      {links.map((link) => (
        <NavItem
          key={link.href}
          href={link.href}
          label={link.label}
          isActive={currentPath === link.href}
          onClick={onNavigate}
        />
      ))}
 
    </ul>
    <div className="ml-4">
      <Link
        href="/contact"
        className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide shadow-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
      >
        Get Started
        <ChevronRight className="ml-1 h-3 w-3" />
      </Link>
    </div>
  </nav>
);

// Mobile menu component
const MobileMenu = ({ 
  isOpen, 
  links, 
  currentPath, 
  onClose 
}: { 
  isOpen: boolean; 
  links: NavLink[]; 
  currentPath: string;
  onClose: () => void;
}) => {
  const reduceMotion = useReducedMotion();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.aside
        initial={reduceMotion ? { opacity: 1 } : { x: "100%" }}
        animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed inset-0 z-40 flex lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-3/4 max-w-sm overflow-y-auto bg-gray-900 p-6 backdrop-blur-md">
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute right-4 top-4 rounded-md p-2 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <X className="h-6 w-6 text-gray-300" />
          </button>
          
          <nav className="mt-6">
            <ul className="space-y-4">
              {links.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={currentPath === link.href}
                  onClick={onClose}
                  className="block text-lg"
                />
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-4 border-t border-gray-800 pt-6">

            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide shadow-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
              onClick={onClose}
            >
              Get Started
              <ChevronRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div 
          className="flex-1 bg-black bg-opacity-50" 
          onClick={onClose}
        />
      </motion.aside>
    </AnimatePresence>
  );
};

// Mobile menu toggle button
const MobileMenuToggle = ({ 
  isOpen, 
  onClick 
}: { 
  isOpen: boolean; 
  onClick: () => void;
}) => (
  <button
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
    onClick={onClick}
    className="rounded-lg p-2 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 lg:hidden"
  >
    {isOpen ? (
      <X className="h-6 w-6 text-gray-300" />
    ) : (
      <Menu className="h-6 w-6 text-gray-300" />
    )}
  </button>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Apply background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    const onRouteChange = () => setIsMenuOpen(false);
    router.events.on("routeChangeStart", onRouteChange);
    return () => router.events.off("routeChangeStart", onRouteChange);
  }, [router.events]);

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        aria-label="Main navigation"
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass py-2 bg-blue-600/15"
            : "bg-transparent py-3"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          <Logo onClick={handleNavigate} />
          
          <DesktopNav 
            links={NAV_LINKS} 
            currentPath={router.pathname} 
            onNavigate={handleNavigate}
          />
          
          <MobileMenuToggle 
            isOpen={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </header>

      <MobileMenu 
        isOpen={isMenuOpen} 
        links={NAV_LINKS} 
        currentPath={router.pathname}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
