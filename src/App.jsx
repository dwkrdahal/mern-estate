import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, About, Profile, SignUp, SignIn } from './pages';
import Header from './components/Header';

function App() {
  return (
    <>
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}


export default App