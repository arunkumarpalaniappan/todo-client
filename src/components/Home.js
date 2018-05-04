import React, { Component } from 'react';
import { Layout , Row, Col, Input, Checkbox, Icon, Button, Modal } from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as quotesActions from '../actions/quotesActions';
import * as todosActions from '../actions/todoActions';
import * as visibilityFilterActions from '../actions/visibilityFilterActions';
import * as types from '../actions/actionTypes';
import {Link} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
const { Content } = Layout;
class Home extends Component {
    constructor(props) {
        super(props);
        Date.prototype.greet = () => {
                let i = 0;
                let hour = new Date().getHours();
                let dayParts = [6,12,16,20,24];
                let greetings = [
                    'You\'re up Early!',
                    'Good Morning!',
                    'Good Afternoon!',
                    'Good Evening!',
                    'Good Night!'
                ];
                let greet = () => {
                    if( hour < dayParts[i] ) {
                        return greetings[i];
                    }
                    else{
                        i++;
                        return greet();
                    }
                };
                return greet();
        };
        this.state = {
            todos: [],
            loginVisible: false,
            signupVisible: false
        }
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
        this.showLogin = this.showLogin.bind(this);
        this.showSignup = this.showSignup.bind(this);
        this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
        this.handleSignupuccess = this.handleSignupuccess.bind(this);
    }
    componentDidMount() {
        this.props.actions.getQuoteofTheDay()
    }
    updateTodo(e) {
        this.props.actions.updateTodo(e.target.value,e.target.checked);
    }
    deleteTodo(e) {
        this.props.actions.deleteTodo(parseInt(e.target.id));
    }
    updateFilter(e) {
        e.preventDefault();
        this.props.actions.visibilityFilter(e.target.id);
    }
    componentWillReceiveProps(nextState) {
        let todos = []
            switch(nextState.filter) {
                case types.FILTER_SHOW_ALL:
                    this.setState({todos:nextState.todo})
                    break;
                case types.FILTER_SHOW_COMPLETED:
                     todos = nextState.todo.filter(t => t.completed)
                    this.setState({todos});
                    break;
                case types.FILTER_SHOW_OPEN:
                    todos = nextState.todo.filter(t => !t.completed)
                    this.setState({todos});
                    break;
                default:
                    this.setState({todos:nextState.todo})
                    break;
            }
    }
    showLogin() {
        this.setState({loginVisible: !this.state.loginVisible});
    }
    showSignup() {
        this.setState({signupVisible: !this.state.signupVisible});
    }
    handleLoginSuccess() {
        //TO-DO
    }
    handleSignupuccess() {

    }
    render() {
        return (
            <div className="todoHome">
                <Layout>
                    <Content style={{ padding: '20px 5px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Content style={{ padding: '0 24px', minHeight: 500 }}>
                                <Row>
                                    <Col span={24}>
                                        <div style={{'float':'right'}}>
                                            <Button onClick={this.showLogin}>Login</Button> &nbsp;&nbsp;
                                            <Button onClick={this.showSignup}>Signup</Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <b>{new Date().greet()}</b> ,
                                        {this.props.quote.success ? this.props.quote.contents.quotes[0].quote+' - ': 'Regardless of how you feel inside, always try to look like a winner. Even if you are behind, a sustained look of control and confidence can give you a mental edge that results in victory. - '} 
                                        {this.props.quote.success ? this.props.quote.contents.quotes[0].author+'.': 'Arthur Ashe.'}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}>
                                    </Col>
                                    <Col span={8}>
                                        <br/><br/>
                                        <form onSubmit={ e => {
                                                e.preventDefault();
                                                let todo = document.getElementById("addtodo");
                                                if(!todo.value.trim()) {
                                                    return;
                                                }
                                                this.props.actions.addTodo(todo.value);
                                                todo.value = ''
                                            }
                                        }>
                                            <Input placeholder="Add Todo..." id={"addtodo"} />
                                        </form>
                                    </Col>
                                    <Col span={8}>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={8}></Col>
                                    <Col span={8}>
                                        <br/>
                                        <br/>
                                        {this.state.todos.length ? (
                                            this.state.todos.map(todo => {
                                                if(!todo.deleted) {
                                                    return <span key={todo.id}><Checkbox value={todo.id} onChange={this.updateTodo} defaultChecked={todo.completed}>{todo.text}</Checkbox> <Icon style={{cursor: 'pointer'}} type="delete" id={todo.id} onClick={this.deleteTodo} /><br/></span>
                                                } else {
                                                    null
                                                }
                                            })
                                        ) : (null)}
                                    </Col>
                                    <Col span={8}></Col>
                                </Row>
                                <Row>
                                <Col span={8}></Col>
                                <Col span={8}>
                                        <br/>
                                        <br/>
                                        <a href="#" id={types.FILTER_SHOW_ALL} style={this.props.filter === types.FILTER_SHOW_ALL ? {color:'red'}: {}} onClick={this.updateFilter}>Show All</a> &nbsp;
                                        <a href="#" id={types.FILTER_SHOW_COMPLETED} style={this.props.filter === types.FILTER_SHOW_COMPLETED ? {color:'red'}: {}} onClick={this.updateFilter}>Show Completed</a> &nbsp;
                                        <a href="#" id={types.FILTER_SHOW_OPEN} style={this.props.filter === types.FILTER_SHOW_OPEN ? {color:'red'}: {}} onClick={this.updateFilter}>Show Open</a> &nbsp;
                                </Col>
                                <Col span={8}></Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
                <Login visible={this.state.loginVisible} onSuccess={this.handleLoginSuccess} onClose={this.showLogin}/>
                <Signup visible={this.state.signupVisible} onSuccess={this.handleSignupuccess} onClose={this.showSignup}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.quote,
        todo: state.todo,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, quotesActions, todosActions, visibilityFilterActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);