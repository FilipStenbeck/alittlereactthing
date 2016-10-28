import React from 'react';
import {
    people,
    beam,
    beamContainer,
    beamImage,
    beamDescription
  } from "./people.css";

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

export default class People extends React.Component {
  render() {
    return (
      <div className={people}>
        <h1>Konsulter</h1>
      	{this.props.people.map((item) => <Beam key={item.image} model={item}/>)}
      </div>
    )
  }
}
