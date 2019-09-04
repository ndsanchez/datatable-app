import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

class AddButton extends React.Component {

    render(){
        const { handleNew } = this.props
        return(
            <React.Fragment>
                <button onClick={handleNew} className = "btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    New <FontAwesomeIcon icon={faPlus}/>
                </button>
            </React.Fragment>
        )
    }
}

export default AddButton