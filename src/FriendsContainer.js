import React from 'react';
import ShowList from './ShowList.js';
import AddFriend from './AddFriend.js';

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Vanessa Randall',
      friends: ['Kristen Burgess', 'Lynne Rang', 'Zoe Ketcham-Harvey', 'Emily Dittmer']
    }
    this.addFriend = this.addFriend.bind(this)
  }

  addFriend(friend) {
    this.setState((state) => ({
      friends: state.friends.concat([friend])
    }))
  }

  render() {
    return (
      <div>
        <h3>Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    )
  }
}

export default FriendsContainer;