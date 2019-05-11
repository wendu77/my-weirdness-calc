import React from 'react';
import ReactDOM from 'react-dom';
import { Stage } from './Stage';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('stage', () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Stage>Stage</Stage>, container);
    });
});
