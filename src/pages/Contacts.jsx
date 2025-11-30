import { useState } from 'react'
import ContactFormBasic from '../sections/ContactFormBasic.jsx'
import ContactFormRHF from '../sections/ContactFormRHF.jsx'

export default function Contacts() {
  const [mode, setMode] = useState('basic')

  return (
    <section aria-labelledby="contacts-title">
      <h2 id="contacts-title" className="main__title">
        Контакти
      </h2>

      <p>
        Оберіть варіант, щоб порівняти класичну роботу з FormData та реалізацію через React Hook Form з
        відправкою JSON.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
        <button
          type="button"
          className="contact-form__button"
          onClick={() => setMode('basic')}
          disabled={mode === 'basic'}
        >
          React FormData
        </button>

        <button
          type="button"
          className="contact-form__button"
          onClick={() => setMode('rhf')}
          disabled={mode === 'rhf'}
        >
          RHF JSON
        </button>
      </div>

      {mode === 'basic' ? <ContactFormBasic /> : <ContactFormRHF />}
    </section>
  )
}
