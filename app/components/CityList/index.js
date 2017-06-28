import React,{Component} from 'react';
import PropTypes from 'prop-types';
import  './styles.less';
import {cityData} from '../../../mock/getData'

class CityList extends Component{
  constructor(props){
    super(props);
    this.state={
      datalist:[]
    }
  }
  componentDidMount(){
    cityData().then(res=>{
      console.log(res)
      this.setState({
        datalist:res
      })
    })
    // console.log(cityData())
  }
  render(){
    return (
      <div className='container'>       
        <ul className="clear-fix">
          {this.state.datalist.map((data,index)=>{
            <li index={index}>
              <h4 className="title">{data.name}</h4>
              <span className="subTitle">{data.address}</span>
            </li>
          })}
        </ul>
      </div>
    );
  }
} 

export default CityList;