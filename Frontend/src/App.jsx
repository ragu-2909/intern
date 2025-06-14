
import Navbar from "./components/navigationbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/landingpage.jsx";
import Loginpage from "./pages/loginpage.jsx";
import SignUp from "./pages/signupPage.jsx";
import Proddisc from "./pages/proddisc.jsx";
function App() {
  return (
    <Router>
      <div className="text-2xl bg-white font-bold overflow-y-auto h-screen">

        
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/product/:id" element={<Proddisc/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
