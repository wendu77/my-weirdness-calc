import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { Error, Header } from './components';
import Results from './views/Results/Results';
import Search from './views/Search/Search';
import { connect } from 'react-redux';

const App = ({ error }) =>
	<div>
		{ error && <Error>{ error }</Error> }
		<Header>Weirdness Calculator</Header>

		<Router>
			<Route exact path="/" component={Search} />
			<Route path="/results" component={Results} />
		</Router>
	</div>

App.propTypes = {
	error: PropTypes.string
}

const mapStateToProps = ({ ui }) => ({
    error: ui.error
});

export default connect(mapStateToProps)(App);
