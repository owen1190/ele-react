import React, { Component } from 'react';
import './style.less'

class Loading extends Component {
    timer = '';
    positionY= 0;
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
        		this.positionY ++;
        }, 600)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render () {
         return (
             <div className='loading_container'>
                 <div className='load_img' style={{backgroundPositionY: -(this.positionY%7)*2.5 + 'rem'}}>

                 </div>
                 <svg className="load_ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <ellipse cx="26" cy="10" rx="26" ry="10" style={{fill:"#ddd", stroke:"none"}}></ellipse>
                </svg>
             </div>
         )   
    }
}

export default Loading;