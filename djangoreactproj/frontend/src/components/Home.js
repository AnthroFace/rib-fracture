import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './../App.css';

class  Home  extends  Component {
    render() {
        return (
            <div>
                <img src = "/images/AnthrofaceLogo1.png" alt=""/>
                <Button variant="contained" href="/Patient">New Patient</Button>
                <Button variant="contained" href="/Database">Database</Button>
                <Button variant="contained" href="/Import">Import Data</Button>
            </div>

            );
      }
    }
    export  default  Home;

    /*  <Typography variant="h1" component="h2" gutterBottom>
         Anthroface
        </Typography>*/