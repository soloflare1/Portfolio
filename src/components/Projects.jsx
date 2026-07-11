const projects = [
  {
    type: 'web', category: 'Full Stack · MERN', categoryIcon: 'fa-solid fa-layer-group',
    name: 'BAIUST Academix',
    desc: 'A centralized academic resource sharing platform for BAIUST students, structured around a Level → Term → Course → Resource hierarchy with role-based access and JWT authentication.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/soloflare1', live: '#',
    screenshot: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&fit=crop&crop=top',
    accent: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
  },
  {
    type: 'iot', category: 'IoT · Embedded Systems', categoryIcon: 'fa-solid fa-microchip',
    name: 'Shurokkha',
    desc: 'A standalone wearable emergency safety device providing real-time GPS-based SOS alerts via GSM. Features dual-mode activation (Silent & Audible), Google Maps location sharing, OLED status display, and portable battery-powered design — fully standalone, no internet required.',
    stack: ['ESP32', 'NEO-6M GPS', 'SIM800L GSM', 'OLED Display', 'TP4056', 'Li-ion Battery', 'Arduino IDE'],
    features: ['Real-time GPS Tracking', 'Emergency SMS Alert', 'Dual-Mode Activation', 'Google Maps Link', 'OLED Status Display', 'Standalone Operation'],
    github: 'https://github.com/soloflare1', live: '#',
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&fit=crop&crop=center',
    accent: 'linear-gradient(135deg,#dc2626,#9f1239)',
  },
  {
    type: 'web', category: 'Full Stack · Django', categoryIcon: 'fa-solid fa-list-check',
    name: 'Taskly',
    desc: 'A web-based task management system built with Django MVT architecture. Features role-based access control (Admin, Manager, Employee), centralized task CRUD, real-time status tracking, automated email notifications, and a Manager Dashboard with statistics.',
    stack: ['Django', 'HTML5', 'Tailwind CSS', 'PostgreSQL', 'Django Auth'],
    github: 'https://github.com/soloflare1', live: '#',
    screenshot: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80&fit=crop&crop=top',
    accent: 'linear-gradient(135deg,#059669,#047857)',
  },
  {
    type: 'web', category: 'Full Stack · MERN', categoryIcon: 'fa-solid fa-book-open',
    name: 'Researchy',
    desc: 'A research paper archive platform with full-text MongoDB search, pagination, PDF/DOCX upload via Multer, JWT authentication, and a statistics dashboard. Deployed across three tiers: Vercel · Render · MongoDB Atlas.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'Vite'],
    github: 'https://github.com/soloflare1', live: '#',
    screenshot: 'https://i.pinimg.com/1200x/17/6b/aa/176baa08cbf3f2d75f890419ecbe0dd3.jpg',
    accent: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
  },
]

function WebCard({ p }) {
  return (
    <div className="pcard-new reveal">
      <div className="pcard-img-wrap">
        <img src={p.screenshot} alt={p.name} className="pcard-img" />
        <div className="pcard-img-overlay" />
        <div className="pcard-img-top">
          <span className="pcard-cat-badge"><i className={p.categoryIcon} /> {p.category}</span>
        </div>
        <div className="pcard-img-bottom">
          <div className="pcard-title-on-img">{p.name}</div>
        </div>
      </div>
      <div className="pcard-accent-bar" style={{ background: p.accent }} />
      <div className="pcard-body">
        <p className="pcard-desc">{p.desc}</p>
        <div className="pcard-stack">
          {p.stack.map(t => <span key={t} className="pcard-tag">{t}</span>)}
        </div>
        <div className="pcard-footer">
          <a className="pcard-link" href={p.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /> Source Code</a>
          <a className="pcard-link pcard-link-live" href={p.live} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo</a>
        </div>
      </div>
    </div>
  )
}

function IotCard({ p }) {
  return (
    <div className="pcard-new pcard-new-iot reveal">
      <div className="pcard-iot-hero" style={{ backgroundImage: `url(${p.bg})` }}>
        <div className="pcard-iot-hero-overlay" />
        <div className="pcard-iot-hero-content">
          <div className="pcard-iot-icon"><i className="fa-solid fa-shield-halved" /></div>
          <div>
            <div className="pcard-iot-cat"><i className={p.categoryIcon} /> {p.category}</div>
            <div className="pcard-iot-name">{p.name}</div>
          </div>
        </div>
        <div className="pcard-iot-features-row">
          {p.features.map(f => <span key={f} className="pcard-iot-feat"><i className="fa-solid fa-check" /> {f}</span>)}
        </div>
      </div>
      <div className="pcard-accent-bar" style={{ background: p.accent }} />
      <div className="pcard-body">
        <p className="pcard-desc">{p.desc}</p>
        <div className="pcard-stack">
          {p.stack.map(t => <span key={t} className="pcard-tag pcard-tag-iot">{t}</span>)}
        </div>
        <div className="pcard-footer">
          <a className="pcard-link" href={p.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /> Source Code</a>
          <a className="pcard-link pcard-link-live" href={p.live} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square" /> Live Demo</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow reveal">Selected Work</div>
        <h2 className="sh reveal">Engineering <span className="hl">Projects</span></h2>
        <div className="pgrid-new">
          {projects.map(p => p.type === 'iot' ? <IotCard key={p.name} p={p} /> : <WebCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  )
}
