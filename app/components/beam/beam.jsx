import React from 'react';
import { Link } from 'react-router'
import {
  beam,
  beamContainer,
  beamImage,
  beamDescription
} from "./beam.css";

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

export default Beam;
