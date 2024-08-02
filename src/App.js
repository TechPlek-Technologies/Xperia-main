import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./Test";
import About from "./pages/About";


function App() {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about-us"} element={<About />} />
          <Route path={"/test"} element={<Test />} />
          
        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
