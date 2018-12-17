import { connect } from 'react-redux';
import * as actions from '../actions/Cal';
import Total from '../components/Total';

const mapStateToProps = state => {
    return {
        // num1: state.cal.num1,
        // num2: state.cal.num2,
        total: state.cal.total,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // add: (num1, num2) => dispatch(actions.add(num1, num2)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Total)