import React from 'react';
import { Link } from 'react-router'
import {
    filter,
    filterLink,
    people,
    beam,
    beamContainer,
    beamImage,
    beamDescription
  } from "./people.css";

const flatten = require('lodash.flatten');
const uniq = require('lodash.uniq');
const includes = require('lodash.includes')

const Beam = (props) => {
  if (!props.model) { return (<noscript/>); }
  let { description, first_name, image, last_name, tags, title, ...other } = props.model;

  return (
    <div className={beam}>
      <div className={beamContainer}>
        <div>
          <img className={beamImage} src={image} alt={first_name} title={title}/>
        </div>
        <div>
          <h2>
            {first_name} {last_name}
          </h2>
          <div className={beamDescription}>
            {description}
          </div>
        </div>
      </div>
    </div>
   );
  }

  const Filter = (props) => {
    const buildRouteFromName = (name) => "/people/" + name.toLowerCase()
    if (!props.tags) { return (<noscript/>); }
    let tags = props.tags;
    return (
      <div className={filter}>
        <a className={filterLink} key="alla" onClick={props.onClick} href={buildRouteFromName('alla')}>Alla</a>
        {props.tags.map((tag) => <a className={filterLink} key={tag} onClick={props.onClick} href={buildRouteFromName(tag)}>{tag}</a>)}
      </div>
     );
    }

export default class People extends React.Component {

  componentDidMount() {
    let activeFilter = this.props.params.filter;
    this.props.setInitialFilter(activeFilter);
  }

  render() {
    let activeFilter = this.props.params.filter;
    let tags = uniq(flatten(this.props.people.map((item) => item.tags)));
    let beams = [];

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
        <div>
          <Filter tags={tags} onClick={this.props.setActiveFilter}/>
        </div>
        <div className={people}>
          <h1>Konsulter</h1>
        	{beams.map((item) => <Beam key={item.image} model={item}/>)}
        </div>
      </div>
    )
  }
}
