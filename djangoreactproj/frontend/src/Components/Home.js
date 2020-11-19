import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class  Home  extends  Component {
    render() {
        return (
            <div>
                <Typography variant="h1" component="h2" gutterBottom>
                    Anthroface
                </Typography>
                <Typography variant="h2" gutterBottom>
                    Database
                </Typography>
                <Typography variant="h2" gutterBottom>
                    Import Data
                </Typography>
            </div>

            );
      }
    }
    export  default  Home;