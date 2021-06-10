import React, { Component } from 'react'
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedForm from './component/HornedForm'
import Data from "./assest/Data.json"


export class App extends Component {
  constructor(props) {
    super(props);
    // change condition in hornedform
    this.state = {
      Pictures: Data,
      
    }
  }
  
  filterHornes = (e) => {
    this.setState({Pictures: e })

  }
  render() {
    return (
      <div>
        <Header />
        <HornedForm newState={this.filterHornes} Pictures={Data} />
        <Main dataAfterFilter ={this.props.newState}/> 
        <Footer />
      </div>
    )
  }
}

export default App
