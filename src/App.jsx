import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavbarComponent from "./component/NavbarComponent";
import SidebarComponent from "./component/SidenbarComponent";
import FooterComponent from "./component/FooterComponent";

function App() {
  return (
    <div className="container max-w-screen-xl mx-auto ">
      <div className="Navbar h-20 bg-[#171d25]">
        <NavbarComponent />
      </div>
      <div className="Content grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 bg-[#183849] ">
        <div className="hidden Sidebar lg:block">
          <SidebarComponent />
        </div>
        <div className="Content lg:col-span-4">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </div>
      </div>
      <div className="Footer">
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
