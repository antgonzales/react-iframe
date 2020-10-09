import React from 'react';

class OtherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
  }

  sendMessage(msg) {
    this.setState({message: msg.data});
  }

  render() {
    return <>
      <div>Other Component</div>
      <div>Message from parent: {this.state.message}</div>
      <input onChange={(e) => this.props.onMessage({type: 'INPUT_CHANGE', data: e.target.value})} />
    </>;
  }
}

export default OtherComponent;
