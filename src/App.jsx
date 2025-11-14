import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Work from './pages/Work'
import Misc from './pages/Misc'
import InfoCardTest from './pages/InfoCardTest'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/misc" element={<Misc />} />
          <Route path="/test" element={<InfoCardTest />} />
          <Route path="/:projectSlug" element={<Work />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
