const terms = [
  'Fall 2023',
  'Spring 2024',
  'Fall 2024',
  'Spring 2025',
  'Fall 2025'
]


const stats = [
  {
    num: '3.91',
    lbl: 'CGPA (Out of 4.00)',
    iconCls: 'fa-solid fa-star',
    iconColor: 'var(--amber)'
  },
  {
    num: '#1',
    lbl: 'Current Rank',
    iconCls: 'fa-solid fa-medal',
    iconColor: 'var(--amber)'
  },
  {
    num: '5',
    lbl: 'Merit  based Scholarship ',
    iconCls: 'fa-solid fa-award',
    iconColor: 'var(--emerald)'
  },
  {
    num: '3/2',
    lbl: 'Current Academic Level',
    iconCls: 'fa-solid fa-layer-group',
    iconColor: 'var(--cyan)'
  }
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow reveal">
          Academic Journey
        </div>

        <h2 className="sh reveal">
          Education &amp; <span className="hl">Academic Excellence</span>
        </h2>

        <div className="edu-hero reveal">

          <div className="edu-hero-tag">
            <i className="fa-solid fa-graduation-cap" />
            &nbsp; Bachelor's Degree · In Progress
          </div>

          <div className="edu-hero-deg">
            Bachelor of Science in Computer Science &amp; Engineering
          </div>

          <div className="edu-hero-inst">
            <i className="fa-solid fa-building-columns" />
            &nbsp;
            Bangladesh Army International University of Science and Technology (BAIUST), Cumilla
            &nbsp;&middot;&nbsp;
            <span style={{ color: 'var(--muted)' }}>
              2023 – Present &nbsp;&middot;&nbsp; Level 3, Term 2 <em>(Ongoing)</em>
            </span>
          </div>

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
                      fontSize: '.65rem',
                      color: s.iconColor
                    }}
                  />
                  &nbsp;
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
          <div className="waiver-box">
            <div className="waiver-title">
              <i className="fa-solid fa-medal" />
              &nbsp; Academic Achievements
            </div>

            <div className="edu-awards-list">
              <div className="edu-award-item">
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    color: 'var(--emerald)',
                    fontSize: '.75rem',
                    marginTop: '.2rem',
                    flexShrink: 0
                  }}
                />

                <span>
                  Awarded Merit-Based Scholarship for Outstanding Academic Performance in Every Completed Semester:
                  <div
                    className="trow"
                    style={{ marginTop: '.45rem' }}
                  >
                    {terms.map((t) => (
                      <span key={t} className="tpill">
                        <i
                          className="fa-solid fa-check"
                          style={{ fontSize: '.6rem' }}
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
                    fontSize: '.75rem',
                    marginTop: '.15rem',
                    flexShrink: 0
                  }}
                />
                <span>
                  Ranked 1st in the Department Based on Current CGPA
                </span>
              </div>
            </div>
          </div>
        <div className="edu-others">
          <div className="edu-mini gc reveal">
            <div
              className="edu-mini-stripe"
              style={{
                background:
                  'linear-gradient(180deg,#0ea5e9,#0284c7)'
              }}
            />
            <div style={{ paddingLeft: '.5rem' }}>
              <div className="edu-mini-deg">
                Higher Secondary Certificate (HSC)
              </div>
              <div
                className="edu-mini-inst"
                style={{ color: '#38bdf8' }} >
                <i className="fa-solid fa-school" />
                &nbsp;
                Your College Name
              </div>

              <span
                className="edu-mini-gpa"
                style={{
                  background: 'rgba(14,165,233,.1)',
                  borderColor: 'rgba(14,165,233,.28)',
                  color: '#38bdf8'
                }}
              >
                <i className="fa-solid fa-medal" />
                &nbsp;
                GPA: 5.00 / 5.00
              </span>

            </div>

          </div>

          <div className="edu-mini gc reveal">

            <div
              className="edu-mini-stripe"
              style={{
                background:
                  'linear-gradient(180deg,#059669,#047857)'
              }}
            />

            <div style={{ paddingLeft: '.5rem' }}>

              <div className="edu-mini-deg">
                Secondary School Certificate (SSC)
              </div>

              <div
                className="edu-mini-inst"
                style={{ color: '#34d399' }}
              >
                <i className="fa-solid fa-school" />
                &nbsp;
                Your School Name
              </div>

              <span
                className="edu-mini-gpa"
                style={{
                  background: 'rgba(5,150,105,.1)',
                  borderColor: 'rgba(5,150,105,.28)',
                  color: '#34d399'
                }}
              >
                <i className="fa-solid fa-medal" />
                &nbsp;
                GPA: 5.00 / 5.00
              </span>

            </div>

          </div>

        </div>

      </div>

      </div>

    </section>
  )
}