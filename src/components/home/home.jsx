import React, {Component} from 'react';

import "./home.css";
import BotNav from '../botNav/botNav';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="title">海珠挚爱餐</h1>
                <div className="subfield">
                    分栏
                </div>
                <div className="column">
                    <div className="column-ele">
                        <a href="">报名</a>
                    </div>
                    <div className="column-ele">
                        <a href="">XXX</a>
                    </div>
                    <div className="column-ele">
                        <a href=""> XXX</a>
                    </div>
                    <div className="column-ele">
                        <a href="">报名</a>
                    </div>
                    <div className="column-ele">
                        <a href="">XXX</a>
                    </div>
                    <div className="column-ele">
                        <a href=""> XXX</a>
                    </div>
                </div>


                {/*  底部导航 */}
                <BotNav/>
            </div>
        );
    }
}
export default Home;