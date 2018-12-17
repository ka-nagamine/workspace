import React from 'react';
import Button from '@material-ui/core/Button';

export default class Todo extends React.Component {
    state = {
        todo: ''
    }

    render() {
        console.log(this.props);

        // StoreのTodoからリストを生成
        const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>)

        return (
            <div>
                <input type="text" onChange={elm => this.setState({ todo: elm.target.value })} />
                <Button variant="contained" color="primary" onClick={() => this.props.addTodo(this.state.todo)}>追加</Button><br />
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}
