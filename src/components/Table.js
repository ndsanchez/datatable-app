import React from 'react'
import $ from 'jquery'
import 'datatables.net-bs4'
import './DataTables/datatables.min.css'
import './DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

class Table extends React.Component {

    componentDidMount(){
        $(this.el).DataTable()
    }

    render(){
        const {dataSet, handleEdit, handleDelete} = this.props
        return(
            <React.Fragment>
                <table className=" table table-hover table-sm table table-bordered" width="100%" ref={el => this.el = el}>
                    <thead>
                        <tr>
                            <th>Identification</th>
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
                            <tr key ={row.Ident}>
                                <td>{row.Ident}</td>
                                <td>{row.Name}</td>
                                <td>{row.Position}</td>
                                <td>{row.Office}</td>
                                <td>{row.StartDate}</td>
                                <td>{row.Salary}</td>
                                <td>{elementState}</td>
                                <td>
                                    <button id={row.Ident} onClick={() => handleEdit(row)} className="btn btn-sm btn-info" data-toggle="modal" data-target="#exampleModal">
                                        <FontAwesomeIcon icon={faPen} /> 
                                    </button>
                                    <span> </span>
                                    <button id={row.Ident} onClick={() => handleDelete(row.Ident)} className="btn btn-sm btn-danger">
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