import React, {Component} from 'react';

import TopTit from "../common/topTit/topTit";
import {List,TextareaItem,Button} from "antd-mobile";

import './feedback.css';

class Feedback extends Component {
    render() {
        return (
            <div className='feedback'>
                {/* 标题 */}
                <TopTit
                    title={this.props.title}
                />

                {/* 内容 */}
                <List renderHeader={() => '反馈内容'}>
                    <TextareaItem
                        autoHeight
                        placeholder={'请输入反馈内容'}
                        rows={5}
                    />
                </List>
                <Button className="btn submit" type="primary">提交</Button>
            </div>
        );
    }
}

export default Feedback;