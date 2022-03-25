import './App.css';
import { Component } from 'react'
import Content from './Components/Content/Content'
import Proceed from './Components/Proceed/Proceed'
import Receipt from './Components/Receipt/Receipt'
import {BrowserRouter as Switch,Route,Router,Redirect} from "react-router-dom";
import Product from './Components/Product/Product'
import NotFound from './Components/NotFound/NotFound'
import itemData from './items.json'

class App extends Component {
  state={
    totalItemsSelected: 0,
    totalBill: 0,
    descBill: "",
    items: itemData,
    buyerDetail: {
      fullName: "",
      contactNumber: "",
      address: "",
      email: ""
    }
  }  

  setToInitial = () => {
    let list = this.state.items;
    for (let i in list) {
      list[i].selected = 0;
    }
    this.setState({totalItemsSelected: 0});
    this.setState({buyer: list});
    this.setState({totalBill: 0});
    this.setState({descBill: ''});
  }

  incrementProduct = (id) => {
    let list = this.state.items;
    let temp = this.state.totalItemsSelected;
    let bill = this.state.totalBill;
    let desc = this.state.descBill;
    list[id].selected += 1;
    bill += parseInt(list[id].price);
    temp += 1;
    this.setState({items: list});
    this.setState({totalItemsSelected: temp})
    this.setState({totalBill: bill})
    this.setState({descBill: desc})
  }

  decrementProduct = (id) => {
    let list = this.state.items;
    let tempp = this.state.totalItemsSelected;
    let bill = this.state.totalBill;
    let desc = this.state.descBill;
    if (list[id].selected !== 0)
    {
      list[id].selected -= 1;
      bill -= parseInt(list[id].price);
      tempp -= 1;
      this.setState({items: list});
      this.setState({totalItemsSelected: tempp})
      this.setState({totalBill: bill})
      this.setState({descBill: desc})
    }
  }

  addBuyersDetail = (event) => {
    this.state.buyerDetail.fullName = event.fullname;
    this.state.buyerDetail.contactNumber = event.contactnumber;
    this.state.buyerDetail.address = event.address;
    this.state.buyerDetail.email = event.email;
  }

  render(){
    return(
        <div>
          <Switch>
            <div>
              <Route exact path="/" render={({history}, props) => <Content history={history} setToInitial={this.setToInitial} totalItemsSelected={this.state.totalItemsSelected} items={this.state.items} totalInc={this.totalInc} totalDec={this.totalDec} decrementProduct={this.decrementProduct} incrementProduct={this.incrementProduct} airpodQuantity={this.state.itemsSelected}/>}/>
              <Route exact path="/proceed" render={({history}, props) => <Proceed history={history} setToInitial={this.setToInitial} totalItemsSelected={this.state.totalItemsSelected} addBuyersDetail={this.addBuyersDetail} totalBill={this.state.totalBill}/> }/>        
              <Route exact path="/receipt" render={({history}, props) => <Receipt history={history} setToInitial={this.setToInitial} totalItemsSelected={this.state.totalItemsSelected} desc={this.state.descBill} buyerInfo = {this.state.buyerDetail} totalBill={this.state.totalBill}/> }/>
              <Route exact path="/product/:article" render={(props) => <Product setToInitial={this.setToInitial} totalItemsSelected={this.state.totalItemsSelected} items={this.state.items} decrementProduct={this.decrementProduct} incrementProduct={this.incrementProduct}/> }/>
              <Route> <Redirect to="/"/> </Route>
            </div>
          </Switch>
        </div>
    )
  }
}

export default App;
