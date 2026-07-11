import { useState } from 'react'
import certBestGirls from '../assets/cert-best-girls.png'
import certRunnersUp from '../assets/cert-runners-up.png'

const tierColors = {
  gold:   { bg: 'rgba(245,158,11,.12)', border: 'rgba(245,158,11,.35)', text: '#fbbf24' },
  silver: { bg: 'rgba(167,139,250,.12)', border: 'rgba(167,139,250,.35)', text: '#c4b5fd' },
  bronze: { bg: 'rgba(180,120,60,.12)', border: 'rgba(180,120,60,.3)', text: '#d97706' },
  blue:   { bg: 'rgba(6,182,212,.12)', border: 'rgba(6,182,212,.3)', text: '#22d3ee' },
}

const certs = [
  { tier: 'gold',   icon: 'fa-solid fa-award', rank: 'Best Girls Team',    title: 'Best Girls Team — IUPC',             org: 'Certificate of Achievement', team: 'Team: Binary_Blossoms', event: 'BAIUST CSE Spring Fest 2025',      date: 'May 2025',      image: certBestGirls, accent: 'linear-gradient(135deg,#f59e0b,#d97706)' },
  { tier: 'silver', icon: 'fa-solid fa-trophy',  rank: '1st Runners Up',title: 'IUPC — Senior Category',            org: 'Certificate of Achievement', team: 'Team: segment_tree',    event: 'BAIUST CSE Fall Fest 2025', date: 'November 2025', image: certRunnersUp, accent: 'linear-gradient(135deg,#8b5cf6,#6366f1)' },
  { tier: 'bronze', icon: 'fa-solid fa-medal',  rank: '13th Place',    title: 'Hackathon — Junior Category',       org: 'Certificate of Recognition', team: 'Team: Naam_Lage_Na',    event: 'BAIUST CSE Spring Fest 2025',      date: 'May 2025',      image: null,          accent: 'linear-gradient(135deg,#b45309,#d97706)' },
  { tier: 'blue',   icon: 'fa-solid fa-users',  rank: 'Team Leader',   title: 'Hackathon — Senior Category',       org: 'Certificate of Participation',team: 'Team: lets_do_it',      event: 'BAIUST CSE Fall Fest 2025', date: 'November 2025', image: null,          accent: 'linear-gradient(135deg,#0ea5e9,#0284c7)' },
  { tier: 'blue',   icon: 'fa-solid fa-users',  rank: 'Team Leader',   title: 'Prompt Engineering — Senior Category',org:'Certificate of Participation',team: 'Team: prompt_engineers',  event: 'BAIUST CSE Fall Fest 2025', date: 'November 2025', image: null,          accent: 'linear-gradient(135deg,#06b6d4,#0891b2)' },
]


export default function Certificates() {
  const [modal, setModal] = useState(null)
  return (
    <section id="certificates">
      <div className="wrap">
        <div className="eyebrow reveal">Honors &amp; Recognition</div>
        <h2 className="sh reveal">Certificates &amp; <span className="hl">Awards</span></h2>
        <div className="cert-grid">
          {certs.map((c, i) => {
            const tc = tierColors[c.tier]
            return (
              <div key={i} className="cert-card-new reveal" onClick={() => setModal(c)}>
                <div className="cert-card-accent" style={{ background: c.accent }} />
                <div className="cert-card-body">
                  <div className="cert-card-icon-wrap" style={{ background: tc.bg, border: `1px solid ${tc.border}` }}>
                    <i className={c.icon} style={{ color: tc.text }} />
                  </div>
                  <div className="cert-rank-badge" style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.text }}>
                    <i className={c.icon} /> {c.rank}
                  </div>
                  <div className="cert-card-title">{c.title}</div>
                  <div className="cert-card-org">{c.org}</div>
                  <div className="cert-card-team">{c.team}</div>
                  <div className="cert-card-event"><i className="fa-solid fa-calendar-days" /> {c.event} · {c.date}</div>
                  <div className="cert-card-cta">
                    <i className="fa-solid fa-eye" /> {c.image ? 'View Certificate' : 'View Details'}
                    <i className="fa-solid fa-arrow-right cert-cta-arrow" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {modal && (
        <div className="cert-modal-overlay" onClick={() => setModal(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setModal(null)}><i className="fa-solid fa-xmark" /></button>
            <div className="cert-modal-header">
              <div className="cert-modal-badge" style={{ background: tierColors[modal.tier].bg, border: `1px solid ${tierColors[modal.tier].border}`, color: tierColors[modal.tier].text }}>
                <i className={modal.icon} /> {modal.rank}
              </div>
              <div className="cert-modal-title">{modal.title}</div>
              <div className="cert-modal-sub">{modal.org} · {modal.team}</div>
              <div className="cert-modal-sub">{modal.event} · {modal.date}</div>
            </div>
            {modal.image
              ? <div className="cert-modal-img"><img src={modal.image} alt={modal.title} /></div>
              : <div className="cert-modal-no-img"><i className="fa-solid fa-file-certificate" /><span>Certificate image coming soon</span></div>
            }
          </div>
        </div>
      )}
    </section>
  )
}
