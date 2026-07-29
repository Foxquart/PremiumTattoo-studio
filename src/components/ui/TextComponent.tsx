import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Bespoke 1-on-1 Artist Consultations',
  '100% Hospital-Grade Sterilization Protocols',
  'Specialists in Fine Line, Realism & Micro-Portraits',
];

const TextComponent = () => (
  <div className="space-y-6 mt-6">
    <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed font-light">
      Welcome to <strong className="text-white font-medium">Good Luck Tattoo Studio</strong>, where art and ink converge to create unforgettable masterpieces. Our studio is a haven for self-expression, where every tattoo tells a unique story.
    </p>
    <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed font-light">
      We understand the significance of a tattoo as a lifelong commitment. We listen to your vision, offering personalized consultations to ensure your tattoo is a true reflection of your story, values, and aspirations.
    </p>

    <div className="pt-2 space-y-3">
      {highlights.map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-darkOrange shrink-0" />
          <span className="font-syne text-sm text-gray-200 uppercase tracking-wider font-semibold">
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TextComponent;
