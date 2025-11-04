import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import Segments from "./pages/Segments";
import Tariffs from "./pages/Tariffs";
import Prices from "./pages/Prices";
import About from "./pages/About";
import KnowledgeBase from "./pages/KnowledgeBase";
import Article from "./pages/Article";
import SegmentPage from "./pages/SegmentPage";
import Cases from "./pages/Cases";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/uslugi/:slug" element={<ServiceDetailPage />} />
          <Route path="/dlya-kogo" element={<Segments />} />
          <Route path="/tarify" element={<Tariffs />} />
          <Route path="/ceny" element={<Prices />} />
          <Route path="/o-kompanii" element={<About />} />
          <Route path="/baza-znaniy" element={<KnowledgeBase />} />
          <Route path="/baza-znaniy/:slug" element={<Article />} />
          <Route path="/komu/:slug" element={<SegmentPage />} />
          <Route path="/kejsy" element={<Cases />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
