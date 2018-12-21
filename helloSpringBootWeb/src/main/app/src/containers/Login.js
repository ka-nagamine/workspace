import { connect } from 'react-redux';
import * as actions from '../actions/Login';
import Login from '../components/Login';

const mapStateToProps = state => {
    return {
        id: state.login.id,
        pass: state.login.pass,
        isAddMode: state.login.isAddMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)