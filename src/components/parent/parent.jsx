import React, {Component} from 'react';
import TopTit from "../common/topTit/topTit";
import ParentCol from './parentCol/parentCol'


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
                <ParentCol/>
            </div>
        );
    }
}

export default Parent;