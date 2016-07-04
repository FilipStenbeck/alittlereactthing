import { connect } from 'react-redux'

import Messages from '../components/message/Messages.jsx'

const mapStateToProps = (state) => {
  return {
		 hello: state.hello,
		 world: state.world
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: () => {
      dispatch({ type: 'SET_HELLO_MESSAGE', payload: "foo" });
			dispatch({ type: 'SET_WORLD_MESSAGE', payload: "bar" });
    }
  }
}

const MessageContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Messages)

export default MessageContainer
