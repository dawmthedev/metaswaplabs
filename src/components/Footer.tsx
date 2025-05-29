import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background py-12 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="flex flex-wrap justify-center gap-6">
          <span>Workflows (Coming Soon)</span>
          <Link href="#" className="hover:underline">
            Help Center
          </Link>
          <Link href="https://calendly.com/metaswapllc/30min" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Request Demo
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </Link>
        </div>
        <span>© {new Date().getFullYear()} Metaswap Labs</span>
      </div>
    </footer>
  );
}
