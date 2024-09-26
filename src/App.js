import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import IndividualProject from "./pages/IndividualProject";
import IndividualProject1 from "./pages/IndividualProject1";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import Test from "./Test";
import { useDispatch, useSelector } from "react-redux";
import { fetchSettings } from "./redux/slice/settings-slice";
import BlogDetail from "./pages/BlogDetail";
import { fetchProjects } from "./redux/slice/project-slice";
import { fetchServices } from "./redux/slice/service-slice";
import { fetchBanners } from "./redux/slice/banner-slice";
import { fetchBlogs } from "./redux/slice/blog-slice";
import { setLoading } from "./redux/slice/loading-slice";
import { domain } from "./domain";
import Awards from "./pages/Awards";
import { fetchTeams } from "./redux/slice/team-slice";

function App() {
  const dispatch = useDispatch();
  const { projectData } = useSelector((state) => state.projects);
  const loading = useSelector((state) => state.loading.loading);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchSettings()),
        dispatch(fetchProjects()),
        dispatch(fetchServices()),
        dispatch(fetchBanners()),
        dispatch(fetchBlogs()),
        dispatch(fetchTeams())
      ]);
      dispatch(setLoading(false));
      localStorage.setItem('dataLoaded',true)
    };

    fetchData();
  }, [dispatch]);

  // useEffect(() => {
  //   const dataLoaded= localStorage.getItem('dataLoaded')
  //   console.log(dataLoaded)
  //   if (!dataLoaded) {
  //    window.location.reload(); // Redirect to the target route within the app
  //   }
  // }, []);

  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/test"} element={<Test />} />
            <Route path={"/xperia-group"} element={<About />} />
            <Route path={"/pencil-box"} element={<About />} />
            <Route path={"/xperia-alive"} element={<About />} />
            <Route
              path={"/projects"}
              element={<Projects projectData={projectData} />}
            />
            <Route
              path={"/project-description"}
              element={<IndividualProject1 projectData={projectData} />}
            />
            <Route path={"/team"} element={<Team />} />
            <Route path={"/awards"} element={<Awards />} />
            <Route path={"/blogs"} element={<Blog />} />
            <Route path={"/blog"} element={<BlogDetail />} />
            <Route path={"/locations"} element={<Locations />} />
            <Route path={"/services"} element={<IndividualProject />} />
            <Route path={"/out-of-home"} element={<IndividualProject />} />
            <Route path={"/multiplex"} element={<IndividualProject />} />
            <Route
              path={"/multiplex-and-cinema-advertisement"}
              element={<IndividualProject />}
            />
            <Route
              path={"/cinema-advertisement"}
              element={<IndividualProject />}
            />
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
      }
    </>
  );
}

export default App;
