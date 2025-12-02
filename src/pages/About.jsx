import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EmployeeCard from '../components/EmployeeCard.jsx'
import { fetchEmployees } from '../features/employees/employeesThunks.js'
import { selectEmployees } from '../features/employees/employeesSlice.js'

export default function About() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(selectEmployees)
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees())
    }
  }, [status, dispatch])

  const list = useMemo(() => {
    const data = Array.isArray(items) ? items : []
    if (!query) return data
    const normalized = query.toLowerCase()

    return data.filter(user => {
      const name = user.name?.toLowerCase() ?? ''
      const company = user.company?.name?.toLowerCase() ?? ''
      return name.includes(normalized) || company.includes(normalized)
    })
  }, [items, query])

  const handleSearch = event => {
    setQuery(event.target.value)
  }

  const loading = status === 'loading'
  const hasError = status === 'failed' && error
  const noData = status === 'succeeded' && Array.isArray(list) && list.length === 0

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

      {!loading && hasError && (
        <div className="team__status team__status--error" role="alert">
          Помилка: {error}
        </div>
      )}

      {!loading && !hasError && noData && (
        <p className="team__status">Немає співробітників за вашим запитом.</p>
      )}

      {!loading && !hasError && Array.isArray(list) && list.length > 0 && (
        <div className="team__list">
          {list.map(user => (
            <EmployeeCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </section>
  )
}
