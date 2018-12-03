import React, {Component} from 'react';

import './set.css';
import TopTit from "../common/topTit/topTit";
import BotNav from "../botNav/botNav";

import {Button} from "antd-mobile";
import {BrowserRouter as Router,Link} from 'react-router-dom';

class Set extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className='set'>
                {/* 标题 */}
                <TopTit
                    title={this.props.title}
                />

                {/* 个人信息 */}
                <div className="info boxs flex-row ite-c">
                    <div className="img"></div>

                    <ul className="textWrap flex-col jus-a">
                       <li>张三</li>
                        <li>
                            <span>权限：</span>二级权限
                        </li>
                        <li>
                            <span>手机号：</span>1305922261
                        </li>
                    </ul>
                </div>

                {/* 功能 */}
                <Router>
                    <ul className="fn">
                        <li>
                            <Link to={'/userList'}>团队人员</Link>
                        </li>
                        <li>
                            <Link to={'/signStep'}>报名进度</Link>
                        </li>
                        <li>
                            <Link to={'/signStep'}>往期反馈</Link>
                        </li>
                    </ul>
                </Router>

                {/* 退出登录 */}
                <Button className="btn outLogin" type="primary">退出登录</Button>

                {/* 底部导航 */}
                <BotNav/>
            </div>
        );
    }
}

export default Set;