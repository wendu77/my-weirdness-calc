import React from 'react';
import PropTypes from 'prop-types';

export const Loader = ({ children }) =>
    <p>{ children }</p>

Loader.defaultProps ={
    children: 'Loading...'
}

Loader.propTypes = {
    children: PropTypes.string
}
