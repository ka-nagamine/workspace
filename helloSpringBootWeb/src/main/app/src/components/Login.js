import React from 'react';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
// import { Field, reduxForm } from 'redux-form';

const propTypes = {
    isAddMode: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};

export default class Login extends React.Component {

    componentWillMount() {
        // this.userWillTransfer(this.props);

        const authRs = this.props.auth
        console.log('マウント前：' + authRs);
        if (authRs === 'ログインに成功しました。') {
            localStorage.setItem('loginState', true);
        } else {
            localStorage.setItem('loginState', false);
        }
    }

    componentWillUpdate(nextProps) {
        const authRs = nextProps.auth
        console.log('更新後：' + authRs);
        if (authRs === 'ログイン前') {

        } else {

            if (authRs === 'ログインに成功しました。') {
                console.log('login成功')
                localStorage.setItem('loginState', true);
            } else {
                console.log('login失敗')
                localStorage.setItem('loginState', false);
            }
        }
    }

    handleSubmitJava(e) {
        // window.alert('メールアドレスを登録します')
        // e.preventDefault()
    }

    handleSubmit() {
        this.props.login(this.state.id, this.state.pass)
    }

    doChange(e) {
        const curValue = e.target.value
        const name = e.target.name

        // name属性値によって処理を分岐
        switch (name) {
            // name属性値がmailだった場合
            case "id":
                this.setState({ id: curValue })
                break;
            case "pass":
                this.setState({ pass: curValue })
                break;
        }
        if (this.state.id.length > 0 && this.state.pass.length > 0) {
            this.setState({ isAddMode: true })
        } else {
            this.setState({ isAddMode: false })
            // this.state.isAddMode = false
        }
    }

    state = {
        id: '',
        pass: '',
        isAddMode: false,
    }

    render() {
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
        const doSubmit = (e) => this.handleSubmitJava(e)

        const auth = this.props.auth
        if (auth === 'ログインに成功しました。') {
            return (
                <Redirect to={'/top'} />
            )
        } else {
            return (
                <div>
                    <form method='post' action="/login" onSubmit={doSubmit} >
                        <TextField type='text' name='id' style={{ width: '250px' }} value={this.state.id} onChange={doChange} label="ユーザID" variant="outlined" margin="normal" />
                        <br />
                        <TextField type='text' name='pass' value={this.state.pass} onChange={doChange} label="パスワード" variant="outlined" margin="normal" />
                        <br />
                        <Button
                            variant='contained'
                            color='secondary'
                            style={(this.state.isAddMode) ? styles.registerBtn.isAdd : styles.registerBtn.isNotAdd}
                            onClick={() => this.handleSubmit()}>
                            ログイン
                    </Button>
                        <br />
                        {auth}
                        <br />
                    </form>
                </div>
            );
        }

        // return (
        //     <div>
        //         <form method='post' action="/login" onSubmit={doSubmit} >
        //             <TextField type='text' name='id' style={{ width: '250px' }} value={this.state.id} onChange={doChange} label="ユーザID" variant="outlined" margin="normal" />
        //             <br />
        //             <TextField type='text' name='pass' value={this.state.pass} onChange={doChange} label="パスワード" variant="outlined" margin="normal" />
        //             <br />
        //             <Button
        //                 variant='contained'
        //                 color='secondary'
        //                 style={(this.state.isAddMode) ? styles.registerBtn.isAdd : styles.registerBtn.isNotAdd}
        //                 onClick={() => this.handleSubmit()}>
        //                 ログイン
        //             </Button>
        //             <br />
        //             {auth}
        //             <br />
        //         </form>
        //     </div>
        // )








    }
}

Login.propTypes = propTypes;