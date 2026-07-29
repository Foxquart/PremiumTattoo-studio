import ServiceCard from '../ui/ServiceCard';
import { dataServices } from '../../data/dataServices';
import { Layers } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-brand-surface border-y border-white/5 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-darkOrange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-darkOrange/10 border border-darkOrange/20 mb-4">
            <Layers className="w-4 h-4 text-darkOrange" />
            <span className="font-syne text-xs uppercase tracking-widest text-darkOrange font-bold">
              What We Offer
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Craft &amp; <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg max-w-xl mt-4 font-light">
            From precision fine-line work to complete custom sleeve transformations and safe laser removal.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-darkOrange to-transparent mt-6" />
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dataServices.map(({ id, imageSrc, title, text }) => (
            <ServiceCard
              key={id}
              imageSrc={imageSrc}
              title={title}
              text={text}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
