import { connect } from 'react-redux';
import * as actions from '../actions/Cal';
// import * as actions from '../actions/PageSet';
import Cal from '../components/Cal';

const mapStateToProps = state => {
    return {
        num1: state.cal.num1,
        num2: state.cal.num2,
        // num2: state.pageset.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (num1, num2) => dispatch(actions.add(num1, num2)),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cal)