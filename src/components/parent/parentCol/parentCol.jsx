import React, {Component} from 'react';

import {Icon} from "antd-mobile";
import './parentCol.css'

class ParentCol extends Component {
    render() {
        return (
            <ul className={'ParentCol'}>
                <li>
                    <span className="name">张三</span>
                    <span className="phone">1306978778</span>
                </li>
            </ul>
        );
    }
}

export default ParentCol;