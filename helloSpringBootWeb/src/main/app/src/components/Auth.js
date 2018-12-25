import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const propTypes = {
};

class Auth extends Component {
    static propTypes = {
        user: propTypes.string
    }

    componentWillMount() {
        this.userWillTransfer(this.props);
    }

    componentWillUpdate(nextProps) {
        this.userWillTransfer(this.props);
    }

    userWillTransfer(props) {
        if (localStorage.getItem('loginState') === 'true') {
            console.log('loginStateOK:' + localStorage.getItem('loginState'))
            this.setState({ isAuthenticated: true });
        } else {
            console.log('loginStateNG:' + localStorage.getItem('loginState'))
            this.setState({ isAuthenticated: false });
        }
    }

    render() {
        return (
            this.state.isAuthenticated ? (
                <Route children={this.props.children} />
            ) : (
                    <Redirect to={'/login'} />
                )
        )
    }
}

const mapStateToProps = state => ({
    sessionId: state.sessionId
});

export default withRouter(connect(mapStateToProps)(Auth));
Auth.propTypes = propTypes;