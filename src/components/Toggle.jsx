export default function Toggle({ pressed, onToggle, onLabel = 'Compact: увімкнено', offLabel = 'Compact: вимкнено' }) {
  return (
    <div className="toggle" role="group" aria-label="Перемикач відображення карток">
      <span className="toggle__status">{pressed ? onLabel : offLabel}</span>
      <button
        type="button"
        className="toggle__btn"
        aria-pressed={pressed}
        onClick={() => onToggle(!pressed)}
      >
        Перемкнути
      </button>
    </div>
  )
}
