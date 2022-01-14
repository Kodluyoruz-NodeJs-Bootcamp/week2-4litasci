import React, { Component } from "react";
import axios from "axios";

import { TextField, Button, Stack, Divider, Container } from "@mui/material";

const baseURL = "http://localhost:3002";
export default class List extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.TryToGetUsers()
  }

  TryToGetUsers() {
    const token = localStorage.getItem("verySecureJWT");
    if (!token) {
      window.location = "/login";
      return;
    }
    axios
      .post(`${baseURL}/list`, {
        token : token
      },{
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      })
      .then((json) => {
        //console.log(json.data.token);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  changeResult = (resultText) => {
    this.setState({ resultvalue: resultText });
  };
  render() {
    return (
      <div>
        <div className="App">
          <Container maxWidth="sm">
            <Stack spacing={2}>
              <h3>List</h3>
              
            </Stack>
          </Container>
        </div>
      </div>
    );
  }
}
