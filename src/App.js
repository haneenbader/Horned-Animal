import React, { Component } from 'react'
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "./assest/Data.json"


export class App extends Component {
   
  
  render() {
    return (
      <div>
        <Header />
         <Main dataAfterFilter ={this.props.newState} data={Data}/> 
         <Footer/>
      </div>
    )
  }
}

export default App
