import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HelloWorld from '../components/helloWorld'
import * as HelloActions from '../actions/counter'

function mapStateToProps(state) {
  return {
    hello: state.hello
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HelloActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
