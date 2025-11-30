import { useState } from 'react'
import Header from './components/Header.jsx'
import Sidenav from './components/Sidenav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="layout">
      <Header page={page} onNavigate={setPage} />
      <Sidenav />
      <main className="main">
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'contacts' && <Contacts />}
      </main>
      <Footer />
    </div>
  )
}

export default App
