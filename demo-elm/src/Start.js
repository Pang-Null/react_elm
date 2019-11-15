import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Start extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.start1=this.start1.bind(this);
      this.start2=this.start2.bind(this);
    };
    start1(){
        this.props.history.push({pathname:"P_showcity"});
        this.props.history.push({pathname:""});
    }
    render() {
        return (
            <div>
                <h1 onClick={start1}>点此进入庞的页面</h1>
                <h1 onClick={start2}>点此进入刘的页面</h1>
            </div>
        )
    }
}

export default Start
