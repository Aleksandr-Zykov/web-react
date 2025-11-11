import Card from './Card.jsx'

export default function CardGrid({ items, compact = false }) {
  const className = compact ? 'cards cards--compact' : 'cards'

  return (
    <section aria-labelledby="news-title">
      <h2 id="news-title" className="main__title">
        Останні новини
      </h2>
      <div className={className}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
