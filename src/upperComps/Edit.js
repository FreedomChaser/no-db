//class user input, editable in state as false then ternary if false leave as text if true make input box and save to userInput with an on click button
import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component{
    constructor(props){
        super(props)

        this.state={
            userInput:'',
            editable: false
        }
        this.clickToggle = this.clickToggle.bind( this )
    }
    
    componentDidMount(){
        let {card} = this.props
        this.setState({
            secretIdentity: card.secretIdentity,
            gender: card.gender,
            superName: card.superName,
            superPower: card.superPower,
            coreConflict: card.coreConflict,
            alignment: card.alignment
        })
    }
    clickToggle(){
        this.setState({editable: !this.state.editable})
        }
    handleChangeSecret(val){
        this.setState({secretIdentity: val})        
    }
    handleChangeGender(val){
        this.setState({gender: val})        
    }
    handleChangeName(val){
        this.setState({superName: val})        
    }
    handleChangePower(val){
        this.setState({superPower: val})       
    }
    handleChangeCore(val){
        this.setState({coreConflict: val})        
    }
    handleChangeAlign(val){
        this.setState({alignment: val})        
    }
    submitEdit(id){
     console.log(this.state.secretIdentity)
     let {secretIdentity, gender, superName, superPower, coreConflict, alignment} = this.state
        axios.put(`/api/cards/${id}`, {secretIdentity, gender, superName, superPower, coreConflict, alignment}).then(
            (res)=>{this.props.cardsUp(res.data)}
        )
        this.clickToggle()
    }
    
    render(){
        console.log(this.props)
        return(
            <div>

                {this.state.editable ? 
                <div>
                    <input onChange={(e)=> this.handleChangeSecret(e.target.value) }
                    placeholder='secretIdentity'/> 
                    <input onChange={(e)=> this.handleChangeGender(e.target.value)} placeholder='gender'/> 
                    <input onChange={(e)=> this.handleChangeName(e.target.value)} placeholder='superName'/> 
                    <input onChange={(e)=> this.handleChangePower(e.target.value)} placeholder='superPower'/> 
                    <input onChange={(e)=> this.handleChangeCore(e.target.value)} placeholder='coreConflict'/> 
                    <input onChange={(e)=> this.handleChangeAlign(e.target.value)} placeholder='alignment'/> 
                    <button onClick ={()=>this.submitEdit(this.props.card.id)}>Save</button> 
                </div>:
                <button onClick={this.clickToggle} > Edit </button>
            }
            </div>
            
        )
    }
}

{/* <button
            className="btn btn-sp"
            onClick={() => this.updatePrice('up', v.id)}
          >
            Increase Price
          </button> */}


export default Edit