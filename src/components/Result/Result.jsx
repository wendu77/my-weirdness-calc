import React from 'react';
import PropTypes from 'prop-types';
import { Button, Gif, Title } from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addLiked } from '../../actions/liked.actions';
import './Result.scss';

const ResultSFC = ({ addLiked, searchTerm, title, url, weirdness }) =>
    <div className="result">
        <Title>Your result</Title>

        <Gif title={title} url={url} />

        <div className="result__action">
            <Button type="button" onClick={() => addLiked({ searchTerm, title, url, weirdness })}>Like</Button>
        </div>
    </div>

ResultSFC.propTypes = {
    addLiked: PropTypes.func,
    title: PropTypes.string || null,
    url: PropTypes.string.isRequired,
    weirdness: PropTypes.number.isRequired
};

const mapStateToProps = ({ result, search }) => ({
    searchTerm: search.term,
    title: result.title,
    url: result.url,
    weirdness: search.weirdness
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addLiked
}, dispatch);

export const Result = connect(mapStateToProps, mapDispatchToProps)(ResultSFC);
