'use client';
import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-body scroll-pt-20 overflow-clip">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <motion.section 
            id="about" 
            className="py-12 sm:py-24 bg-transparent relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.section>
          <motion.section 
            id="skills" 
            className="py-24 md:py-32 bg-transparent relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Skills />
          </motion.section>
          <motion.section 
            id="projects" 
            className="py-24 md:py-32 px-4 sm:px-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Projects />
          </motion.section>
          <motion.section 
            id="contact" 
            className="relative py-24 md:py-32 px-4 sm:px-6 text-center bg-background"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
