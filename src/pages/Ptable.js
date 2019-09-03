import React from 'react'
import Table from '../components/Table'
import NavBar from '../components/NavBar'
import AddButton from '../components/AddButton'

class Ptable extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div>
                    <NavBar/>
                </div>
                <br/>
                <div className="container">
                    <AddButton/>
                </div>
                <br/>
                <div className="container">
                    <Table dataSet={this.dataSet}/>
                </div>
            </React.Fragment>
        )
    }
    dataSet = [{
        id: '000001',
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edingburgh',
        startDate: '2011/04/25',
        salary: '$320,800',
        State: '1'
    },{
        id: '000002',
        name: 'Ashton Cox',
        position: 'Accountant',
        office: 'Tokyo',
        startDate: '2011/07/25',
        salary: '$170,750',
        State: '1'
    },{
        id: '000003',
        name: 'Garrett Winters',
        position: 'Senior Javascript Developer',
        office: 'San Francisco',
        startDate: '2009/01/12',
        salary: '$86,000',
        State: '0'
    }]
}

export default Ptable