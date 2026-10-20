import React from 'react';

const categories = [
  { 
    icon: 'fa-solid fa-laptop-code', 
    label: 'Frontend Development', 
    bg: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    items: [
      { icon: 'fa-brands fa-react', name: 'React.js', color: '#61dafb' },
      { icon: 'fa-solid fa-N', name: 'Next.js', color: '#ffffff' },
      { icon: 'fa-solid fa-wind', name: 'Tailwind CSS', color: '#38bdf8' },
      { icon: 'fa-solid fa-palette', name: 'DaisyUI', color: '#570df8' },
      { icon: 'fa-brands fa-html5', name: 'HTML5', color: '#e34f26' },
      { icon: 'fa-brands fa-css3-alt', name: 'CSS3', color: '#264de4' }
    ] 
  },
  { 
    icon: 'fa-solid fa-server', 
    label: 'Backend Development', 
    bg: 'linear-gradient(135deg, #059669, #047857)',
    items: [
      { icon: 'fa-brands fa-node-js', name: 'Node.js', color: '#68a063' },
      { icon: 'fa-solid fa-bolt', name: 'Express.js', color: '#a78bfa' },
      { icon: 'fa-brands fa-python', name: 'Django', color: '#44b78b' },
      { icon: 'fa-solid fa-plug', name: 'REST API', color: '#10b981' },
      { icon: 'fa-solid fa-shield-halved', name: 'JWT Auth', color: '#f59e0b' }
    ] 
  },
  { 
    icon: 'fa-solid fa-database', 
    label: 'Database Systems', 
    bg: 'linear-gradient(135deg, #d97706, #b45309)',
    items: [
      { icon: 'fa-solid fa-leaf', name: 'MongoDB', color: '#4db33d' },
      { icon: 'fa-solid fa-database', name: 'MySQL', color: '#00758f' },
      { icon: 'fa-solid fa-database', name: 'PostgreSQL', color: '#336791' }
    ] 
  },
  { 
    icon: 'fa-solid fa-screwdriver-wrench', 
    label: 'Tools & Ecosystem', 
    bg: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    items: [
      { icon: 'fa-brands fa-git-alt', name: 'Git', color: '#f05032' },
      { icon: 'fa-brands fa-github', name: 'GitHub', color: '#a78bfa' },
      { icon: 'fa-solid fa-terminal', name: 'VS Code', color: '#007acc' },
      { icon: 'fa-solid fa-paper-plane', name: 'Postman', color: '#ff6c37' }
    ] 
  },
  { 
    icon: 'fa-solid fa-microchip', 
    label: 'IoT & Embedded Systems', 
    bg: 'linear-gradient(135deg, #dc2626, #9f1239)',
    items: [
      { icon: 'fa-solid fa-microchip', name: 'ESP32', color: '#e7352c' },
      { icon: 'fa-solid fa-microchip', name: 'Arduino', color: '#00979d' },
      { icon: 'fa-solid fa-location-dot', name: 'GPS Modules', color: '#10b981' },
      { icon: 'fa-solid fa-signal', name: 'GSM Modules', color: '#8b5cf6' },
      { icon: 'fa-solid fa-temperature-half', name: 'Sensors & OLED', color: '#f59e0b' }
    ] 
  },
  { 
    icon: 'fa-solid fa-code', 
    label: 'Programming Languages', 
    bg: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    items: [
      { icon: 'fa-brands fa-js', name: 'JavaScript', color: '#f7df1e' },
      { icon: 'fa-brands fa-python', name: 'Python', color: '#3776ab' },
      { icon: 'fa-solid fa-code', name: 'C++', color: '#00599c' },
      { icon: 'fa-solid fa-c', name: 'C Language', color: '#a8b9cc' }
    ] 
  },
  { 
    icon: 'fa-solid fa-language', 
    label: 'Language Proficiency', 
    bg: 'linear-gradient(135deg, #0891b2, #0e7490)',
    items: [
      { icon: 'fa-solid fa-comments', name: 'Bangla — Native', color: '#10b981' },
      { icon: 'fa-solid fa-globe', name: 'English — Professional', color: '#06b6d4' },
      { icon: 'fa-solid fa-comment-dots', name: 'Hindi — Conversational', color: '#f59e0b' }
    ] 
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="wrap">
        <div className="eyebrow reveal">
          <i className="fa-solid fa-gears" /> &nbsp; Technical Expertise
        </div>
        <h2 className="sh reveal">
          Skills &amp; <span className="hl">Tech Stack</span>
        </h2>
        
        <div className="skill-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="skill-card reveal">
              <div className="skill-card-top" style={{ background: cat.bg }}>
                <div className="skill-card-icon">
                  <i className={cat.icon} />
                </div>
                <span className="skill-card-label">{cat.label}</span>
              </div>

              <div className="skill-card-body">
                {cat.items.map((item) => (
                  <div key={item.name} className="skill-item">
                    <span className="skill-item-icon" style={{ color: item.color }}>
                      <i className={item.icon} />
                    </span>
                    <span className="skill-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}