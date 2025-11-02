import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Content from "./pages/Content";
import Videos from "./pages/Videos";
import Quiz from "./pages/Quiz";
import Simulator from "./pages/Simulator";
import Resources from "./pages/Resources";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";
import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Conclusion from "./pages/Conclusion";
import NotFound from "./pages/NotFound";
import Discussion from "./pages/Discussion";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/content" element={<Content />} />
          <Route path="/content/lesson-1" element={<Lesson1 />} />
          <Route path="/content/lesson-2" element={<Lesson2 />} />
          <Route path="/content/lesson-3" element={<Lesson3 />} />
          <Route path="/content/lesson-4" element={<Lesson4 />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/conclusion" element={<Conclusion />} />
          <Route path="/discussion" element={<Discussion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
