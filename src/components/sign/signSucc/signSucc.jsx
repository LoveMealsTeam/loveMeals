import React, {Component} from 'react';

import { Result, Icon, WhiteSpace } from 'antd-mobile';
import './signSucc.css';

class SignSucc extends Component {
    render() {
        return (
            <div className={'fle-col jus-c ite-c'}>
                <Result
                    img={<Icon type="check-circle" className="icon" style={{ fill: '#1F90E6' }} />}
                    title={this.props.title}
                    message={'录取消息将在周五发送，请耐心等候录取消息'}
                />
                <WhiteSpace />
            </div>
        );
    }
}

export default SignSucc;