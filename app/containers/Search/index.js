import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom';
import './style.less'
export default class Search extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
  }
  render(){
    return (
      <div className="search_container">
        <div className="search_header">
          <Link to='/'><i className="fa fa-chevron-left"></i></Link>
          <input type="text" placeholder="请输入商品名称"/>
        </div>
        <div className="hot_search">
          <h2>热门搜索</h2>
          <section>
            <span>麻辣烫</span>
            <span>肯德基</span>
            <span>麦当劳</span>
            <span>米线</span>
            <span>5折菜肴</span>
            <span>面</span>
            <span>粥</span>
            <span>我的菜</span>
          </section>
        </div>
      </div>
    );
  }
}