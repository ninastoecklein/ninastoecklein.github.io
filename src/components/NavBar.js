import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav id="navbar">
            <NavLink end className="nav-logo" to="/">
                Alex Rivera
            </NavLink>
            <ul className="nav-links">
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/projects">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/skills">
                        Skills
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/references">
                        References
                    </NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
