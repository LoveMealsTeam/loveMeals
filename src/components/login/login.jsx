import React, {Component} from 'react';
import "./login.css";
import { Button } from 'antd-mobile';

class Login extends Component {
    render() {
        return (
            <div>
                <div class="wrap">
                    <div class="phone">
                        <i class="icon-shoujihao iconfont"></i>
                        <input type="text" placeholder="手机号"/>
                    </div>
                    <div class="pass">
                        <i class="icon-mima iconfont"></i>
                        <input type="text"  placeholder="密码"/>
                    </div>
                    <div class="btnwrap">
                        <input type="checkbox" id="checkbox"/><label htmlFor="checkbox">密码记住</label>
                        <Button className="btn btnbox" type="primary">登录</Button>
                        <Button className="btn btnbox" type="primary">注册</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;