import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background/80 backdrop-blur-sm border-t border-white/10 py-10 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/terms" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">Terms of Service</Link>
          <Link href="/privacy" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">Privacy Policy</Link>
          <Link href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">Help Center</Link>
          <Link href="contact" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">Get started</Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded">LinkedIn</Link>
        </div>
        <span className="text-xs text-gray-400">© {new Date().getFullYear()} Metaswap Labs. All rights reserved.</span>
      </div>
    </footer>
  );
}
