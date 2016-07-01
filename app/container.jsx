import React from 'react';
import Message from './message.jsx';

export default class Container extends React.Component {

  render() {

    const hello = this.props.hello;
    const world = this.props.world;
    return (
      <div>
        <Message message={hello}/>
        &nbsp;
        <Message message={world}/>
      </div>
    )
  }
}
