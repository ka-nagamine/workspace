var React = require('react');//React.jsのライブラリをimport
var ReactDOM = require('react-dom');

//コンポーネントを定義
var createReactClass = require('create-react-class');
var Index = createReactClass({
  render:function(){
    return (
        <p>hoge</p>
    );
  }
});

//id='content'の要素にコンポーネント「Index」を挿入してレンダリング
ReactDOM.render(
  <Index />,
  document.getElementById('content')
);