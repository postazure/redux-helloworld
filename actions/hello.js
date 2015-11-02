export const SAY_HELLO = 'SAY_HELLO';
export const SAY_GOODBYE = 'SAY_GOODBYE';

export function sayHello() {
  return {
    type: SAY_HELLO
  }
}

export function sayGoodbye() {
  return {
    type: SAY_GOODBYE
  }
}
