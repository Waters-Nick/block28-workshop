import './App.css'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={'/'}>HOME</Link>
          <Link to={'/blue'}>BLUE</Link>
          <Link to={'/red'}>RED</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blue' element={<Blue />}></Route>
            <Route path='/red' element={<Red />}></Route>
          </Routes>
        </div>

      </div>
    </>
  )
}

export default App
