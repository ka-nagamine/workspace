import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route, Switch, Link
} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Auth from '../components/Auth'
import Login from '../containers/Login'


class Top extends React.Component {


    render() {

        // 機能TOP画面
        const Top = () => (
            <div>
                <h1>ログインしてください。</h1>
                <Login />
            </div>
        )

        const Service = () => (
            <div>
                <AppBar position="static" >ログイン中</AppBar>
                <br />
                <List component="nav" >
                    <a href='/list'>
                        <ListItem button>
                            <ListItemText primary="リスト追加" />
                        </ListItem>
                    </a>
                    <a href='/add'>
                        <ListItem button >
                            <ListItemText primary="足し算" />
                        </ListItem>
                    </a>
                    <a href='/java'>
                        <ListItem button >
                            <ListItemText primary="Java通信" />
                        </ListItem>
                    </a>
                    <a href='/mailReg'>
                        <ListItem button >
                            <ListItemText primary="メール登録" />
                        </ListItem>
                    </a>
                    <a href='/Logout'>
                        <ListItem button >
                            <ListItemText primary="ログアウト" />
                        </ListItem>
                    </a>
                </List>
            </div>
        )


        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Top} />
                    <Auth>
                        <Switch>
                            <Route path="/" component={Service} />
                        </Switch>
                    </Auth>
                </Switch>
            </Router>
        )
    }
}

export default Top