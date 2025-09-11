import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import ArchivesPage from "./pages/Archives";
import MapPage from "./pages/Map";
import ToursPage from "./pages/Tours";
import AudioGuidePage from "./pages/AudioGuide";
import MonasteriesPage from "./pages/Monasteries";
import { ApiConfigProvider } from "@/context/ApiConfigContext";
import { I18nProvider } from "@/context/I18nContext";

const queryClient = new QueryClient();

const App = () => (
  <ApiConfigProvider>
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/archives" element={<ArchivesPage />} />
              <Route path="/calendar" element={<Placeholder />} />
              <Route path="/audio-guide" element={<AudioGuidePage />} />
              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
      </QueryClientProvider>
    </I18nProvider>
  </ApiConfigProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
