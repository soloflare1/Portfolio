import logoImg from '../assets/logo.png'

const navItems = [
  { href: '#cp', label: 'Competitive Programming' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme, menuOpen, setMenuOpen }) {
  return (
    <>
      <nav>
        <a className="nav-logo" href="#hero">
          <img src={logoImg} alt="N Logo" className="nav-logo-img" />
          Nosratee Jahan Naba
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
          <button className="ibtn" onClick={toggleTheme} aria-label="Toggle theme">
            <i className={`fa-solid ${theme === 'dark' ? 'fa-moon' : 'fa-sun'}`} />
          </button>
          <button className="ibtn hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>
      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
      </div>
    </>
  )
}
