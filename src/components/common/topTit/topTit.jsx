import React, {Component} from 'react';

import './topTit.css';
import { Icon, Grid } from 'antd-mobile';
import { goBack } from 'react-router'
import {Link} from 'react-router-dom';

class TopTit extends Component {
    constructor(props){
        super(props)
    }
    goback = ()=>{
        window.history.back()
    }
    render() {
        return (
            <div className='topTit flex-row jus-b ite-c'>
                {/* 返回上一层 */}
                <div className="back flex-row ite-c" onClick={this.goback}>
                    <Icon type={'left'} size={'lg'} />
                </div>
                <span className="title">{this.props.title}</span>

                {

                    this.props.url?(
                        <Link to={this.props.url} className={'add flex-row ite-c'}>
                        <Icon type={'plus'} size={'md'}  />
                        </Link>
                    ):''
                }

            </div>
        );
    }
}

export default TopTit;