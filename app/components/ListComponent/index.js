import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
// import  './styles.less';
import Item from './Item/index'
import { Link } from 'react-router-dom'
class ListComponent extends Component{
  
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  render(){
    return (
      <div >
      {this.props.data.map((item, index) => {
        return (
        <Link to={'/shop/:'+index} key={index}>
          <Item  data={item} />
        </Link>
        )
      })}
      </div>
    );
  }
}
export default ListComponent;