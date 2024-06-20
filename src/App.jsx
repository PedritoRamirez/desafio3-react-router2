
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Pokemones from './pages/Pokemones'
import Detalle from './pages/Detalle'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Pokemones' element={<Pokemones/>}/>
        <Route path='/Pokemones/:name' element={<Detalle/>}/>
      </Routes>
    </>
  )
}

export default App
