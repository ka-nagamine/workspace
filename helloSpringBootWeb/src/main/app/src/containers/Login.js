import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions/Login';
import Login from '../components/Login';

const mapStateToProps = state => {
    return {
        id: state.login.id,
        pass: state.login.pass,
        isAddMode: state.login.isAddMode,
        auth: state.login.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (id, pass) => dispatch(actions.login(id, pass)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))