import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import IndividualProject from "./pages/IndividualProject";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/services/all-services`
      );
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("services", JSON.stringify(response.data));
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  // if (!data) {
  //   return (
  //     <>
  //       <Loader />
  //     </>
  //   );
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/xperia-group"} element={<About />} />
          <Route path={"/pencil-box"} element={<About />} />
          <Route path={"/xperia-alive"} element={<About />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/team"} element={<Team />} />
          <Route path={"/blogs"} element={<Blog />} />
          <Route path={"/locations"} element={<Locations />} />
          <Route path={"/services"} element={<IndividualProject />} />
          <Route path={"/out-of-home"} element={<IndividualProject />} />
          <Route path={"/multiplex"} element={<IndividualProject />} />
          <Route path={"/cinema-advertising"} element={<IndividualProject />} />
          <Route
            path={"/events-and-promotions"}
            element={<IndividualProject />}
          />
          <Route path={"/content-design"} element={<IndividualProject />} />
          <Route
            path={"/creative-retainership"}
            element={<IndividualProject />}
          />
          <Route path={"/corporate-films"} element={<IndividualProject />} />
          <Route path={"/music"} element={<IndividualProject />} />
          <Route path={"/get-in-touch"} element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
