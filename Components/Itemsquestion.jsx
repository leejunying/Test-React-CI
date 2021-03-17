import React from 'react'
import "../CSS/itemsquestion.css"

class Items extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
        

          
      };
     
    }
    
   
    
    render() {
 


    return(

        <div>
        <div  className="question">{this.props.question}</div>
       

      
        </div>
        )

    }

}
export default Items