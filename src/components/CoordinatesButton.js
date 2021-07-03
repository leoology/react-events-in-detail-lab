// Code CoordinatesButton Component Here
import { render } from 'enzyme'
import React from 'react'



class CoordinatesButton extends React.Component{
    handClick = (e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])
    render(){
        return(
            <button onClick={this.handClick}> Coords</button>
        )
    }
}

export default CoordinatesButton