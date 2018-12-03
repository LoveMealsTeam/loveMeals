import React, {Component} from 'react';

import "./home.css";
import BotNav from '../botNav/botNav';
import { Picker,List } from 'antd-mobile';
import {BrowserRouter as Router,Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addr: {
                arr: [
                    {
                        value: 0,
                        label: '凤阳',
                    },
                    {
                        value: 1,
                        label: '合生',
                    }
                ],
                value: ''
            },
            nav: [
                {
                    title:'人员名单',
                    icon:'people',
                    url:'/peopleList'
                },
                {
                    title:'长者详情',
                    icon:'parent',
                    url:'/parent'
                },
                {
                    title:'现场签到',
                    icon:'sign',
                    url:'/arrive'
                },
                {
                    title:'现场反馈',
                    icon:'memo',
                    url:'/feedback'
                },
            ]
        }
    }
    selectAddr = (val)=>{
        console.log(val)
    }
    render() {
        const state = this.state;
        return (
            <div className={'home'}>
                {/* 标题 */}
                <p className="title">海珠志爱餐</p>

                {/* 地点选择 */}
                <Picker
                    data={state.addr.arr}
                    value={state.addr.value}
                    cols={1} onChange={this.selectAddr}
                ><List.Item arrow="horizontal">地点选择</List.Item>
                </Picker>

                {/* 内容 */}
                <div className="content">
                    <Router>
                        <ul className="list clearfix">
                            {
                                state.nav.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <Link to={item.url}>
                                                <i className={`icon ${item.icon}`}></i>
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Router>
                </div>


                {/*  底部导航 */}
                <BotNav/>
            </div>
        );
    }
}
export default Home;