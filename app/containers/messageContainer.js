import { connect } from 'react-redux'

import Messages from '../components/messages/Messages.jsx'

import {
	setHelloMsg,
	setWorldMsg
} from '../actions'

const mapStateToProps = (state) => {
  return {
		 hello: state.hello,
		 world: state.world
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: () => {
      dispatch(setHelloMsg('Hello'));
			dispatch(setWorldMsg('world!'));
    }
  }
}

const MessageContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Messages)

export default MessageContainer
