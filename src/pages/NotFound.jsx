import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  const location = useLocation()

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <h2 id="not-found-title" className="main__title">
        Помилка 404
      </h2>
      <p>
        На жаль, сторінку <code className="not-found__code">{location.pathname}</code> не знайдено.
      </p>
      <p>Перевірте адресу або поверніться на головну сторінку.</p>
      <Link className="contact-form__button" to="/">
        До головної
      </Link>
    </section>
  )
}
