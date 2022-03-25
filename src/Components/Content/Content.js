import React, { Component } from 'react'
import Header from '../Header/Header'
import './Content.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import airpod from "../../Images/airpod.jpg"
import airtag from "../../Images/airtag.jpg"
import macbook from "../../Images/macbook.jpg"
import iphone from "../../Images/iphone.jpg"
import iwatch from "../../Images/iwatch.jpg"
import homekit from "../../Images/homekit.jpg"

class Content extends Component {
    incrementProduct = (id) => {
        this.props.incrementProduct(id);
    }
    decrementProduct = (id) => {
        this.props.decrementProduct(id);
    }
    getImageAddress = (title) => {
        if (title === "Airpod") {
            return airpod;
        }
        else if (title === "Airtag") {
            return airtag;
        }
        else if (title === "Homekit") {
            return homekit;
        }
        else if (title === "iPhone") {
            return iphone;
        }
        else if (title === "iWatch") {
            return iwatch;
        }
        else if (title === "Macbook") {
            return macbook;
        }
    }
    move = () => {
        this.props.history.push("/proceed");
    }

    render() {
        return (
            <div className="fullBodyContent">
                <div>
                    <Header heading={"iStore"} itemSelected={this.props.totalItemsSelected} setToInitial={this.props.setToInitial} />
                </div>
                <div className="body justify-content-center">
                    {
                        this.props.items.map((i) => (

                            <div className="card card-width div-hover">
                                    <div class="imageDiv">
                                <Link to={"/product/" + i.title}>
                                        <img src={this.getImageAddress(i.title)} class="card-img-top" />
                                </Link>
                                    </div>
                                <div className="card-body">
                                    <h5 className="card-title">{i.title}</h5>
                                    <p className="card-text">{i.description}</p>
                                    <p className="card-text"><b>Price:</b> ${i.price}</p>
                                    <div className="btn-display">
                                        <button className="btn btn-outline-dark" onClick={this.decrementProduct.bind(this, i.id)}>-</button>
                                        <h4 className="quantity">{i.selected}</h4>
                                        <button className="btn btn-outline-dark right" onClick={this.incrementProduct.bind(this, i.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="continue">
                    <button className="btn btn-outline-dark con-btn" onClick={this.move}>
                        Continue <i class='fas fa-angle-right'></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Content