import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Header = (props) => {
    let history = useHistory();
    const resetToInitial = () => {
        history.push("/");
        props.setToInitial();
    }
    return (
        <div>
            <div className="outer-div">
                <div className="constant-header">
                    <Link to='/' onClick={resetToInitial}>
                        {props.heading}
                    </Link>
                </div>
                <div className="add-to-card">
                    <i className='fas fa-cart-arrow-down cart-icon'></i>
                    <span className="btn btn-outline-dark buttonMargin">{props.itemSelected}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
