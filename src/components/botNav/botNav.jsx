import React, {Component} from 'react';

import "./botNav.css";

import {Icon} from 'antd-mobile';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';

class BotNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            botNav:[
                {title:'首页', icon:'loading', url:'/'},
                {title:'设置', icon:'setting', url:'/set'}
            ]
        }
    }

    render() {
        return (
            <div className="bottom-nav">
                <Router>
                    <ul className="bottom-List flex-row">
                        {
                            this.state.botNav.map((item,index)=>{
                                if(item.url=='/'){
                                    return (
                                        <li key={index}>
                                            <NavLink to={item.url} activeClassName='active' exact>
                                                <span>{item.title}</span>
                                            </NavLink>
                                        </li>
                                    )
                                }
                                return (
                                    <li key={index}>
                                        <NavLink to={item.url}>
                                            <span>{item.title}</span>
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                     </ul>
                </Router>
            </div>
        );
    }
}

export default BotNav;