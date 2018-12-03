import React, {Component} from 'react';

import TopTit from "../common/topTit/topTit";
import StepTab from "./stepTab/stepTab";
import ColListDetail from "./colListDetail/colListDetail";
import PeopleStep from "./peopleStep/peopleStep";

import {List,Picker} from "antd-mobile";

class SignStep extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offon:0,
            time:{
                selectTime:[
                    {
                        label: '2018-12-2 星期六',
                        value: true
                    },
                    {
                        label: '2018-12-2 星期六',
                        value: false
                    }
                ],
                value:''
            }
        }
    }
    selectTime = (val)=>{
        console.log(val)
    }
    render() {
        return (
            <div>
                {/* 标题 */}
                <TopTit
                    title={this.props.title}
                    url={'/addPeople'}
                />
                {/* 时间 */}
                <List renderHeader={() => '活动时间'}>
                    <Picker
                        data={this.state.time.selectTime}
                        value={this.state.time.value}
                        cols={1} onChange={this.selectTime}
                    ><List.Item arrow="horizontal">参与活动时间</List.Item>
                    </Picker>
                </List>

                {/* 报名类型 */}
                <List renderHeader={() => '报名类型'}>
                    <StepTab
                        offon={this.state.offon}
                        title={[
                            {name:'个人',num:22},
                            {name:'团队',num:22}
                        ]}
                    />
                </List>

                {/* 切换盒 */}
                {/*<ColListDetail/>*/}
                <PeopleStep/>
            </div>
        );
    }
}

export default SignStep;