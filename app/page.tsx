"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import { useSearchParams, useRouter } from "next/navigation";
import { useRef } from "react";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function WeddingCard() {
  const router = useRouter();
  const params = useSearchParams();
  const guest = params.get("guest") || "bạn thân mến";

  // ✅ Fix lỗi: dùng ref thay vì window._swipeY
  const swipeY = useRef(0);

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/Card2.png"
        alt="wedding"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Bottom Sheet */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          absolute bottom-0 
          w-full h-[40%]
          bg-gradient-to-t from-white/25 via-white/10 to-white/0
          backdrop-blur-xl
          rounded-t-3xl 
          shadow-[0_-6px_30px_rgba(0,0,0,0.15)]
          flex flex-col items-center 
          justify-start
          pt-3
          px-6 
          text-center
        "
      >
        <h3 className="text-sm tracking-[0.3em] text-gray-700 mb-2">
          HAPPY WEDDING
        </h3>

        <h3 className={`text-4xl ${greatVibes.className} leading-tight drop-shadow-md text-[#9d2e2e]`}>
          Dương Quang
        </h3>

        <p className="text-gray-600 text-sm mt-1">AND</p>

        <h3 className={`text-4xl ${greatVibes.className} leading-tight drop-shadow-md text-[#9d2e2e]`}>
          Nguyễn Bắc
        </h3>

        {/* Date */}
        <div className="w-full flex justify-center mt-2">
          <div className="flex justify-between w-full max-w-[250px] pt-4">
            <div className="text-center pr-4 border-r">
              <p className="text-[#9d2e2e] text-xs tracking-widest font-semibold">SUNDAY</p>
              <p className="text-[#9d2e2e] border-t text-lg mt-1 font-bold">11:00</p>
            </div>

            <div className="text-center px-4 border-r">
              <p className="text-[#9d2e2e] text-5xl font-extrabold">15</p>
            </div>

            <div className="text-center pl-4">
              <p className="text-[#9d2e2e] text-xs tracking-widest font-semibold">DECEMBER</p>
              <p className="text-[#9d2e2e] border-t text-lg mt-1 font-bold">2025</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Swipe area */}
      <div
        className="absolute bottom-0 w-full h-16 z-50"
        onTouchStart={(e) => {
          swipeY.current = e.touches[0].clientY;
        }}
        onTouchEnd={(e) => {
          const endY = e.changedTouches[0].clientY;
          if (swipeY.current - endY > 60) {
            router.push(`/details?guest=${encodeURIComponent(guest)}`);
          }
        }}
      >
        <div className="w-12 h-1.5 bg-white/70 rounded-full mx-auto mt-3 backdrop-blur-sm shadow-sm" />
        <p className="text-[11px] text-white/80 text-center mt-2 tracking-wider">
          Vuốt lên để xem thiệp
        </p>
      </div>
    </div>
  );
}