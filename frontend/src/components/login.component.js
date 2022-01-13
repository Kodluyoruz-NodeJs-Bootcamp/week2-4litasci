import React, { Component } from 'react';
import axios from 'axios';

import { TextField,Button } from '@mui/material';
  
const baseURL = "http://localhost:3002";
export default class Login extends Component{

    constructor(props){
        super(props)

        this.state = {
            files: []
        };
    }

    SendPost() {
        const userJson = { 
          fullname: 'Ali Tasci',
          email:'ali2@ali.com',
          password:'AliPass'
      };
        axios.post(
          `${baseURL}/register`,userJson,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            }
          }
        )
        .then(json => console.log(json))
        .catch(err => console.log(err));
      }

    
    render(){
        return(
            <div>
               <h3>login</h3>
               
               <div className="App">
                <Button variant='contained' onClick={this.SendPost}>register</Button>
                </div>
            </div>
        )
    }
}