import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../actions/userInfo.action';
import Header from '../../components/Header';

import {cityData} from '../../../mock/getData'
import localStore from '../../until/localStore';
import {CITYNAME} from '../../config/localSotre.config';
class City extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state={
      datalist:[]
    }
  }
  handleBack(){
    this.props.history.goBack();
  }
  cityListClick(cityName){
    localStore.setItem(CITYNAME, cityName);
    this.props.updateCityName(cityName);
  }
  handleSubmit(e){
    // e.preventDefault();
    cityData().then(res=>{
      console.log(res)
      this.setState({
        datalist:res
      })
    })

    
  }
  render(){
    return (
      <div>
        <Header title='选择地址' handleBack={this.handleBack.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
        <div className='container'>       
        <ul className="clear-fix" onClick={this.cityListClick.bind(this)}>
          {this.state.datalist.map((data,index)=>{
            <li index={index}>
              <h4 className="title">{data.name}</h4>
              <span className="subTitle">{data.address}</span>
            </li>
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