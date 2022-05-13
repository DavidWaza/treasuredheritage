import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Herobanner from "./component/Navbar/Herobanner/Herobanner";
import AboutSection from "./component/Navbar/About/AboutSection";
import Level from "./component/Navbar/Level/Level";
import SubTitle from "./component/subTitle";
import Welcome from "./component/Welcome/Welcome";
import Events from "./component/Events/Events";
import MissVis from "./component/MissionStatement/MissVis";

function App() {
  return (
    <div className="App">
      <div>
        <Herobanner />
        <SubTitle title="WELCOME NOTE" />
        <Welcome />
        <AboutSection />
        <SubTitle title="THS LEVEL" />
        <Level />
        <SubTitle title="NEWS & UPDATE" />
        <Events />
        <SubTitle title="MISSION & VISION" />
        <MissVis />
      </div>
    </div>
  );
}
export default App;
