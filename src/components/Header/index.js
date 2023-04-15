import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-items">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <h1 className="logo-head">Wave</h1>
    </div>
    <ul className="nav-items">
      <li>
        <Link to="/" className="link-dec">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link-dec">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link-dec">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
