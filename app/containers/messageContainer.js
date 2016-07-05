import { connect } from 'react-redux'

import { helloWorlds, helloRandom } from '../utils/translations'
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
			let languageCode = helloRandom();
      dispatch(setHelloMsg(helloWorlds(languageCode)[0]));
			dispatch(setWorldMsg(helloWorlds(languageCode)[1]));
    }
  }
}

const MessageContainer = connect(
  mapStateToProps,
	mapDispatchToProps
)(Messages)

export default MessageContainer
