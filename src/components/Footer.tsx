import Link from 'next/link';
import { company } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">GeekVentures</p>
          <p className="text-sm text-white/50">AI & software experiences for modern businesses.</p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-white/60">
          <Link href={`mailto:${company.email}`} className="transition hover:text-white">
            {company.email}
          </Link>
          <Link href={`tel:${company.phone}`} className="transition hover:text-white">
            {company.phone}
          </Link>
        </div>
      </div>
    </footer>
  );
}
