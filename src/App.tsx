// App.tsx
import { useState } from 'react';
import NavBar from "./assets/components/NavBar"
import Films from "./assets/components/Films"
import Carouseltest from "./assets/components/Carouseltest"
import SideBar from "./assets/components/SideBar"
import LoginForm from "./assets/components/Login"


const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <NavBar onMenuClick={() => setShowSidebar(true)} onLoginClick={() => setShowLogin(true)} />
      <SideBar show={showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="flex flex-col bg-[#252525ff] min-h-screen">
        <div className="relative w-full h-64">
          <Carouseltest />
        </div>
        <Films />
      </div>
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
    </>
  )
}

export default App;
