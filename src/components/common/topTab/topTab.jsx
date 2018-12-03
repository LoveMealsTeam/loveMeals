import React, {Component} from 'react';

import './topTab.css';

class TopTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            offon:this.props.offon,
            title:this.props.title
        }
    }
    //顶部切换
    callback = (index)=>{
        this.setState({
            offon:index
        })
    }
    render() {
        const state = this.state;
        return (
            <ul className="TopNav flex-row jus-b" >
                {
                    state.title.map((item,index)=>{
                        return (
                            <li
                                key={index}
                                className={state.offon==index?'on':''}
                                onClick={this.callback.bind(this,index)}
                            >{item}
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default TopTab;