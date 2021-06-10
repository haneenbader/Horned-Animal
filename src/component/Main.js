import React, { Component } from 'react'
import HornedBeast from './HornedBeast.js'

import HornedForm from './HornedForm'



export class Main extends Component {
    // pass value from main to hornedbeast
    constructor(props) {
        super(props);
        // change condition in hornedbeast  
        this.state = {
            horns: this.props.data
        };

    }
    filterHornes = (e) => {
        this.setState({ horns: e })

    }
    render() {
        return (
            this.state.horns.map(hornedInfo => {
                return (
                    <div>
                        <HornedBeast
                            title={hornedInfo.title}
                            image_url={hornedInfo.image_url}
                            description={hornedInfo.description}
                        />
                        <HornedForm newState={this.filterHornes} horns={this.props.data} />
                    </div>
                )
            })

        )
    }
}

export default Main
