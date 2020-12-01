import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './../App.css';
import Box from '@material-ui/core/Box';

class  Home  extends  Component { 
    render() {
        return (
            <div style={{
                position: 'absolute', 
                left: '50%', 
                top: '30%',
                transform: 'translate(-50%, -50%)'
            }}>
                <Box border={0} textAlign="center"  > 
                <Box borderTop={0} borderBottom={0} padding="50px 36px" >
                <img variant="h1" component="h2" src = "/images/AnthrofaceLogo1.png" alt=""/>
                </Box>
                <Box border={0} >
                <Button     style={{
                    // borderRadius: 35,
                     backgroundColor: "#ffffff",
                      padding: "18px 36px",
                      fontSize: "18px"
                 }}variant="contained" size="large" href="/Patient">New Patient</Button>
                <Button     style={{
                   //  borderRadius: 35,
                     backgroundColor: "#ffffff",
                      padding: "18px 36px",
                      fontSize: "18px"
                 }}variant="contained" size="large" href="/Database">Database</Button>
                <Button  style={{
                    // borderRadius: 35,
                     backgroundColor: "#ffffff",
                      padding: "18px 36px",
                      fontSize: "18px"
                 }}variant="contained" size="large" href="/Import">Import Data</Button>
                </Box>
                </Box>
            </div>

            );
      }
    }
    export  default  Home;

    /*  <Typography variant="h1" component="h2" gutterBottom>
         Anthroface
        </Typography>*/