'use client';

import { motion } from 'framer-motion';

export function AnimatedHeader() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-licorice mb-6">
                Our <span className="text-brand-byzantineBlue">Blog</span>
            </h1>
            <p className="text-xl text-brand-licorice/80 max-w-2xl mx-auto">
                Insights, updates, and deep dives into AI-powered development and code review automation.
            </p>
        </motion.div>
    );
} 