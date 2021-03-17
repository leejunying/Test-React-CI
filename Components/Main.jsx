import React from "react";
import "../CSS/Main.css"

import Items from "./Itemsquestion"
 
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 data:[],
        
 as0:'',
 as1:'',
 as2:'',
 as3:'',
 as4:'',
 
 correct:''
        
    };
   this.GetApi=this.GetApi.bind(this);
   this.handlechange=this.handlechange.bind(this);
   this.Submit=this.Submit.bind(this);
  }
  GetApi() {
   
      const url = `https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({data:data}));
     
  }

  componentDidMount()
  {
    this.GetApi()
  }

 Submit()
 {   
     let count=0;
     
     this.state.as0== this.state.data["results"][0].correct_answer?
    document.getElementById("a").style.background="green": document.getElementById("a").style.background="red"

    this.state.as1== this.state.data["results"][1].correct_answer?
    document.getElementById("b").style.background="green": document.getElementById("b").style.background="red"

    this.state.as2== this.state.data["results"][2].correct_answer?
    document.getElementById("c").style.background="green": document.getElementById("c").style.background="red"

    this.state.as3== this.state.data["results"][3].correct_answer?
    document.getElementById("d").style.background="green": document.getElementById("d").style.background="red"

    this.state.as4== this.state.data["results"][4].correct_answer?
    document.getElementById("e").style.background="green": document.getElementById("e").style.background="red"


    if(this.state.as0== this.state.data["results"][0].correct_answer)
    count=count+1
    if(this.state.as1== this.state.data["results"][1].correct_answer)
    count=count+1
    if(this.state.as2== this.state.data["results"][2].correct_answer)
    count=count+1
    if(this.state.as3== this.state.data["results"][3].correct_answer)
    count=count+1
    if(this.state.as4== this.state.data["results"][4].correct_answer)
      count=count+1
    

      console.log(this.state.data["results"][0].correct_answer,this.state.data["results"][1].correct_answer,this.state.data["results"][2].correct_answer,this.state.data["results"][3].correct_answer
      ,this.state.data["results"][4].correct_answer)
    

      console.log(this.state.as0,this.state.as1,this.state.as2,this.state.as3,this.state.as4)
      this.setState({correct:count})
     
 }

  handlechange(e,indx)
  {
      if(indx=='0')
      {
          this.setState({as0:e.target.value})
      }
      if(indx=='1')
      {
          this.setState({as1:e.target.value})
      }
      if(indx=='2')
      {
          this.setState({as2:e.target.value})
      }
      if(indx=='3')
      {
          this.setState({as3:e.target.value})
      }
      if(indx=='4')
      {
          this.setState({as4:e.target.value})
      }

      
  }
  render() {
    return (
      <div className="container">
                <div className="title">     <h2>Answer some question</h2></div>
            <div className="listquestion">
          

                {
                

                this.state.data["results"]!=undefined? 
                
                this.state.data["results"].map((val)=>{
                    return <Items {...val} indx={val}></Items>
                })
                :null
               
                }
                    
            </div>

            <div className="answer">
                   <ul> 
                       
                    <li> <input id="a" name="0" className="input" onChange={(e)=>this.handlechange(e,'0')}></input></li>
                    <li> <input id="b" name="1" className="input" onChange={(e)=>this.handlechange(e,'1')}></input> </li> 

                    <li><input id="c" name="2" className="input"onChange={(e)=>this.handlechange(e,'2')}></input> </li>

                    <li><input id="d" name="3" className="input"onChange={(e)=>this.handlechange(e,'3')}></input> </li>

                    <li><input id="e" name="4" className="input"onChange={(e)=>this.handlechange(e,'4')}></input> </li>

                    </ul>

                    <button className="btn" onClick={this.Submit} >Submit</button>
 

            </div>
        
              
            
          

      </div>
    );
  }
}
export default Main;
