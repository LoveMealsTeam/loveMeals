import React, {Component} from 'react';

import './userCol.css';

class UserCol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        const ajax = this.props.zzwse.ajax;

        ajax({
            type:'get',
            url:'/userList',
            data:{
                time:new Date()
            },
            success:function(msg){
                if(msg.state==1){
                    const data = msg.body.result;
                    console.log(data)
                    this.setState({
                        data:data
                    })
                }
            }.bind(this)
        })
    }

    render() {
        const data = this.state.data;
        return (
            <ul className={'UserCol'}>
                {
                    data.length<=0?(
                        <p className='zore'>暂时无数据</p>
                    ):(
                        data.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <span className="name">{item.username}</span>
                                    <a className="phone"  href={`tel:${item.phonenum}`} >{item.phonenum}</a>
                                </li>
                            )
                        })
                    )
                }
            </ul>
        );
    }
}

export default UserCol;