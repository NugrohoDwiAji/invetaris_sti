import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import LandingPage from "./page/LandingPage";
import MainLayouts from "./layouts/MainLayouts";
import InputPage from "./page/InputPage";
import DetailAlat from "./detail/DetailAlat";

function App() {


  const isAuthenticated = () => {
    // Cek apakah token ada di localStorage
    return !!localStorage.getItem('token');
  };

  const RedirectToHomeOrLogin = () => {
    return isAuthenticated() ? <Navigate to="/landingPage/mikrotik" /> : <Navigate to="/login" />;
  };

  const PrivateRoute = ({ element, ...rest }) => {
    return isAuthenticated() ? element : <Navigate to="/login" />;
  };
  return (    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RedirectToHomeOrLogin/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<MainLayouts showHader={true} />}>
            <Route path="/input" element={<PrivateRoute element={<InputPage/>}/>} />
            <Route path="/landingPage/:judul" element={<PrivateRoute element={<LandingPage/>}/>} />
            <Route path="/detail/:id/:nama" element={<PrivateRoute element={<DetailAlat/>}/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
