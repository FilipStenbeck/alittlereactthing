import React from 'react';
import { Link } from 'react-router'
import Beam from '../beam/beam.jsx'
import Filter from '../filter/filter.jsx'
import { SingleDatePicker } from 'react-dates';
import Moment from 'moment';

import {
  people
} from "./people.css";

const Lorem = require('react-lorem-component');
const flatten = require('lodash.flatten');
const uniq = require('lodash.uniq');
const includes = require('lodash.includes')


export default class People extends React.Component {

  constructor(props) {
    Moment.locale('sv');
    super(props);
    this.state = {
      focused: false,
      date: null,
    };

    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ date });
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }


  componentDidMount() {

    let activeFilter = this.props.params.filter;
    this.props.setInitialFilter(activeFilter);
  }

  render() {
    let activeFilter = this.props.params.filter;
    let tags = uniq(flatten(this.props.people.map((item) => item.tags)));
    let beams = [];
    const { focused, date } = this.state;

    //if filter is active only render a beam that has a tag that matches the active filter
    if (!activeFilter || activeFilter === 'alla') {
      beams = this.props.people;
    } else {
      beams = this.props.people.filter((beam) => {
        return includes(beam.tags.map((tag) => tag.toLocaleLowerCase()), activeFilter);
      });
    }

    return (
      <div>
        <SingleDatePicker
           {...this.props}
           id="date_input"
           displayFormat='YYYY-MM-DD'
           placeholder='Välj datum'
           date={date}
           focused={focused}
           onDateChange={this.onDateChange}
           onFocusChange={this.onFocusChange}
         />

         <h1>Lorem Ipsum</h1>
         <img src="https://placekitten.com/g/800/300"></img>
         <Lorem />
      </div>
    )
  }
}
