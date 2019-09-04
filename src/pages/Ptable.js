import React from 'react'
import Table from '../components/Table'
import NavBar from '../components/NavBar'
import AddButton from '../components/AddButton'

class Ptable extends React.Component {
 
    state ={
        form:{
            Id:'',
            Position:'',
            Salary:'',
            Sdate:'',
            State: '1',
            name:'',
            office:''
        },
        disabledId: false
    }

    handleNew = () => {
        this.setState({
            form:{
                Id: '',
                Position: '',
                Salary: '',
                Sdate: '',
                State: '1',
                name: '',
                office: ''
            },
            disabledId: false
        })
    }

    handleChange = (e) =>{
        console.log([e.target.name],': ',e.target.value)
        this.setState({
          form:{...this.state.form,
                [e.target.name]: e.target.value
          }  
        })
    }    

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('working...')
        this.setState({
            form:{
                Id:'',
                Position:'',
                Salary:'',
                Sdate:'',
                State: '1',
                name:'',
                office:''
            }
        })
        //this.closeModal()
    } 
    
    handleEdit = (row) => {
          this.setState({
            form:{
                Id: row.id,
                Position: row.position,
                Salary: row.salary,
                Sdate: row.startDate,
                State: row.State,
                name: row.name,
                office: row.office
            },
            disabledId: true
        })  
    }    

    render(){
        return(
            <React.Fragment>
                <div>
                    <NavBar/>
                </div>
                <br/>
                <div className="container">
                    <AddButton handleNew={this.handleNew}/>
                </div>
                <br/>
                <div className="container">
                    <Table dataSet={this.dataSet}
                            form={this.state.form}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            handleEdit={this.handleEdit}
                            disabledId={this.state.disabledId}/>
                </div>
            </React.Fragment>
        )
    }
    dataSet = [{
        id: '000001',
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edingburgh',
        startDate: '2011-04-25',
        salary: '320.800',
        State: '1'
    },{
        id: '000002',
        name: 'Ashton Cox',
        position: 'Accountant',
        office: 'Tokyo',
        startDate: '2011-07-25',
        salary: '170.750',
        State: '1'
    },{
        id: '000003',
        name: 'Garrett Winters',
        position: 'Senior Javascript Developer',
        office: 'San Francisco',
        startDate: '2009-01-12',
        salary: '86.000',
        State: '0'
    }]
}

export default Ptable