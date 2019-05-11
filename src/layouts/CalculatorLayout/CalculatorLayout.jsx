import React from 'react';
import PropTypes from 'prop-types';
import './CalculatorLayout.scss';

export const CalculatorLayout = ({ top, bottom, panel }) =>
    <div className="calculator-layout">
        <div className="calculator-layout__main">
            <div className="calculator-layout__top">{ top }</div>
            <div className="calculator-layout__bottom">{ bottom }</div>
        </div>
        <div className="calculator-layout__panel">{ panel }</div>
    </div>

CalculatorLayout.propTypes = {
	top: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
	bottom: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]),
    panel: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])
}
