'use client';

import { motion } from 'framer-motion';
import { processSteps } from '@/data/site';
import { SectionHeading } from './section-heading';

export function Process() {
  return (
    <section className="section-shell py-24">
      <SectionHeading
        eyebrow="How we work"
        title="A clear process that keeps projects fast, focused, and premium."
        description="We combine product thinking, technical execution, and visual polish so your business gets more than just code."
      />

      <div className="grid gap-5 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card rounded-[1.5rem] p-6"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
              0{index + 1}
            </div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
