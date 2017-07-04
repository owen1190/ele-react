import React,{Component} from 'react'
import './style.less'
import {Link} from 'react-router-dom'
class Footer extends Component{
  constructor(props){
    super(props);
    this.goToAddress=this.goToAddress.bind(this);
  }
  goToAddress(path) {
        this.props.history.push(path);
  }
  render(){
    return(
      <div className="footer">        
          <Link to="/"><p className="order" >外卖</p></Link> 
          <Link to="/search/:geoHash"><p className="discovery" >发现</p></Link> 
          <p className="order" >订单</p>        
          <Link to="/profile"><p className="profile" >我的</p></Link> 
      </div>   
    )
  }
}
export default Footer;