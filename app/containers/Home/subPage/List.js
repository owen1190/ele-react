import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {get} from '../../../fetch/get';
import { homeListData }  from '../../../../mock/getData'
import ListCompoent from '../../../components/ListComponent'
import LoadMore from '../../../components/LoadMore'
import {Link} from 'react-router';

import './style.less'

class List extends React.Component{
  constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
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
    this.resultHandle(homeListData())
  }
  resultHandle(result){
    result.then(res =>{
      this.setState({
        data: res,
        hasMore:true,
      })
    })
  }
  loadMoreData(){
    this.setState({
			isLoadingMore:true
		})
    const page = this.state.page;
    this.resultHandle(homeListData())
    this.setState({
      page:page+1
    })
  }

  

}
export default List