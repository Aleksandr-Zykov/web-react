import { useTheme } from '../context/ThemeContext.jsx'

export default function Header({ page = 'home', onNavigate }) {
  const { theme, toggleTheme } = useTheme()

  const go = (event, to) => {
    event.preventDefault()
    onNavigate?.(to)
  }

  const isCurrent = to => (page === to ? 'page' : undefined)

  return (
    <header className="header">
      <div className="header__inner">
        <h1 style={{ margin: 0, color: 'var(--brand)' }}>Лабораторна робота № 10</h1>
      </div>
      <nav className="nav" aria-label="Головна навігація">
        <a className="nav__link" href="#" aria-current={isCurrent('home')} onClick={event => go(event, 'home')}>
          Головна
        </a>
        <a className="nav__link" href="#" aria-current={isCurrent('about')} onClick={event => go(event, 'about')}>
          Про нас
        </a>
        <a className="nav__link" href="#" onClick={event => event.preventDefault()}>
          Контакти
        </a>
        <div className="nav__actions">
          <button
            type="button"
            className="nav__link nav__link--cta"
            onClick={toggleTheme}
            title="Перемкнути тему"
          >
            {theme === 'light' ? 'Темна' : 'Світла'}
          </button>
        </div>
      </nav>
    </header>
  )
}
