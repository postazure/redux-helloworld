
import { SAY_HELLO, SAY_GOODBYE } from '../actions/hello'

export default function counter(state, action) {
  let newState;

  switch (action.type) {
    case SAY_HELLO:
      newState = "Hello";
      break;
    case DECREMENT_COUNTER:
      newState = "Goodbye";
      break;
    default:
      return state
  }

  return newState;
}
