//takes in user input from the text boxes, makes an object and then pushes that object onto the server where pushed into an array? then the whole array will be sent to getCards)

import React, { Component } from 'react';
import axios from 'axios';


class CreateCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            secretIdentity: '',
            gender: '',
            superName: '',
            superPower: '',
            coreConflict: '',
            alignment: ''
        }
        this.resetState= this.resetState.bind( this )
    }

    resetState(){
        this.setState({
            secretIdentity: '',
            gender: '',
            superName: '',
            superPower: '',
            coreConflict: '',
            alignment: ''
        })

    }

    updateSecretIdentity(val) {
        this.setState({ secretIdentity: val })
       
    }
    updateGender(val) {
        this.setState({ gender: val })
        
    }
    updateSuperName(val) {
        this.setState({ superName: val })
       
    }
    updateSuperPower(val) {
        this.setState({ superPower: val })
        
    }
    updateCoreConflict(val) {
        this.setState({ coreConflict: val })
        
    }
    updateAlignment(val) {
        this.setState({ alignment: val })
        
    }

    newCard() {
        axios.post('/api/cards', { 
            secretIdentity: this.state.secretIdentity, 
            gender: this.state.gender, 
            superName: this.state.superName, 
            superPower: this.state.superPower, 
            coreConflict: this.state.coreConflict, 
            alignment: this.state.alignment })
        
        .then(response => {
            
            this.props.cardsUp(response.data);
            console.log(response.data)
            this.resetState();
        })
    }


        render() {
            return (
                <div>
                    <h2>New Hero</h2>
                        <p>Secret Identity:</p>                    
                        <input className='inputLine' onChange={(e) => this.updateSecretIdentity(e.target.value)} value={this.state.secretIdentity}></input>
                        
                        <p>Gender:</p>
                        <input className='inputLine' onChange={(e) => this.updateGender(e.target.value)} value={this.state.gender}></input>
                        
                        <p>Hero Name:</p>
                        <input className='inputLine' onChange={(e) => this.updateSuperName(e.target.value)} value={this.state.superName}></input>

                        <p>Superpower:</p>
                        <input className='inputLine' onChange={(e) => this.updateSuperPower(e.target.value)} value={this.state.superPower}></input>
                        
                    <div>
                        <p>Core Conflict:</p>
                        <input className='inputLine' onChange={(e) => this.updateCoreConflict(e.target.value)} value={this.state.coreConflict}></input>
                    </div>
                    <div>
                        <p>Alignment:</p>
                        <input className='inputLine' onChange={(e) => this.updateAlignment(e.target.value)} value={this.state.alignment}></input><br/>
                        
                    </div>

                    <button id='fixAlignment' onClick={() => this.newCard()}>Add Hero</button>
                </div>
            )
        }
    }
    

    export default CreateCard