import React, { Component } from 'react';
import { Grid, Input, Checkbox } from 'semantic-ui-react'
import '../css/style.css';

class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
          todos: {
              1:{
                  name: 'Hello',
                  status: false,
                  key: 1
              },
              2:{
                  name: 'World',
                  status: true ,
                  key: 2
              }
          }
      };
      this.updateTodo = this.updateTodo.bind(this);
  }
  updateTodo(event) {
      console.log(event)
  }
  render() {
      const styles = {
        todoDone: {
            textDecoration:"line-through"
            }
      };
    return (
      <div className="todoHome">
          <Grid>
              <Grid.Column width={16}>
                  <Input
                      fluid
                      placeholder='Add todo...' />
              </Grid.Column>
              <Grid.Column width={16}>
                  {Object.values(this.state.todos).map(todo => {
                      return <span key={todo.key}>
                                    <Checkbox key={todo.key}
                                              label={todo.name}
                                              checked={todo.status}
                                              style={todo.status?styles.todoDone:null}
                                              onClick={this.updateTodo(todo.key,!todo.status)}
                                              id={`todo${todo.key}`}  />
                                    <br/>
                            </span>
                  })}
              </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default Home;
