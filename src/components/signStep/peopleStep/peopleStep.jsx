import React, {Component} from 'react';

import './peopleStep.css';
import { Accordion, List,Picker } from 'antd-mobile';

class PeopleStep extends Component {
    constructor(props) {
        super(props);
    }
    selectTime = (val)=>{
        console.log(val)
    }
    render() {
        const state = this.state;
        return (
            <div>
                {/* 数据列表 */}
                <List>
                    <Accordion defaultActiveKey="0" className="my-accordion">
                        <Accordion.Panel header="北京大学">
                            <ul className="liststep">
                                <li>
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

export default PeopleStep;