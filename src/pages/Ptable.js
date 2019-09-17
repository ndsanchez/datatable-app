import React from 'react'
import Table from '../components/Table'
import NavBar from '../components/NavBar'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import Modal from '../components/Modal'
import $ from 'jquery'
import Swal from 'sweetalert2'
import apiUrl from '../config'

class Ptable extends React.Component {
 
    state ={
        data: [],
        form:{
            Ident:'',
            Position:'',
            Salary:'',
            StartDate:'',
            State: '1',
            Name:'',
            Office:''
        },
        disabledId: false,
        Loading: true,
        btnName: 'Save',
        close: false
    }

    async componentDidMount(){
        await this.fetchData()
    }

    fetchData = async () =>{
        let res = await fetch(apiUrl)
        let data = await res.json()

        this.setState({
            data,
            Loading: false
        })
    }

    handleClose = () =>{        //function to close Modal
        $(this.rcm).click()
    }

    handleNew = () => {
        this.setState({
            form:{
                Ident: '',
                Position: '',
                Salary: '',
                StartDate: '',
                State: '1',
                Name: '',
                Office: ''
            },
            disabledId: false,
            btnName: 'Save'
        })
    }

    handleChange = (e) =>{
        this.setState({
          form:{...this.state.form,
                [e.target.name]: e.target.value
          }  
        })
    }    

    handleSubmit = async (e) => {
        e.preventDefault()
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        }
        let res = await fetch(`${apiUrl}/${this.state.btnName}`,config)
        let resJson = await res.json()

        if(resJson.request === '1'){
            let message
            (this.state.btnName === 'Save')? message = 'New user created': message = 'This user has been edited'
            this.handleClose();//close modal
            this.fetchData()
            Swal.fire(
                'Completed!',
                 message,
                'success'
            )    
        }else{
            let mes = '';
            (this.state.btnName === 'Save')?mes=', Id could be repeated':mes=''
            Swal.fire(
                'Error!',
                `Your request could not be proccessed${mes}`,
                'error'
            )
        }
    } 
    
    handleEdit = (row) => {
          this.setState({
            form:{
                Ident: row.Ident,
                Position: row.Position,
                Salary: row.Salary,
                StartDate: row.StartDate,
                State: row.State,
                Name: row.Name,
                Office: row.Office
            },
            disabledId: true,
            btnName: 'Edit'
        })  
    }

    handleDelete = (i) =>{
        let config = {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type' : 'Application/json',
            },
            body: JSON.stringify({
                Ident: i
            })
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
            if (result.value) {
                let res = await fetch(`${apiUrl}/Delete`, config)
                let resConv = await res.json()
        
                if(resConv.request === '1'){
                    Swal.fire(
                        'Deleted!',
                        'This user has been deleted.',
                        'success'
                    )
                    this.fetchData()
                }else{
                    Swal.fire(
                        'Error!',
                        'Your request could not be proccessed',
                        'error'
                    )
                }


            }
          })

    }
    
    render(){
        if(this.state.Loading)
            return <Loading/>
            
        return(
            <React.Fragment>
                <div>
                    <NavBar/>
                </div>
                <br/>
                <div className="container">
                    <Modal handleChange={this.handleChange} 
                            form={this.state.form} 
                            handleSubmit={this.handleSubmit}
                            disabledId={this.state.disabledId}
                            btnName={this.state.btnName}
                            close={this.state.close}
                            myref={x => this.rcm = x}
                    />
                    <AddButton handleNew={this.handleNew}/>
                </div>
                <br/>
                <div className="container">
                    <Table dataSet={this.state.data}
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default Ptable