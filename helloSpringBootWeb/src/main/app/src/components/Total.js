import React from 'react';
import Button from '@material-ui/core/Button';

export default class Total extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleSubmit() {
        return this.props.pageSet();
    }
    state = {
        total: '',
    }

    render() {
        const total = this.props.total
        return (
            <div>
                計算結果
                <ul>
                    {total}
                </ul>
                <Button type="submit" variant="contained" color="primary" onClick={() => this.handleSubmit()}>戻る</Button><br />
            </div>
        );
    }
}