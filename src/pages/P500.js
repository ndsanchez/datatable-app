import React from 'react'
import notFoundImg from '../images/404.png'
import '../components/Styles/styles.css'

const P404 = () => (
    <React.Fragment>
        <div className="container">
            <div className="row " style={{height: 500}}>
                <div className="col-3 col-center">
                    <img src={notFoundImg} width={200}></img>
                </div>
            </div>   
        </div>
    </React.Fragment>
)

export default P404