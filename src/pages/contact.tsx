import Container from "@/components/Container";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, User, Mail, Rocket } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Container title="Contact">
      <section className="flex min-h-screen flex-col items-center justify-center py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl w-full glass rounded-3xl p-10 shadow-2xl border border-white/10 text-center"
        >
          <div className="flex justify-center mb-4">
            <Sparkles size={48} className="text-fuchsia-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
            Let’s Make Magic Happen
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            We don&apos;t do boring contact forms. Tell us what matters most and we&apos;ll help you build something extraordinary.
          </p>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center space-y-4"
            >
              <Rocket size={40} className="text-cyan-400 animate-bounce" />
              <div className="text-2xl font-semibold text-white">Thank you! We&apos;ll be in touch soon.</div>
            </motion.div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={e => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="name" className="font-semibold text-white flex items-center gap-2"><User size={18} /> Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Who are you?"
                  className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email" className="font-semibold text-white flex items-center gap-2"><Mail size={18} /> Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="How do we reach you?"
                  className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="problem" className="font-semibold text-white flex items-center gap-2"><MessageCircle size={18} /> What problem keeps you up at night?</label>
                <input
                  id="problem"
                  name="problem"
                  type="text"
                  required
                  placeholder="Describe your biggest challenge..."
                  className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="impact" className="font-semibold text-white flex items-center gap-2"><Sparkles size={18} /> How would automation change your business?</label>
                <textarea
                  id="impact"
                  name="impact"
                  rows={3}
                  required
                  placeholder="Dream big—what would you automate if there were no limits?"
                  className="rounded-xl px-4 py-3 bg-white/10 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-4 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-fuchsia-400/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
              >
                Send & Get Connected
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </Container>
  );
}

