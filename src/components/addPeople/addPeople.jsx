import React, {Component} from 'react';

import './addPeople.css';
import TopTit from "../common/topTit/topTit";
import { List, InputItem,Picker,Radio,Button } from 'antd-mobile';

class AddPeople extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            phone:'',
            know:{
                selectKnow:[
                    {
                        label: '懂',
                        value: true
                    },
                    {
                        label: '不懂',
                        value: false
                    }
                ],
                value:''
            },
            addr:{
                arr:[
                    {
                        value: 0,
                        label: '凤阳',
                        extra: ['活动性质：给长者送上午餐和水果，陪长者聊天唠嗑', '地址：凤阳街道家庭综合服务中心',
                            '活动时间：每周六上午10:30-12:30']
                    },
                    {
                        value: 1,
                        label: '合生',
                        extra: ['活动性质：给长者送上水果，陪长者聊天', '地点：合生广场',
                            '时间：每周六下午3:00-5:00']
                    }
                ],
                value:''
            },
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
            },
            group:{
                selectGroup:[
                    {
                        label: '第一组',
                        value: 1
                    },
                    {
                        label: '第二组',
                        value: 2
                    }
                ],
                value:''
            },
        }
    }
    selectKnow = (val)=>{
        console.log(val)
    }
    selectTime = (val)=>{
        console.log(val)
    }
    selectGroup = (val)=>{
        console.log(val);
    }
    clickAddr = (val)=>{
        console.log(val);
    }

    render() {
        const state = this.state;
        const RadioItem = Radio.RadioItem
        return (
            <div className='addPeople'>
                <TopTit
                    title={this.props.title}
                />
                <List renderHeader={() => '基本信息'}>
                    <InputItem
                        placeholder="请输入姓名"
                        // value={this.state.name}
                    >姓名</InputItem>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号"
                        // value={this.state.phone}
                    >手机号码</InputItem>
                    <Picker
                        data={state.know.selectKnow}
                        value={state.know.value}
                        cols={1} onChange={this.selectKnow}
                    ><List.Item arrow="horizontal">是否懂粤语</List.Item>
                    </Picker>
                </List>
                <List renderHeader={() => '活动地点与时间'}>
                    {
                        state.addr.arr.map(i => (
                            <RadioItem
                                key={i.value}
                                // checked={value2 === i.value}
                                onChange={() => this.clickAddr(i.value)}>
                                {i.label}
                                {
                                    i.extra.map((v,index)=>{
                                        return (
                                            <List.Item.Brief
                                                key={index}
                                            >{v}</List.Item.Brief>
                                        )
                                    })
                                }
                            </RadioItem>
                        ))
                    }
                    <Picker
                        data={state.time.selectTime}
                        value={state.time.value}
                        cols={1} onChange={this.selectTime}
                    ><List.Item arrow="horizontal">参与活动时间</List.Item>
                    </Picker>
                    <Picker
                        data={state.group.selectGroup}
                        value={state.group.value}
                        cols={1} onChange={this.selectGroup()}
                    ><List.Item arrow="horizontal">现场组别</List.Item>
                    </Picker>
                </List>
                <Button className="btn submit" type="primary">提交</Button>
            </div>
        );
    }
}

export default AddPeople;