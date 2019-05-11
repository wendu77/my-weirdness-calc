import React from 'react';
import PropTypes from 'prop-types';
import { Gif, Title } from '../../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeLiked } from '../../actions/liked.actions';
import './Liked.scss';

const LikedSFC = ({ liked, removeLiked }) =>
    <div className="liked">
        <Title>Your liked gifs</Title>

        <div className="liked__gifs">{ liked.map((liked) => {
            return (
                <div className="liked__gif" key={liked.url}>
                    <Gif removeFunc={() => removeLiked(liked)} {...liked} />
                </div>
            )
        })}</div>
    </div>

LikedSFC.propTypes = {
    liked: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string
        })
    ),
    removeLiked: PropTypes.func
}

const mapStateToProps = ({ liked }) => ({
    liked
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    removeLiked
}, dispatch);

export const Liked = connect(mapStateToProps, mapDispatchToProps)(LikedSFC);
