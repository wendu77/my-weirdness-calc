import React                           from 'react';
import { withRouter }                  from 'react-router-dom';
import PropTypes                       from 'prop-types';
import { Button, Card, Liked, Loader, Result, Search, Slider }                                      from '../../components';
import { CalculatorLayout }             from '../../layouts';
import { bindActionCreators, compose } from 'redux';
import { connect }                     from 'react-redux';
import { setWeirdness }                from '../../actions/search.actions';
import './Search.scss';

const SearchView = ({ hasResult, loading, numLiked, setWeirdness, weirdness, history }) =>
    <div className="search-view">
        <CalculatorLayout
            top={
                <Card>
                    <p>Find out how weird you are by selecting the GIFs that make you laugh. We’ll show you the least weird ones to start, but you can move the slider to make them weirder.</p>
                    <p>When you find a GIF you like, press the Like button. Once you like 5 GIFs, we’ll show you how weird you are.</p>

                    <div className="search-view__search">
                        <Search />
                        { loading && <Loader /> }
                    </div>

                </Card>
            }
            bottom={
                hasResult ?
                    <Card>
                        <Result />

                        <Slider disabled={loading} id="slider" label="Weirdness" value={weirdness} onChange={(event) => setWeirdness(event.target.value)} />
                    </Card>
                :
                    <Card>Search for a new gif!</Card>
            }
            panel={
                <Card>
                    <Liked />
                    { numLiked !== 0 &&
                        <div className="search-view__action">
                            <Button disabled={loading || numLiked < 5} onClick={() => history.push('/results')}>Calculate my weirdness score</Button>

                            { numLiked < 5 &&
                                <p className="search-view__text">You must <i>Like</i> { 5 - numLiked } more GIF to calculate your score</p>
                            }
                        </div>
                    }
                </Card>
            }
        />
    </div>


SearchView.defaultProps = {
    hasResult: null,
    loading: false
}

SearchView.propTypes = {
    hasResult: PropTypes.string || null,
    loading: PropTypes.bool,
	numLiked: PropTypes.number,
    setWeirdness: PropTypes.func,
    weirdness: PropTypes.number
}

const mapStateToProps = ({ liked, result, search, ui }) => ({
    hasResult: result.url,
    loading: ui.loading,
    numLiked: liked.length,
    weirdness: search.weirdness
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setWeirdness
}, dispatch);

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SearchView);
