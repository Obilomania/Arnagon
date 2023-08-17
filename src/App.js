import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LandingPage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
