import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  image: string;
  alt: string;
  caption?: string;
}

interface Props {
  slides: Slide[];
  autoplay?: boolean;
}

export default function Carousel({ slides, autoplay = true }: Props) {
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-sm">
      <Swiper
        modules={[Navigation, Pagination, ...(autoplay ? [Autoplay] : [])]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplay ? { delay: 4500, disableOnInteraction: false } : false}
        loop={slides.length > 1}
        className="w-full"
        style={
          {
            "--swiper-navigation-color": "#374151",
            "--swiper-pagination-color": "#374151",
          } as React.CSSProperties
        }
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {slide.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-6 py-8">
                  <p className="text-white text-lg font-medium drop-shadow-sm">
                    {slide.caption}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
