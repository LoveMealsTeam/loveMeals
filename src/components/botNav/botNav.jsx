import React, {Component} from 'react';
import "./botNav.css";
class BotNav extends Component {
    render() {
        return (
            <div>
                <ul class="bottom-nav">
                    <li><a href="#" class="home"><i className='icon-zhuye iconfont'></i><span>主页</span></a></li>
                    <li><a href="#" class="home"><i className='icon-wode iconfont'></i><span>我的</span></a></li>
                </ul>
            </div>
        );
    }
}

export default BotNav;