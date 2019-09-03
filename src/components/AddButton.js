import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'

const AddButton = () => (
    <React.Fragment>
        <Modal/>
        <button className = "btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            New <FontAwesomeIcon icon={faPlus}/>
        </button>
    </React.Fragment>
)

export default AddButton