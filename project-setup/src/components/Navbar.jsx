import { Link } from "react-router";

function Navbar() {
  return (
    <div class="header-nav-con">
      <header>
        <h1 class="display-2 text-center">The Academy of Thinkers</h1>
      </header>

      <div class="container-fluid px-0">
        <nav class="navbar navbar-expand navbar-light d-flex justify-content-end">
          <ul class="nav-list-custom mb-0">
            <li class="navbtn">
              <Link to="/"> Home </Link>
            </li>
            <li class="navbtn">
              <Link to="/signup">Sign-Up</Link>
            </li>
            <li class="navbtn">
              <Link to="/topics">Topics</Link>
            </li>
            <li class="navbtn">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export { Navbar };
