"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-cyan-900 to-cyan-950">
      <div className="text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6">
          Welcome to Our Product Showcase
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}>
          <Link href="/products">
            <button className="px-6 py-3 bg-white text-black rounded-xl transition-transform hover:scale-105">
              Explore Products
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
