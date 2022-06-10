import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import LandingPage from './pages/LandingPage';
import SignInPage from './pages/signInPage';
import RegisterPage from './pages/RegisterPage';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Header/>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/sign-in" element={<SignInPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
        <Footer/>
    </>
  );
}

export default App;
