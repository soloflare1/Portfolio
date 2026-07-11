import { useEffect, useState, useRef } from 'react'

export default function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const num = parseInt(target.replace(/\D/g, ''))
          const step = num / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= num) {
              setCount(num)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  const suffix = target.replace(/[0-9]/g, '')
  return { count: count + suffix, ref }
}
