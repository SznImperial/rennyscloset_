import { Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <main className="max-w-[1440px] mx-auto pt-[140px] pb-32 px-6 md:px-12">
      <header className="text-center mb-24 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-3xl md:text-5xl font-light tracking-[0.3em] text-brand-ink uppercase mb-6"
        >
          Contact
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          className="h-[1px] bg-brand-ink/40"
        />
      </header>

      <section className="w-full flex flex-col items-center gap-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-5xl items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="aspect-[3/4] overflow-hidden bg-brand-beige"
          >
            <img 
              src="/images/contact-editorial.png" 
              alt="Editorial"
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col space-y-12 text-center md:text-left"
          >
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-6xl text-brand-ink font-light italic">
                Let's Connect.
              </h2>
              <p className="text-[15px] md:text-lg text-brand-muted leading-relaxed font-medium max-w-md">
                We prioritize a personal shopping experience. For all inquiries, bespoke fittings, and collection details, reach out via social.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold tracking-[0.4em] text-brand-ink/40 uppercase">Social</span>
                <a href="https://www.instagram.com/rennyscloset_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="font-serif text-3xl md:text-4xl text-brand-ink hover:text-brand-gold transition-colors">
                  @rennyscloset_
                </a>
              </div>
              
              <div className="pt-4">
                <a
                  href="https://wa.me/2348082970079?text=Hi%20Renny's%20Closet!%20%F0%9F%91%8B%0A%0AI'd%20like%20to%20place%20an%20order.%20Could%20you%20share%20what's%20currently%20available%3F%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-ink text-brand-beige text-[11px] md:text-[13px] px-8 md:px-16 py-4 md:py-6 font-bold tracking-[0.2em] md:tracking-[0.3em] flex items-center justify-center gap-3 md:gap-4 hover:bg-brand-muted transition-all uppercase w-full md:w-auto no-underline"
                >
                  DM TO ORDER
                  <Send className="w-5 h-5 stroke-[1.5px]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-brand-ink/5">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-ink/40 uppercase">Availability</span>
            <p className="text-[14px] font-medium text-brand-muted leading-loose">
              Mon — Sat<br />10:00 AM — 7:00 PM WAT
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-ink/40 uppercase">Location</span>
            <p className="text-[14px] font-medium text-brand-muted leading-loose">
              Igando,<br />Lagos, Nigeria
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-ink/40 uppercase">Inquiries</span>
            <p className="text-[14px] font-medium text-brand-muted leading-loose">
              rennyscloset1206@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
