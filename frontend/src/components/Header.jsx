import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                < NavLink className="navbar-brand" to="/">dirEngine. </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            < NavLink to="/" className="nav-link">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to='/about' className="nav-link">About </NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to='/tours' className="nav-link">Tour </NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to='/hotels' className="nav-link">Hotels </NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to='/blogs' className="nav-link">Blog </NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to='/contact' className="nav-link">Contact </NavLink>
                        </li>
                        <li className="nav-item cta">
                            < NavLink to='/contact' className="nav-link"><span>Add listing</span> </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}