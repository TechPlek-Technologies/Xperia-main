import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./Test";
import About from "./pages/About";
import Projects from "./pages/Projects";
import IndividualProject from "./pages/IndividualProject";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/xperia-group"} element={<About />} />
          <Route path={"/pencil-box"} element={<About />} />
          <Route path={"/xperia-live"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/individual-projects"} element={<IndividualProject />} />
          <Route path={"/team"} element={<Team/>} />
          <Route path={"/blogs"} element={<Blog/>} />
          <Route path={"/locations"} element={<Locations/>} />
          <Route path={"/get-in-touch"} element={<Contact />} />
          
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
