import React, {Component} from 'react';

import TopTit from "../common/topTit/topTit";
import './peopleList.css';
import { Accordion, List,Picker } from 'antd-mobile';

class PeopleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const state = this.state;
        return (
            <div>
                {/* 顶部标题 */}
                <TopTit
                    title={this.props.title}
                    url={'/addPeople'}
                />

                <List renderHeader={() => '活动时间'}>
                    <Picker
                        data={state.time.selectTime}
                        value={state.time.value}
                        cols={1} onChange={this.selectTime}
                    ><List.Item arrow="horizontal">参与活动时间</List.Item>
                    </Picker>
                </List>

                <List renderHeader={() => '组别'}>
                    <Accordion defaultActiveKey="0" className="my-accordion">
                        <Accordion.Panel header="第一组">
                            <ul className="list">
                                <li className='flex-row jus-b'>
                                    <span className="name">张三</span>
                                    <span className='phone'>1305628221</span>
                                </li>
                                <li>
                                    <span className="name">张三</span>
                                    <span className='phone'>1305628221</span>
                                </li>
                            </ul>
                        </Accordion.Panel>
                    </Accordion>
                </List>
            </div>
        );
    }
}

export default PeopleList;