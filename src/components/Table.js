import React from 'react'
import $ from 'jquery'
import DataTable from 'datatables.net-bs4'
import './DataTables/datatables.min.css'
import './DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

class Table extends React.Component {

    componentDidMount(){
        this.$el = $(this.el)
        this.$el.DataTable(/* {
            data: this.props.dataSet,
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]} */
        )
    }

    render(){
        return(
            <React.Fragment>
                <table className=" table table-hover table-sm table-secondary table-bordered" width="100%" ref={el => this.el = el}>
                    <thead>
                        <tr>
                            <th>Identication</th>
                            <th>Name</th> 
                            <th>Position</th>
                            <th>office</th>
                            <th>Extn.</th>
                            <th>Start Date</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.dataSet.map( (row) =>{
                            return(
                            <tr key ={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.position}</td>
                                <td>{row.office}</td>
                                <td>{row.extn}</td>
                                <td>{row.startDate}</td>
                                <td>{row.salary}</td>
                                <td>
                                    <button className="btn btn-sm btn-info">
                                        <FontAwesomeIcon icon={faPen} /> 
                                    </button>
                                    <span> </span>
                                    <button className="btn btn-sm btn-danger">
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