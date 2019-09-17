import React from 'react'
import notFoundImg from '../images/404.png'
import '../components/Styles/styles.css'
import {Link} from 'react-router-dom'

const P404 = () => (
    <React.Fragment>
                <div className="text-center" style={{ marginTop: 100 }}>
                    <h1>Error</h1>
                    <img src={notFoundImg} alt="Page not found"></img>
                    <div>
                        <Link to="/">Go back to Home page</Link>
                    </div>
                </div>
    </React.Fragment>
)

export default P404