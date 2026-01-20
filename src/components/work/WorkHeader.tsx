"use client";

import { motion } from "framer-motion";

interface WorkHeaderProps {
    title: string;
    textColor: string;
}

const WorkHeader = ({ title, textColor }: WorkHeaderProps) => {
    return (
        <motion.h1
            className="font-[poppins] text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <span className={textColor}>{title}</span>
        </motion.h1>
    );
};

export default WorkHeader;
