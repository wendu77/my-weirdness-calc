import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

export const Header = ({ children }) =>
    <header className="header">
        <h1 className="header__heading">{ children }</h1>
    </header>

Header.propTypes = {
    children: PropTypes.string.isRequired
}
