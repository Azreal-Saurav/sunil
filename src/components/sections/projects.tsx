'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import { TextRoll } from '@/components/ui/text-roll';

const projects = [
    {
      title: "DeFi Portfolio Tracker",
      description: "Full-stack Web3 app for tracking DeFi investments across protocols.",
      tech: ["React", "Node.js", "Web3.js", "PostgreSQL", "Ethereum"],
      github: "https://github.com", demo: "https://github.com",
      challenge: "Real-time data aggregation from multiple blockchain networks"
    },
    {
      title: "Microservices API Gateway",
      description: "Scalable gateway handling 10k+ req/min with rate limiting and auth.",
      tech: ["Node.js", "Express", "Redis", "Docker", "AWS"],
      github: "https://github.com", demo: "https://github.com",
      challenge: "Zero-downtime deployments and horizontal scaling"
    },
    {
      title: "Smart Contract Auditor",
      description: "Automated Solidity analyzer for vulnerabilities and gas optimization.",
      tech: ["Python", "Solidity", "Web3.py", "React", "FastAPI"],
      github: "https://github.com", demo: "https://github.com",
      challenge: "Static analysis of complex smart contract interactions"
    },
    {
      title: "Real-time Chat Platform",
      description: "Scalable WebSocket chat with encryption and file sharing.",
      tech: ["Socket.io", "React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com", demo: "https://github.com",
      challenge: "Handling concurrent connections and message delivery guarantees"
    },
  ];

const techColorMap: { [key: string]: string } = {
    React: 'text-blue-400 border-blue-400/50 bg-blue-950 hover:bg-blue-900',
    'Node.js': 'text-green-400 border-green-400/50 bg-green-950 hover:bg-green-900',
    'Next.js': 'text-neutral-300 border-neutral-300/50 bg-neutral-950 hover:bg-neutral-900',
    PostgreSQL: 'text-sky-400 border-sky-400/50 bg-sky-950 hover:bg-sky-900',
    MongoDB: 'text-emerald-400 border-emerald-400/50 bg-emerald-950 hover:bg-emerald-900',
    Docker: 'text-cyan-400 border-cyan-400/50 bg-cyan-950 hover:bg-cyan-900',
    Python: 'text-yellow-400 border-yellow-400/50 bg-yellow-950 hover:bg-yellow-900',
    Solidity: 'text-orange-400 border-orange-400/50 bg-orange-950 hover:bg-orange-900',
    AWS: 'text-amber-400 border-amber-400/50 bg-amber-950 hover:bg-amber-900',
    'Web3.js': 'text-indigo-400 border-indigo-400/50 bg-indigo-950 hover:bg-indigo-900',
    Ethereum: 'text-violet-400 border-violet-400/50 bg-violet-950 hover:bg-violet-900',
    Express: 'text-gray-400 border-gray-400/50 bg-gray-950 hover:bg-gray-900',
    Redis: 'text-red-400 border-red-400/50 bg-red-950 hover:bg-red-900',
    'Web3.py': 'text-blue-400 border-blue-400/50 bg-blue-950 hover:bg-blue-900',
    FastAPI: 'text-teal-400 border-teal-400/50 bg-teal-950 hover:bg-teal-900',
    'Socket.io': 'text-zinc-400 border-zinc-400/50 bg-zinc-950 hover:bg-zinc-900',
    JWT: 'text-pink-400 border-pink-400/50 bg-pink-950 hover:bg-pink-900',
};

export default function Projects() {
  return (
    <motion.section 
      id="projects" 
      className="py-12 sm:py-24 px-4 sm:px-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <TextRoll>Featured Projects</TextRoll>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="h-full"
            >
              <div className={cn("relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3")}>
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <Card className="flex flex-col h-full hover:border-primary/50 transition-colors duration-300 bg-card/50">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <CardTitle className="text-lg sm:text-xl">{p.title}</CardTitle>
                      <div className="flex gap-3 shrink-0">
                        <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} Github`} className="text-muted-foreground hover:text-foreground"><Github className="w-5 h-5" /></a>
                        <a href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`} className="text-muted-foreground hover:text-foreground"><ExternalLink className="w-5 h-5" /></a>
                      </div>
                    </div>
                    <CardDescription className="!mt-2 text-sm sm:text-base">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground italic mb-4"># {p.challenge}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(t => {
                        const colorClass = techColorMap[t] || 'border-border';
                        return (
                          <Badge key={t} variant="outline" className={`font-normal transition-colors ${colorClass}`}>
                            {t}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
