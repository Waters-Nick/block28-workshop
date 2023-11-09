import './App.css'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id="container">
        <NavBar />

        <div id="main-section">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blue' element={<Blue />}></Route>
            <Route path='/red' element={<Red />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
