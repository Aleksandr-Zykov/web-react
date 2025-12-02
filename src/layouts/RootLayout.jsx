import Header from '../components/Header.jsx'
import Sidenav from '../components/Sidenav.jsx'
import Footer from '../components/Footer.jsx'
import { Outlet, useLocation } from 'react-router-dom'

export default function RootLayout() {
  const location = useLocation()
  const successState = location.state?.from === 'contact-success' ? location.state : null
  const successMessage = successState?.message ?? 'Дані успішно надіслано.'

  return (
    <div className="layout">
      <Header />
      <Sidenav />
      <main className="main">
        {successState && (
          <p className="main__alert" role="status" aria-live="polite">
            {successMessage}
          </p>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
