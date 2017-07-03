import React,{Component} from 'react'
import './style.less'
class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <section className="mistie">外卖</section>
        <section className="search">搜索</section>
        <section className="order">订单</section>
        <section className="profile">我的</section>
      </div>   
    )
  }
}
export default Footer;