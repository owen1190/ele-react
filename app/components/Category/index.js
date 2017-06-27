import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'
class Category extends React.Component{
  constructor(props){
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate
    this.state={
      index:0
    }
  }
  render(){
    const opt = {
      callback: function(index){
        this.setState({index:index})
      }.bind(this)
    }
    return(
      <div id="home-category">
        <ReactSwipe swipeOptions={opt}>
        <div className="carousel-item">
          <ul className="clear-fix">
            <li className="float-left meishi">美食</li>
            <li className="float-left tianpinyinpin">甜品饮品</li>
            <li className="float-left shangchaobianli">商超便利</li>
            <li className="float-left guoshushengxian">果树生鲜</li>
            <li className="float-left xindiantehui">新店特惠</li>
            <li className="float-left zhunshida">准时达</li>
            <li className="float-left wancan">晚餐</li>
            <li className="float-left hanbaoshutiao">汉堡薯条</li>
          </ul>
        </div>
        <div className="carousel-item">
          <ul className="clear-fix">
            <li className="float-left baozizhoudian">包子粥店</li>
            <li className="float-left xianhuadangao">鲜花蛋糕</li>
            <li className="float-left malatan">麻辣烫</li>
            <li className="float-left chuanxiangcai">川湘菜</li>
            <li className="float-left pisayimian">披萨意面</li>
            <li className="float-left yiguoliaoli">异国料理</li>  
          </ul>
        </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ''}></li>
            <li className={this.state.index === 1 ? "selected" : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Category