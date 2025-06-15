import Head from "next/head";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { Plug, LayoutGrid, Rocket } from "lucide-react";

export default function HowItWorks() {
  return (
    <Container>
      <Head>
        <title>How It Works | Vybs</title>
      </Head>
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
  Grow Your Business on Autopilot—With <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">Vybs</span>
</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
            With <span className="font-bold text-fuchsia-400">Vybs</span>, marketing automation is no longer a hassle. It’s simple, visual, and completely aligned with your brand—right out of the box.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-4xl bg-gradient-to-br from-blue-900/80 via-fuchsia-700/70 to-cyan-700/80 glass p-10 rounded-3xl shadow-2xl border border-white/10 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            How Vybs Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-tr from-fuchsia-500 to-blue-500 rounded-full p-4 mb-4 shadow-xl">
                <Plug size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">1. Plug In</h3>
              <p className="text-gray-200">Connect your favorite tools and channels with just a few clicks. No setup stress. No dev team required.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-tr from-blue-400 to-fuchsia-400 rounded-full p-4 mb-4 shadow-xl">
                <LayoutGrid size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">2. Pick a Vyb</h3>
              <p className="text-gray-200">Choose from a library of high-impact automations built to boost engagement, reach, and growth.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full p-4 mb-4 shadow-xl">
                <Rocket size={48} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">3. Launch & Go</h3>
              <p className="text-gray-200">Go live in minutes. Watch your content, workflows, and growth run on autopilot—with your brand front and center.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Why Vybs?
          </h2>
          <ul className="space-y-4 text-lg text-gray-100">
            <li><span className="font-bold text-fuchsia-400">All Yours:</span> Vybs is fully white-labeled—your brand, your voice, your vision.</li>
            <li><span className="font-bold text-cyan-400">Fast to Deploy:</span> Launch automations in minutes, not months.</li>
            <li><span className="font-bold text-blue-400">No-Code Simplicity:</span> Anyone on your team can build and manage workflows.</li>
            <li><span className="font-bold text-fuchsia-400">Private by Default:</span> Built for boutique agencies, studios, and creators who value exclusivity.</li>
            <li><span className="font-bold text-cyan-400">Effortlessly Scalable:</span> From one campaign to one hundred, Vybs grows with you.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-fuchsia-600 via-blue-600 to-cyan-400 p-1">
            <div className="glass rounded-2xl px-10 py-8 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                Ready to See Vybs in Action?
              </h3>
              <p className="mb-6 text-gray-200">Book a private walkthrough and discover how your brand can scale smarter.</p>
              <a
                href="https://calendly.com/metaswapllc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-400 px-8 py-4 text-lg font-bold text-white shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}
