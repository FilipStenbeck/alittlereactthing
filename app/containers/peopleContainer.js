import { connect } from 'react-redux'

import People from '../components/people/people.jsx'

const mapStateToProps = (state) => {
  return {
		 people: (state.people && state.people.data && state.people.data.length ) ? state.people.data : []
  }
}

const PeopleContainer = connect(
  mapStateToProps
)(People)

export default PeopleContainer
