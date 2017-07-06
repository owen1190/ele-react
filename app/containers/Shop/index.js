import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom'
import './style.less'

class Shop extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="shop_container">
        <Link to="/">
        <i className="fa fa-chevron-left"></i>
        </Link>
        <header className="shop_header">
          <img src="" alt=""/>
          <section className="shop_discription">
            <h2 className="shop_title">{}</h2>
            <p className="shop_delivery">{}/{}分钟送到/配送费￥{}</p>
            <i className="fa-angle-right"></i>
          </section>
        </header>
      </div>
    )
  }
}
export default Shop;