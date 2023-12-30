"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center space-x-10 justify-center">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Link href={"https://github.com/Labastidaa"}>
          <FaGithub className="w-[4rem] h-[4rem]" />
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <Link href={"https://www.linkedin.com/in/geolavz/"}>
          <FaLinkedin className="w-[4rem] h-[4rem]" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;
