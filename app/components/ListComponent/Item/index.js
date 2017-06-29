import React,{Component} from 'react';
import PureMixinRender from 'react-addons-pure-render-mixin';
import  './styles.less';
import { Link } from 'react-router-dom'
class Item extends Component{
  
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureMixinRender.shouldComponentUpdate;
  }

  render(){
    const data = this.props.data;
    
        
        return (
            // <Link to='/shop/'>
            <div className="list-item clear-fix">
                <div className="item-img-container float-left">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container ">
                        {data.brand == true?<span className="brand">品牌</span>:""}
                        <h3 className="">{data.title}</h3>
                        <span className="baopiaozhun">
                          {data.bao == true?<span>保</span>:""}
                          {data.piao == true?<span>票</span>:""}
                          {data.zhun == true?<span>准</span>:""}                        
                        </span>           
                    </div>
                    <div className="item-sub-title ">
                        <span className="pingjia">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            {data.star}
                        </span>
                        {data.subTitle}
                        <span className="kuaidi">
                            {data.zhunshida == true?<span className="zhunshida">准时达</span>:""}
                            {data.fengniao == true?<span className="fengniao">蜂鸟配送</span>:""}
                        </span>
                    </div>
                    <div className="item-price-container ">
                        <span className="price ">￥{data.price}起送/</span>
                        <span className="cost">配送费￥{data.cost}/</span>
                        <span className="per">￥{data.per}/人</span>
                        <section className="right">
                            <span className="distance">{data.distance}km/</span>
                            <span className="time">{data.time}分钟</span>
                        </section>
                    </div>
                </div>
            </div>
            // </Link>
    )
  }
}
export default Item;