import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Brain, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Trí tuệ nhân tạo và người lao động trong thời đại mới
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Khám phá mối quan hệ giữa trí tuệ nhân tạo, tự động hóa và bản chất của lao động theo lý luận Mác
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
                <Link to="/content">
                  <Button variant="hero" size="lg" className="gap-2">
                    <BookOpen className="w-5 h-5" />
                    Nội dung
                  </Button>
                </Link>
                <Link to="/videos">
                  <Button variant="hero" size="lg" className="gap-2">
                    <Video className="w-5 h-5" />
                    Video
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button variant="hero" size="lg" className="gap-2">
                    <Brain className="w-5 h-5" />
                    Ôn tập
                  </Button>
                </Link>
                <Link to="/discussion">
                  <Button variant="hero" size="lg" className="gap-2">
                    <Brain className="w-5 h-5" />
                    Q&A
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/content" className="group">
                <div className="p-6 rounded-xl bg-card border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Nội dung học tập</h3>
                  <p className="text-sm text-muted-foreground">
                    4 bài học chuyên sâu về lý thuyết Mác và AI
                  </p>
                </div>
              </Link>

              <Link to="/videos" className="group">
                <div className="p-6 rounded-xl bg-card border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Video giảng dạy</h3>
                  <p className="text-sm text-muted-foreground">
                    Bộ video minh họa sinh động về lao động và AI
                  </p>
                </div>
              </Link>

              <Link to="/quiz" className="group">
                <div className="p-6 rounded-xl bg-card border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Kiểm tra kiến thức</h3>
                  <p className="text-sm text-muted-foreground">
                    Bài tập trắc nghiệm với phản hồi tức thì
                  </p>
                </div>
              </Link>

              <Link to="/simulator" className="group">
                <div className="p-6 rounded-xl bg-card border shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mô phỏng AI vs Con người</h3>
                  <p className="text-sm text-muted-foreground">
                    So sánh năng suất và giá trị lao động
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Quote Section */}
<section className="py-16 bg-muted/50">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-4 italic">
        "Máy móc không tạo ra giá trị mới – chỉ con người mới làm được điều đó."
      </blockquote>
      <p className="text-muted-foreground">
        – Tư tưởng C. Mác về lao động và giá trị thặng dư
      </p>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
