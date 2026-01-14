'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (

        <AnimatePresence mode="wait">
            {children && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                    style={{
                        willChange: 'opacity', // Keep only opacity hint to avoid creating stacking context
                    }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}