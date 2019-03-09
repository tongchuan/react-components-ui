import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../src/Index'
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Button />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('__react-content'));