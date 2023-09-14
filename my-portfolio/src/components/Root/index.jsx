import {
    Link,
    Outlet,
    useLocation,
  } from "react-router-dom";

  import "./root.css"

export default function Root() {
  return (
    <div>
        <ul className="navbar">
        <li>
              <Link to="/" className="nav-link">
                
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
             
                <span className="link-text">About</span>
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link">
             
                <span className="link-text">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
             
                <span className="link-text">Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/resume" className="nav-link">
             
                <span className="link-text">Resume</span>
              </Link>
            </li>

        </ul>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
