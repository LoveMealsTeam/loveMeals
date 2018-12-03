import React, {Component} from 'react';

import TopTit from "../common/topTit/topTit";
import UserCol from "./userCol/userCol";

class UserList extends Component {

    render() {
        return (
            <div className={'userList'}>
                {/* 标题 */}
                <TopTit
                    title={this.props.title}
                />

                {/* 成员列表 */}
                <UserCol
                    zzwse={this.props.zzwse}
                />
            </div>
        );
    }
}

export default UserList;