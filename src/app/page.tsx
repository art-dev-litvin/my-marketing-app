"use client";

import Button from "@app/components/Button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center">
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
          <Button href="/products">Explore Products</Button>
        </motion.div>
      </div>
    </div>
  );
}
