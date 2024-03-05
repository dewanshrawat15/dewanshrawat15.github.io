import './App.css'
import { useCheckIfTabletOrMobile } from './api/hooks';
import { HeroComponent } from "./components/Hero";

function App() {
  const isTabletOrMobile = useCheckIfTabletOrMobile();
  return (
    <>
      <HeroComponent isTabletOrMobile={isTabletOrMobile} />
    </>
  )
}

export default App
