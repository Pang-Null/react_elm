import React, { Component } from 'react'
export class P_denglu extends Component {
    constructor(props) {
        super(props)
        this.state = {
             code:"",//存储请求的验证码
             name:"",//存储输入的用户名
             password:"",//存储输入的密码
             codenum:"",//存储输入的验证码
        }
    };
    // 获取验证码图片的网络图片
    getCode(){
        fetch("https://elm.cangdu.org/v1/captchas",{
            credentials:"include",
            method:"post"
        }).then(res=>{
            return res.json();
        }).then(data=>{
            this.setState({
                code:data.code
            });
        }).catch(err=>{
            console.log(err);
        })
    };
    //登录的网络请求
    getDenglu(){
        fetch("https://elm.cangdu.org/v2/login",{
            method:"post",
            credentials:"include",
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({
                
            })
        }).then(res=>{
            return res.JSON();
        }).then(data=>{
            console.log(data);
        })
    };
    //
    render() {
        return (
            <div>
                这是登录页面
            </div>
        )
    };
}

export default P_denglu
