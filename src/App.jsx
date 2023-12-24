import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route,  Outlet } from "react-router-dom"; // Perhatikan bahwa kita juga mengimpor Outlet dari react-router-dom

// Pages
import HomePage from "./pages/homepage/HomePage";
import Member from "./pages/memberpage/Member";
import News from "./pages/newspage/News";
import Schedule from "./pages/schedulepage/Schedule";
import Fanclub from "./pages/fanclubpage/Fanclubpage";


import Theater360 from "./pages/about/theater/Theater360"
import TheaterFaq from "./pages/about/theater/TheaterFaq"
import TheaterTicketing from "./pages/about/theater/TheaterTicketing"
import TheaterEvent from "./pages/about/theater/TheaterEvent"
import TheaterSchedule from "./pages/about/theater/TheaterSchedule"
import Jkt48points from "./pages/about/jkt48points/Jkt48points";
import Jkt48pointsShop from "./pages/about/jkt48points/Jkt48pointsShop";
import Shopping from "./pages/shoppage/Shopping";
import Tokopedia from "./pages/shoppage/Tokopedia";

import Login from "./pages/login/login";
import Register from "./pages/register/register";

import './App.css'

// Components
import NavbarComponents from "./components/navbar/NavbarComponents";


const App = () =>  {
  return (
    <div>

      <NavbarComponents>
        
      </NavbarComponents>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/member" element={<Member />} />
        <Route path="/news" element={<News />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Fanclub" element={<Fanclub />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/Theater360" element={<Theater360 />} />
        <Route path="/TheaterFaq" element={<TheaterFaq />} />
        <Route path="/TheaterTicketing" element={<TheaterTicketing />} />
        <Route path="/TheaterEvent" element={<TheaterEvent />} />
        <Route path="/TheaterSchedule" element={<TheaterSchedule />} />
        <Route path="/Jkt48points" element={<Jkt48points />} />
        <Route path="/Jkt48pointsShop" element={<Jkt48pointsShop />} />
        <Route path="/Shopping" element={<Shopping />} />
        <Route path="/Tokopedia" element={<Tokopedia />} ></Route>
      </Routes>
      <Outlet />
      
    </div>
  );
}

export default App;
