import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = ({ children }) =>
    <div className="error">
        <p className="error__message">{ children }</p>
    </div>

Error.defaultProps = {
    children: 'Error'
}

Error.propTypes = {
    children: PropTypes.string
}
