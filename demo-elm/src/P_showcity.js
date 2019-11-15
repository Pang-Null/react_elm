import React, { Component } from 'react'
export class P_showcity extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.getdenglu=this.getdenglu.bind(this);
    };
    getdenglu(){
        this.props.history.push({
            pathname:"/p_denglu",
        })
    }
    render() {
        return (
            <div>
                <h1 onClick={this.getdenglu}>城市展示页面</h1>
            </div>
        )
    }
}
export default P_showcity
