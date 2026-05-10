import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="max-w-[1440px] mx-auto pt-[140px] pb-32 px-6 md:px-12">
      <header className="text-center mb-24 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-5xl font-light tracking-[0.3em] text-brand-ink uppercase mb-6"
        >
          Our Story
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          className="h-px bg-brand-ink/40"
        />
      </header>

      <article className="flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-[900px] mb-24 overflow-hidden bg-brand-beige"
        >
          <img 
            src="/images/about-editorial.png" 
            alt="Editorial Story"
            className="w-full h-auto aspect-3/4 object-cover grayscale-20 hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>

        <section className="max-w-[800px] text-center space-y-12 mb-24">
          <p className="font-serif text-xl md:text-3xl text-brand-ink leading-relaxed font-light italic">
            Born from the vibrant rhythm of Lagos and the quiet grace of minimal architecture, Renny's Closet is a love letter to the modern woman. We believe that true luxury lies in the breathability of a garment and the confidence it instills in the wearer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-brand-ink/5">
            <div className="text-left space-y-4">
              <h4 className="text-[11px] font-bold tracking-[0.4em] text-brand-muted uppercase">
                The Aesthetic
              </h4>
              <p className="text-[15px] text-brand-muted leading-relaxed font-medium">
                Our designs prioritize clean lines, warm tonal palettes, and premium textiles that move with the body. Each piece is a curated essential, designed to frame the individual rather than distract from them.
              </p>
            </div>
            <div className="text-left space-y-4">
              <h4 className="text-[11px] font-bold tracking-[0.4em] text-brand-muted uppercase">
                The Mission
              </h4>
              <p className="text-[15px] text-brand-muted leading-relaxed font-medium">
                To redefine West African minimalism by blending high-fashion editorial sensibilities with the effortless warmth of our heritage. We create clothes for the woman who finds power in understated clarity.
              </p>
            </div>
          </div>
        </section>

        <motion.a
          href="https://wa.me/2348082970079?text=Hi%20Renny's%20Closet!%20%F0%9F%91%8B%0A%0AI'd%20love%20to%20learn%20more%20about%20your%20collection.%20Thank%20you!"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-brand-ink text-brand-beige text-[11px] md:text-[13px] font-bold tracking-[0.2em] md:tracking-[0.3em] w-full md:w-auto px-8 md:px-16 py-4 md:py-6 flex items-center justify-center gap-3 md:gap-4 hover:bg-brand-muted transition-colors uppercase no-underline"
        >
          <MessageSquare className="w-5 h-5 stroke-[1.5px]" />
          Connect with us
        </motion.a>
      </article>
    </main>
  );
}
