import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/shared/Navbar";
import Footer from "./pages/shared/Footer";

function App() {
  return (
    <>
    <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  );
}

export default App;
