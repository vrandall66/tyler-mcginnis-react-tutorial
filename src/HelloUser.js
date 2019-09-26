import React from 'react';
import './HelloUser.css';

class HelloUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: 'nessarandall'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        Whaddup, {this.state.username} <br />
        Change Name:
        <input type='text' value={this.state.username} onChange={this.handleChange} />
      </div>
    )
  }
}

export default HelloUser;