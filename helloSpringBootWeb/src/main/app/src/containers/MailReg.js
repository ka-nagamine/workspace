import { connect } from 'react-redux';
import * as actions from '../actions/MailReg';
import MailReg from '../components/MailReg';

const mapStateToProps = state => {
    return {
        mailAddress: state.mailReg.mailAddress,
        pass: state.mailReg.pass,
        isAddMode: state.mailReg.isAddMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailReg)