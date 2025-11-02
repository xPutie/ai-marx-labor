import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LayoutGrid, Play } from "lucide-react";

const Discussion = () => {
  const [viewMode, setViewMode] = useState<"board" | "slideshow">("board");

  const padletBoard =
    "https://padlet.com/embed/5vyvx1jp12elgna7";
  const padletSlideshow =
    "https://padlet.com/embed/5vyvx1jp12elgna7/slideshow?autoplay=1&loop=1&duration=auto";

  return (
    <div className="min-h-screen flex flex-col ai-bg text-blue-100">
      <Header />

      <main className="flex-1 py-12 flex flex-col items-center text-center">
        {/* Tiêu đề */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Discussion Board – MLN122
        </h1>

        <p className="text-blue-200 mb-10 max-w-2xl animate-fade-in">
          💬 Đây là bảng thảo luận Padlet của lớp — xem, phản hồi và bình luận câu hỏi từ các nhóm trực tiếp
          ngay trên web, không cần chuyển tab.
        </p>

        {/* Nút chuyển chế độ */}
        <div className="flex gap-4 mb-8">
          <Button
            onClick={() => setViewMode("board")}
            variant={viewMode === "board" ? "default" : "outline"}
            className={`flex items-center gap-2 px-6 py-2 transition-all duration-300 ${
              viewMode === "board"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-transparent text-blue-200 hover:text-white"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Board View
          </Button>

          <Button
            onClick={() => setViewMode("slideshow")}
            variant={viewMode === "slideshow" ? "default" : "outline"}
            className={`flex items-center gap-2 px-6 py-2 transition-all duration-300 ${
              viewMode === "slideshow"
                ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                : "bg-transparent text-blue-200 hover:text-white"
            }`}
          >
            <Play className="w-4 h-4" />
            Slideshow View
          </Button>
        </div>

        {/* Khung hiển thị */}
        <div
          className="w-full max-w-6xl aspect-[16/9] rounded-2xl overflow-hidden border border-blue-400/30 presentation-glow shadow-xl backdrop-blur-lg transition-all duration-700"
        >
          <iframe
            src={viewMode === "board" ? padletBoard : padletSlideshow}
            width="100%"
            height="100%"
            allow="camera; microphone; geolocation; display-capture; clipboard-write"
            className="rounded-2xl border-0"
          ></iframe>
        </div>

        <p className="mt-6 text-sm text-blue-100/70 border-t pt-4 max-w-2xl">
          ⏳ Lưu ý: Bảng thảo luận có thể mất vài giây để tải tùy vào tốc độ mạng của bạn.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Discussion;
