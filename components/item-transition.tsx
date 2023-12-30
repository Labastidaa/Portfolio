"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ItemTransition = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  return (
    <motion.div
      className="flex"
      initial={{ opacity: 0, x: 40 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: delay, duration: 1.5 },
      }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default ItemTransition;
