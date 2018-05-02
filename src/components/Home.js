import React, { Component } from 'react';
import { Layout, Icon , Row, Col} from 'antd';
const { Content } = Layout;
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: {
                1: {
                    name: 'Hello',
                    status: false,
                    key: 1
                },
                2: {
                    name: 'World',
                    status: true,
                    key: 2
                }
            }
        };
        Date.prototype.greet = () => {
                let i = 0;
                let hour = new Date().getHours();
                let dayParts = [6,12,16,19,24];//Keep in this order
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
        this.updateTodo = this.updateTodo.bind(this);
    }
    updateTodo(event) {
        console.log(event)
    }
    render() {
        const styles = {
            todoDone: {
                textDecoration: "line-through"
            }
        };
        return (
            <div className="todoHome">
                <Layout>
                    <Content style={{ padding: '20px 5px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Content style={{ padding: '0 24px', minHeight: 500 }}>
                                <Row>
                                    <Col span={14}>
                                        {new Date().greet()} ,

                                    </Col>
                                    <Col span={8}>
                                        <Row>
                                            <Col span={8}>
                                            </Col>
                                            <Col span={8}>
                                            </Col>
                                            <Col span={8}>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Content>
                        </Layout>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default Home;
