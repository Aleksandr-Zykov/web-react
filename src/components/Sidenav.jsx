export default function Sidenav() {
  return (
    <section className="sidenav">
      <aside className="sidebar">
        <h3 className="sidebar__title">Меню</h3>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              Новини
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              Довідка
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="#">
              Налаштування
            </a>
          </li>
        </ul>
      </aside>
      <aside className="sidebar sidebar--links">
        <h3 className="sidebar__title">Ресурси</h3>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a className="sidebar__link" href="https://react.dev/" target="_blank" rel="noreferrer">
              React.dev
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="https://vite.dev/" target="_blank" rel="noreferrer">
              Vite.dev
            </a>
          </li>
          <li className="sidebar__item">
            <a className="sidebar__link" href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              Tailwindcss.com
            </a>
          </li>
        </ul>
      </aside>
    </section>
  )
}
