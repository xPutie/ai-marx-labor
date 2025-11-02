import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lessons = [
  {
    id: 1,
    title: "Khái niệm về lao động cụ thể và lao động trừu tượng",
    description: "Giải thích hai khái niệm theo Mác, ví dụ minh họa bằng công việc thực tế và tự động hóa.",
    path: "/content/lesson-1",
  },
  {
    id: 2,
    title: "Quá trình lao động tạo giá trị trong kỷ nguyên công nghệ số",
    description: "Phân tích cách AI, robot, và phần mềm tham gia vào chuỗi tạo giá trị.",
    path: "/content/lesson-2",
  },
  {
    id: 3,
    title: "Trí tuệ nhân tạo và sự thay đổi bản chất lao động",
    description: "Nêu ra sự dịch chuyển từ lao động chân tay sang lao động trí tuệ, và vấn đề giá trị thặng dư.",
    path: "/content/lesson-3",
  },
  {
    id: 4,
    title: "Định hướng phát triển nguồn nhân lực chất lượng cao của Việt Nam",
    description: "Liên hệ chính sách của Việt Nam trong phát triển con người và giáo dục thời 4.0.",
    path: "/content/lesson-4",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nội dung học tập
              </h1>
              <p className="text-lg text-muted-foreground">
                Khám phá 4 bài học chuyên sâu về lý thuyết Mác và trí tuệ nhân tạo
              </p>
            </div>

            <div className="space-y-6 animate-slide-up">
              {lessons.map((lesson, index) => (
                <Link key={lesson.id} to={lesson.path}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {lesson.id}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {lesson.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {lesson.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>
                </Link>
              ))}
              </div>

            <div className="mt-12 text-center animate-fade-in">
              <Link to="/conclusion">
                <Button variant="hero" size="lg" className="gap-2">
                  <BookCheck className="w-5 h-5" />
                  Đọc kết luận
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Content;
