'use client';
import { RiCloseLine } from 'react-icons/ri';
import { useEffect } from 'react';
import ContactForm from './ContactForm';
import { CalendarDays } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in">
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-darkOrange via-amber-500 to-darkOrange" />

        <button
          className="absolute right-4 top-4 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-darkOrange hover:border-darkOrange/40 transition-all z-10"
          onClick={() => setIsOpen(false)}
          aria-label="Close booking modal"
        >
          <RiCloseLine className="w-6 h-6" />
        </button>

        <div className="p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-darkOrange/15 border border-darkOrange/30 text-darkOrange">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Book a Session
              </h2>
              <p className="font-syne text-xs uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
                We respond within 24 hours
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
