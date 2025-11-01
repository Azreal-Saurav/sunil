'use client';

import { motion } from 'framer-motion';
import { FeatureCarousel, type Step } from '@/components/ui/animated-feature-carousel';
import { CheckCircle2 } from 'lucide-react';
import { TextRoll } from '@/components/ui/text-roll';

const skillsData = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Docker", "Redis"],
  Tools: ["Git", "AWS", "Vercel", "Prisma", "GraphQL", "Jest"],
};

const SkillList = ({ skills }: { skills: string[] }) => (
  <ul className="space-y-3 columns-2">
    {skills.map(skill => (
      <li key={skill} className="flex items-center gap-3">
        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
        <span className="text-foreground/90">{skill}</span>
      </li>
    ))}
  </ul>
);

const steps: Step[] = Object.entries(skillsData).map(([category, items], index) => ({
  id: `${index + 1}`,
  name: category,
  title: category,
  content: <SkillList skills={items} />,
}));


export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center">
        <TextRoll>My Tech Stack</TextRoll>
      </h2>
      <FeatureCarousel steps={steps} />
    </div>
  );
}
