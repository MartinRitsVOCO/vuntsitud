import { useState, useEffect } from 'react';
import DesktopPage from './components/desktop/DesktopPage';
import MobilePage from './components/mobile/MobilePage';
import AppProvider from './context/AppProvider';

function App() {
  const [isDesktop, setIsDesktop] = useState(null);
  
  const handleWindowResize = () => {
    setIsDesktop(window.innerWidth >= 768);
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

  return (
    <AppProvider>
      {isDesktop ? <DesktopPage/> : <MobilePage/>}
    </AppProvider>
  )
}

export default App
