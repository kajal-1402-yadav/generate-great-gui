
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SmartInventory from "./pages/SmartInventory";
import DemandPrediction from "./pages/DemandPrediction";
import MenuOptimization from "./pages/MenuOptimization";
import WasteAnalysis from "./pages/WasteAnalysis";
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
          <Route path="/smart-inventory" element={<SmartInventory />} />
          <Route path="/demand-prediction" element={<DemandPrediction />} />
          <Route path="/menu-optimization" element={<MenuOptimization />} />
          <Route path="/waste-analysis" element={<WasteAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
