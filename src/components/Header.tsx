import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Header({ currentPage, setPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'collection', label: 'COLLECTION' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-beige/80 backdrop-blur-md border-b border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center relative">
          <div className="flex items-center lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -ml-2 hover:opacity-60 transition-opacity z-50 relative"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5px]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5px]" />
              )}
            </button>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 text-center z-50">
            <button 
              onClick={() => handleNavClick('home')}
              className="font-serif text-xl md:text-2xl tracking-[0.3em] font-bold uppercase transition-transform hover:scale-[1.02]"
            >
              Renny's Closet
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-10 absolute left-24">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as Page)}
                className={`text-[11px] font-medium tracking-[0.2em] transition-all relative py-1
                  ${currentPage === item.id ? 'text-brand-ink' : 'text-brand-muted hover:text-brand-ink'}
                `}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-ink" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center z-50">
            <button className="p-2 -mr-2 hover:opacity-60 transition-opacity">
              <ShoppingBag className="w-6 h-6 stroke-[1.5px]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-beige z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as Page)}
              className={`text-lg font-medium tracking-[0.3em] transition-colors uppercase
                ${currentPage === item.id ? 'text-brand-ink' : 'text-brand-muted hover:text-brand-ink'}
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
