//takes in user input from the text boxes, makes an object and then pushes that object onto the server where pushed into an array? then the whole array will be sent to getCards)

import React, { Component } from 'react';
import axios from 'axios';
import GetCards from '../lowerComps/GetCards'

class CreateCard extends Component {

    constructor() {
        super()

        this.state = {
            secretIdentity: '',
            gender: '',
            superName: '',
            superPower: '',
            coreConflict: '',
            alignment: ''
        }
    }

    updateSecretIdentity(val) {
        this.setState({ secretIdentity: val })
        this.state.secretIdentity = ''
    }
    updateGender(val) {
        this.setState({ gender: val })
        this.state.gender = ''
    }
    updateSuperName(val) {
        this.setState({ superName: val })
        this.state.superName = ''
    }
    updateSuperPower(val) {
        this.setState({ superPower: val })
        this.state.superPower = ''
    }
    updateCoreConflict(val) {
        this.setState({ coreConflict: val })
        this.state.coreConflict = ''
    }
    updateAlignment(val) {
        this.setState({ alignment: val })
        this.state.alignment = ''
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
            this.props.cardsUp(response);
        })
    }


        render() {
            return (
                <div>
                    <h2>New Hero</h2>

                    <input className='inputLine' placeholder='What is the secret identity?' onChange={(e) => this.updateSecretIdentity(e.target.value)} value={this.state.secretIdentity}></input>
                    <input className='inputLine' placeholder='What is the gender?' onChange={(e) => this.updateGender(e.target.value)} value={this.state.gender}></input>
                    <input className='inputLine' placeholder='What is the hero name?' onChange={(e) => this.updateSuperName(e.target.value)} value={this.state.superName}></input>
                    <input className='inputLine' placeholder='What is the superpower?' onChange={(e) => this.updateSuperPower(e.target.value)} value={this.state.superPower}></input>
                    <input className='inputLine' placeholder='What is the core conflict?' onChange={(e) => this.updateCoreConflict(e.target.value)} value={this.state.coreConflict}></input>
                    <input className='inputLine' placeholder='What is the Alignment?' onChange={(e) => this.updateAlignment(e.target.value)} value={this.state.alignment}></input>

                    <button onClick={() => this.newCard()}>Add Hero</button>
                </div>
            )
        }
    }


    export default CreateCard