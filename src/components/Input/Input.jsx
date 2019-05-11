import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export const Input = ({ id, label, name, ...inputProps }) =>
	<div className="input-container">
		<label className="input-container__label" htmlFor={id}>{ label }</label>
		<input className="input-container__input" id={id} name={name || id} {...inputProps} />
	</div>

Input.propTypes = {
    id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string
};
