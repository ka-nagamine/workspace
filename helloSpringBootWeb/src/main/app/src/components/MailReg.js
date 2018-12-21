import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
// import { Field, reduxForm } from 'redux-form';

const propTypes = {
    isAddMode: PropTypes.bool.isRequired,
    mailAddress: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};

export default class MailReg extends React.Component {
    
    handleSubmitJava(e) {
        // window.alert('メールアドレスを登録します')
        // e.preventDefault()
    }
    
    doChange(e) {
        const curValue = e.target.value
        this.setState({ mailAddress: curValue })
        if (this.state.mailAddress.length > 3 && this.state.pass.length > 6) {
            this.state.isAddMode = true
        } else {
            this.state.isAddMode = false
        }
    } 

    doChange2(e) {
        const curValue = e.target.value
        this.setState({ pass: curValue })
        if (this.state.mailAddress.length > 3 && this.state.pass.length > 6) {
            this.state.isAddMode = true
        } else {
            this.state.isAddMode = false
        }
    }

    doChange3(e) {
        const curValue = e.target.value
        const type = e.target.type

        // name属性値によって処理を分岐
        switch (type) {
            // name属性値がmailだった場合
            case "mailAddress":
                this.setState({ mailAddress: curValue })
                break;
            case "pass":
                this.setState({ pass: curValue })
                break;
        }
        if (this.state.mailAddress.length > 0 && this.state.pass.length > 0) {
            this.state.isAddMode = true
        }
   
    } 

    state = {
        mailAddress: '',
        pass: '',
        isAddMode: false
    }

    render() {
        console.log(this.props);
        const styles = {
            registerBtn: {
                isAdd: {
                    display: 'inline-block'
                },
                isNotAdd: {
                    display: 'none'
                }
            }
        }

        const doChange = (e) => this.doChange(e)
        const doChange2 = (e) => this.doChange2(e)
        const doSubmit = (e) => this.handleSubmitJava(e)
        return (
            <div>
                <form method='post' action="/mailReg" onSubmit={doSubmit}>
                    <TextField type='text' name='mailAddress' style={{ width: '500px' }} value={this.state.mailAddress} onChange={doChange} label="メールアドレス" variant="outlined" margin="normal" />
                    <br />
                    <TextField type='text' name='pass' size='20' value={this.state.pass} onChange={doChange2} label="パスワード" variant="outlined" margin="normal" />
                    <br />
                    <Button type='submit'
                        label='登録'
                        variant='contained'
                        color='secondary'
                        style={(this.state.isAddMode) ? styles.registerBtn.isAdd : styles.registerBtn.isNotAdd}>
                    登録
                    </Button>
                    
                    <br />
                </form>
            </div>
        );
    }
}

MailReg.propTypes = propTypes;