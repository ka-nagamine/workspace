import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


export default class Return extends Component {
    handleSubmit() {
        this.props.history.push('/Move')
    }

    render() {
        return (
            <Button type='submit' variant='contained' color='primary' onClick={() => this.handleSubmit()}>戻る</Button>
        )
    }
}

