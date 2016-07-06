import React from 'react';
import { Link } from 'react-router'
import Message from '../message/message.jsx';
import style from "./messages.css";

export default class Messages extends React.Component {

  render() {
    return (
      <div>
        <p>
          <Link to="/about/Filip">About</Link>
        </p>
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
