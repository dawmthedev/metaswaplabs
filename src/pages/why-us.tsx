import Head from "next/head";
import { motion } from "framer-motion";
import { Brain, Zap, Award, Users, ShieldCheck, Rocket } from "lucide-react";
import Container from "@/components/Container";

export default function WhyUs() {
  return (
    <Container>
      <Head>
        <title>Why Us | Vybs</title>
        <meta name="description" content="Why choose Metaswap Labs: Decades of automation, AI, and business process expertise." />
      </Head>
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
            Why Choose <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-700 bg-clip-text text-transparent">Metaswap Labs?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
We don&apos;t just automate—we transform businesses. Our team brings decades of hands-on experience in automation, artificial intelligence, and enterprise systems, delivering real results for companies of all sizes.
          </p>
        </motion.div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-900/70 via-fuchsia-800/60 to-cyan-800/70 glass p-8 rounded-2xl border border-white/10 shadow-xl">
            <Brain size={48} className="text-fuchsia-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI & Automation Pioneers</h3>
            <p className="text-gray-200">Over 15 years building, deploying, and scaling automation and AI solutions—from SMBs to Fortune 500s.</p>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-900/70 via-fuchsia-800/60 to-cyan-800/70 glass p-8 rounded-2xl border border-white/10 shadow-xl">
            <Award size={48} className="text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-gray-200">Millions in cost savings, thousands of hours saved, and measurable growth for our clients—backed by real case studies.</p>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-900/70 via-fuchsia-800/60 to-cyan-800/70 glass p-8 rounded-2xl border border-white/10 shadow-xl">
            <Users size={48} className="text-cyan-300 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Human-Centric Approach</h3>
            <p className="text-gray-200">We design automations that empower your team, not replace them—making tech accessible, intuitive, and scalable.</p>
          </div>
        </motion.div>

        {/* Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            What Sets Us Apart
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-100 text-left">
            <li className="flex items-start gap-4"><Zap className="mt-1 text-fuchsia-400" /> <span><b>Speed to Value:</b> Launch automations in days, not months.</span></li>
            <li className="flex items-start gap-4"><ShieldCheck className="mt-1 text-blue-400" /> <span><b>Security & Compliance:</b> Enterprise-grade security and privacy baked in.</span></li>
            <li className="flex items-start gap-4"><Rocket className="mt-1 text-cyan-400" /> <span><b>Future-Proof Tech:</b> We leverage the latest in AI, machine learning, and cloud to keep you ahead.</span></li>
            <li className="flex items-start gap-4"><Award className="mt-1 text-fuchsia-400" /> <span><b>Trusted by Industry Leaders:</b> Our solutions power fast-growing startups and established enterprises alike.</span></li>
          </ul>
        </motion.div>
      </section>
    </Container>
  );
}
