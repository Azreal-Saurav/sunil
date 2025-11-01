'use client';

import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="py-8 px-4 sm:px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className={cn("relative max-w-7xl mx-auto rounded-xl border border-border/20 p-2")}>
         <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.1}
          movementDuration={1.5}
          borderWidth={1}
          blur={60}
        />
        <div className="relative text-center text-muted-foreground text-sm bg-card/50 backdrop-blur-sm p-6 rounded-lg">
           <p>© {new Date().getFullYear()} Sunil • Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </motion.footer>
  );
}
