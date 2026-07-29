'use client';
import { useState, useEffect } from 'react';
import { TbMenuDeep } from 'react-icons/tb';
import { Calendar, Sparkles, Award, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import Navbar from '../ui/Navbar';
import Logo from '../../../public/icons/logo.svg';
import Modal from '../ui/Modal';
import MobileMenu from '../ui/MobileMenu';
import Link from 'next/link';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-brand-dark bg-heroMobile sm:bg-heroTablet lg:bg-heroDesktop bg-cover bg-center">
      {/* Dark vignette overlay with subtle amber glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-brand-dark pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      {/* Floating Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-black/60 border border-darkOrange/40 flex items-center justify-center shadow-glow-orange group-hover:scale-105 transition-transform">
              <Logo width={28} height={28} className="fill-white group-hover:fill-darkOrange transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg font-bold tracking-widest text-white leading-tight">
                GOOD LUCK
              </span>
              <span className="text-[10px] font-syne uppercase tracking-widest text-darkOrange">
                Tattoo Studio
              </span>
            </div>
          </Link>

          <Navbar />

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-darkOrange to-amber-600 hover:from-amber-600 hover:to-darkOrange text-black font-syne font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full shadow-glow-orange transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              Book Session
            </button>

            <button
              className="md:hidden p-2 text-white hover:text-darkOrange transition-colors"
              type="button"
              onClick={toggleMenu}
              aria-label="Open navigation menu"
            >
              <TbMenuDeep className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}

      {/* Main Hero Content */}
      <div className="container relative z-10 pt-32 lg:pt-44 pb-20 flex flex-col justify-center flex-grow">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-pulse-slow">
            <Sparkles className="w-4 h-4 text-darkOrange" />
            <span className="font-syne text-xs uppercase tracking-widest text-gray-300 font-medium">
              Bespoke Ink • Certified Masters • Miramar Beach
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight uppercase mb-6">
            Where Art &amp; Ink <br />
            <span className="text-gradient-gold drop-shadow-sm">Become Immortal.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-xl mb-10 border-l-2 border-darkOrange pl-4">
            &quot;Tattoos are an expression of freedom, individuality, and lifelong craftsmanship.&quot;
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-16">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-darkOrange to-amber-600 text-black font-syne font-bold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-glow-orange hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <Calendar className="w-5 h-5" />
              Online Booking
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-syne font-semibold text-sm uppercase tracking-widest py-4 px-8 rounded-full backdrop-blur-md transition-all duration-300 hover:border-darkOrange/50"
            >
              Explore Portfolio
            </Link>
          </div>

          {/* Trust stats bar */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-white/10 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-darkOrange/10 border border-darkOrange/20 text-darkOrange">
                <Star className="w-5 h-5 fill-darkOrange" />
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-white">4.9★</div>
                <div className="text-xs text-gray-400 font-syne uppercase">500+ Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-darkOrange/10 border border-darkOrange/20 text-darkOrange">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-white">15K+</div>
                <div className="text-xs text-gray-400 font-syne uppercase">Tattoos Inked</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-darkOrange/10 border border-darkOrange/20 text-darkOrange">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-400 font-syne uppercase">Sterile &amp; Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </section>
  );
};

export default Hero;
