import React, { Component } from 'react';
import './App.css';
import Todo from './containers/Todo';
// import Todo_1 from './containers/Todo_1';
import Cal from './containers/Cal';
import Total from './containers/Total';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  setNextPage() {
    this.setState({ page: 2 });
  }

  setPrePage() {
    this.setState({ page: 1 });
  }

  render() {

    // メニューの選択状態
    // const currentPage = this.state.currentPage; // （1）
    const currentPage = this.state.page; // （1）

    //  メイン部分のコンポーネントの入れ物
    let Content = null; // デフォルトでは何も表示しない
    let ListContent = null; // デフォルトでは何も表示しない

    switch (currentPage) {
      case 1:
        Content = (() => <Cal pageSet={() => { this.setNextPage(); }} />);
        ListContent = (() => <Todo />);
        break;
      case 2:
        Content = (() => <Total pageSet={() => { this.setPrePage(); }} />);
        ListContent = (() => '');
        break;
      default:
        Content = (() => <Cal pageSet={() => { this.setNextPage(); }} />);
        ListContent = (() => <Todo />);
        break;
    }


    return (
      // <BrowserRouter>
      //   <div className="App">
      //   <Route exact path="/" component={Todo} />
      //   <Route path="/memo" component={Todo_1} />
      //     {/* <Todo />
      //     <Todo_1 /> */}
      //   </div>
      // </BrowserRouter>
      <div className="App">
        <Content /> {}
        <br />
        <ListContent /> {}
      </div>
    );
  }
}

export default App;