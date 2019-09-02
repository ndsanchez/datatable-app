import React from 'react'
import $ from 'jquery'
import DataTable from 'datatables.net-bs4'
import './DataTables/datatables.min.css'
import './DataTables/DataTables-1.10.18/css/dataTables.bootstrap4.min.css'

class Table extends React.Component {

    componentDidMount(){
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.dataSet,
            columns: [
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]}
        )
    }

    render(){
        return(
            <React.Fragment>
                <table className=" table table-hover table-sm table-secondary table-bordered" width="100%" ref={el => this.el = el}/>
            </React.Fragment>
            
        )
    }
}

export default Table