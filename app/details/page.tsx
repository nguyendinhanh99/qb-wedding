"use client";

import { useSearchParams } from "next/navigation";
import { Great_Vibes } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
});
export default function DetailsPage() {
    const params = useSearchParams();
    const guest = params.get("guest") || "bạn thân mến";

    const images = [
        "/album1.jpg",
        "/album2.jpg",
        "/album3.jpg",
        "/album4.jpg",
        "/album5.jpg",
        "/album6.jpg",
        "/album7.jpg",
        "/album8.jpg",
        "/album9.jpg",
        "/album10.jpg",
        "/album11.jpg",
        "/album12.jpg",
        "/album13.jpg",
    ];

    const [selected, setSelected] = useState(0);


    const weddingDate = new Date("2025-12-15T10:00:00"); // 💒 thời gian sự kiện
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const fullText =
        "Trong hôn nhân không có hai người hoàn hảo, chỉ có hai người luôn nỗ lực cố gắng để cuộc hôn nhân đó trở nên bền vững và hạnh phúc hơn.";
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            setDisplayedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(timer);
        }, 50); // tốc độ gõ chữ (ms)
        return () => clearInterval(timer);
    }, []);


    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const diff = weddingDate - now;

            if (diff <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="p-1 text-[#9d2e2e] space-y-1 font-serif">
            <div className="relative w-full flex items-center justify-center py-2">
                {/* Viền trái */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#c98083]/60 to-transparent" />

                {/* Cụm hoa văn giữa */}
                <div className="flex items-center space-x-1">
                    <span className="text-[#c98083] text-base font-semibold animate-pulse drop-shadow-[0_0_6px_rgba(201,128,131,0.5)]">
                        ❤
                    </span>
                    <span className="text-[#c98083] text-3xl font-semibold animate-pulse drop-shadow-[0_0_8px_rgba(201,128,131,0.6)]">
                        ❦
                    </span>
                    <span className="text-[#c98083] text-base font-semibold animate-pulse drop-shadow-[0_0_6px_rgba(201,128,131,0.5)]">
                        ❤
                    </span>
                </div>

                {/* Viền phải */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[#c98083]/60 to-transparent" />
            </div>
            <section className=" mb-10 ">
                <div className="flex flex-col items-center text-center">
                    <h3
                        className={`text-3xl ${greatVibes.className} leading-tight drop-shadow-md`}
                    >
                        Dương Quang & Nguyễn Bắc
                    </h3>
                    <p className="text-1xl font-serif font-light text-[#373434] mt-1">
                        Thân Mời                    </p>
                    <p className="text-1xl font-bold mt-2 mb-2">Bạn {guest} 💕</p>
                </div>
            </section>

            <section className="bg-[#fffaf9] py-10 px-5">

                {/* --- Chú rể --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg mb-4"
                    >
                        <motion.img
                            src="/avataCR.jpg"
                            alt="Chú rể"
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                    <h3 className="text-2xl font-[DancingScript] text-[#b66a6c] mb-2">
                        Dương Quang
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] px-2 max-w-xs">
                        Em à, hôm nay không chỉ là ngày cưới của chúng ta, mà còn là ngày anh thấy mình thật sự trọn vẹn. Cảm ơn em vì đã đến, đã ở lại, đã yêu anh bằng cả trái tim. Anh hứa sẽ luôn nắm tay em, dù nắng hay mưa, dù bình yên hay giông bão… Chỉ cần có em, anh đã có tất cả.
                    </p>
                </motion.div>

                {/* --- Cô dâu --- */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg mb-4"
                    >
                        <motion.img
                            src="/avataCD.jpg"
                            alt="Cô dâu"
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>

                    <h3 className="text-2xl font-[DancingScript] text-[#b66a6c] mb-2">
                        Nguyễn Bắc
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-[15px] px-2 max-w-xs">
                        Em hứa sẽ luôn yêu thương, tôn trọng và đồng hành cùng anh, dù vui hay buồn, dù khó khăn hay thuận lợi, em vẫn nắm tay anh, cùng anh xây dựng một mái ấm tràn đầy yêu thương và hạnh phúc.
                    </p>
                </motion.div>
            </section>
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-[#fffaf9] py-10 px-5 font-serif text-[#9d2e2e]"
            >
                <h2 className="text-center text-2xl font-semibold mb-6">Giới thiệu gia đình</h2>

                <div className="flex flex-col sm:flex-row items-stretch justify-center text-center border-t border-b border-[#c98083]/30 divide-y sm:divide-y-0 sm:divide-x divide-[#c98083]/30">

                    {/* --- Nhà Trai --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="sm:w-1/2 py-6 px-4"
                    >
                        <h3 className="text-xl font-bold text-[#c98083] mb-2">🏠 Nhà Trai</h3>
                        <p className="text-lg">Ông <span className="font-semibold">Dương Kim Sở</span></p>
                        <p className="text-lg">Bà <span className="font-semibold">Võ Thị Hiền</span></p>
                        <p className="text-sm mt-2 italic">Thôn Quyết Tiến - Thạch Lạc - Hà Tĩnh</p>
                    </motion.div>

                    {/* --- Nhà Gái --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="sm:w-1/2 py-6 px-4"
                    >
                        <h3 className="text-xl font-bold text-[#c98083] mb-2">🏡 Nhà Gái</h3>
                        <p className="text-lg">Bà <span className="font-semibold">Nguyễn Thị Đàn </span></p>
                        <p className="text-sm mt-2 italic">Thôn Liên Quý - Đồng Tiến - Hà Tĩnh</p>
                    </motion.div>
                </div>
            </motion.section>

            <section className="mb-10 text-[#9d2e2e] font-serif">
                {/* Tiêu đề nhỏ phía trên */}
                <div className="flex flex-col items-center text-center">
                    <p className="text-lg font-semibold text-[#9d2e2e] mt-1 tracking-wide">
                        Trân Trọng Thông Báo Lễ Thành Hôn Của
                    </p>
                </div>

                {/* Hai bên tên + dấu & */}
                <div className="relative flex flex-col sm:flex-row items-center justify-center mt-3">
                    {/* --- Chú rể --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="sm:w-1/3 flex flex-col items-center sm:items-end sm:text-right"
                    >
                        <h3
                            className={`text-3xl ${greatVibes.className} leading-tight drop-shadow-md`}
                        >
                            Dương Quang
                        </h3>
                        <p className="text-sm text-[#c98083] italic -mt-1">Trưởng nam</p>
                    </motion.div>

                    {/* --- Dấu & --- */}
                    <motion.div
                        className="text-3xl mx-6 my-3 sm:my-0 text-[#b66a6c]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        &
                    </motion.div>

                    {/* --- Cô dâu --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="sm:w-1/3 flex flex-col items-center sm:items-start sm:text-left"
                    >
                        <h3
                            className={`text-3xl ${greatVibes.className} leading-tight drop-shadow-md`}
                        >
                            Nguyễn Bắc
                        </h3>
                        <p className="text-sm text-[#c98083] italic -mt-1">Út nữ</p>
                    </motion.div>
                </div>

                {/* --- Ảnh có animation xuất hiện --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-10"
                >
                    <motion.img
                        src="/imgbgr.jpg"
                        alt="Cô dâu chú rể"
                        className="w-full sm:w-[80%] md:w-[60%] rounded-2xl shadow-lg object-cover"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>


            </section>

            <section className="flex justify-center items-end py-4 px-4 bg-[#fffaf9]">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-sm sm:text-base text-[#c98083] italic text-center leading-relaxed max-w-md"
                >
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </motion.p>
            </section>


            <section className="relative w-full h-[300px] sm:h-[300px] text-center text-[#9d2e2e] font-serif overflow-hidden rounded-3xl shadow-lg mt-4 mb-10">
                {/* Ảnh nền mờ nhẹ, hiển thị đầy đủ */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/backgroundCDCR.jpg')",
                    }}
                ></div>
                <div className="absolute inset-0 bg-white/9 backdrop-blur-[1px]"></div>

                {/* Nội dung — đặt ở dưới cùng */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 z-10 max-w-md w-[90%] mx-auto space-y-1  rounded-2xl p-6 shadow-lg"
                >
                    <h3
                        className={`text-6xl ${greatVibes.className} leading-tight drop-shadow-md text-[#b39383]`}
                    >
                        Countdown
                    </h3>
                    <div className="flex justify-center gap-2 sm:gap-3 text-white">
                        {[
                            { label: "Ngày", value: timeLeft.days },
                            { label: "Giờ", value: timeLeft.hours },
                            { label: "Phút", value: timeLeft.minutes },
                            { label: "Giây", value: timeLeft.seconds },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="bg-[#b84d57]/71 rounded-xl shadow-md px-1 py-2 sm:px-2 sm:py-3 w-20 sm:w-24 text-center"
                            >
                                <p className="text-1xl sm:text-2xl font-bold text-white drop-shadow-md">
                                    {item.value}
                                </p>
                                <p className="text-sm text-white/90 font-light">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>

            </section>

            <section className="text-center py-1 flex flex-col items-center justify-center">
                <h2 className="font-bold text-xl mb-2 text-[#9d2e2e]">Địa điểm tổ chức lễ cưới</h2>
                <p className="font-semibold text-lg text-[#b84d57] mb-4">
                    Thôn Quyết Tiến - Thạch Lạc - Hà Tĩnh
                </p>

                <motion.button
                    onClick={() => {
                        const appUrl = "https://maps.app.goo.gl/y9pDkTvRUCVAw4LK7";
                        const webUrl = "https://maps.app.goo.gl/y9pDkTvRUCVAw4LK7";

                        const start = Date.now();
                        window.location.href = appUrl;

                        setTimeout(() => {
                            if (Date.now() - start < 1500) {
                                window.open(webUrl, "_blank");
                            }
                        }, 1200);
                    }}
                    className="mt-2 px-6 py-2 bg-[#b84d57]/90 text-white rounded-full shadow-md hover:bg-[#9d2e2e] transition-all duration-300"
                >

                    ✨ Xem chỉ đường ✨
                </motion.button>
            </section>

            <section className="mt-10 flex flex-col items-center">
                <h3 className="text-[#9d2e2e] font-bold text-lg mb-3">
                    Hộp mừng hạnh phúc 💝
                </h3>

                <div className="flex flex-row items-center gap-6">
                    {/* QR Chú rể */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/QRCR.png"
                            alt="QR Chú rể"
                            className="w-28 h-28 rounded-lg shadow-md border border-[#9d2e2e]/20"
                        />
                        <p className="text-xs text-[#9d2e2e] mt-1 font-semibold">Dương Kim Quang</p>
                        <p className="text-xs text-[#9d2e2e] mt-1 font-semibold">0201 0007 02314</p>
                    </div>

                    {/* QR Cô dâu */}
                    <div className="flex flex-col items-center">
                        <img
                            src="/QRCD.png"
                            alt="QR Cô dâu"
                            className="w-28 h-28 rounded-lg shadow-md border border-[#9d2e2e]/20"
                        />
                        <p className="text-xs text-[#9d2e2e] mt-1 font-semibold">Nguyễn Thị Bắc</p>
                        <p className="text-xs text-[#9d2e2e] mt-1 font-semibold">8108 0119 99</p>
                    </div>
                </div>
            </section>

            <section className="text-center mt-10">
                <h2 className="font-bold text-2xl mb-4 text-[#9d2e2e]">Album Ảnh</h2>

                {/* Ảnh lớn với hiệu ứng fade */}
                <div className="relative w-full max-w-3xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={selected}
                            src={images[selected]}
                            alt={`Ảnh ${selected + 1}`}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-contain rounded-2xl bg-[#fffaf9]"
                        />
                    </AnimatePresence>
                </div>

                {/* Ảnh nhỏ bên dưới */}
                <div className="flex overflow-x-auto gap-3 mt-4 px-4 justify-center">
                    {images.map((img, index) => (
                        <motion.img
                            key={index}
                            src={img}
                            alt={`thumb-${index}`}
                            onClick={() => setSelected(index)}
                            whileHover={{ scale: 1.1 }}
                            className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${selected === index ? "border-[#b84d57] shadow-md" : "border-transparent opacity-80"
                                }`}
                        />
                    ))}
                </div>
            </section>

            <section className="text-center pt-4 border-t border-[#9d2e2e]/20">
                <p>Cảm ơn {guest} đã cùng chia sẻ niềm vui với chúng tôi 💞</p>
            </section>
        </div>
    );
}