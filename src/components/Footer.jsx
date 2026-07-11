export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer-content">

        <p>
          © {year} <span className="footer-name">Nosratee Jahan Naba</span>. All rights reserved.
        </p>

        <p className="footer-made">
        Designed &amp; Developed by{" "}
          <span className="footer-name">Nosratee Jahan Naba</span>
        </p>
      </div>
    </footer>
  )
}