const FALLBACK_IMG = 'https://picsum.photos/seed/react-lab/640/400'

export default function Card({ item }) {
  const { title, excerpt, img, date } = item
  const publishedAt = date ? new Date(date).toLocaleDateString('uk-UA') : ''

  return (
    <article className="card">
      <img className="card__media" src={img ?? FALLBACK_IMG} alt={title} loading="lazy" />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__excerpt">{excerpt}</p>
      </div>
      <div className="card__meta">
        <span className="card__date">{publishedAt}</span>
        <a className="card__link" href="#">
          Читати далі
        </a>
      </div>
    </article>
  )
}
