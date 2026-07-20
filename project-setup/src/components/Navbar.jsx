import { Link } from "react-router";

function Navbar() {
  return (
    <div className="header-nav-con">
      <header>
        <h1 className="display-2 text-center">The Academy of Thinkers</h1>
      </header>

      <div className="container-fluid px-0">
        <nav className="navbar navbar-expand navbar-light d-flex justify-content-end">
          <ul className="nav-list-custom mb-0">
            <li className="navbtn">
              <Link to="/"> Home </Link>
            </li>
            <li className="navbtn">
              <Link to="/signup">Sign-Up</Link>
            </li>
            <li className="navbtn">
              <Link to="/topics">Topics</Link>
            </li>
            <li className="navbtn">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export { Navbar };
