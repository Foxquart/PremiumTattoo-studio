'use client';
import { FaSquareFacebook } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { TbBrandYoutubeFilled } from 'react-icons/tb';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Logo from '../../../public/icons/logo.svg';

const footerLinks = [
  {
    id: 1,
    href: '#',
    icon: FaSquareFacebook,
    label: 'Facebook',
  },
  {
    id: 2,
    href: '#',
    icon: AiFillInstagram,
    label: 'Instagram',
  },
  {
    id: 3,
    href: '#',
    icon: TbBrandYoutubeFilled,
    label: 'YouTube',
  },
];

const quickLinks = [
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Artists', href: 'artists' },
  { label: 'Gallery', href: '/gallery', external: true },
  { label: 'Contact', href: 'contacts' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-surface border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-darkOrange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 group mb-4">
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
            <p className="font-sans text-sm text-gray-500 font-light leading-relaxed max-w-xs">
              Where art and ink converge to create unforgettable masterpieces. Your story, permanently expressed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne text-xs uppercase tracking-widest text-gray-400 font-bold mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href, external }) =>
                external ? (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-sans text-sm text-gray-400 hover:text-darkOrange transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ) : (
                  <li key={label}>
                    <ScrollLink
                      to={href}
                      smooth={true}
                      duration={600}
                      offset={-90}
                      className="font-sans text-sm text-gray-400 hover:text-darkOrange transition-colors cursor-pointer"
                    >
                      {label}
                    </ScrollLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h4 className="font-syne text-xs uppercase tracking-widest text-gray-400 font-bold mb-5">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {footerLinks.map(({ id, href, icon: Icon, label }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-darkOrange hover:border-darkOrange/40 hover:bg-darkOrange/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="font-sans text-sm text-gray-500 space-y-1">
              <p>Miramar Beach, FL</p>
              <p>Sun – Sat: 1PM – 9PM</p>
              <p className="text-darkOrange font-medium">850-424-6584</p>
            </div>
          </div>
        </div>

        {/* Divider & Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-600">
            © {currentYear} Good Luck Tattoo Studio. All rights reserved.
          </p>
          <p className="font-sans text-xs text-gray-600">
            Crafted with 🖋️ in Miramar Beach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
