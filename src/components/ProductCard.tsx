import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  className?: string;
  showButton?: boolean;
}

export default function ProductCard({ product, className = "", showButton = true }: ProductCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group cursor-pointer ${className}`}
    >
      <div className="aspect-[3/4] overflow-hidden bg-zinc-100 mb-6 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase">
            {product.tag}
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-[12px] font-semibold tracking-[0.2em] group-hover:text-brand-gold transition-colors uppercase">
          {product.name}
        </h3>
        {product.price && (
          <p className="text-[14px] text-brand-muted font-medium italic">
            {product.price}
          </p>
        )}
        {product.description && (
          <p className="text-[14px] text-brand-muted leading-relaxed">
            {product.description}
          </p>
        )}
        
        {showButton && (
          <button className="mt-4 py-3 px-6 bg-brand-ink text-brand-beige text-[11px] font-bold tracking-[0.2em] inline-flex items-center justify-center gap-3 self-start transition-all hover:bg-brand-muted active:scale-95 uppercase">
            <MessageSquare className="w-4 h-4 fill-current" />
            DM TO ORDER
          </button>
        )}
      </div>
    </motion.article>
  );
}
