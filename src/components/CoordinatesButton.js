import React, { Component } from 'react';

class CoordinatesButton extends Component {

   handleClick = (event) => {
      const posX = event.clientX
      const posY = event.clientY
      this.props.onReceiveCoordinates([posX, posY])

   }

   render() {
      return (
         <button onClick={this.handleClick}>Click</button>
      )
   }

}

export default CoordinatesButton

