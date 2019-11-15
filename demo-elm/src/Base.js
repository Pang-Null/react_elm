import React, { Component } from 'react'
import P_showcity from './P_showcity'
import P_denglu from './P_denglu'
import Start from './Start'
import {Link,Route,withRouter,Switch,Redirect}  from "react-router-dom"
export class Base extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    render() {
        return (
            <div className="App">
                <section>
                <Route exact path="/" component={Start} />
                <Route path="/p_showcity" component={P_showcity} />
                <Route path="/p_denglu" component={P_denglu} />
                </section>
            </div>
        )
    }
}

export default Base
