export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-white/65">{description}</p>
    </div>
  );
}
