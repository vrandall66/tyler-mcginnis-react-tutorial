import React from 'react';
import './HelloWorld.css';
import HelloUser from './HelloUser';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World!</p>
        <HelloUser />
        </div>
    )
  }
}

export default HelloWorld;
