import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from "./Pages/Shop/Shop"
import Men from "./Pages/MEn/Men"
import Women from "./Pages/Women/Women"
import Kids from "./Pages/Kids/Kids"
import Cart from "./Pages/Cart/Cart"
import Signup from "./Pages/SignupPage/Signup"
import Hero from './Components/HeroSection/Hero'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
