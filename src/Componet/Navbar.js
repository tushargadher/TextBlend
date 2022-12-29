import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {

    return (
        <>


            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 " id="nav"
                style={{ backgroundColor: props.navtheme.color === 'black' ? '#5cb85c' : 'blue' }}>

                <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg width="40" height="32" role="img" aria-label="Bootstrap"><use href="/"></use></svg>
                    <i className={`bi bi-gear-wide-connected text-${props.navtheme.color === 'white' ? 'light' : 'dark'}`} id="logo"> TextBlend</i>

                </Link>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/TextBlend" className={`nav-link px-2 link-${props.navtheme.color === 'white' ? 'light' : 'dark'}`}>Home</Link></li>
                    <li><Link to="/features" className={`nav-link px-2 link-${props.navtheme.color === 'white' ? 'light' : 'dark'}`}>Features</Link></li>

                    <li><Link to="/FAQ" className={`nav-link px-2 link-${props.navtheme.color === 'white' ? 'light' : 'dark'}`}>FAQs</Link></li>
                    <li><Link to="/about" className={`nav-link px-2 link-${props.navtheme.color === 'white' ? 'light' : 'dark'}`}>About Us</Link></li>

                </ul>


                <div className="col-md-3 text-end">
                {/* flexSwitchCheckChecked */}
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id='flexSwitchCheckDefault' onClick={props.toggleNavmode} />
                        <label className={`form-check-label text-${props.navtheme.color === 'white' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
                    </div>
                </div>

            </header>
        </>
    );
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,

}
Navbar.defaultProps = {
    title: 'Insert title here',
}