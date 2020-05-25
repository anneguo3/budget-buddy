import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import saga from './saga';

//import { Provider } from 'react-redux';


//import store from './store.js';




class App extends React.Component {
  render = function () {
    const content = (
      <div> test </div>
    );
    return content;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));