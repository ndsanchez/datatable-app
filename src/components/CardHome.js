import React from 'react'
import portadaImg from '../images/port.png'
import { Link } from 'react-router-dom'

const CardHome = () => (
    <React.Fragment>
        <div className="card mb-3">
            <img src={portadaImg} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Application Dynamic Table</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Neil David Sanchez Quintana</small></p>
                <Link className="btn btn-primary" to="/info">Next</Link>
            </div>
        </div>
    </React.Fragment>
)

export default CardHome