import { useState } from 'react'
import { NEWS } from '../data/news.js'
import Toggle from '../components/Toggle.jsx'
import CardGrid from '../components/CardGrid.jsx'

export default function Home() {
  const [compact, setCompact] = useState(false)

  return (
    <>
      <div className="home__header">
        <h2 className="home__title">Головна</h2>
        <Toggle pressed={compact} onToggle={setCompact} />
      </div>
      <CardGrid items={NEWS} compact={compact} />
    </>
  )
}
