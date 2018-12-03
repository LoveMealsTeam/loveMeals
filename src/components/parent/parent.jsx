import React, {Component} from 'react';
import TopTit from "../common/topTit/topTit";
import Parent from './parentCol/parentCol'


class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                {/* 标题 */}
                <TopTit
                    title={this.props.title}
                    url={'123'}
                />

                {/* 列表 */}
                <Parent/>
            </div>
        );
    }
}

export default Parent;