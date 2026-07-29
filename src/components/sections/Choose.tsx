'use client';
import { Trophy, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const dataChoose = [
  { id: 1, number: 15000, suffix: '', display: '15K', text: 'Tattoos Completed', icon: '🖋️' },
  { id: 2, number: 4000, suffix: '', display: '4K', text: 'Happy Clients', icon: '💛' },
  { id: 3, number: 17, suffix: '+', display: '17+', text: 'Industry Awards', icon: '🏆' },
  { id: 4, number: 1200, suffix: '', display: '1.2K', text: 'Piercings Done', icon: '💎' },
];

function AnimatedCounter({ target, suffix, display }: { target: number; suffix: string; display: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = target;
          const duration = 2000;
          const stepTime = Math.max(Math.floor(duration / end), 10);
          const increment = Math.ceil(end / (duration / stepTime));

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  const formatNumber = (n: number) => {
    if (target >= 10000) return (n / 1000).toFixed(n >= target ? 0 : 1) + 'K';
    if (target >= 1000) return (n / 1000).toFixed(n >= target ? 1 : 1) + 'K';
    return n.toString();
  };

  return (
    <div ref={ref} className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-gold">
      {hasAnimated ? formatNumber(count) : '0'}{suffix}
    </div>
  );
}

const Choose = () => {
  return (
    <section className="relative py-24 bg-brand-surface border-y border-white/5 overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-dark-mesh pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-darkOrange/10 border border-darkOrange/20 mb-4">
            <Trophy className="w-4 h-4 text-darkOrange" />
            <span className="font-syne text-xs uppercase tracking-widest text-darkOrange font-bold">
              Our Track Record
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Choose <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-darkOrange to-transparent mt-6" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {dataChoose.map(({ id, number, suffix, display, text, icon }) => (
            <div
              key={id}
              className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center group"
            >
              <span className="text-3xl mb-4">{icon}</span>
              <AnimatedCounter target={number} suffix={suffix} display={display} />
              <div className="w-8 h-0.5 bg-darkOrange/50 my-4 group-hover:w-16 transition-all duration-500" />
              <p className="font-syne text-xs uppercase tracking-widest text-gray-400 font-semibold">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
