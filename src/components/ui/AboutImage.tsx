import Image from 'next/image';
import { Award } from 'lucide-react';

const ImageComponent = () => (
  <div className="relative group w-full lg:w-1/2">
    <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-card">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
      <Image
        src="/images/about-desktop-2x.png"
        alt="Good Luck Tattoo Studio Sanctuary"
        width={628}
        height={494}
        className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Floating Badge */}
    <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-brand-surface/90 border border-darkOrange/40 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-glow-orange flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-darkOrange/15 border border-darkOrange/30 flex items-center justify-center text-darkOrange">
        <Award className="w-6 h-6" />
      </div>
      <div>
        <div className="font-cinzel text-lg font-bold text-white">10+ Years</div>
        <div className="font-syne text-xs uppercase text-gray-400">Of Fine Ink Mastery</div>
      </div>
    </div>
  </div>
);

export default ImageComponent;
