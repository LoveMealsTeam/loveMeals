import React, {Component} from 'react';

import {Icon} from "antd-mobile";
import './colList.css'

class ColList extends Component {
    render() {
        return (
            <ul className={'ColList'}>
                <li>
                    <span className="name">张三</span>
                    <span className="phone">1306978778</span>
                    <div className="delete">
                        <Icon type={'cross-circle'} />
                    </div>
                </li>
            </ul>
        );
    }
}

export default ColList;