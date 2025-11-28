import { useMemo, useState } from 'react'
import EmployeeCard from '../components/EmployeeCard.jsx'
import { useFetchEmployees } from '../hooks/useFetchEmployees.js'

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

export default function About() {
  const { data, loading, error } = useFetchEmployees(ENDPOINT)
  const [query, setQuery] = useState('')

  const employees = useMemo(() => {
    const items = Array.isArray(data) ? data : []
    if (!query) return items
    const normalized = query.toLowerCase()

    return items.filter(user => {
      const name = user.name?.toLowerCase() ?? ''
      const company = user.company?.name?.toLowerCase() ?? ''
      return name.includes(normalized) || company.includes(normalized)
    })
  }, [data, query])

  const handleSearch = event => {
    setQuery(event.target.value)
  }

  return (
    <section className="team" aria-labelledby="about-title">
      <div className="team__header">
        <h2 id="about-title" className="team__title">
          Наша команда
        </h2>
        <div className="team__controls">
          <label className="team__search">
            <span className="team__search-label">Пошук співробітників</span>
            <input
              className="team__search-input"
              type="search"
              placeholder="Введіть ім’я або компанію"
              value={query}
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>

      {loading && <p className="team__status">Завантаження…</p>}
      {!loading && error && <p className="team__status team__status--error">Помилка: {error}</p>}
      {!loading && !error && employees.length === 0 && (
        <p className="team__status">Немає співробітників за вашим запитом.</p>
      )}
      {!loading && !error && employees.length > 0 && (
        <div className="team__list">
          {employees.map(user => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </section>
  )
}
