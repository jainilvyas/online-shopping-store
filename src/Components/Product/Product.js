import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
import Header from '../Header/Header'
import airpod from "../../Images/airpod.jpg"
import airtag from "../../Images/airtag.jpg"
import macbook from "../../Images/macbook.jpg"
import iphone from "../../Images/iphone.jpg"
import iwatch from "../../Images/iwatch.jpg"
import homekit from "../../Images/homekit.jpg"

const Product = (props) => {
    const { article } = useParams();
    const list = props.items;
    const productInfo = {
        title: '',
        id: '',
        selected: '',
        description: '',
        price: ''
    }
    for (let i of list) {
        if (i.title === article) {
            productInfo.title = i.title;
            productInfo.id = i.id;
            productInfo.selected = i.selected;
            productInfo.description = i.description;
            productInfo.price = i.price;
        }
    }
    const getImageAddress = (title) => {
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
    const incrementProduct = (product) => {
        props.incrementProduct(product);
    }
    const decrementProduct = (product) => {
        props.decrementProduct(product);
        
    }
    return (
        <div>
            <div>
                <Header heading={"iStore"} itemSelected={props.totalItemsSelected} setToInitial={props.setToInitial} />
            </div>
            <div className="w-75 productCard">
                <div>
                    <h1>{productInfo.title}</h1>
                </div>
                <div>
                    <img src={getImageAddress(productInfo.title)} className="imageDimentions" />
                </div>
                <div>
                    <p>{productInfo.description}</p>
                </div>
                <div>
                    <p className="desciptionP"><b>Price: ${productInfo.price}</b></p>
                </div>
                <div className="btn-display">
                    <button className="btn btn-outline-dark" onClick={decrementProduct.bind(this, productInfo)}>-</button>
                    <h4 className="quantity">{productInfo.selected}</h4>
                    <button className="btn btn-outline-dark right" onClick={incrementProduct.bind(this, productInfo.id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Product