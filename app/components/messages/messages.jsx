import React from 'react';
import { Link } from 'react-router'
import Message from '../message/message.jsx';
import style from "./messages.css";

export default class Messages extends React.Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.menu.map(function(item, i) {
          return  (
            <li key={i}>
              <a href={item.url}>{item.title}</a>
            </li>
            )
        })}
      </ul>
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
