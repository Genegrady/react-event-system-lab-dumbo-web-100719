// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component {
    logPw =() => {
        console.log('Entering password...')
    }
    
    
    render(){
        return( <div>
                <input
                onKeyUp={this.logPw} 
                type="password">
                </input>
            </div>)
    }
}