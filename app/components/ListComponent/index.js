import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
// import  './styles.less';
import Item from './Item/index'

class ListComponent extends Component{
  
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  render(){
    return (
      <div >
      {this.props.data.map((item, index) => {
        return <Item key={`list-${index}`} data={item} />
      })}
      </div>
    );
  }
}
export default ListComponent;