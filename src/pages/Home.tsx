import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { CURATED_PRODUCTS, Page } from '../types';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  setPage: (page: Page) => void;
}

export default function Home({ setPage }: HomeProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-full bg-cover bg-[center_top] transform scale-105"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('/images/hero-banner.png')` 
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-brand-beige font-serif text-5xl md:text-8xl tracking-[0.1em] uppercase font-bold drop-shadow-lg">
              Renny's Closet
            </h1>
            <p className="text-brand-beige font-serif text-lg md:text-2xl italic opacity-90 drop-shadow-md">
              Dress soft. Move easy.
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => setPage('collection')}
            className="min-w-[240px] h-14 border border-brand-beige text-brand-beige font-bold tracking-[0.3em] uppercase hover:bg-brand-beige hover:text-brand-ink transition-all duration-300 backdrop-blur-sm"
          >
            Shop the collection
          </motion.button>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60 text-brand-beige"
        >
          <ArrowDown className="w-6 h-6 stroke-[1.5px]" />
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="flex flex-col gap-4 mb-20 text-center md:text-left">
          <span className="text-[11px] font-bold tracking-[0.4em] text-brand-muted uppercase">
            Curated Edits
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-ink mt-2">
            Minimalist Essentials
          </h2>
          <p className="text-[15px] md:text-lg text-brand-muted max-w-2xl mt-4 leading-relaxed font-medium">
            Designed for the modern woman who values comfort and elegance. Each piece is a testament to the beauty of simplicity and the luxury of high-quality natural fibers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {CURATED_PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showButton={false}
              className="odd:md:translate-y-12"
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-ink py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col gap-12 items-center"
        >
          <div className="flex flex-col gap-4">
            <span className="text-brand-beige/50 text-[10px] font-bold tracking-[0.4em] uppercase">
              Stay Connected
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-beige tracking-wide mt-2">
              Join the Closet Circle
            </h2>
            <p className="text-[14px] md:text-[16px] text-brand-beige/70 leading-relaxed font-medium">
              Be the first to explore our new collections and receive exclusive invitations to our seasonal pop-up events in Lagos.
            </p>
          </div>

          <form className="w-full flex flex-col md:flex-row gap-6 mt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              className="flex-1 bg-transparent border-b border-brand-beige/20 text-brand-beige focus:border-brand-beige outline-none py-4 text-[14px] font-medium tracking-wide placeholder:text-brand-beige/30 transition-all"
              placeholder="YOUR EMAIL ADDRESS"
              type="email"
            />
            <button className="text-[11px] font-bold tracking-[0.4em] text-brand-beige border border-brand-beige/30 px-12 py-4 hover:bg-brand-beige hover:text-brand-ink transition-all uppercase whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
