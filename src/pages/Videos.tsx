import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const videos = [
  {
    id: 1,
    title: "Lý thuyết giá trị lao động của Karl Marx",
    description:
      "Giải thích chi tiết về giá trị sử dụng, giá trị trao đổi và giá trị thặng dư.",
    youtubeId: "zgs3hkKJg1s",
    duration: "15:30",
  },
  {
    id: 2,
    title: "AI và tự động hóa trong sản xuất",
    description:
      "Cách trí tuệ nhân tạo và robot đang thay đổi quy trình sản xuất công nghiệp.",
    youtubeId: "b2JOlMNLIGM",
    duration: "18:45",
  },
  {
    id: 3,
    title: "Chiến lược phát triển nguồn nhân lực Việt Nam",
    description:
      "Định hướng và chính sách đào tạo nguồn nhân lực chất lượng cao thời đại 4.0.",
    youtubeId: "5tgL3jhzE9o",
    duration: "12:20",
  },
  {
    id: 4,
    title: "Tương lai của công việc trong kỷ nguyên AI",
    description:
      "Những thay đổi dự kiến trong thị trường lao động và kỹ năng cần thiết.",
    youtubeId: "sTQCRdEfybc",
    duration: "20:15",
  },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Video giảng dạy
              </h1>
              <p className="text-lg text-muted-foreground">
                Video minh họa sinh động về lao động và trí tuệ nhân tạo
              </p>
            </div>

            {/* Video Cards */}
            <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="hero"
                        size="lg"
                        className="gap-2"
                        onClick={() => setSelectedVideo(video.youtubeId)}
                      >
                        <Play className="w-5 h-5" />
                        Xem video
                      </Button>
                    </div>

                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Dialog xem video */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedVideo && (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Videos;
