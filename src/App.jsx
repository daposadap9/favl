import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Piloto from './pages/Piloto'
import Favl from './pages/Favl'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/piloto" element={<Piloto />} />
        <Route path="/favl" element={<Favl />} />
      </Routes>
    </>
  )
}

export default App
