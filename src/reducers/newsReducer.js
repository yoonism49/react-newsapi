const defaultState = {
  searchNewsPending:true,
  searchNewsError:false,
  viewType:'news',
  news:[]
};

export const newsReducer = (state = defaultState, action) => {

  switch (action.type) {

  case "UPDATE_VIEW_TYPE":
    return {
      ...state,
      viewType: action.view
    };

  case "SEARCH_NEWS_PENDING":
    return {
      ...state,
      searchNewsPending: true
    };

  case "SEARCH_NEWS_SUCCESS":
    return {
      ...state,
      news: action.news,
      searchNewsError: false,
      searchNewsPending: false,
      viewType: 'news'
    };

  case "SEARCH_NEWS_ERROR":
    return {
      ...state,
      searchNewsError: true,
      searchNewsPending: false
    };


  default:
    return state;
  }

};

export default newsReducer;
