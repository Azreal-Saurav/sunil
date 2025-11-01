'use client';

import { TextRoll } from "@/components/ui/text-roll";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-12 sm:py-24 bg-transparent relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <TextRoll>About Me</TextRoll>
        </h2>

        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="w-full max-w-2xl flex flex-col justify-center h-full space-y-6">
            
            <div className="text-muted-foreground space-y-4 text-base p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
              <p className="text-lg text-card-foreground">
                I build scalable backend systems and innovative Web3 applications.
              </p>
              <p>
                My expertise lies in crafting high-performance APIs and architecting decentralized protocols. Currently, I'm diving deep into L2 scaling solutions and exploring the potential of modular smart contracts.
              </p>
            </div>

            <div className="font-mono text-sm shadow-lg backdrop-blur-sm bg-card/50 border border-border p-6 rounded-lg">
              <pre className="text-muted-foreground"><code>
                <span className="text-purple-400">const</span> developer = &#123;
                <br />
                {'  '}name: <span className="text-accent-foreground">'Sunil'</span>,
                <br />
                {'  '}focus: <span className="text-green-400">'Backend + Web3'</span>,
                <br />
                {'  '}passion: <span className="text-primary">'Clean Code'</span>
                <br />
                &#125;;
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
