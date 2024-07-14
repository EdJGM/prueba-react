import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Info from './components/Info'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<>
              <Main />
              <Gallery />
            </>
            } />
            <Route path="/main" element={
              <>
                <Main />
                <Gallery />
              </>
            }
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
