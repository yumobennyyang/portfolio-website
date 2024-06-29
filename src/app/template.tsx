'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (

        <AnimatePresence mode="wait">
            {children && (
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 0, opacity: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1 }}

                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}