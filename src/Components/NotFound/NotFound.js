import React, { Component } from 'react'
import Header from '../Header/Header'

export default class NotFound extends Component {    

    render() {

        return (
            <div>
                <div>
                    <Header heading={"iStore"} itemSelected={this.props.totalItemsSelected} setToInitial={this.props.setToInitial}/>
                </div>
                <div>
                    Error !!
                </div>
            </div>
        )
    }
}
