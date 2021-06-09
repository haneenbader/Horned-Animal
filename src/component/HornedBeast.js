import React, { Component } from 'react'

export class HornedBeast extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.title} </h2>
                <img src={this.props.image_url} alt='UniWhal'onClick={this.increaseVotes}/>
                <p> {this.props.description} </p>
               
            </div>
        )
    }
}

export default HornedBeast

