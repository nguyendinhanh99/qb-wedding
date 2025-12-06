// app/components/WeddingCard.tsx
"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function WeddingCard() {
  const router = useRouter();
  const params = useSearchParams();
  const guest = params.get("guest") || "bạn thân mến";

  const swipeY = useRef(0);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <Image src="/Card2.png" alt="wedding" fill className="object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/5"></div>

      {/* Bottom sheet */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-white/25 via-white/10 to-white/0 backdrop-blur-xl rounded-t-3xl shadow-[0_-6px_30px_rgba(0,0,0,0.15)] flex flex-col items-center justify-start pt-3 px-6 text-center"
      >
        <h3 className="text-sm tracking-[0.3em] text-gray-700 mb-2">HAPPY WEDDING</h3>
        <h3 className="text-4xl leading-tight drop-shadow-md text-[#9d2e2e] font-serif">
          Dương Quang
        </h3>
        <p className="text-gray-600 text-sm mt-1">AND</p>
        <h3 className="text-4xl leading-tight drop-shadow-md text-[#9d2e2e] font-serif">
          Nguyễn Bắc
        </h3>
      </motion.div>

      {/* Swipe area */}
      <div
        className="absolute bottom-0 w-full h-16 z-50"
        onTouchStart={(e) => (swipeY.current = e.touches[0].clientY)}
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