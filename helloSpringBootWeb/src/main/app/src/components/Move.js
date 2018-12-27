import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default class Move extends Component {
    handleSubmit() {
        this.props.history.push('/Return')
    }

    render() {
        return (
            <Button type='submit' variant='contained' color='primary' onClick={() => this.handleSubmit()}>TODOへ遷移</Button>
        )
    }
}