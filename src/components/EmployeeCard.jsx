export default function EmployeeCard({ user }) {
  if (!user) return null

  return (
    <article className="employee-card">
      <img
        className="employee-card__photo"
        src={`https://i.pravatar.cc/320?u=${user.id}`}
        alt=""
        loading="lazy"
        width="320"
        height="240"
      />
      <div className="employee-card__body">
        <h3 className="employee-card__name">{user.name}</h3>
        <p className="employee-card__role">
          {user.company?.name || '-'} • {user.company?.catchPhrase || ''}
        </p>
      </div>
      <div className="employee-card__meta">
        <span className="employee-card__email">{user.email}</span>
        <a className="employee-card__cta" href={`tel:${user.phone}`}>
          Подзвонити
        </a>
      </div>
    </article>
  )
}
