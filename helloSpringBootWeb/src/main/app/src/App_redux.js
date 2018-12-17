import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';




function App({ count, onIncrementClick, onDecrementClick }) {
  return (
    <BrowserRouter>
    <div>
      <span>{count}</span>
      <br></br>
      <button onClick={() => { onIncrementClick(); }}>
        inc
      </button>
      <br></br>
      <button onClick={() => { onDecrementClick(); }}>
        dec
      </button>
      </div>
    </BrowserRouter>
  );
};

export default connect(
  state => {
    return { count: state.count };
  },
  dispatch => {
    return {
      onIncrementClick: () => {
        dispatch({ type: 'INCREMENT' });
      },
      onDecrementClick: () => {
        dispatch({ type: 'DECREMENT' });
      }
    };
  }
  
)(App);