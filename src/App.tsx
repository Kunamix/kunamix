import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import Index from "./pages/Index"
import ReferralProgram from "./pages/ReferPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import NotFound from "./pages/NotFound"
import { TooltipProvider } from "./components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="kunamix-ui-theme">
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/refer" element={<ReferralProgram />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App