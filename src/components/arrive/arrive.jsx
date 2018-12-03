import React, {Component} from 'react';

import TopTab from "../common/topTab/topTab";
import TopTit from "../common/topTit/topTit";
import ColList from "../colList/colList";

class Arrive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offon:0
        }
    }
    render() {
        return (
            <div className='arrive'>
                {/* 顶部标题 */}
                <TopTit
                    title={this.props.title}
                />

                {/* 切换页 */}
                <TopTab
                    title={['未签到','已签到']}
                    offon={this.state.offon}
                />

                {/* 内容页切换 */}
                <ColList/>
            </div>
        );
    }
}

export default Arrive;