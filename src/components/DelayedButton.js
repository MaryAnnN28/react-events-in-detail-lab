import React, { Component } from 'react'; 

class DelayedButton extends Component {

   onClick = (event) => {
      event.persist(); 
      window.setTimeout(() => {
         this.props.onDelayedClick(event);
      },
         this.props.delay);
   }
   
   render() {
      return (
         <button onClick={this.onClick}>Delayed Button</button>
      )
   };

}




export default DelayedButton