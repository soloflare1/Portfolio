import React from 'react';

const terms = [
  'Fall 2023',
  'Spring 2024',
  'Fall 2024',
  'Spring 2025',
  'Fall 2025',
  'Spring 2026'
];

const stats = [
  {
    num: '3.93',
    lbl: 'CGPA (Out of 4.00)',
    iconCls: 'fa-solid fa-star-half-stroke',
    iconColor: 'var(--amber)'
  },
  {
    num: '#1',
    lbl: 'Current Rank',
    iconCls: 'fa-solid fa-trophy',
    iconColor: 'var(--amber)'
  },
  {
    num: '6',
    lbl: 'Merit-based Scholarships',
    iconCls: 'fa-solid fa-award',
    iconColor: 'var(--emerald)'
  },
  {
    num: '4/I',
    lbl: 'Current Academic Level',
    iconCls: 'fa-solid fa-graduation-cap',
    iconColor: 'var(--cyan)'
  }
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="wrap">
        {/* Header Section */}
        <div className="eyebrow reveal">
          <i className="fa-solid fa-user-graduate" /> &nbsp; Academic Journey
        </div>

        <h2 className="sh reveal">
          Education &amp; <span className="hl">Academic Excellence</span>
        </h2>

        {/* Hero Education Card */}
        <div className="edu-hero reveal">
          <div className="edu-hero-tag">
            <i className="fa-solid fa-spinner fa-spin-pulse" style={{ fontSize: '0.8rem' }} />
            &nbsp; Bachelor's Degree · In Progress
          </div>

          <div className="edu-hero-deg">
            <i className="fa-solid fa-laptop-code" style={{ marginRight: '0.5rem', color: 'var(--cyan)' }} />
            Bachelor of Science in Computer Science &amp; Engineering
          </div>

          <div className="edu-hero-inst">
            <i className="fa-solid fa-building-columns" />
            &nbsp;
            <strong>Bangladesh Army International University of Science and Technology (BAIUST)</strong>, Cumilla
            <br />
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem', display: 'inline-block', marginTop: '0.3rem' }}>
              <i className="fa-regular fa-calendar-days" /> 2023 – Present &nbsp;&middot;&nbsp; 
              <i className="fa-solid fa-book-open-reader" /> Level 4, Term 1 <em>(Ongoing)</em>
            </span>
          </div>

          {/* Stats Grid */}
          <div className="edu-stats-row">
            {stats.map((s) => (
              <div key={s.lbl} className="edu-stat">
                <div className="edu-stat-num">
                  {s.num}
                </div>
                <div className="edu-stat-lbl">
                  <i
                    className={s.iconCls}
                    style={{
                      fontSize: '.8rem',
                      color: s.iconColor
                    }}
                  />
                  &nbsp;
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements / Waiver Box */}
          <div className="waiver-box">
            <div className="waiver-title">
              <i className="fa-solid fa-medal" style={{ color: 'var(--amber)' }} />
              &nbsp; Key Honors &amp; Achievements
            </div>

            <div className="edu-awards-list">
              <div className="edu-award-item">
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    color: 'var(--emerald)',
                    fontSize: '0.85rem',
                    marginTop: '0.25rem',
                    flexShrink: 0
                  }}
                />
                <span>
                  <strong>Awarded Merit-Based Scholarship</strong> for Outstanding Academic Performance in Every Completed Semester:
                  <div className="trow" style={{ marginTop: '0.6rem' }}>
                    {terms.map((t) => (
                      <span key={t} className="tpill">
                        <i
                          className="fa-solid fa-circle-check"
                          style={{ fontSize: '0.65rem', color: 'var(--emerald)' }}
                        />
                        &nbsp; {t}
                      </span>
                    ))}
                  </div>
                </span>
              </div>

              <div className="edu-award-item">
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    color: 'var(--emerald)',
                    fontSize: '0.85rem',
                    marginTop: '0.15rem',
                    flexShrink: 0
                  }}
                />
                <span>
                  <strong>Ranked 1st</strong> in the Department Based on Current CGPA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Education Grid (HSC & SSC) */}
        <div className="edu-others">
          {/* HSC Card */}
          <div className="edu-mini gc reveal">
            <div
              className="edu-mini-stripe"
              style={{
                background: 'linear-gradient(180deg, #0ea5e9, #0284c7)'
              }}
            />
            <div style={{ paddingLeft: '0.75rem', width: '100%' }}>
              <div className="edu-mini-deg">
                <i className="fa-solid fa-certificate" style={{ color: '#38bdf8', marginRight: '0.4rem' }} />
                Higher Secondary Certificate (HSC)
              </div>
              
              <div className="edu-mini-inst" style={{ color: '#38bdf8' }}>
                <i className="fa-solid fa-school" />
                &nbsp; Cumilla Board
              </div>

              <span
                className="edu-mini-gpa"
                style={{
                  background: 'rgba(14,165,233,.12)',
                  borderColor: 'rgba(14,165,233,.3)',
                  color: '#38bdf8'
                }}
              >
                <i className="fa-solid fa-star" />
                &nbsp; GPA: 5.00 / 5.00
              </span>
            </div>
          </div>

          {/* SSC Card */}
          <div className="edu-mini gc reveal">
            <div
              className="edu-mini-stripe"
              style={{
                background: 'linear-gradient(180deg, #059669, #047857)'
              }}
            />
            <div style={{ paddingLeft: '0.75rem', width: '100%' }}>
              <div className="edu-mini-deg">
                <i className="fa-solid fa-award" style={{ color: '#34d399', marginRight: '0.4rem' }} />
                Secondary School Certificate (SSC)
              </div>

              <div className="edu-mini-inst" style={{ color: '#34d399' }}>
                <i className="fa-solid fa-school" />
                &nbsp; Cumilla Board
              </div>

              <span
                className="edu-mini-gpa"
                style={{
                  background: 'rgba(5,150,105,.12)',
                  borderColor: 'rgba(5,150,105,.3)',
                  color: '#34d399'
                }}
              >
                <i className="fa-solid fa-star" />
                &nbsp; GPA: 5.00 / 5.00
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}