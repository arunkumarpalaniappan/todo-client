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
                                    <Col span={2}>
                                        <span>
                                            <img src={"https://api.adorable.io/avatars/72/"+Date.now()+".png"} alt={"gravatar"}className={"profile-icon"} />
                                        </span>
                                    </Col>
                                    <Col span={14}>
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
