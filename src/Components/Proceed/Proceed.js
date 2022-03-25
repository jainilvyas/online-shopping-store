import React, { Component } from 'react'
import Header from '../Header/Header'
import './Proceed.css'

export default class Proceed extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            contactnumber: '',
            address: '',
            email: ''
        }
    }

    inputChangeHandler = (event) => {
        let state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(event);
    }

    formSubmitted = (e) => {
        e.preventDefault();
        this.props.addBuyersDetail(this.state);
        this.setState({ fullname: '', contactnumber: '', address: '', email: '' });
        this.props.history.push("/receipt");
    }

    render() {
        return (
            <div>
                <div>
                    <Header heading={"iStore"} itemSelected={this.props.totalItemsSelected} setToInitial={this.props.setToInitial}/>
                </div>
                <center>
                    <div className="w-50 alignment ">
                        <form onSubmit={this.formSubmitted.bind(this)}>
                            <div className="form-group row mb-4">
                                <label for="fullname" className="col-sm-2 col-form-label">Full Name</label>
                                <div class="col-sm-10">
                                    <input required type="text" className="form-control" onChange={this.inputChangeHandler} id="fullname" name="fullname" placeholder="John Doe" />
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="email" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input required type="email" className="form-control" onChange={this.inputChangeHandler} id="email" name="email" placeholder="johndoe@example.com" />
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="contactnumber" className="col-sm-2 col-form-label">Contact</label>
                                <div className="col-sm-10">
                                    <input required type="text" className="form-control" onChange={this.inputChangeHandler} id="contactnumber" name="contactnumber" placeholder="123456789" />
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="address" className="col-sm-2 col-form-label">Address</label>
                                <div className="col-sm-10">
                                    <textarea required type="text" className="form-control" onChange={this.inputChangeHandler} id="address" name="address" placeholder="37B General Colony London" />
                                </div>
                            </div>
                            <div className="continue">
                                <button className="btn btn-outline-dark con-btn" onClick={this.move}>
                                    Continue To Proceed <i class='fas fa-angle-right'></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </center>
            </div>
        )
    }
}
