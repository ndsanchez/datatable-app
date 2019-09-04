import React from 'react'
import '../styles/styles.css'
import CardHome from '../components/CardHome'

class Phome extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div>
                    <div className="lg-top-space container">
                        <CardHome/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Phome