'use client';
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { teamMembers } from '../../data/dataTeam';

export default function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      grabCursor={true}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        834: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 28,
        },
      }}
      modules={[Pagination, Autoplay]}
      className="!pb-16"
    >
      {teamMembers.map(({ src, alt, name, specialty, experience, instagram }, index) => (
        <SwiperSlide key={index}>
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 bg-brand-card transition-all duration-500 hover:border-darkOrange/40 hover:shadow-glow-orange">
            {/* Image */}
            <div className="relative h-[380px] sm:h-[420px] overflow-hidden">
              <Image
                src={src}
                alt={alt}
                fill
                loading="lazy"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              {/* Dark Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Experience badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-syne uppercase tracking-widest text-gray-300 font-semibold">
                {experience}
              </div>

              {/* Instagram link */}
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-gray-400 hover:text-darkOrange hover:border-darkOrange/40 transition-all duration-300"
              >
                <AiFillInstagram className="h-5 w-5" />
              </a>

              {/* Bottom info panel */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <h4 className="font-cinzel text-xl font-bold text-white mb-1">
                  {name}
                </h4>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-darkOrange/15 border border-darkOrange/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-darkOrange animate-pulse" />
                  <span className="font-syne text-[10px] uppercase tracking-widest text-darkOrange font-bold">
                    {specialty}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
