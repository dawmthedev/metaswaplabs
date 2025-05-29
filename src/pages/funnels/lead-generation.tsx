import Container from "@/components/Container";
import Link from "next/link";

export default function LeadGeneration() {
  return (
    <Container title="Lead Generation Automation">
      <section className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tighter">Turn Inbound Leads Into Customers Automatically</h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Sync leads to your CRM and trigger follow-ups without lifting a finger.
        </p>
        <Link href="https://calendly.com/metaswapllc/30min" passHref className="rounded-md bg-primary px-6 py-3 text-primary-foreground">
          Get Automated
        </Link>
      </section>
    </Container>
  );
}
