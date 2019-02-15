const defaultState = {
  category:'date'
};
export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {

  case "SET_CATEGORY":
    return {
      ...state,
      category: action.category
    };

  default:
    return state;
  }

};

export default categoryReducer;
