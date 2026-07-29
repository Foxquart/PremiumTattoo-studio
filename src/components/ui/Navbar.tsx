'use client';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { navLinks } from '../../data/dataLinks';

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <div className="flex items-center gap-8 lg:gap-10">
        {navLinks.map(({ id, href, label }) => {
          const isExternal = href === 'gallery' || href === 'blog';
          const linkClasses =
            "text-gray-300 hover:text-darkOrange font-syne text-sm uppercase tracking-widest font-semibold transition-all duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-darkOrange hover:after:w-full after:transition-all after:duration-300";

          return isExternal ? (
            <Link key={id} href={`/${href}`} className={linkClasses}>
              {label}
            </Link>
          ) : (
            <ScrollLink
              key={id}
              to={href.replace('/', '')}
              smooth={true}
              spy={true}
              duration={600}
              offset={-90}
              className={linkClasses}
              activeClass="text-darkOrange after:w-full"
            >
              {label}
            </ScrollLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
