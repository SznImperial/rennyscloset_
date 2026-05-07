import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import ProductCard from '../components/ProductCard';

export default function Collection() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-[140px] pb-32">
      <header className="text-center mb-32 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-5xl md:text-7xl font-bold tracking-[0.05em] text-brand-ink uppercase mb-6"
        >
          The Collection
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          className="h-[1px] bg-brand-muted/30"
        />
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-32">
        {PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            className="md:odd:mt-0 md:even:mt-32"
          />
        ))}
      </section>
    </main>
  );
}
