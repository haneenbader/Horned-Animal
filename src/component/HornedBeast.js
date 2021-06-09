import React, { Component } from 'react'

export class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }
    }

    increaseVotes = () => {
        this.setState(
            {
                numOfVotes: this.state.numOfVotes + 1
            }
        )
    }

    render() {
        return (
            <div>
                <h2> {this.props.title} </h2>
                <img src={this.props.image_url} alt='UniWhal' onClick={this.increaseVotes} />
                <p> {this.props.description} </p>
                <p> ❤️ {this.state.numOfVotes} </p>
            </div>
        )
    }
}

export default HornedBeast

