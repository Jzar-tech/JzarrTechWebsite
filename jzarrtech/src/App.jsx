import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AIAgents from "./pages/AIAgents";
import ScrollToTop from "./components/ScrollToTop";
import CustomWebsites from "./pages/CustomWebsites";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Ecommerce from "./pages/Ecommerce";
import MobileApps from "./pages/MobileApps";
import ContactConsultation from "./pages/ContactConsultation";
import Seo from "./pages/Seo";
import Api from "./pages/Api";
import Graphics from "./pages/Graphics";
import Aboutus from "./pages/Aboutus";
import Ourprocess from "./pages/Ourprocess";
import Landingpage from "./pages/Landingpage";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";




function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-agents" element={<AIAgents />} />
        <Route path="/custom-websites" element={<CustomWebsites />} />
         <Route path="/Ecommerce" element={<Ecommerce />} />
         <Route path="/MobileApps" element={<MobileApps />} />
           <Route path="/Seo" element={<Seo />} />
         <Route path="/contact-consultation"element={<ContactConsultation />} />
         <Route path="/Api" element={<Api />} />
          <Route path="/Graphics" element={<Graphics />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Ourprocess" element={<Ourprocess />} />
          <Route path="/IT-Services" element={<Landingpage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
         


        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
