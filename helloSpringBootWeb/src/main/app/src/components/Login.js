import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
// import { Field, reduxForm } from 'redux-form';

const propTypes = {
    isAddMode: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};

export default class Login extends React.Component {

    handleSubmitJava(e) {
        // window.alert('メールアドレスを登録します')
        // e.preventDefault()
    }

    doChange(e) {
        const curValue = e.target.value
        this.setState({ id: curValue })
        if (this.state.id.length > 0 && this.state.pass.length > 6) {
            this.state.isAddMode = true
        } else {
            this.state.isAddMode = false
        }
    }

    doChange2(e) {
        const curValue = e.target.value
        this.setState({ pass: curValue })
        if (this.state.id.length > 0 && this.state.pass.length > 6) {
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
            case "id":
                this.setState({ id: curValue })
                break;
            case "pass":
                this.setState({ pass: curValue })
                break;
        }
        if (this.state.id.length > 0 && this.state.pass.length > 0) {
            this.state.isAddMode = true
        }

    }

    state = {
        id: '',
        pass: '',
        isAddMode: false,
        auth: ''
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
                <form method='post' action="/login" onSubmit={doSubmit}>
                    <TextField type='text' name='id' style={{ width: '250px' }} value={this.state.id} onChange={doChange} label="ユーザID" variant="outlined" margin="normal" />
                    <br />
                    <TextField type='text' name='pass' value={this.state.pass} onChange={doChange2} label="パスワード" variant="outlined" margin="normal" />
                    <br />
                    <Button type='submit'
                        variant='contained'
                        color='secondary'
                        style={(this.state.isAddMode) ? styles.registerBtn.isAdd : styles.registerBtn.isNotAdd}>
                        ログイン
                    </Button>
                    <br />
                    <InputBase name='auth' value={this.state.auth} />
                    <br />
                </form>
            </div>
        );
    }
}

Login.propTypes = propTypes;