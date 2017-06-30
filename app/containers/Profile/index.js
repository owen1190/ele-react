import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';




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
  render(){
    const username= this.state.username;//用户名
    const phonenumber= this.state.phonenumber;//手机号
    const balance= this.state.balance;//余额
    const favorable= this.state.favorable;//优惠券
    const point= this.state.point;//积分
    

    return(
      <div className="profile">
        <div className="head">
          <i className="fa fa-chevron-left"></i>
          <span className="tittle">我的</span>
        </div>
        <div className="userinfo">
          <img src="" alt=""/>
          <section>
            <p>{username}</p>
            <p><i className="fa fa-mobile"></i>{phonenumber}</p>
          </section>
          <section>
            <i className="fa fa-angle-right" /> 
          </section>
        </div>
        <div className="myinfo">
          <div className="title">{balance}元<span className="subtitle">我的余额</span></div>
          <div className="title">{favorable}个<span className="subtitle">我的优惠</span></div>
          <div className="title">{point}分<span className="subtitle">我的积分</span></div>
        </div>
        <div className="myorder"><i className="fa fa-book"></i>我的订单<i className="fa fa-angle-right"></i></div>
        <div className="mypoint"><i className="fa fa-shopping-bag"></i>积分商城<i className="fa fa-angle-right"></i></div>
        <div className="card"><i className=""></i>饿了么会员卡<i className="fa fa-angle-right"></i></div>
        
        <div className="service"><span></span>服务中心<i className="fa fa-angle-right"></i></div>
        <div className="download"><span></span>下载饿了么APP<i className="fa fa-angle-right"></i></div>
      </div>    
    )
  }
}
export default Profile;