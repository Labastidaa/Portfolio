"use client";
import { motion } from "framer-motion";
import React from "react";

const HandWave = () => {
  return (
    <>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 0.5, delay: 1.6, repeat: 2 }}
        className="pr-5 hover:text-current !text-white/100"
      >
        👋🏽
      </motion.div>
    </>
  );
};

export default HandWave;
