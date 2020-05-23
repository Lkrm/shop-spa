export const mergeByProp: Function = (property: string,
  fn: Function) : Function => (state: any,
  action: any): any => ({
  [property]: {
    ...state[property],
    ...fn(action, state),
  },
});

export const mergeIn: Function = (fn: Function) : Function => (state: any,
  action: any): any => ({
  ...state,
  ...fn(action, state),
});
