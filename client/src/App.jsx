import AgentsPage from "./pages/AgentsPage/AgentsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AgentInfoPage from "./pages/AgentInfoPage/AgentInfoPage";
import { RecoilRoot } from "recoil";
import MapsPage from "./pages/MapsPage/MapsPage";
import MapInfoPage from "./pages/MapInfoPage/MapInfoPage";
import WeaponsPage from "./pages/WeaponsPage/WeaponsPage";
import WeaponSkinsPage from "./pages/WeaponSkinsPage/WeaponSkinsPage";
import SkinPage from "./pages/SkinPage/SkinPage";
import LevelBorders from "./pages/LevelBordersPage/LevelBordersPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/agents" element={<AgentsPage />} />
          <Route exact path="/agents/:agentName" element={<AgentInfoPage />} />
          <Route exact path="/maps" element={<MapsPage />} />
          <Route exact path="/maps/:mapName" element={<MapInfoPage />} />
          <Route exact path="/weapons" element={<WeaponsPage />} />
          <Route
            exact
            path="/weapons/:weaponName"
            element={<WeaponSkinsPage />}
          />
          <Route
            exact
            path="/weapons/:weaponName/:skinName"
            element={<SkinPage />}
          />
          <Route exact path="/levelBorders" element={<LevelBorders />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
