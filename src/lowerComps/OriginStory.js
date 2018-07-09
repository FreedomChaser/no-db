import React, { Component } from 'react';

class Origin extends Component{
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
                <h1>Origin Story</h1>
                 <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            </div>
        )
    }

    
}

export default Origin