import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function useNavigateCountdown() {
  const navigate = useNavigate()
  const [secondsLeft, setSecondsLeft] = useState(null)
  const timerRef = useRef(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  useEffect(() => {
    return clearTimer
  }, [clearTimer])

  const startCountdown = useCallback(
    (seconds, to, options = {}) => {
      const duration = Number(seconds)
      if (!Number.isFinite(duration) || duration <= 0) {
        navigate(to, options)
        return
      }

      clearTimer()
      setSecondsLeft(duration)

      timerRef.current = window.setInterval(() => {
        setSecondsLeft(prev => {
          if (prev === null) return null
          if (prev <= 1) {
            clearTimer()
            navigate(to, options)
            return null
          }
          return prev - 1
        })
      }, 1000)
    },
    [clearTimer, navigate],
  )

  return { secondsLeft, startCountdown }
}
