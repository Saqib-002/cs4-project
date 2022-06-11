import {useState} from "react"
import { Routes,Route,Navigate } from 'react-router-dom';
import Header from './component/header';
import Footer from './component/footer';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/signInPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from "./pages/homePage";


function App() {
  const [isSignedIn,setIsSignedIn]=useState(false);
  const [currentUser,setCurrentUser]=useState({});
  return (
    <>
        <Header isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
      <Routes>
          <Route exact path="/" element={isSignedIn?<Navigate to="/home"/>:<LandingPage/>}/>
          <Route exact path="/sign-in" element={isSignedIn?<Navigate to="/home"/>:<SignInPage setCurrentUser={setCurrentUser} setIsSignedIn={setIsSignedIn}/>}
          />
          <Route exact path="/register" element={isSignedIn?<Navigate to="/home"/>:<RegisterPage setCurrentUser={setCurrentUser} setIsSignedIn={setIsSignedIn}/>}
          />
          <Route exact path="/home" element={isSignedIn?<HomePage/>:<Navigate to="/"/>}/>
      </Routes>
        <Footer/>
    </>
  );
}

export default App;
