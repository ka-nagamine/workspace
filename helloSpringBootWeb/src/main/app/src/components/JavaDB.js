import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class JavaDB extends React.Component {
    handleSubmitJava(e) {
        window.alert('submit')
        // e.preventDefault()
    }
    
    doChange(e) {
        const curValue = e.target.value
        // 数字以外は削除
        const newValue = curValue.replace(/[^0-9]/g, '')
        this.setState({ num1: newValue })
    } 

    state = {
        num1: 0,
        num2: 0
    }

    render() {
        console.log(this.props);
        const doChange = (e) => this.doChange(e)
        const doSubmit = (e) => this.handleSubmitJava(e)
        return (
            <div>
                <form method='post' action="/index2" onSubmit={doSubmit}>
                    <TextField type='text' name='numInput1' value={this.state.num1} onChange={doChange} label="id" variant="outlined" margin="normal" />
                    <TextField type='text' name='name' onChange={elm2 => this.setState({ num2: elm2.target.value })} label="name" variant="outlined" margin="normal" />
                    <br />
                    <Button type='submit' variant='contained' color='secondary' >java通信</Button><br />
                </form>
            </div>
        );
    }
}