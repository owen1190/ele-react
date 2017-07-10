import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from '../../components/Header'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './style.less'
 class Login extends Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state={
      loginway:true//登录方式，true为手机登录，false为密码登录
    }
  }
  handleBack(){
    this.props.history.goBack();
  }
  handleLogin(){
    this.setState({
      loginway: !this.state.loginway
    })
  }
  render(){
    const loginway = this.state.loginway;
    // console.log(loginway)
    return(
      <div className="loginContainer">
        <div className='loginHeader'>
                <span className='backIcon' onClick={this.handleBack.bind(this)}>
                    <i className="fa fa-chevron-left"></i>
                </span>
                <h1>登录</h1>
                <span className="" onClick={this.handleLogin.bind(this)}>{loginway ? "密码登录":"短信登录" }</span>
        </div>
        
        {loginway ? <form className="loginForm">
              <section className="input_container phone_number">
                <input type="text" placeholder="手机号" name="phone" />
                <button>获取验证码</button>
              </section>
              <section className="input_container">
                <input type="text" placeholder="验证码" name="mobileCode" />
              </section>
            <section className="login_tips">
              温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意
              <a href="https://h5.ele.me/service/agreement/">《用户服务协议》</a>
            </section>
            </form>
          : <form className="loginForm">
              <section className="input_container">
                <input type="text" placeholder="手机号/邮箱/用户名" />
              </section>
              <section className="input_container">
                <input type="password" placeholder="密码" />
                
                
              </section>
              
            </form>}
        <button className="login_container">登录</button>
        
      </div>
    )
  }
}


export default Login;