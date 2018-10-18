import React, { Component } from 'react';
import './reset.css';
import './App.css';
import GetCards from './lowerComps/GetCards';
import CreateCard from './upperComps/CreateCard';
import QuoteFooter from './lowerComps/QuoteFooter';
// import Delete from './upperComps/Delete'
// import Edit from './upperComps/Delete'
import axios from 'axios';
// import './assets/css/fonts.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      cardsToDisplay: []

    }
    this.cardsUpdate = this.cardsUpdate.bind(this)
    this.deleteInput = this.deleteInput.bind( this )
    // this.updateSecretIdentity = this.updateSecretIdentity.bind(this)
    // this.updateGender = this.updateGender.bind(this)
    // this.updateSuperName = this.updateSuperName.bind(this)
    // this.updateSuperPower = this.updateSuperPower.bind(this)
    // this.updateCoreConflict = this.updareCoreConflict.bind(this)
    // this.updateAlignment = this.updateAlignment.bind(this)
  }
  componentDidMount() {
    axios.get('/api/cards/').then(result => {
    console.log('res.data', result.data)
      this.setState({ cardsToDisplay: result.data })
    
    })
  }
  deleteInput(id) {
    console.log('delete', id)
    axios.delete(`/api/cards/${id}`).then((result) => {
    console.log('res', result) 

        
      this.setState({cardsToDisplay: result.data})
        
      })
    
  }
  cardsUpdate(up) {
    console.log(up)
    this.setState({ cardsToDisplay: up })
  }

  render() {
    console.log(this.state.cardsToDisplay)
    return (
        //<link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet">
        // <link href="https://fonts.googleapis.com/css?family=Roboto+Mono|Shadows+Into+Light" rel="stylesheet">
      <div>
        <header><h1>My Super Characters</h1></header>
        <body>
          <div  class='create-hero'>
          <CreateCard cards={this.state.cardsToDisplay} cardsUp={(e) => this.cardsUpdate(e)} />
          </div>

        
        <GetCards  cards={this.state.cardsToDisplay}  delete={(e) => this.deleteInput(e)} cardsUp={this.cardsUpdate}/>
        
        </body>

        <footer>
          <QuoteFooter/>
        </footer>

      </div>
    );
  }
}

export default App;
