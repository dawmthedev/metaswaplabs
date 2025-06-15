import Head from "next/head";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const automationStats = [
  { name: "Saved Hours", value: 40 },
  { name: "Faster Response", value: 70 },
  { name: "Cost Reduction", value: 35 },
  { name: "Error Reduction", value: 60 },
];

export default function Benefits() {
  return (
    <Container>
      <Head>
        <title>Benefits of Automation | Vybs</title>
      </Head>
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
            Why Automate?
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
            Discover the real-world impact of automation on modern businesses. Save time, cut costs, and boost growth—instantly.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-2xl bg-gradient-to-br from-blue-900/80 via-fuchsia-700/70 to-cyan-700/80 glass p-8 rounded-3xl shadow-2xl border border-white/10 mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">
            Automation by the Numbers
          </h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={automationStats}>
                <XAxis dataKey="name" stroke="#fff" tick={{ fill: '#fff', fontWeight: 'bold' }} />
                <YAxis stroke="#fff" tick={{ fill: '#fff', fontWeight: 'bold' }} />
                <Tooltip contentStyle={{ background: '#222', borderRadius: '8px', color: '#fff' }} />
                <Bar dataKey="value" fill="url(#barGradient)" radius={[12, 12, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#a21caf" />
                    <stop offset="50%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-fuchsia-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Key Benefits
          </h2>
          <ul className="space-y-4 text-lg text-gray-100 text-left">
            <li><span className="font-bold text-cyan-400">Save Time:</span> Automate repetitive tasks and focus on what matters most.</li>
            <li><span className="font-bold text-fuchsia-400">Reduce Costs:</span> Lower operational expenses and boost your bottom line.</li>
            <li><span className="font-bold text-blue-400">Improve Accuracy:</span> Minimize human error and ensure consistent results.</li>
            <li><span className="font-bold text-fuchsia-400">Scale Faster:</span> Grow your business without growing your workload.</li>
          </ul>
        </motion.div>
      </section>
    </Container>
  );
}
