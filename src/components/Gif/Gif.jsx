import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import './Gif.scss';

export const Gif = ({ removeFunc, showWeirdness, title, url, weirdness }) =>
    <div className="gif">
        <h3 className="gif__heading">{ title }</h3>

        <div className="gif__image-wrapper">
            <img className="gif__image" src={url} alt={`Giphy result ${title}`} />

            { removeFunc &&
                <div className="gif__action">
                    <Button buttonType="icon" onClick={removeFunc} type="type">
                        X
                    </Button>
                </div>
            }
        </div>

        { showWeirdness && <p className="gif__weirdness">{ weirdness }/10</p> }
    </div>

Gif.defaultProps = {
    removeFunc: null,
    showWeirdness: false
}

Gif.propTypes = {
    removeFunc: PropTypes.func || null,
    showWeirdness: PropTypes.bool,
    title: PropTypes.string || null,
    url: PropTypes.string.isRequired,
    weirdness: PropTypes.number
};
