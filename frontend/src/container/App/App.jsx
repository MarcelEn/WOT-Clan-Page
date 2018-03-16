import React, { Component } from 'react';
import { connect } from 'react-redux';

import WelcomePage from '../../components/WelcomePage/WelcomePage.jsx';
import Layout from '../../components/Layout/Layout.jsx';

import { actions } from '../../actions';

class App extends Component {
    render() {
        return (
            <Layout>
                <WelcomePage />
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchServerSideTime: () => { dispatch(actions.fetchServerSideTime()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)