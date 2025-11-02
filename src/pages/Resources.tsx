import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, Bot, RotateCcw, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// --- TÀI LIỆU HỌC THUẬT ---
const resources = [
  {
    title: "Tư bản – Karl Marx (Das Kapital)",
    description: "Tác phẩm kinh điển trình bày lý luận giá trị, lao động và giá trị thặng dư.",
    url: "https://www.marxists.org/archive/marx/works/download/pdf/Capital-Volume-I.pdf",
  },
  {
    title: "Chiến lược phát triển nguồn nhân lực Việt Nam đến năm 2030",
    description: "Văn kiện chính thức của Chính phủ Việt Nam về phát triển nhân lực trong thời đại 4.0.",
    url: "https://thuvienphapluat.vn/van-ban/bo-may-hanh-chinh/Quyet-dinh-176-QD-TTg-2021-Chien-luoc-phat-trien-nhan-luc-Viet-Nam-2030-tam-nhin-2045-470207.aspx",
  },
  {
    title: "Tác động của trí tuệ nhân tạo đến việc làm và chính sách xã hội ở Việt Nam",
    description: "Phân tích học thuật về AI và thị trường lao động Việt Nam.",
    url: "https://vjol.info.vn/index.php/vjss/article/view/64055",
  },
  {
    title: "Cách mạng công nghiệp 4.0 và vấn đề con người trong triết học Mác – Lênin",
    description: "Liên hệ lý luận Mác với bản chất lao động trong thời đại tự động hóa.",
    url: "https://lyluanchinhtri.vn/home/index.php/thuc-tien/item/4226",
  },
  {
    title: "Trí tuệ nhân tạo và phát triển nguồn nhân lực chất lượng cao ở Việt Nam",
    description: "Vai trò giáo dục và sáng tạo trong bối cảnh AI phát triển.",
    url: "https://tapchigiaoduc.moet.gov.vn/tap-chi-giao-duc/tri-tue-nhan-tao-va-phat-trien-nguon-nhan-luc-chat-luong-cao-o-viet-nam-6266.html",
  },
];

// --- DANH SÁCH CÂU HỎI ---
const questions = [
  {
    id: 1,
    q: "Nếu máy móc thay thế lao động người, giá trị còn được tạo ra không?",
    a: "Theo Marx, máy móc không tạo ra giá trị mới. Chỉ lao động của con người – với sức sáng tạo và ý thức – mới sinh ra giá trị thặng dư.",
  },
  {
    id: 2,
    q: "AI có thể được xem là một dạng lao động sáng tạo không?",
    a: "AI không có nhu cầu xã hội, không có mục đích hay ý thức. Nó chỉ phản chiếu tri thức con người đã tạo ra, chứ không thật sự lao động.",
  },
  {
    id: 3,
    q: "Nếu máy móc giúp con người làm ít hơn, đó có phải là giải phóng lao động không?",
    a: "Giải phóng lao động không chỉ là giảm sức lực, mà là giải phóng con người khỏi sự tha hoá, để con người tự do sáng tạo và phát triển bản chất người.",
  },
  {
    id: 4,
    q: "Trong thời đại AI, đâu là thước đo giá trị lao động?",
    a: "Giá trị không còn chỉ ở năng suất, mà ở sáng tạo – thứ không thể bị thay thế bởi máy móc hay thuật toán.",
  },
  {
    id: 5,
    q: "Marx có thể sẽ nghĩ gì nếu ông sống trong kỷ nguyên AI?",
    a: "Ông sẽ thấy AI là công cụ sản xuất mới, nhưng vẫn tin rằng chừng nào con người còn sáng tạo, giá trị vẫn còn tồn tại.",
  },
  {
    id: 6,
    q: "Liệu AI có làm mất đi ý nghĩa của lao động không?",
    a: "Không. AI khiến ta nhìn lại bản chất thật của lao động – đó là quá trình con người tự khẳng định mình thông qua sáng tạo.",
  },
];

const Resources = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState("");

  // --- HIỆU ỨNG TYPING TỰ NHIÊN ---
  useEffect(() => {
    if (selected !== null) {
      const found = questions.find((q) => q.id === selected);
      if (!found) return;
      const text = found.a;
      let index = 0;

      setIsThinking(true);
      setTypedAnswer("");

      const thinkTimer = setTimeout(() => {
        setIsThinking(false);

        const typeNext = () => {
          if (index < text.length) {
            const char = text[index];
            setTypedAnswer((prev) => prev + char);
            index++;

            // pause nhẹ khi gặp dấu chấm hoặc phẩy
            const delay = (char === "." || char === ",") ? 150 : 25;
            setTimeout(typeNext, delay);
          }
        };

        typeNext();
      }, 1200); // MarxBot "nghĩ" 1.2s

      return () => clearTimeout(thinkTimer);
    }
  }, [selected]);

  const handleReset = () => {
    setSelected(null);
    setTypedAnswer("");
    setIsThinking(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/70">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* --- PHẦN TÀI LIỆU --- */}
          <div className="text-center mb-14 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Tài liệu bổ sung
            </h1>
            <p className="text-lg text-muted-foreground">
              Tài liệu học thuật và hội thoại triết học cùng MarxBot 🤖
            </p>
          </div>

          {/* --- TÀI LIỆU THAM KHẢO --- */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Tài liệu tham khảo</h2>
            <div className="grid gap-4">
              {resources.map((r, i) => (
                <Card
                  key={i}
                  className="p-6 border border-border/60 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-card to-background/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{r.title}</h3>
                      <p className="text-sm text-muted-foreground">{r.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={r.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* --- HỘI THOẠI HỌC THUẬT --- */}
          <h2 className="text-2xl font-bold mb-8 text-center tracking-tight">
            Hội thoại học thuật: <span className="text-primary">AI</span> và{" "}
            <span className="text-accent">Lao động con người</span>
          </h2>

          <Card className="p-10 shadow-xl border border-border/70 bg-gradient-to-b from-card/80 to-background/60 backdrop-blur-md">
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Chọn một câu hỏi bên dưới để thảo luận cùng{" "}
              <span className="font-semibold text-primary">MarxBot</span> – trí tuệ nhân tạo mô phỏng tư duy triết học của C. Mác.
            </p>

            {/* DANH SÁCH CÂU HỎI */}
            <div className="grid gap-4 mb-8">
              {questions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                  className={`group flex items-center gap-3 w-full p-5 rounded-xl border transition-all duration-300 
                    ${
                      selected === item.id
                        ? "border-primary bg-primary/10 shadow-md scale-[1.02]"
                        : "border-border hover:border-primary/40 hover:bg-muted/20"
                    }`}
                >
                  <User className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm md:text-base text-foreground font-medium group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                </button>
              ))}
            </div>

            {/* MARXBOT TRẢ LỜI */}
            {selected && (
              <div className="mt-6 animate-fade-in">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 shadow-sm">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 relative overflow-hidden rounded-2xl border border-primary/50 p-5 shadow-inner bg-gradient-to-r from-primary/5 to-accent/5
                    before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-primary/40 before:animate-glow before:blur-[4px] before:opacity-40">
                    <p className="text-sm text-muted-foreground font-semibold mb-1">
                      MarxBot trả lời:
                    </p>
                    {isThinking ? (
                      <p className="italic text-muted-foreground flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        MarxBot đang suy nghĩ<span className="animate-pulse ml-1">▍</span>
                      </p>
                    ) : (
                      <p className="text-base leading-relaxed text-foreground font-serif whitespace-pre-line">
                        {typedAnswer}
                        <span className="animate-pulse ml-1 text-primary">▍</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* NÚT RESET */}
            {selected && !isThinking && (
              <div className="flex justify-center mt-10">
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  className="gap-2 border border-border/60 hover:bg-primary/10"
                >
                  <RotateCcw className="w-4 h-4" /> Chọn câu hỏi khác
                </Button>
              </div>
            )}

            {/* TRÍCH DẪN */}
            <div className="mt-10 pt-6 border-t border-border/60">
              <p className="text-center text-base italic text-muted-foreground leading-relaxed">
                “Máy móc không thay thế con người — nó khiến ta nhận ra sâu sắc hơn bản chất sáng tạo của lao động.”
                <span className="block mt-1 text-sm text-accent">– Diễn giải tư tưởng C. Mác</span>
              </p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
