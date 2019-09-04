import React from 'react'
import brandImg from '../images/chip.svg'
import { Link } from 'react-router-dom'

const NavBar = () => (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={brandImg} width={30} height={30} alt=""/> NDSQ
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/info">Table</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#top" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Options
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#top">Action</a>
                            <a className="dropdown-item" href="#top">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#top">Something else here</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </React.Fragment>
)

export default NavBar