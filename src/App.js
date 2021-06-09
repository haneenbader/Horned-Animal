import React, { Component } from 'react'
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedForm from './component/HornedForm'


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HornedForm />
        <Main/>
        <Footer />
      </div>
    )
  }
}

export default App
