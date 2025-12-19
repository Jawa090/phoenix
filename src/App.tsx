import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import LocationPage from "./pages/LocationPage";
import ScrollToTop from "./components/ScrollToTop";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfServices from "./pages/TermsOfServices";
import NotFound from "./pages/NotFound";
import FloatingCTA from "./components/FloatingCTA";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Samples from "./pages/Samples";
import Pricing from "./pages/Pricing";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/locations/:slug" element={<LocationPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingCTA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
