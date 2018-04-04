import React, { Component } from 'react';
import { Grid, Input, Checkbox } from 'semantic-ui-react'
import '../css/style.css';

class Home extends Component {
  render() {
    return (
      <div className="todoHome">
          <Grid>
              <Grid.Column width={16}>
                  <Input
                      fluid
                      placeholder='Add todo...' />
              </Grid.Column>
              <Grid.Column width={16}>
                  <Checkbox label={{ children: 'Todo' }} /> <br/>
                  <Checkbox label={{ children: 'Todo' }} /> <br/>
                  <Checkbox label={{ children: 'Todo' }} /> <br/>
                  <Checkbox label={{ children: 'Todo' }} /> <br/>
                  <Checkbox label={{ children: 'Todo' }} /> <br/>
                  <Checkbox label={{ children: 'Todo' }} /> <br/>
              </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default Home;
