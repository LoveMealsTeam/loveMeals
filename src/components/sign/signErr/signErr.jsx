import React, {Component} from 'react';


import { Result, Icon, WhiteSpace } from 'antd-mobile';
import './signErr.css';

class SignErr extends Component {
    render() {
        return (
            <div>
                <Result
                    img={<Icon type="cross-circle-o" className="icon" style={{ fill: '#F13642' }} />}
                    title={this.props.title}
                    message={'报名失败，请重新报名'}
                />
                <WhiteSpace />
            </div>
        );
    }
}

export default SignErr;