import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100)
    }
    window.addEventListener('scroll', update)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div className="scroll-progress-bar">
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  )
}
