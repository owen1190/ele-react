import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
import { Link } from 'react-router-dom'

import  './styles.less';


class HomeHeader extends Component{
  
  
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  

  render(){
    
    return (
      <div id="home-header">
        <div className="clear-fix">
          <div className="home-header-left float-left">
            <Link to="/city">
            <i className="fa fa-map-marker"></i>
            <span>{this.props.cityName}</span>
            <i className="fa fa-angle-down"></i>
            </Link>
          </div>
          <div className="home-header-right float-right">
            <span>晴</span>
            <i className="fa fa-sun-o"></i>
          </div>
        </div>
        <div className="home-header-middle clear-fix">
          <input type="text" placeholder="搜索商家、商品" />
        </div>
        <div className="home-header-bottom">
          <ul>
            <li>炒鸡</li>
            <li>红豆派</li>
            <li>大虾</li>
            <li>我的菜</li>
            <li>冷面</li>
            <li>肉夹馍</li>          
          </ul>
        </div>
      </div>
    );
  }
}
export default HomeHeader;