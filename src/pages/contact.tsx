import Container from "@/components/Container";

export default function Contact() {
  return (
    <Container title="Contact">
      <section className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tighter">
          Get in Touch
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Reach out to our team for any questions or inquiries.
        </p>
      </section>
    </Container>
  );
}
