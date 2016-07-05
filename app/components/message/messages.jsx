import React from 'react';
import Message from './message.jsx';
import style from "./messages.css";

export default class Messages extends React.Component {

  render() {
    return (
      <div>
        <Message message={this.props.hello}/>
        &nbsp;
        <Message message={this.props.world}/>
        <p>
          <button className={style.btn} onClick={this.props.setMessage}>Translate</button>
        </p>
      </div>
    )
  }
}
