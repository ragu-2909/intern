
import Navbar from "./components/navigationbar.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import LandingPage from "./pages/landingpage.jsx";
import Loginpage from "./pages/loginpage.jsx";
import SignUp from "./pages/signupPage.jsx";
import Proddisc from "./pages/proddisc.jsx";
import Custmization from "./pages/customizations.jsx";
import OrderHistory from "./pages/orderHistory.jsx";
function App() {
  return (
    <Router>
      <div className="text-2xl bg-white font-bold overflow-y-auto h-screen">

        
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/login" element={<Loginpage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/product/:id" element={<Proddisc/>} />
          <Route path="/customizations" element= {<Custmization/>}/>
          <Route path="/orderHistory" element= {<OrderHistory/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
