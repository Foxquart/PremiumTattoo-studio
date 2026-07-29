import Image, { StaticImageData } from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ServiceCardProps {
  imageSrc: StaticImageData;
  title: string;
  text: string;
  price?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, text, price = 'From $150' }) => {
  return (
    <li className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between group relative overflow-hidden h-full transition-all duration-300">
      {/* Top subtle glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-darkOrange/5 rounded-full blur-2xl group-hover:bg-darkOrange/15 transition-all pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:border-darkOrange/40 group-hover:bg-darkOrange/10 transition-all">
            <Image src={imageSrc} alt={`${title} icon`} width={36} height={36} className="w-auto h-auto object-contain filter invert opacity-90 group-hover:opacity-100" />
          </div>
          <span className="font-syne text-xs uppercase tracking-widest text-darkOrange font-bold px-3 py-1 rounded-full bg-darkOrange/10 border border-darkOrange/20">
            {price}
          </span>
        </div>

        <h4 className="font-cinzel text-2xl font-bold text-white mb-3 group-hover:text-darkOrange transition-colors">
          {title}
        </h4>

        <p className="font-sans text-gray-400 text-sm leading-relaxed font-light mb-6">
          {text}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-syne uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
        <span>Bespoke Craft</span>
        <ArrowRight className="w-4 h-4 text-darkOrange group-hover:translate-x-1 transition-transform" />
      </div>
    </li>
  );
};

export default ServiceCard;
