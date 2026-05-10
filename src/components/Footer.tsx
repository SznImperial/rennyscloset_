import { Mail, Globe, Instagram } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="w-full bg-brand-beige border-t border-brand-ink/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col items-center text-center">
        <h2 className="font-serif text-2xl md:text-3xl tracking-[0.3em] font-bold uppercase mb-12">
          Renny's Closet
        </h2>

        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
          {[
            { id: 'collection', label: 'COLLECTIONS' },
            { id: 'about', label: 'ABOUT' },
            { id: 'contact', label: 'CONTACT' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id as Page)}
              className="text-[11px] font-medium tracking-[0.2em] text-brand-muted hover:text-brand-ink transition-colors uppercase"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.instagram.com/rennyscloset_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-medium tracking-[0.2em] text-brand-muted hover:text-brand-ink transition-colors uppercase"
          >
            INSTAGRAM
          </a>
        </nav>

        <div className="flex justify-center gap-8 mb-12 text-brand-muted">
          <a href="https://www.instagram.com/rennyscloset_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-ink transition-colors">
            <Instagram className="w-5 h-5 stroke-[1.5px]" />
          </a>
          <button className="hover:text-brand-ink transition-colors">
            <Globe className="w-5 h-5 stroke-[1.5px]" />
          </button>
          <a href="mailto:rennyscloset1206@gmail.com" className="hover:text-brand-ink transition-colors">
            <Mail className="w-5 h-5 stroke-[1.5px]" />
          </a>
        </div>

        <p className="text-[10px] font-medium tracking-[0.2em] text-brand-muted/60 uppercase italic">
          © 2026 RENNY'S CLOSET. MADE IN LAGOS.
        </p>
      </div>
    </footer>
  );
}
