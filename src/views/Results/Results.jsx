import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button, Card, Gif } from '../../components';
import { bindActionCreators } from 'redux';
import { clearLiked } from '../../actions/liked.actions';
import { connect } from 'react-redux';
import './Results.scss';

const ResultsView = ({ avgWeirdness, clearLiked, liked }) =>
    <Card className="results">
        { liked.length > 0 ?
            <div className="results-wrapper">
                <h2 className="results__heading">You scored { avgWeirdness } out of 10 on the weirdness scale!</h2>

                <div className="results__main">
                    <h3>The GIFs you liked</h3>

                    <div className="results__gifs">{ liked.map((liked) => {
                    return (
                        <div className="results__gif" key={liked.url}>
                            <Gif showWeirdness {...liked} />
                        </div>
                    )
                })}</div>
                </div>

                <div className="results__action">
                    <Button onClick={() => clearLiked()}>Start over</Button>
                </div>
            </div>
            :
            <Redirect to="/" />
        }
    </Card>

ResultsView.propTypes = {
    avgWeirdness: PropTypes.number,
    clearLiked: PropTypes.func,
    liked: PropTypes.array
}

const mapStateToProps = ({ liked }) => ({
    liked,
    avgWeirdness: Math.round(liked.map((likedItem) => likedItem.weirdness).reduce((accumulator, num) => accumulator + num, 0) / liked.length)
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    clearLiked
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultsView);
