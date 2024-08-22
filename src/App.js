import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import IndividualProject from "./pages/IndividualProject";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchSettings } from "./redux/slice/settings-slice";

function App() {
  const [projectData, setProjectData] = useState(null);
  const [serviceData, setServiceData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchServiceData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/services/all-services`
      );
      if (response.status === 200) {
        setServiceData(response.data);
        localStorage.setItem("services", JSON.stringify(response.data));
      }
    };
    const fetchProjectData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/projects/all-project`
      );
      if (response.status === 200) {
        setProjectData(response.data);
        localStorage.setItem("projects", JSON.stringify(response.data));
      }
    };

    fetchServiceData();
    fetchProjectData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([dispatch(fetchSettings())]);
    };

    fetchData();
  }, [dispatch]);



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home serviceData={serviceData} />} />
          <Route path={"/xperia-group"} element={<About />} />
          <Route path={"/pencil-box"} element={<About />} />
          <Route path={"/xperia-alive"} element={<About />} />
          <Route
            path={"/projects"}
            element={<Projects projectData={projectData} />}
          />
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
