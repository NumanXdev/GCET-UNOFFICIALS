import { createRoot } from "react-dom/client";
import AboutPage from "./Components/About/AboutPage.jsx";
import Landing from "./Components/Landing/Landing.jsx"
import UpdatePage from "./Components/Update/UpdatePage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import UploadPage from "./Components/Upload/UploadPage.jsx";
import HomePage from "./Components/Home/HomePage.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import ContentPage from "./Components/Content/ContentPage.jsx";
import "./index.css";
import SubDetails from "./Components/Details/SubDetails.jsx";
import ContributePage from "./Components/Contributors/ContributePage.jsx";


function Layout({ children }) {
  const location = useLocation();

  const noNavbarFooterRoute = ["/"];

  return (
    <>
      {!noNavbarFooterRoute.includes(location.pathname) && <Navbar />}
      {children}
      {!noNavbarFooterRoute.includes(location.pathname) && <Footer />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/:id" element={<SubDetails />} />
        <Route path="/contributors" element={<ContributePage />} />
        <Route path="/updates" element={<UpdatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
