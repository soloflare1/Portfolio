import avatarImg from '../assets/avatar.png'

const socialLinks = [
  { href: 'https://github.com/soloflare1',                 icon: 'fa-brands fa-github',   label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/nosrateejahannaba', icon: 'fa-brands fa-linkedin',  label: 'LinkedIn' },
  { href: 'https://www.facebook.com/share/1J1yukZhNk/',    icon: 'fa-brands fa-facebook',  label: 'Facebook' },
  { href: 'mailto:nosratee.jn@gmail.com',                  icon: 'fa-solid fa-envelope',   label: 'Email' },
]

const academicStats = [
  { icon: 'fa-solid fa-star',          num: '3.93',   lbl: 'CGPA (Rank #1 & 6x Scholarship)', color: 'var(--amber, #f59e0b)' },
  { icon: 'fa-solid fa-trophy',        num: 'CP',     lbl: 'Awards & Contests',              color: 'var(--emerald, #10b981)' },
  { icon: 'fa-solid fa-graduation-cap', num: 'BAIUST', lbl: 'CSE Student',                    color: 'var(--cyan, #0ea5e9)' },
]

const floatingIcons = [
  { icon: 'fa-brands fa-react',    color: '#61dafb', pos: { top: '2%',    right: '-14%' }, delay: '0s' },
  { icon: 'fa-brands fa-python',   color: '#c4b5fd', pos: { top: '35%',   right: '-20%' }, delay: '0.6s' },
  { icon: 'fa-solid fa-code',      color: '#d946ef', pos: { bottom: '18%',right: '-14%' }, delay: '1.1s' },
  { icon: 'fa-brands fa-node-js',  color: '#6ee7b7', pos: { top: '8%',    left: '-16%'  }, delay: '0.3s' },
  { icon: 'fa-solid fa-database',  color: '#a78bfa', pos: { bottom: '30%',left: '-18%'  }, delay: '0.9s' },
  { icon: 'fa-solid fa-microchip', color: '#f9a8d4', pos: { bottom: '4%', left: '-8%'   }, delay: '1.4s' },
]

function AnimatedAvatar() {
  return (
    <div className="avatar-wrap">
      <div className="avatar-ring ring1" />
      <div className="avatar-ring ring2" />
      <div className="avatar-glow" />
      {floatingIcons.map((fi, i) => (
        <div key={i} className="float-icon" style={{ ...fi.pos, animationDelay: fi.delay }}>
          <i className={fi.icon} style={{ color: fi.color }} />
        </div>
      ))}
      <div className="avatar-img-wrap">
        <img src={avatarImg} alt="Nosratee Jahan Naba" />
        <div className="avatar-overlay" />
      </div>
      <div className="avatar-badge">
        <i className="fa-solid fa-code" />
        <span>CSE Student @ BAIUST</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="orb o1" /><div className="orb o2" /><div className="orb o3" />
      <div className="wrap hero-in">
        <div className="hero-layout">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <i className="fa-solid fa-star-of-life" /> 
            </div>
            <h1 className="hn"><span className="hn-grad">Nosratee<br />Jahan Naba</span></h1>
            <p className="htag">Code. Build. Solve.</p>

            {/* Academic Highlights Quick Row */}
            <div className="hero-stats-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0.75rem', margin: '1rem 0 1.25rem 0' }}>
              {academicStats.map((st, idx) => (
                <div key={idx} className="hero-stat-chip" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', padding: '0.5rem 0.6rem', borderRadius: '10px', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: '700', color: st.color, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <i className={st.icon} style={{ fontSize: '0.8rem' }} /> {st.num}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--muted, #9ca3af)', marginTop: '0.1rem' }}>{st.lbl}</div>
                </div>
              ))}
            </div>

            <p className="hero-about-text">
              Hi, I'm Nosratee Jahan Naba — a CSE student at BAIUST with a passion for software
              engineering, competitive programming, and academic excellence. I enjoy building
              practical software solutions and continuously expanding my knowledge through
              projects, research, and lifelong learning. <br />
              I value discipline and consistency, and I believe that success comes through
              continuous practice, patience, and a willingness to learn from both achievements
              and mistakes.
            </p> 
            <div className="chips">
              {socialLinks.map(s => (
                <a key={s.href} className="chip" href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                  <i className={s.icon} /> {s.label}
                </a>
              ))}
            </div>
            <div className="hbtns">
              <a className="btn-p" href="#contact"><i className="fa-solid fa-paper-plane" /> Get in Touch</a>
              <a className="btn-s" href="#projects"><i className="fa-solid fa-folder-open" /> View Projects</a>
            </div>
          </div>
          <div className="hero-avatar"><AnimatedAvatar /></div>
        </div>  
      </div> 
    </section>
  )
}