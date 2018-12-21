import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import './App.css';
import Todo from './containers/Todo';
// import Todo_1 from './containers/Todo_1';
import Cal from './containers/Cal';
import Java from './containers/JavaDB';
import Total from './containers/Total';
import Mail from './containers/MailReg';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}


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

    const Home = () => (
      <div>
      <h1>どの開発ページへ遷移する？</h1>
        <ui>
          <li><a href='/list'>リスト追加</a></li>
          <li><a href='/add'>足し算</a></li>
          <li><a href='/java'>Java通信</a></li>
          <li><a href='/mailReg'>メール登録</a></li>
        </ui>
      </div>
    )


    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/list" component={ListContent} />
          <Route path="/add" component={Content} />
          <Route path="/java" component={Java} />
          <Route path="/mailReg" component={Mail} />

          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav">
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItemLink href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemLink>
          </List>

        </div>
      </BrowserRouter>
      // <div className="App">
      //   <Content /> {}
      //   <br />
      //   <ListContent /> {}
      // </div>
    );
  }
}

export default App;