"use client";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxCode,
  RxMix,
  RxLockClosed,
  RxAvatar,
  RxArrowTopRight,
} from "react-icons/rx";
import type { IconType } from "react-icons";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData: {
  Icon: IconType;
  title: string;
  description: string;
}[] = [
  {
    Icon: RxCode,
    title: "Full-Stack Web Dev",
    description:
      "Membangun aplikasi web modern, responsif, dan performan dengan Next.js, React, PHP OOP, serta perancangan database efisien.",
  },
  {
    Icon: RxMix,
    title: "AI & Machine Learning",
    description:
      "Implementasi model deep learning (CNN) dan klasifikasi data berbasis Python & TensorFlow untuk solusi otomatisasi cerdas.",
  },
  {
    Icon: RxDesktop,
    title: "Infrastruktur & Jaringan IT",
    description:
      "Konfigurasi perangkat jaringan (switch/router), manajemen server, dan pemeliharaan sistem industri secara sistematis.",
  },
  {
    Icon: RxAvatar,
    title: "Integrasi IoT & Sistem",
    description:
      "Penghubungan antarmuka digital berbasis web dengan mikrokontroler IoT (ESP/Arduino) serta konsultasi solusi teknis.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-60 sm:h-85"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-87.5 leading-normal">{item.description}</p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
