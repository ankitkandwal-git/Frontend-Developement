import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App