import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <div>
      <nav class="navbar">
        <span class="navbar-toggle" onclick="toggleNavbar()">
          &#9776;
        </span>
        <div class="navbar-collapse" id="navbarNav">
          <a href="/home" class="navbar-brand">
            Portfolio
          </a>
          <a href="/home" class="nav-link">
            Home
          </a>
          <a href="/about" class="nav-link">
            About
          </a>
          <a href="/contact" class="nav-link">
            Contact
          </a>
          <a href="#hireme" class="nav-link">
            Hire me
          </a>
        </div>
      </nav>
    </div>
  );
}
