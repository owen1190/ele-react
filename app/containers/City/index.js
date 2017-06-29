import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../actions/userInfo.action';
import Header from '../../components/Header';

import {cityData} from '../../../mock/getData'
import localStore from '../../until/localStore';
import {CITYNAME} from '../../config/localSotre.config';

import './style.less'
class City extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state={
      datalist:[]
    }
  }
  handleBack(){//回退功能
    this.props.history.goBack();
  }
  cityListClick(cityName){//点击选择地址
    localStore.setItem(CITYNAME, cityName);
    this.props.updateCityName(cityName);
    this.handleBack();
  }
  handleSubmit(e){
      if(e.keyCode==13){//监听回车事件
        cityData().then(res => {
          this.setState({
            datalist:res
          })          
        })
      e.target.value="";  
      }
  }
  render(){
    return (
      <div>
        <div className="city-header">
          <Header title='选择地址' handleBack={this.handleBack.bind(this)} />
          <div className="inputLocation">
              <input type="text" placeholder="请输入地址" onKeyDown={this.handleSubmit.bind(this)}/>
          </div> 
        </div>
        <div className='container'>       
          <ul>
            {this.state.datalist.map((data,index)=>{
              return (
                <li key={index} onClick={this.cityListClick.bind(this,data.name)}>
                  <h4 className="title">{data.name}</h4>
                  <p className="subTitle">{data.address}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cityName: state.userInfo.cityName
});

const mapDispatchToProps = dispatch => ({
  updateCityName: cityName => dispatch(updateUserInfo({cityName}))
})

const reduxApp = connect(mapStateToProps,mapDispatchToProps)(City);

export default reduxApp;