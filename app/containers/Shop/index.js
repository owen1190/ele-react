import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router-dom'
import './style.less'

class Shop extends Component{
  constructor(props){
    super(props)
  }

  //总金额
  getTotalNum() {

    let num = 0;
    if (this.props.cartFoodList) {

      this.props.cartFoodList.forEach(item => {
        num += item.num
      })
    }
    return num

  }

  renderFood(){
    const { shopDetailData, promotionInfo, menuIndex, menuList, totalPrice,
      showCartList, cartFoodList, changeShowType, shopId, cartList
    } = this.props
    //menu_left商品页左半部分
    if (changeShowType==='food'){
      return(
        <section className="food_container">
          <section className="menu_container">
            <section className="menu_left">
            <ul>
              {
                menuList.map(function(item,index){
                    <li key={index} className={index == menuIndex ? 'activity_menu menu_left_li' : 'menu_left_li'} onClick={() => this.chooseMenu(index)} >
                      {item.icon_url && <img src={getImgPath(item.icon_url)} />}
                      <span>{item.name}</span>
                      {
                        !!categoryNum[index] && item.type == 1 && (
                          <span className="category_num" >{categoryNum[index]}</span>
                        )
                      }
                    </li>
                })
              }
            </ul>
            </section>
            {/*商品详情*/}
            <section className="menu_right" ref={(menuFoodList) => this.menuFoodList = menuFoodList}>
              <ul>
                {
                  menuList.map((item, index) => (
                    <li key={index}>
                      <header className='menu_detail_header'>
                        <section className="menu_detail_header_left">
                          <strong className="menu_item_title">{item.name}</strong>
                          <span className="menu_item_description">{item.description}</span>
                        </section>
                        <span className="menu_detail_header_right" onClick={() => this.showTitleDetail(index)}></span>

                        {
                          index == this.state.TitleDetailIndex && (
                            <p className="description_tip">
                              <span>{item.name}</span>
                              {item.description}
                            </p>
                          )
                        }
                      </header>
                      {
                        item.foods.map((food, index) => (
                          <section className='menu_detail_list' key={index}>
                            <div className="menu_detail_link">
                              <section className='menu_food_img'>
                                <img src={getImgPath(food.image_path)} alt="" />
                              </section>
                              <section className='menu_food_description'>
                                <h3 className='food_description_head'>
                                  <strong className="description_foodname">{food.name}</strong>
                                  {
                                    !!food.attributes.length && (
                                      <ul className='attributes_ul'>
                                        {
                                          food.attributes.map((attribute, index) => (
                                            <li key={index} className={attribute.icon_name == '新' && 'attribute_new'} style={{ color: '#' + attribute.icon_color, borderColor: '#' + attribute.icon_color }}>
                                              <p style={{ color: attribute.icon_name == '新' ? '#fff' : '#' + attribute.icon_color }}>{attribute.icon_name == '新' ? '新品' : attribute.icon_name}</p>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                    )
                                  }
                                </h3>
                                <p className='food_description_content'>{food.description}</p>
                                <p className='food_description_sale_rating'>
                                  <span>月售{food.month_sales}份</span>
                                  <span>好评率{food.satisfy_rate}%</span>
                                </p>
                                {
                                  food.activity && (
                                    <p className='food_activity'>
                                      <span style={{ color: '#' + food.activity.image_text_color, borderColor: '#' + food.activity.icon_color }}>
                                        {food.activity.image_text}
                                      </span>
                                    </p>
                                  )
                                }
                              </section>
                            </div>
                            {/*底部*/}
                            <footer className="menu_detail_footer">
                              <section className="food_price">
                                <span>¥</span>
                                <span>{food.specfoods[0].price}</span>
                                {food.specifications.length && <span>起</span>}
                              </section>
                              <BuyCart showMoveDot={this.showMoveDotFun} addToCart={this.addToCart} reduceCart={this.reduceCart} shopId={shopId} food={food} cartList={cartList}></BuyCart>
                            </footer>
                          </section>
                        ))
                      }
                    </li>
                  ))
                }
              </ul>
            </section>
          </section>
          <section className='buy_cart_container'>
            <section onClick={this.toggleCartList} className='cart_icon_num'>
              <div className={`cart_icon_container ${totalPrice > 0 ? 'cart_icon_activity' : ''} ${receiveInCart ? 'move_in_cart' : ''}`} ref={(cartContainer) => this.cartContainer = cartContainer}>
                {
                  !!totalNum && (
                    <span className='cart_list_length'>
                      {totalNum}
                    </span>
                  )
                }
                <svg className="cart_icon">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-icon"></use>
                </svg>
              </div>
              <div className="cart_num">
                <div>¥ {totalPrice}</div>
                <div>配送费¥{deliveryFee}</div>
              </div>
            </section>
            <section className={minimumOrderAmount <= 0 ? 'gotopay gotopay_acitvity' : ' gotopay'}>
              {
                minimumOrderAmount > 0 ? (
                  <span className="gotopay_button_style" >还差¥{minimumOrderAmount}起送</span>
                ) : (
                    <Link to={{ pathName: '/confirmOrder' }} className="gotopay_button_style">去结算</Link>
                  )
              }
            </section>
          </section>
          {/*点击购物车效果*/}
          {
            (showCartList && (!!cartFoodList.length)) && (
              <section className="cart_food_list" >
                <header>
                  <h4>购物车</h4>
                  <div onClick={this.clearCart}>
                    <svg>
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-remove"></use>
                    </svg>
                    <span className="clear_cart">清空</span>
                  </div>
                </header>
                <section className="cart_food_details" id="cartFood">
                  <ul>
                    {
                      cartFoodList.map((item, index) => (
                        <li className='cart_food_li' key={index}>
                          <div className="cart_list_num">
                            <p className="ellipsis">{item.name}</p>
                            <p className="ellipsis">{item.specs}</p>
                          </div>
                          <div className="cart_list_price">
                            <span>¥</span>
                            <span>{item.price}</span>
                          </div>
                          <section className="cart_list_control">
                            <span onClick={() => this.reduceCart({ category_id: item.category_id, item_id: item.item_id, food_id: item.food_id, name: item.name, price: item.price, specs: item.specs })}>
                              <svg>
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-minus"></use>
                              </svg>
                            </span>
                            <span className="cart_num">{item.num}</span>
                            <svg className="cart_add" onClick={() => this.addToCart(item.category_id, item.item_id, item.food_id, item.name, item.price, item.specs)}>
                              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-add"></use>
                            </svg>
                          </section>
                        </li>
                      ))
                    }
                  </ul>
                </section>      
            </section>
            )
          }
          {showCartList && !!cartFoodList.length && (
            <div className="screen_cover" onClick={this.toggleCartList}></div>
          )}
        </section>
      )
    } else {
      return null
    }
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
            <i className="fa fa-angle-right"></i>
          </section>
        </header>
        
      </div>
    )
  }
}
export default Shop;