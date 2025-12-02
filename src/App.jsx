import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import RootLayout from './layouts/RootLayout.jsx'
import NotFound from './pages/NotFound.jsx'
import { selectThemeMode } from './features/theme/themeSlice.js'

function App() {
  const mode = useSelector(selectThemeMode)

  return (
    <div className="app-theme-root" data-theme={mode}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
