const defaultState = {
  token: '7ee0d0a6f0c149d2bda693a9027c3121'
};
export const tokenReducer = (state = defaultState, action) => {
  switch (action.type) {

  case "SET_TOKEN":
    return {
      ...state,
      token: action.token
    };

  default:
    return state;
  }

};

export default tokenReducer;
