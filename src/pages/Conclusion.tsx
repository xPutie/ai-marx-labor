import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Conclusion = () => {
  return (
    <div className="min-h-screen flex flex-col presentation-mode">
      <Header />

      <main className="flex-1 py-16 relative overflow-hidden">
        {/* 💫 Hiệu ứng ánh sáng động mờ phía sau */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-black/30 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#60a5fa] via-[#fbbf24] to-[#ef4444] bg-clip-text text-transparent drop-shadow-sm">
                Kết luận
              </h1>
              <p className="text-lg text-blue-100/80">
                Tổng kết về mối quan hệ giữa Con người, Lao động và Trí tuệ nhân tạo
              </p>
            </div>

            <Card className="presentation-card backdrop-blur-lg shadow-2xl border-blue-500/30">
              <CardContent className="p-10 md:p-14 space-y-8 text-justify leading-relaxed text-blue-100/90">
                <p className="text-lg">
                  Trong kỷ nguyên trí tuệ nhân tạo, bản chất của lao động con người đang thay đổi sâu sắc. 
                  Theo Karl Marx, <span className="font-semibold italic text-blue-300">lao động cụ thể </span> 
                  tạo ra giá trị sử dụng, còn <span className="font-semibold italic text-blue-300">lao động trừu tượng </span> 
                  là nguồn gốc của giá trị hàng hóa. Máy móc và AI không thể tự tạo ra giá trị mới – 
                  chúng chỉ chuyển tải giá trị đã có sẵn. 
                  Chỉ <span className="font-bold text-accent">con người</span> mới có khả năng sáng tạo, 
                  mới “thổi hồn” vào vật chất, biến nó thành giá trị xã hội.
                </p>

                <p className="text-lg">
                  Ở Việt Nam, chiến lược phát triển con người gắn liền với triết lý: 
                  <span className="italic"> “Công nghệ là phương tiện, con người là mục tiêu.”</span> 
                  Khi trí tuệ nhân tạo phát triển, nhiệm vụ của chúng ta không phải là chạy theo máy móc, 
                  mà là học cách sử dụng nó để mở rộng trí tuệ, trí tưởng tượng, và giá trị nhân văn. 
                  Đó là tinh thần của thời đại — kết hợp lý luận Mác – Lênin với năng lực sáng tạo mới.
                </p>

                {/* 🌌 Quote Card */}
                <div className="mt-12 text-center relative p-8 rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-950/60 to-blue-800/20 backdrop-blur-xl presentation-glow animate-fade-in">
                  <p className="text-xl italic text-blue-100 font-light">
                    “AI có thể giúp con người làm việc nhanh hơn, 
                    nhưng chỉ con người mới có thể làm cho thế giới trở nên ý nghĩa hơn.”
                  </p>
                  <p className="mt-4 text-blue-400 font-medium">— C. Mác (nếu ông sống trong thế kỷ XXI)</p>
                </div>

                {/* 🔭 Reflection */}
                <div className="mt-16 text-center">
                  <p className="text-lg text-blue-200">
                    <span className="font-semibold text-accent">AI</span> không phải là điểm kết thúc của lao động,<br />
                    mà là <span className="font-semibold text-primary">tấm gương phản chiếu trí tuệ con người.</span>
                  </p>
                  <p className="mt-4 text-blue-100/70 text-sm italic">
                    Tương lai không thuộc về máy móc. Tương lai thuộc về những ai biết hiểu — và sáng tạo cùng chúng.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Conclusion;
