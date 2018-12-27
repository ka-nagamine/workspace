import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

class Todo extends React.Component {
    // static propTypes = {
    //     history: PropTypes.object.isRequired
    // }
    state = {
        todo: ''
    }

    handleSubmit() {
        this.props.history.push('/Return')
    }


    render() {
        console.log(this.props);

        // StoreのTodoからリストを生成
        const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>)

        return (
            <div>
                <input type="text" onChange={elm => this.setState({ todo: elm.target.value })} />
                <Button variant="contained" color="primary" onClick={() => this.props.addTodo(this.state.todo)}>追加</Button><br />
                <Button type='submit' variant='contained' color='primary' onClick={() => this.handleSubmit()}>TODOへ遷移</Button>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default withRouter(Todo)