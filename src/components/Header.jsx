import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectThemeMode, toggleTheme } from '../features/theme/themeSlice.js'

const baseClass = 'nav__link'

function getNavLinkClass({ isActive, isPending }) {
  let classes = baseClass
  if (isPending) {
    classes += ' nav__link--pending'
  }
  if (isActive) {
    classes += ' nav__link--active'
  }
  return classes
}

export default function Header() {
  const dispatch = useDispatch()
  const theme = useSelector(selectThemeMode)

  const handleToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <header className="header">
      <div className="header__inner">
        <h1 style={{ margin: 0, color: 'var(--brand)' }}>Лабораторна робота № 13</h1>
      </div>
      <nav className="nav" aria-label="Головна навігація">
        <NavLink className={getNavLinkClass} to="/" end>
          Головна
        </NavLink>
        <NavLink className={getNavLinkClass} to="/about">
          Про нас
        </NavLink>
        <NavLink className={getNavLinkClass} to="/contacts">
          Контакти
        </NavLink>
        <div className="nav__actions">
          <button
            type="button"
            className="nav__link nav__link--cta"
            onClick={handleToggle}
            title="Перемкнути тему"
          >
            {theme === 'light' ? 'Темна' : 'Світла'}
          </button>
        </div>
      </nav>
    </header>
  )
}
