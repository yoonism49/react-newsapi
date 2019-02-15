export const searchNewsPending = () => {
  return {
    type: 'SEARCH_NEWS_PENDING'
  };
};

export const searchNewsSuccess = (news) => {
  return {
    type: 'SEARCH_NEWS_SUCCESS',
    news
  };
};

export const searchNewsError = () => {
  return {
    type: 'SEARCH_NEWS_ERROR'
  };
};

export const searchNews = (searchTerm) => {
  return (dispatch, getState)  => {
    const category = getState().categoryReducer.category;
    let request;
    if(category==='date' || category ==='') {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; 
      
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd; 
      } 
      if (mm < 10) {
        mm = '0' + mm;
      } 
      request = new Request(`https://newsapi.org/v2/everything?q=${searchTerm}&from=${mm + '-' + dd + '-' + yyyy}&sortBy=publishedAt&apiKey=${getState().tokenReducer.token}`);
    } else 
    {
      request = new Request(`https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=${getState().categoryReducer.category}&sortBy=publishedAt&apiKey=${getState().tokenReducer.token}`);
    }

    dispatch(searchNewsPending());

    fetch(request).then(res => {
      if(res.statusText === "Unauthorized") {
        window.location.href = './';
      }
      return res.json();
    }).then(res => {
      res.items = res.articles.map(item => {
        return {
          articles: item
        };
      });
      dispatch(searchNewsSuccess(res.items));
    }).catch(err => {
      dispatch(searchNewsError(err));
    });
  };
};


export const updateViewType = (view) => {
  return {
    type: 'UPDATE_VIEW_TYPE',
    view
  };
};
