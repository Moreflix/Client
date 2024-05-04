// App.tsx
import { useState } from 'react';
import NavBar from "./components/NavBar"
import Films from "./components/Films"
import Carouseltest from "./components/Carouseltest"
import SideBar from "./components/SideBar"
import LoginForm from "./components/Login"

const App: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <NavBar onMenuClick={() => setShowSidebar(true)} onLoginClick={() => setShowLogin(true)} />
      <SideBar show={showSidebar} onClose={() => setShowSidebar(false)} />
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}
      <div className="flex flex-col bg-[#252525ff] min-h-screen">
        <div className="relative w-full h-64">
          <Carouseltest />
        </div>
        <Films />
      </div>
    </>
  )
}

export default App;
