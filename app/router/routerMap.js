import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Home from '../containers/Home';
import posMsite from '../containers/Msite';
import Search from '../containers/Search';
import Food from '../containers/Food';
import City from '../containers/City';
import NotFound from '../containers/404Page';
import Login from '../containers/Login';
import Profile from '../containers/Profile'
import Shop from '../containers/Shop'
import Loading from '../components/Loading'

import localStore from '../until/localStore';
import {CITYNAME} from '../config/localSotre.config';

import {connect} from 'react-redux';
import {updateUserInfo} from '../actions/userInfo.action';

class App extends Component{
  constructor(props, context){
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate;
    this.state = {
      initialDone: false
    }
  }

  componentDidMount(){
    //从localStore中获取到城市名称
    let cityName = '';
    cityName = localStore.getItem(CITYNAME);
    if(cityName == null){
      cityName = '沈阳';
    }

    //将数据存入redux
    this.props.updateInfo({cityName});
    this.setState({initialDone: true});
  }

  render(){
    //路由的声明.
    let Routes = (
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/city'  component={City}/>
        <Route path='/search'  component={Search}/>
        <Route path='/food'  component={Food}/>
        <Route path='/shop'  component={Shop}/>
        <Route path='/msite'  component={posMsite}/>
        <Route path='/profile'  component={Profile}/>
        <Route path='/login'  component={Login}/>        
        <Route component={NotFound}/>
      </Switch>
    );
    return (
      <Router>
        <div>
          {this.state.initialDone ? Routes : Loading}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updateInfo: data => dispatch(updateUserInfo(data))
});

const reduxApp = connect(mapStateToProps,mapDispatchToProps)(App);

export default reduxApp;