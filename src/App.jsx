// CSS IMPORT
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens";
import { Footer, Header } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
