import { useState } from 'react'
import certBestGirls from '../assets/cert-best-girls.png'
import certRunnersUp from '../assets/cert-runners-up.png'

const stats = [
  { num: '400+', lbl: 'Programming Problems Solved',  icon: 'fa-solid fa-code' },
  { num: '30+',  lbl: 'Contests Participated', icon: 'fa-solid fa-flag-checkered' },
]

const achievements = [
  {
    type: 'gold',
    icon: 'fa-solid fa-award',
    rank: ' Best Girls Team',
    title: 'Inter University Programming Contest',
    detail: 'Certificate of Achievement',
    team: 'Binary_Blossoms',
    event: 'BAIUST CSE Spring Fest 2025',
    date: 'May 2025',
    cert: certBestGirls,
  },
  {
    type: 'silver',
    icon: 'fa-solid fa-trophy',
    rank: '1st Runners Up',
    title: 'Inter University Programming Contest',
    detail: 'Certificate of Achievement',
    team: 'segment_tree',
    event: 'BAIUST CSE Fall Fest 2025',
    date: 'November 2025',
    cert: certRunnersUp,
  },
]


export default function CompetitiveProgramming() {
  const [modal, setModal] = useState(null)

  return (
    <section id="cp">
      <div className="wrap">
        <div className="eyebrow reveal">Algorithmic Excellence</div>
        <h2 className="sh reveal">Competitive <span className="hl">Programming</span></h2>

        <div className="cpstats">
          {stats.map(s => (
            <div key={s.lbl} className="cpsc gc reveal">
              <div className="cpnum">{s.num}</div>
              <div className="cplbl"><i className={s.icon} />&nbsp; {s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="cp-sub-hd">
          <i className="fa-solid fa-trophy" style={{ color: 'var(--amber)' }} />  Achievements
        </div>

        <div className="cp-ach-grid">
          {achievements.map((a, i) => (
            <div key={i} className={`cp-ach-card cp-ach-${a.type} reveal`} onClick={() => setModal(a)}>
              <div className="cp-ach-rank-badge">
                <i className={a.icon} /> {a.rank}
              </div>
              <div className="cp-ach-content">
                <div className="cp-ach-title">{a.title}</div>
                <div className="cp-ach-detail">{a.detail} &middot; {a.team}</div>
                <div className="cp-ach-event">
                  <i className="fa-solid fa-calendar-days" />&nbsp; {a.event} &middot; {a.date}
                </div>
              </div>
              <div className="cp-ach-cta">
                <i className="fa-solid fa-eye" /> View Certificate
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <div className="cert-modal-overlay" onClick={() => setModal(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setModal(null)}>
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="cert-modal-header">
              <div className={`cert-modal-badge cert-badge-${modal.type}`}>
                <i className={modal.icon} /> {modal.rank}
              </div>
              <div className="cert-modal-title">{modal.title}</div>
              <div className="cert-modal-sub">{modal.event} &middot; {modal.date}</div>
            </div>
            <div className="cert-modal-img">
              <img src={modal.cert} alt={modal.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
