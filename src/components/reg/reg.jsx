import React, {Component} from 'react';

import { Button } from 'antd-mobile';

class Reg extends Component {
    render() {
        return (
            <div>
                注册
                <Button className="btn" type="primary">primary 按钮</Button>
            </div>
        );
    }
}

export default Reg;