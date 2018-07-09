import React, { Component } from 'react';

class Plot extends Component{
    constructor(){
        super()

        this.state={
            userInput: '';
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    render(){
        return(
            <div>
                <h1>Plot</h1>
                 <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            </div>
        )
    }

    
}

export default Plot