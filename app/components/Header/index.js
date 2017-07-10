import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import  './style.less';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id='commonHeader'>
                <span className='backIcon' onClick={this.clickHandle.bind(this)}>
                    <i className="fa fa-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
                
            </div>
        )
    }
    clickHandle() {
        this.props.handleBack();
    }

}

export default Header