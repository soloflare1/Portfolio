const categories = [
  { icon: 'fa-solid fa-laptop-code', label: 'Frontend', bg: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
    items: [{ icon: 'fa-brands fa-react', name: 'React.js', color: '#61dafb' }, { icon: 'fa-brands fa-html5', name: 'HTML5', color: '#e34f26' }, { icon: 'fa-brands fa-css3-alt', name: 'CSS3', color: '#264de4' }] },
  { icon: 'fa-solid fa-server', label: 'Backend', bg: 'linear-gradient(135deg,#059669,#047857)',
    items: [{ icon: 'fa-brands fa-node-js', name: 'Node.js', color: '#68a063' }, { icon: 'fa-solid fa-bolt', name: 'Express.js', color: '#a78bfa' }, { icon: 'fa-brands fa-python', name: 'Django', color: '#44b78b' }] },
  { icon: 'fa-solid fa-database', label: 'Database', bg: 'linear-gradient(135deg,#d97706,#b45309)',
    items: [{ icon: 'fa-solid fa-leaf', name: 'MongoDB', color: '#4db33d' }, { icon: 'fa-solid fa-database', name: 'MySQL', color: '#00758f' }, { icon: 'fa-solid fa-database', name: 'PostgreSQL', color: '#336791' }] },
  { icon: 'fa-solid fa-screwdriver-wrench', label: 'Tools', bg: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
    items: [{ icon: 'fa-brands fa-git-alt', name: 'Git', color: '#f05032' }, { icon: 'fa-brands fa-github', name: 'GitHub', color: '#a78bfa' }, { icon: 'fa-solid fa-plug', name: 'REST API', color: '#10b981' }, { icon: 'fa-solid fa-shield-halved', name: 'JWT', color: '#f59e0b' }] },
  { icon: 'fa-solid fa-microchip', label: 'IoT & Hardware', bg: 'linear-gradient(135deg,#dc2626,#9f1239)',
    items: [{ icon: 'fa-solid fa-microchip', name: 'Arduino Uno', color: '#00979d' }, { icon: 'fa-solid fa-microchip', name: 'ESP32', color: '#e7352c' }, { icon: 'fa-solid fa-temperature-half', name: 'Sensors', color: '#f59e0b' }, { icon: 'fa-solid fa-location-dot', name: 'GPS Module', color: '#10b981' }, { icon: 'fa-solid fa-signal', name: 'GSM Module', color: '#8b5cf6' }] },
  { icon: 'fa-solid fa-code', label: 'Programming Languages', bg: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
    items: [{ icon: 'fa-solid fa-c', name: 'C', color: '#a8b9cc' }, { icon: 'fa-solid fa-file-code', name: 'C++', color: '#00599c' }, { icon: 'fa-brands fa-python', name: 'Python', color: '#3776ab' }, { icon: 'fa-brands fa-js', name: 'JavaScript', color: '#f7df1e' }] },
  { icon: 'fa-solid fa-language', label: 'Spoken Languages', bg: 'linear-gradient(135deg,#0891b2,#0e7490)',
    items: [{ icon: 'fa-solid fa-comment', name: 'Bangla — Native', color: '#10b981' }, { icon: 'fa-solid fa-comment', name: 'English — Professional', color: '#06b6d4' }, { icon: 'fa-solid fa-comment', name: 'Hindi — Conversational', color: '#f59e0b' }] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow reveal">Technical Expertise</div>
        <h2 className="sh reveal">Skills &amp; <span className="hl">Tech Stack</span></h2>
        <div className="skill-grid">
          {categories.map(cat => (
            <div key={cat.label} className="skill-card reveal">
              <div className="skill-card-top" style={{ background: cat.bg }}>
                <div className="skill-card-icon"><i className={cat.icon} /></div>
                <span className="skill-card-label">{cat.label}</span>
              </div>
              <div className="skill-card-body">
                {cat.items.map(item => (
                  <div key={item.name} className="skill-item">
                    <span className="skill-item-icon" style={{ color: item.color }}><i className={item.icon} /></span>
                    <span className="skill-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
