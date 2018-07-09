import React, {Component} from 'react';
import axios from 'axios';

class QuoteFooter extends Component{
    constructor(){
        super()

        this.state = {
            joke: ''
        }
    }

componentDidMount(){
    console.log('hitten')
axios.get('http://api.icndb.com/jokes/random').then(result => {
    console.log(result)
           this.setState({joke: result.data.value.joke}) 
        })
    }

render(){

    let {joke} = this.state

    return(
        <p>{joke}</p>
    )
}
}

export default QuoteFooter
// export default function GetQuotes(){
//     return(
        
// )
// }