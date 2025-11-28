import { useEffect, useState } from 'react'

export function useFetchEmployees(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`)
        }

        const contentType = response.headers.get('content-type') || ''
        if (!contentType.includes('application/json')) {
          throw new Error('Unexpected content-type')
        }

        const json = await response.json()
        setData(json)
      } catch (error_) {
        if (error_.name !== 'AbortError') {
          setError(error_.message || 'Request failed')
        }
      } finally {
        setLoading(false)
      }
    })()

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}
