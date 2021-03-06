import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import './style.less'
class Profile extends Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate
    this.state={
      username:'登录/注册',
      phonenumber:'登录后享受更多特权',
      balance:0,
      favorable:0,
      point:0,
    }
  }
  handleBack(){
    this.props.history.go(-1);
  }
  render(){
    const username= this.state.username;//用户名
    const phonenumber= this.state.phonenumber;//手机号
    const balance= this.state.balance;//余额
    const favorable= this.state.favorable;//优惠券
    const point= this.state.point;//积分
    

    return(
      <div className="profile">
        <Header title="我的" handleBack={this.handleBack.bind(this)}></Header>
        <div className="userinfo">
          <img src="" alt=""/>
          <div>
            <p className="username">{username}</p>
            <p className="phonenumber"><i className="fa fa-mobile"></i>{phonenumber}</p>
          </div>
          <section>
            <Link to="/login">
              <i className="fa fa-angle-right" />       
            </Link>
          </section>
        </div>
        <div className="myinfo">
          <section ><span className="favorable">{favorable}</span>个优惠</section>
          <section ><span className="point">{point}</span>分积分</section>
        </div>
        <div className="jiange"/>
        <section className="profile_s"><i className="fa fa-book left"></i><div>我的订单<i className="fa fa-angle-right right"></i></div></section>
        <section className="profile_s"><i className="fa fa-shopping-bag left" ></i><div>积分商城<i className="fa fa-angle-right right"></i></div></section>
        <section className="profile_s"><i className="fa fa-credit-card left"></i><div>饿了么会员卡<i className="fa fa-angle-right right"></i></div></section>
        <div className="jiange"/>
        <section className="profile_s"><i className="fa fa-book left"></i><div>服务中心<i className="fa fa-angle-right right"></i></div></section>
        <section className="profile_s"><i className="fa fa-book left"></i><div>下载饿了么APP<i className="fa fa-angle-right right"></i></div></section>
        <Footer />    
      </div>
    )
  }
}
export default Profile;