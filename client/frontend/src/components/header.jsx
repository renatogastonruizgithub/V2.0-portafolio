import { NavLink } from "react-router-dom";
const links = [
  "home",
  "about",
  "projects",
  "certificates",
  "details",
  "skills",
];
export default function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4">Simple header</span>
      </a>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {links.map((item) => {
                return (
                  <li className="nav-link">
                    <NavLink to={`${item}`}>{item} </NavLink>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
