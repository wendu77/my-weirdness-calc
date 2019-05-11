import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Card.scss';

export const Card = ({ children, className, ...props }) =>
    <div className={classNames('card', className)} {...props}>{ children }</div>

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    className: PropTypes.string
};
