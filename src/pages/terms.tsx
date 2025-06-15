import Head from "next/head";
import Container from "@/components/Container";
import Link from "next/link";

export default function Terms() {
  return (
    <Container>
      <Head>
        <title>Terms of Service | Metaswap Labs</title>
      </Head>
      <main className="max-w-3xl mx-auto py-16 px-4 text-base text-gray-200">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          Welcome to Metaswap Labs. By accessing or using our services, you agree to these Terms of Service. Please read them carefully.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By using our platform, you agree to comply with and be bound by these Terms. If you do not agree, please do not use our services.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. Use of Service</h2>
        <p className="mb-4">
          You agree to use Metaswap Labs for lawful purposes only. You must not use our services for any illegal or unauthorized purpose, including but not limited to sending unsolicited messages or violating any laws in your jurisdiction.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. SMS and Email Campaigns</h2>
        <p className="mb-4">
          By using our SMS and email campaign features, you acknowledge and agree to the following:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>You have obtained all necessary consents from recipients before sending SMS or email communications.</li>
          <li>You will not send unsolicited messages (spam) via our platform.</li>
          <li>You are solely responsible for the content and recipients of your campaigns.</li>
          <li>You agree to comply with all applicable laws, including the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, GDPR, and other relevant regulations.</li>
          <li>You acknowledge that Twilio or other providers may suspend or terminate service for violations of their Acceptable Use Policy.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Collection and Use</h2>
        <p className="mb-4">
          Metaswap Labs reserves the right to collect and use all data generated through the platform for internal purposes, including analytics, service improvement, and security, while adhering to all relevant GDPR standards. We do not sell or share your personal data with third parties except as required by law or to provide our services.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          Metaswap Labs is not liable for any damages resulting from your use of our services, including but not limited to lost profits, loss of data, or service interruptions. You agree to indemnify and hold harmless Metaswap Labs, its affiliates, and service providers (including Twilio) from any claims arising from your use of the platform.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to update these Terms at any time. Continued use of the service constitutes acceptance of the new Terms.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:info@metaswap.xyz" className="text-blue-400 underline">info@metaswap.xyz</a>.</p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Back to Home</Link>
        </div>
      </main>
    </Container>
  );
}
