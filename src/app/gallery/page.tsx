import Link from 'next/link';
import GridList from '../../components/ui/GridList';
import GoBack from '../../../public/icons/go-back-arrow.svg';
import Footer from '@/components/sections/Footer';
import { Images, ArrowLeft, ArrowRight } from 'lucide-react';

export const generateMetadata = () => {
  return {
    title: 'Gallery | Good Luck Tattoo Studio',
    description: 'Browse our portfolio of custom tattoo art — fine-line, realism, color, and more.',
  };
};

export default function Gallery() {
  return (
    <>
      <section className="bg-brand-dark min-h-screen pt-8 pb-16">
        <div className="container">
          {/* Header bar */}
          <div className="flex items-center justify-between py-6 mb-10 border-b border-white/10">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-syne text-sm uppercase tracking-widest text-gray-400 hover:text-darkOrange transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Home
            </Link>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-darkOrange/15 border border-darkOrange/30 text-darkOrange">
                <Images className="w-5 h-5" />
              </div>
              <h1 className="font-cinzel text-2xl sm:text-4xl font-bold text-white">
                Gallery
              </h1>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-syne text-sm uppercase tracking-widest text-gray-400 hover:text-darkOrange transition-colors font-semibold"
            >
              Blog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <GridList />
        </div>
      </section>
      <Footer />
    </>
  );
}
