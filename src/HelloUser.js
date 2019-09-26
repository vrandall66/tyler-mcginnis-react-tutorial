import React from 'react';
import './HelloUser.css';

class HelloUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'nessarandall'
    }
  }

  render() {
    return (
      <div>
        Whaddup, {this.state.username}
      </div>
    )
  }
}

export default HelloUser;