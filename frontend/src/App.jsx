import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import DesktopPage from './components/desktop/DesktopPage';
import AppProvider from './context/AppProvider';
import LandingPage from './components/mobile/LandingPage';
import AllFoodsPage from './components/mobile/AllFoodsPage';
import FoodDetailsPage from './components/mobile/FoodDetailsPage';
import AddFoodBarcodePage from './components/mobile/AddFoodBarcodePage';
import AddFoodManualPage from './components/mobile/AddFoodManualPage';
import FeedbackPage from "./components/mobile/FeedbackPage";

function App() {
  const [isDesktop, setIsDesktop] = useState(null);
  
  const handleWindowResize = () => {
    // setIsDesktop(window.innerWidth >= 768);
    setIsDesktop(false);
  }

  useEffect(() => {
    if (isDesktop === null) {
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      }
    }
  }, []);

  const MobileRoutes = () => (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/foods/:location" element={<AllFoodsPage />} />
      <Route path="/food/:id" element={<FoodDetailsPage />} />
      <Route path="/add-food-barcode" element={<AddFoodBarcodePage />} />
      <Route path="/add-food-manual" element={<AddFoodManualPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
    </Routes>
  );

  const DesktopRoutes = () => (
    <Routes>
      <Route path="/" element={<DesktopPage />} />
    </Routes>
  );

  return (
    <AppProvider>
      <BrowserRouter>
        {isDesktop ? <DesktopRoutes /> : <MobileRoutes />}
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
