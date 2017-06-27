import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
import  './styles.less';

class Item extends Component{
  
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  render(){
    const data = this.props.data;
    
      
        return (
            <div className="list-item clear-fix">
                <div className="item-img-container float-left">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        {data.brand == true?<span className="brand">品牌</span>:""}
                        <h3 className="float-left">{data.title}</h3>
                        <div className="float-rgiht baopiaozhun">
                          {data.bao == true?<span>保</span>:""}
                          {data.piao == true?<span>票</span>:""}
                          {data.zhun == true?<span>准</span>:""}                        
                        </div>           
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{data.price}</span>
                        <span className="mumber float-right">已售</span>
                    </div>
                </div>
            </div>
    )
  }
}
export default Item;