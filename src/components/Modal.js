import React from 'react'

class Modal extends React.Component{
    render(){
        const {handleChange, form, handleSubmit, disabledId, btnName, myref} = this.props

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
                                        <input value={form.Ident} onChange={handleChange} type="number" className="form-control" name="Ident" id="inputId" placeholder="Identification" disabled={disabledId}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputName" className="col-sm-3 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input value={form.Name} onChange={handleChange} type="text" className="form-control" name="Name" id="inputName" placeholder="Name" required autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputPosition" className="col-sm-3 col-form-label">Position</label>
                                    <div className="col-sm-9">
                                        <input value={form.Position} onChange={handleChange} type="text" className="form-control" name="Position" id="inputPosition" placeholder="Position" required autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputOffice" className="col-sm-3 col-form-label">Office</label>
                                    <div className="col-sm-9">
                                        <input value={form.Office} onChange={handleChange} type="text" className="form-control" name="Office" id="inputOffice" placeholder="Office" required autoComplete="off"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputDate" className="col-sm-3 col-form-label">Start Date</label>
                                    <div className="col-sm-9">
                                        <input value={form.StartDate} onChange={handleChange} type="date" className="form-control" name="StartDate" id="inputDate" placeholder="Start Date" required/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="inputSalary" className="col-sm-3 col-form-label">Salary</label>
                                    <div className="col-sm-9">
                                        <input value={form.Salary} onChange={handleChange} type="number" className="form-control" name="Salary" id="inputSalary" placeholder="Salary" lang="es-150"/>
                                    </div>
                                </div>

                                <fieldset className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-3 pt-0">Status</legend>
                                            <div className="form-check col-sm-2">
                                                <input checked={form.State === "1"} onChange={handleChange} className="form-check-input" type="radio" name="State" id="gridRadios1" value="1"/>
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                Active
                                                </label>
                                            </div>
                                            <div className="form-check col-sm-7">
                                                <input checked={form.State === "0"} onChange={handleChange} className="form-check-input" type="radio" name="State" id="gridRadios2" value="0"/>
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                Inactive
                                                </label>
                                            </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>{btnName}</button>
                                <button ref={myref} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        )
    }
}
export default Modal
  

