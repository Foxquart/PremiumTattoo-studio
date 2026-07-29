import Slider from '../ui/Slider';
import { Users } from 'lucide-react';

const Team = () => {
  return (
    <section
      id="artists"
      className="relative py-24 bg-brand-dark overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-darkOrange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-darkOrange/10 border border-darkOrange/20 mb-4">
            <Users className="w-4 h-4 text-darkOrange" />
            <span className="font-syne text-xs uppercase tracking-widest text-darkOrange font-bold">
              Meet The Team
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Master <span className="text-gradient-gold">Artisans</span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg max-w-xl mt-4 font-light">
            Award-winning artists specializing in every style — from micro-realism to bold neo-traditional.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-darkOrange to-transparent mt-6" />
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default Team;
