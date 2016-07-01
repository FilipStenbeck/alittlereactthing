import React from 'react';
import Message from './message.jsx';


export default class Container extends React.Component {

  render() {

    let hello = store.getState().hello;
    let world = store.getState().world;

    return (
      <div>
        <Message message={hello}/>
        &nbsp;
        <Message message={world}/>
      </div>
    )
  }
}
