import Container from "@/components/Container";
import Link from "next/link";

export default function TikTokGrowth() {
  return (
    <Container title="TikTok Automation">
      <section className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tighter">Automate Your TikTok Growth</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Capture every comment and engage your audience automatically.
        </p>
        <Link href="/contact" passHref className="rounded-md bg-primary px-6 py-3 text-primary-foreground">
          Get Automated
        </Link>
      </section>
    </Container>
  );
}
