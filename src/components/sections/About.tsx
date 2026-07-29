import ImageComponent from '../ui/AboutImage';
import TextComponent from '../ui/TextComponent';
import { Compass } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-brand-dark overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-darkOrange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-darkOrange/10 border border-darkOrange/20 mb-4">
            <Compass className="w-4 h-4 text-darkOrange" />
            <span className="font-syne text-xs uppercase tracking-widest text-darkOrange font-bold">
              Our Philosophy
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Style &amp; <span className="text-gradient-gold">Vibe</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-darkOrange to-transparent mt-4" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <ImageComponent />
          <div className="w-full lg:w-1/2 glass-card p-8 sm:p-10 rounded-3xl border border-white/10">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-2">
              The Sanctuary of <span className="text-darkOrange">Self-Expression</span>
            </h3>
            <TextComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
