import React, { Component } from 'react'

export class Start extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.start1=this.start1.bind(this);
    };
    start1(){
        this.props.history.push({pathname:"/P_showcity"});
    };
    render() {
        return (
            <div>
                <h1 onClick={this.start1}>点此进入庞的页面</h1>
                <h1>点此进入刘的页面</h1>
            </div>
        )
    }
}

export default Start
