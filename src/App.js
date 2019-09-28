import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Vanessa Randall'
    }
  }
  componentDidMount() {
    // Invoked once the component is mounted to the DOM
    // Good for making AJAX requests
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // The object you return from this function will
    // be merged with the current state
  }
  componentWillUnmount() {
    // Called IMMEDIATELY before a component is unmounted
    // Good for cleaning up listeners
  }
  render() {
    return (
      <div>
        Hello, {this.state.name}
      </div>
    )
  }
}

export default App;