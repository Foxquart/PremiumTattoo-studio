'use client';
import Image from 'next/image';
import { tattooImages } from '../../data/dataGallery';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export default function GridList() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {tattooImages.map(({ src, text }, index) => (
          <li
            key={index}
            className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-darkOrange/40 transition-all duration-300"
            onClick={() => setSelectedImage(typeof src === 'string' ? src : src.src)}
          >
            <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
              <Image
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                src={src}
                alt={text}
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-darkOrange/20 border border-darkOrange/40 text-white backdrop-blur-md">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:text-darkOrange hover:border-darkOrange/40 transition-all"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <Image
            src={selectedImage}
            alt="Gallery image enlarged"
            width={900}
            height={900}
            className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
