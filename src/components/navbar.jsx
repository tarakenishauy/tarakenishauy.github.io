import { Link } from 'react-router-dom'
import '../resources/navbar.css' // Add a CSS file or use inline styles

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Tara</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
