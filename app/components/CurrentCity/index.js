import React from 'react';
import PropTypes from 'prop-types';

import  './styles.less';

const CurrentCity = ({cityName}) => {
  return (
    <div className="CurContainer">{cityName}</div>
  );
}


CurrentCity.propTypes = {
  cityName: PropTypes.string.isRequired
}

export default CurrentCity;