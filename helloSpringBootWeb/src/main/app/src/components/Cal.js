import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const propTypes = {
    pageSet: PropTypes.func,
};

export default class Cal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleSubmit() {
        this.props.add(this.state.num1, this.state.num2)
        return this.props.pageSet();
    }

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

                    <TextField type='text' name='numInput1' value={this.state.num1} onChange={doChange} label="入力値１" variant="outlined" margin="normal"/>
                    <TextField type='text' name='name' onChange={elm2 => this.setState({ num2: elm2.target.value })} label="入力値２" variant="outlined" margin="normal" />
                    <br />
                    <Button type='submit' variant='contained' color='primary' onClick={() => this.handleSubmit()}>計算結果</Button><br />

                    <TextField type='text' name='numInput1' value={this.state.num1} onChange={doChange} label="id" variant="outlined" margin="normal" />
                    <TextField type='text' name='name' onChange={elm2 => this.setState({ num2: elm2.target.value })} label="name" variant="outlined" margin="normal" />
                    <br>
                    </br>
                    <Button type='submit' variant='contained' color='secondary' >java通信</Button><br />
                </form>
            </div>
        );
    }
}

Cal.propTypes = propTypes;