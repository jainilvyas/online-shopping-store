import React, { Component } from 'react'
import Header from '../Header/Header'
import './Receipt.css'

export default class Receipt extends Component {    
    move = () => {
        this.props.setToInitial();
        this.props.history.push("/");
    }

    render() {

        return (
            <div>
                <div>
                    <Header heading={"iStore"} itemSelected={this.props.totalItemsSelected} setToInitial={this.props.setToInitial}/>
                </div>
                <div>
                    <div className="text-center">
                        <h2>Receipt Of Order</h2>
                    </div>
                    <div className="rec-container ml-0 d-flex justify-content-center">
                        <div className="rec-headings w-25 ">
                            <div className="mb-2">Full Name: </div>
                            <div className="mb-2">Email Address: </div>
                            <div className="mb-2">Contact Number: </div>
                            <div className="mb-2">Residential Address: </div>
                            <br/><br/>
                            <div className="mb-2">Bill: </div>
                            <div className="mb-2">Tax (17%): </div>
                            <div className="mb-2">Bill Description: </div>
                        </div>
                        <div className="rec-data w-75 ">
                            <div className="mb-2">{this.props.buyerInfo.fullName}</div>
                            <div className="mb-2">{this.props.buyerInfo.email}</div>
                            <div className="mb-2">{this.props.buyerInfo.contactNumber}</div>
                            <div className="mb-2">{this.props.buyerInfo.address}</div>
                            <br/><br/>
                            <div className="mb-2">${this.props.totalBill}</div>
                            <div className="mb-2">${this.props.totalBill * (1.17)}</div>
                            <div className="mb-2">{this.props.desc}</div>
                        </div>
                    </div>
                    <div className="continue">
                        <button className="btn btn-outline-dark p-3 back-btn" onClick={this.move}>
                            Confirm & Place Order <i class='fas fa-angle-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
