import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.scss';

export const Button = ({ buttonType, children, disabled, type, ...props }) =>
    <button className={classNames('button', { 'button--secondary': buttonType === 'secondary', 'button--icon': buttonType === 'icon' })} disabled={disabled} type={type} {...props}>{ children }</button>

Button.defaultProps = {
    buttonType: 'primary',
    disabled: false,
    type: 'button'
};

Button.propTypes = {
    buttonType: PropTypes.oneOf(['primary', 'secondary', 'icon']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.string
};