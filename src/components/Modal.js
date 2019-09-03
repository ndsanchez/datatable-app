import React from 'react'
import $ from 'jquery'

class Modal extends React.Component{

    state ={
        form:{
            Id:'',
            Position:'',
            Salary:'',
            Sdate:'',
            State: '1',
            name:'',
            office:''
        }
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
        let dat = $(this.rf).serialize()
        console.log('working...',dat)
        //this.closeModal()
    }

    closeModal = () =>{
        $(this.rcm).click();
    }

    render(){
        return(
             <React.Fragment>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form ref={rf => this.rf = rf}>
                                <div className="form-group row">
                                    <label htmlFor="inputId" className="col-sm-3 col-form-label">Identification</label>
                                    <div className="col-sm-9">
                                        <input onChange={this.handleChange} type="number" className="form-control" name="Id" id="inputId" placeholder="Identification" required/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputName" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input onChange={this.handleChange} type="text" className="form-control" name="name" id="inputName" placeholder="Name" required autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPosition" className="col-sm-3 col-form-label">Position</label>
                                    <div className="col-sm-9">
                                        <input onChange={this.handleChange} type="text" className="form-control" name="Position" id="inputPosition" placeholder="Position" required autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputOffice" className="col-sm-3 col-form-label">Office</label>
                                    <div className="col-sm-9">
                                        <input onChange={this.handleChange} type="text" className="form-control" name="office" id="inputOffice" placeholder="Office" required autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputDate" className="col-sm-3 col-form-label">Start Date</label>
                                    <div className="col-sm-9">
                                        <input onChange={this.handleChange} type="date" className="form-control" name="Sdate" id="inputDate" placeholder="Start Date" required/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputSalary" className="col-sm-3 col-form-label">Salary</label>
                                    <div className="col-sm-9">
                                        <input onChange={this.handleChange} type="number" className="form-control" name="Salary" id="inputSalary" placeholder="Salary" required/>
                                    </div>
                                </div>

                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-3 pt-0">Status</legend>
                                            <div className="form-check col-sm-2">
                                                <input onChange={this.handleChange} className="form-check-input" type="radio" name="State" id="gridRadios1" value="1" defaultChecked/>
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                Active
                                                </label>
                                            </div>
                                            <div className="form-check col-sm-7">
                                                <input onChange={this.handleChange} className="form-check-input" type="radio" name="State" id="gridRadios2" value="0"/>
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                Inactive
                                                </label>
                                            </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
                                <button ref={rcm => this.rcm = rcm} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        )
    }
}
export default Modal
  

