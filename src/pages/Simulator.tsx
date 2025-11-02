import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Bot } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Simulator = () => {
  const [selected, setSelected] = useState<"human" | "robot" | null>(null);

  const humanData = {
    speed: 60,
    creativity: 95,
    surplusValue: 80,
  };

  const robotData = {
    speed: 95,
    creativity: 30,
    surplusValue: 40,
  };

  const currentData = selected === "human" ? humanData : robotData;

  return (
    <div className="min-h-screen flex flex-col presentation-mode">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI vs Human Work Simulator
            </h1>
            <p className="text-lg text-blue-100">
              So sánh sức sáng tạo và giá trị lao động giữa Con người và Trí tuệ nhân tạo
            </p>
          </div>

          {/* Lựa chọn */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card
              className={`p-8 cursor-pointer presentation-card transition-all duration-700 hover:-translate-y-2 ${
                selected === "human"
                  ? "scale-105 ring-2 ring-primary presentation-glow"
                  : "opacity-80 hover:opacity-100"
              }`}
              onClick={() => setSelected("human")}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-primary">
                  Người lao động
                </h3>
                <p className="text-blue-100/80">
                  Sức sáng tạo và khả năng tư duy phản biện
                </p>
              </div>
            </Card>

            <Card
              className={`p-8 cursor-pointer presentation-card transition-all duration-700 hover:-translate-y-2 ${
                selected === "robot"
                  ? "scale-105 ring-2 ring-accent presentation-glow"
                  : "opacity-80 hover:opacity-100"
              }`}
              onClick={() => setSelected("robot")}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-accent">
                  Robot / AI
                </h3>
                <p className="text-blue-100/80">
                  Tốc độ, chính xác và tự động hóa cao
                </p>
              </div>
            </Card>
          </div>

          {/* Kết quả mô phỏng */}
          {selected && (
            <Card className="p-8 mt-4 presentation-card animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-100">
                So sánh hiệu suất
              </h3>

              <div className="space-y-6 mb-8">
                {[
                  { label: "Tốc độ làm việc", key: "speed" },
                  { label: "Sáng tạo", key: "creativity" },
                  { label: "Giá trị thặng dư tạo ra", key: "surplusValue" },
                ].map((item) => (
                  <div key={item.key}>
                    <div className="flex justify-between mb-2 text-blue-100">
                      <span className="font-medium">{item.label}</span>
                      <span className="font-bold">
                        {currentData[item.key as keyof typeof currentData]}%
                      </span>
                    </div>
                    <div className="h-4 bg-blue-900/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-1000 ease-out ${
                          selected === "human" ? "bg-primary" : "bg-accent"
                        }`}
                        style={{
                          width: `${currentData[item.key as keyof typeof currentData]}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MarxBot phản hồi */}
              <div className="mt-10 p-6 bg-gradient-to-br from-blue-900/40 to-blue-800/30 rounded-xl border border-blue-500/30 animate-fade-in">
                <p className="italic text-blue-100 leading-relaxed">
                  <strong>MarxBot:</strong>{" "}
                  {selected === "human"
                    ? "Con người không chỉ tạo ra vật chất — mà còn sáng tạo ra chính bản thân mình qua lao động."
                    : "Máy móc chỉ chuyển giao giá trị cũ; còn giá trị mới chỉ nảy sinh khi có lao động sống — ý thức và sáng tạo."}
                </p>
              </div>

              {/* Giải thích triết học */}
              <Card className="mt-10 p-6 bg-blue-950/40 border border-blue-700/40 shadow-inner">
                <p className="text-sm leading-relaxed text-blue-100">
                  <span className="font-semibold">Giải thích: </span>
                  Theo lý luận của C. Mác, máy móc có thể tăng năng suất lao động,
                  nhưng <span className="font-semibold text-primary">giá trị chỉ xuất hiện khi có lao động sống</span> – tức là hoạt động sáng tạo của con người.{" "}
                  {selected === "human"
                    ? "Con người tạo ra giá trị mới thông qua tư duy, sáng tạo, và ý thức về mục đích."
                    : "Robot hoạt động dựa trên lập trình sẵn, không mang năng lực sáng tạo — do đó không tạo ra giá trị mới."}
                </p>
              </Card>

              {/* Nút reset */}
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-200 hover:bg-blue-700/40 transition"
                  onClick={() => setSelected(null)}
                >
                  🔁 Thử lại
                </Button>
              </div>
            </Card>
          )}

          {/* Quote triết học */}
          <p className="text-center text-blue-200/60 italic mt-12">
            “Máy móc không thay thế con người — nó khiến ta hiểu sâu hơn về bản chất sáng tạo của lao động.”<br />
            <span className="text-blue-400">— C. Mác, Tư bản, quyển I</span>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Simulator;
