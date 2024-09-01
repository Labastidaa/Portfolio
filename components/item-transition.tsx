"use client";
import * as React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface ItemTransitionProps {
  children: React.ReactNode;
  delay: number;
  className?: string;
}

const ItemTransition: React.FC<ItemTransitionProps> = ({
  children,
  delay,
  className,
}) => {
  return (
    <motion.div
      className={classNames("flex", className)}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: delay, duration: 1 },
      }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.div>
  );
};

export default ItemTransition;
