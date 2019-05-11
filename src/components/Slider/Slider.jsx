import React from 'react';
import PropTypes from 'prop-types';
import './Slider.scss';

export const Slider = ({ id, label, min, max, onChange, value, ...props }) =>
    <div className="slider">
        <input className="slider__input" type="range" id={id} min={min} max={max} value={value} onChange={onChange} {...props} />
        <label className="slider__label">{ label }: { value }</label>
    </div>

Slider.defaultProps = {
    min: 0,
    max: 10,
    value: 5
}

Slider.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number
}