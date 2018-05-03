import React, { Component } from 'react';
import { Layout , Row, Col, Input, Checkbox, Icon} from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as quotesActions from '../actions/quotesActions';
import * as todosActions from '../actions/todoActions';
import * as visibilityFilterActions from '../actions/visibilityFilterActions';
import * as types from '../actions/actionTypes';
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
            todos: []
        }
        this.updateTodo = this.updateTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
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
    render() {
        return (
            <div className="todoHome">
                <Layout>
                    <Content style={{ padding: '20px 5px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Content style={{ padding: '0 24px', minHeight: 500 }}>
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
                                        <a href="#" id={types.FILTER_SHOW_ALL} onClick={this.updateFilter}>Show All</a> &nbsp;
                                        <a href="#" id={types.FILTER_SHOW_COMPLETED} onClick={this.updateFilter}>Show Completed</a> &nbsp;
                                        <a href="#" id={types.FILTER_SHOW_OPEN} onClick={this.updateFilter}>Show Open</a> &nbsp;
                                </Col>
                                <Col span={8}></Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
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