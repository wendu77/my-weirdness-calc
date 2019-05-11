import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('Button', () => {
    it('renders without crashing', () => {
        ReactDOM.render(<Button>Click here</Button>, container);
    });

    it('sets the default type to button', () => {
        act(() => {
            ReactDOM.render(<Button>Click here</Button>, container);
        });
        const button = container.querySelector('button');
        expect(button.getAttribute('type')).toBe('button');
    });

    it('applies type based upon type', () => {
        act(() => {
            ReactDOM.render(<Button type="submit">Click here</Button>, container);
        });
        const button = container.querySelector('button');
        expect(button.getAttribute('type')).toBe('submit');
    });

    it('sets the default buttonType to primary', () => {
        act(() => {
            ReactDOM.render(<Button>Click here</Button>, container);
        });
        const button = container.querySelector('button');
        expect(button.className).toMatch('button');
    });

    it('sets the buttonType based upon props', () => {
        act(() => {
            ReactDOM.render(<Button buttonType="secondary">Click here</Button>, container);
        });
        const button = container.querySelector('button');
        expect(button.className).toMatch('button--secondary');
    });

    it('sets the default disabled state to false', () => {
        act(() => {
            ReactDOM.render(<Button>Click here</Button>, container);
        });
        const button = container.querySelector('button');
        expect(button.hasAttribute('disabled')).toBe(false);
    });

    it('sets the disabled state based upon props', () => {
        act(() => {
            ReactDOM.render(<Button disabled>Click here</Button>, container);
        });
        const button = container.querySelector('button');
        expect(button.hasAttribute('disabled'));
    });

    it('sets the children as the inner text when provided', () => {
        act(() => {
            ReactDOM.render(<Button>Click Here</Button>, container);
        });
        const button = container.querySelector('button');
        expect(button.innerHTML).toBe('Click Here');
    });

    it('runs the onClick function based upon props', () => {
        const onClick = jest.fn();
        act(() => {
            ReactDOM.render(<Button onClick={onClick}>Click here</Button>, container);
        });
        const button = container.querySelector('button');

        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
        expect(onClick).toHaveBeenCalled();
    });
});
