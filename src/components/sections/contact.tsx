'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ButtonHoldAndRelease } from '@/components/ui/hold-and-release-button';
import { TextRoll } from '@/components/ui/text-roll';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const contactLinks = [
  {
    icon: Mail,
    text: "sunil@gmail.com",
    href: "mailto:sunil@gmail.com",
  },
  {
    icon: Github,
    text: "github.com",
    href: "https://github.com",
  },
  {
    icon: Linkedin,
    text: "LinkedIn",
    href: "https://linkedin.com/in/sunil",
  },
];

export default function Contact() {

  const handleRelease = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.section 
      id="contact" 
      className="relative py-12 sm:py-24 px-4 sm:px-6 text-center bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.1}
          movementDuration={1.5}
          borderWidth={1}
          blur={60}
          className="absolute inset-0"
        />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          <TextRoll>Let's Connect</TextRoll>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-12 max-w-xl mx-auto text-base sm:text-lg"
        >
          I'm currently open to new opportunities. Feel free to reach out if you want to collaborate on a project or just say hi!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
        >
          {contactLinks.map((link) => (
            <ButtonHoldAndRelease
              key={link.href}
              actionOnRelease={() => handleRelease(link.href)}
              className="w-full sm:w-auto"
            >
                <link.icon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {link.text}
            </ButtonHoldAndRelease>))}
        </motion.div>
      </div>
    </motion.section>
  );
}
