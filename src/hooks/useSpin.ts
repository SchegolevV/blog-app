import { useState } from 'react'

export const useSpin = () => {
  const [loading, setLoading] = useState(false)

  return { setLoading, loading }
}
