import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
                    {/* <input type='text' onChange={elm1 => this.setState({ num1: elm1.target.value })} /> */}
                    <input type='text' name='numInput1' value={this.state.num1} onChange={doChange} />
                    <input type='text' name='name' onChange={elm2 => this.setState({ num2: elm2.target.value })} />
                    {/* <Button variant='contained' color='primary' onClick={() => this.props.addTodo(this.state.todo)}>追加</Button><br /> */}
                    <Button type='submit' variant='contained' color='primary' onClick={() => this.handleSubmit()}>計算結果</Button><br />
                    <input type='submit' value='java通信'/><br />
                </form>
            </div>
        );
    }
}

Cal.propTypes = propTypes;