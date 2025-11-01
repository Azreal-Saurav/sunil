'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { LampContainer } from '@/components/ui/lamp';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LampContainer>
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="text-center px-4 pt-20 sm:pt-24"
            >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent">
                Hi, I'm Sunil
            </h1>
            <p className="text-md sm:text-lg text-slate-400 mb-8 max-w-2xl mx-auto">Fullstack • Backend • Web3 Developer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollTo('projects')}>
                View Work
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollTo('contact')} className="bg-transparent text-white hover:bg-white hover:text-black">
                Get In Touch
                </Button>
            </div>
        </motion.div>
    </LampContainer>
  );
}
