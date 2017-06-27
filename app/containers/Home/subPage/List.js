import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {get} from '../../../fetch/get';
import { ListData }  from '../../../../mock/home/list'
import ListCompoent from '../../../components/ListComponent'
import LoadMore from '../../../components/LoadMore'


class List extends React.Component{
  constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
  }
  render(){
  
    return (
      <div>
        <h2 className="home-list-title">推荐商家</h2>
        {
                    this.state.data.length
                    ? <ListCompoent data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
        }
        {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
        }
      </div>
    )
  }
  
  componentDidMount(){
    this.getData();
    // console.log(ListData)
    }
  

  async getData(){
    try {
      const res = await get(`/api/homelist/${this.props.cityName}/0`);
      const data = await res.json();
       console.log(data)
      this.handleData(data);
    } catch (error) {
      // 发生错误
      if (__DEV__) {
          console.error('首列表获取数据报错, ', error.message)
      }
    }
  }

  async loadMore() {
    this.setState({
      loadding: true
    });
    try {
      const res = await get(`/api/homelist/${this.props.cityName}/${this.state.page}`);
      const data = await res.json();
      this.handleData(data);
      this.setState({
        loadding: false,
        page: this.state.page+1
      });
    } catch (error) {
      // 发生错误
      if (__DEV__) {
          console.error('加载更多报错, ', error.message)
      }
    }
  }

  handleData(data){
    let hasMore = data.hasMore;
    // console.log(hasMore)
    // console.log(data.data)
    // data = [...this.state.data,...data.data];
    this.setState({
      data:this.state.data.concat(data.data),
      hasMore
    });
    console.log('1111')
    console.log(this.state)
  }

}
export default List