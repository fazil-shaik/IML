"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, MessageSquare, Shield } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            IML Chat
          </motion.div>
          <Link
            href="/auth"
            className="px-6 py-2 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 py-20 text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Your AI-Powered
            <br />
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Chat Assistant
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience seamless conversations with cutting-edge AI. Fast, secure, and
            designed for your needs.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/auth"
              className="px-8 py-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              Start Chatting <ArrowRight size={20} />
            </Link>
            <button className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-gray-900 transition">
              Learn More
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Instant responses powered by advanced AI models",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description: "Your conversations are encrypted and protected",
              },
              {
                icon: MessageSquare,
                title: "Always Available",
                description: "Chat anytime, anywhere with our cloud service",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-cyan-400 transition group cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="text-center py-8 border-t border-white/10"
        >
          <p className="text-gray-400">
            Ready to experience the future of conversation? Join us today.
          </p>
        </motion.div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
