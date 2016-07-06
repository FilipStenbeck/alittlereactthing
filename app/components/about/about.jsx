import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return <div>
			<p>
				<Link to="/">Home</Link>
			</p>
			<h2>About {this.props.params.name}</h2>
			</div>
  }
})
