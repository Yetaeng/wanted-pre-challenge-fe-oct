import { Routes, Route } from 'react-router-dom'
import Root from './Root'
import About from './About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
