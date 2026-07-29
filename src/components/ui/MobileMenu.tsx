'use client';
import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { navLinks } from '../../data/dataLinks';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

interface MobileMenuProps {
  setIsMenuOpen: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMenuOpen }) => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-50 flex flex-col justify-between p-8 text-white transition-all duration-300">
      <div className="flex items-center justify-between">
        <span className="font-cinzel text-xl font-bold tracking-widest text-gradient-amber">
          GOOD LUCK
        </span>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="p-2 text-gray-400 hover:text-darkOrange transition-colors"
          aria-label="Close menu"
        >
          <RiCloseLine className="w-9 h-9" />
        </button>
      </div>

      <nav className="flex flex-col items-center gap-6 my-auto">
        {navLinks.map(({ id, href, label }) => {
          const isExternal = href === 'gallery' || href === 'blog';
          return isExternal ? (
            <Link
              key={id}
              href={`/${href}`}
              onClick={() => setIsMenuOpen(false)}
              className="font-syne text-2xl uppercase tracking-widest text-gray-200 hover:text-darkOrange transition-colors font-bold"
            >
              {label}
            </Link>
          ) : (
            <ScrollLink
              key={id}
              to={href.replace('/', '')}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="font-syne text-2xl uppercase tracking-widest text-gray-200 hover:text-darkOrange transition-colors font-bold cursor-pointer"
            >
              {label}
            </ScrollLink>
          );
        })}
      </nav>

      <div className="text-center text-xs tracking-widest uppercase text-gray-500 font-syne border-t border-white/10 pt-6">
        Good Luck Tattoo Studio • Miramar Beach
      </div>
    </div>
  );
};

export default MobileMenu;
