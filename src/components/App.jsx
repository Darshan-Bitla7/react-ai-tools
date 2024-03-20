import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { Route, Routes } from "react-router-dom";
import ModelDetails from "./ModelDetails.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/model/:id" element={<ModelDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
