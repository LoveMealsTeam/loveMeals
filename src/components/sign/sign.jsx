import React, {Component} from 'react';

import Individual from "./Individual/individual";
import Item from "./Item/item";
import TopTab from "../common/topTab/topTab";

class Sign extends Component {
    constructor(){
        super();
        this.state = {
            offon:0
        }
    }
    render() {
        const state = this.state;
        return (
            <div>
                {/* 顶部切换窗口 */}
                <TopTab
                    offon={state.offon}
                    title={['个人报名','团队报名']}
                />

                {/* 内容切换页 */}
                {state.offon?<Individual/>:<Item/>}
            </div>
        );
    }
}

export default Sign;