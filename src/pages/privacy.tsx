import Head from "next/head";
import Container from "@/components/Container";
import Link from "next/link";

export default function Privacy() {
  return (
    <Container>
      <Head>
        <title>Privacy Policy | Metaswap Labs</title>
      </Head>
      <main className="max-w-3xl mx-auto py-16 px-4 text-base text-gray-200">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Metaswap Labs is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our services.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information (name, email, phone number) provided by you.</li>
          <li>Data generated from your use of our platform, including campaign content, recipient data, and analytics.</li>
          <li>Technical data such as IP address, browser information, and usage logs.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To provide and improve our services.</li>
          <li>To communicate with you about your account or service updates.</li>
          <li>For internal analytics, security, and compliance with legal obligations.</li>
          <li>To ensure compliance with Twilio and other communication providers’ policies.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Sharing and Disclosure</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>We do not sell your personal data to third parties.</li>
          <li>We may share data with service providers (such as Twilio) as needed to deliver our services.</li>
          <li>We may disclose information as required by law or to protect our rights and users.</li>
        </ul>
        <h2 className="text-xl font-semibold mt-8 mb-2">4. Consent and User Rights</h2>
        <p className="mb-4">
          By using our platform, you consent to the collection and use of your data as described in this policy. You have the right to access, correct, or delete your data, and to withdraw consent at any time, in accordance with GDPR and other applicable laws.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your information. However, no system can be 100% secure, and you use the service at your own risk.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Retention</h2>
        <p className="mb-4">
          We retain your data only as long as necessary to provide our services and fulfill legal obligations. You may request deletion of your data at any time.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to this Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Continued use of our services constitutes acceptance of any changes.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact</h2>
        <p>If you have questions about this Privacy Policy or your data, please contact us at <a href="mailto:info@metaswap.xyz" className="text-blue-400 underline">support@metaswap.xyz</a>.</p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-md hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Back to Home</Link>
        </div>
      </main>
    </Container>
  );
}
