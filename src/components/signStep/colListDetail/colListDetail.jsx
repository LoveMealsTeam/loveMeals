import React, {Component} from 'react';

import {Icon} from "antd-mobile";
import './colListDetail.css'

class ColListDetail extends Component {
    render() {
        return (
            <ul className={'ColListDetail'}>
                <li>
                    <span className="name">张三</span>
                    <span className="phone">1306978778</span>
                    <div className="know">不懂</div>
                </li>
            </ul>
        );
    }
}

export default ColListDetail;