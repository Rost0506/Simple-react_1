import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = { date: new Date()}
  }
  
  componentDidMount() {
    this.tineId = setInterval(
      () => this.tick()
    )
  }

  componentWillUnmount(){
    clearInterval(this.tineId)
  }
   tick(){
     this.setState({
      date: new Date()
     })
   }

     render(){
      return (
        <div>
          <h1> Текущее время {this.state.date.toLocaleTimeString()}</h1>
        </div>
        )
      }
      
    
 }

export default Clock;