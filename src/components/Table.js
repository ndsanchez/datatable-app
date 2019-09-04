import React from 'react'
import $ from 'jquery'
import DataTable from 'datatables.net-bs4'
import './DataTables/datatables.min.css'
import './DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal'

class Table extends React.Component {

    componentDidMount(){
        $(this.el).DataTable()
    }

    render(){
        const {dataSet, form, handleChange, handleSubmit, handleEdit, disabledId} = this.props
        return(
            <React.Fragment>
                <Modal handleChange={handleChange} 
                        form={form} 
                        handleSubmit={handleSubmit}
                        disabledId={disabledId}
                />
                <table className=" table table-hover table-sm table table-bordered" width="100%" ref={el => this.el = el}>
                    <thead>
                        <tr>
                            <th>Identication</th>
                            <th>Name</th> 
                            <th>Position</th>
                            <th>office</th>
                            <th>Start Date</th>
                            <th>Salary ($)</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataSet.map( (row) =>{
                            let elementState 
                            if(row.State === "1"){
                                elementState = <span className="badge badge-success">Active</span>
                            }else{
                                elementState = <span className="badge badge-danger">Inactive</span>
                            }
                            return(
                            <tr key ={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.position}</td>
                                <td>{row.office}</td>
                                <td>{row.startDate}</td>
                                <td>{row.salary}</td>
                                <td>{elementState}</td>
                                <td>
                                    <button id={row.id} onClick={() => handleEdit(row)} className="btn btn-sm btn-info" data-toggle="modal" data-target="#exampleModal">
                                        <FontAwesomeIcon icon={faPen} /> 
                                    </button>
                                    <span> </span>
                                    <button id={row.id} className="btn btn-sm btn-danger">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>
            
        )
    }
}

export default Table