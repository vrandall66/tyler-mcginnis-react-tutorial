import React from 'react';
import ShowList from './ShowList.js';

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Vanessa Randall',
      friends: ['Kristen Burgess', 'Lynne Rang', 'Zoe Ketcham-Harvey', 'Emily Dittmer']
    }
  }

  render() {
    return (
      <div>
        <h3>Name: {this.state.name} </h3>
        <ShowList names={this.state.friends} />
      </div>
    )
  }
}

export default FriendsContainer;