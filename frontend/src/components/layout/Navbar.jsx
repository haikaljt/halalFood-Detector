import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-icon">H</span>
          <span>HalalFood Detector</span>
        </NavLink>

        <nav className="navbar-menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/scanner"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Scanner
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
