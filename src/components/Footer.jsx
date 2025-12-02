export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">© {currentYear} Lab 13 by Zykov Oleksandr</p>
        <p className="footer__text">Побудовано на Vite + React</p>
      </div>
    </footer>
  )
}
