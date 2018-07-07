import React, { Component } from 'react';
import './reset.css';
import './App.css';
import GetCards from './lowerComps/GetCards';
import CreateCard from './upperComps/CreateCard'
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      cardsToDisplay:[]
      
    }
    this.cardsUpdate = this.cardsUpdate.bind( this )
  }
  componentDidMount(){
     axios.get('/api/cards/').then(result => {
      this.setState({ cardsToDisplay: result.data })
    })
  }
  cardsUpdate(up){
    this.setState({cardsToDisplay: up})
  }
    
  render() {
    return (
      <div>
        <h1>My Super Characters</h1>
      <button>See Heroes</button>
        <CreateCard cards = {this.state.cardsToDisplay} cardsUp={(e) => this.cardsUpdate()}/>
        <GetCards cards = {this.state.cardsToDisplay}/>
      </div>
    );
  }
}

export default App;
