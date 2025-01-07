'use client';

import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export function AnimatedContainer({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {children}
        </motion.div>
    );
} 