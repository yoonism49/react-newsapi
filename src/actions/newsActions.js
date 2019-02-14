export const fetchSongsPending = () => {
  return {
    type: 'FETCH_SONGS_PENDING'
  };
};

export const fetchSongsSuccess = (songs) => {
  return {
    type: 'FETCH_SONGS_SUCCESS',
    songs
  };
};

export const fetchSongsError = () => {
  return {
    type: 'FETCH_SONGS_ERROR'
  };
};


export const searchNewsPending = () => {
  return {
    type: 'SEARCH_SONGS_PENDING'
  };
};

export const searchNewsSuccess = (songs) => {
  return {
    type: 'SEARCH_SONGS_SUCCESS',
    songs
  };
};

export const searchNewsError = () => {
  return {
    type: 'SEARCH_SONGS_ERROR'
  };
};

export const searchNews = (searchTerm) => {
  return (dispatch, getState)  => {
    const category = getState().categoryReducer.category;
    let request;
    console.log('category'+category);
    if(category==='date' || category ==='') {
      const today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      
      const yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd; 
      } 
      if (mm < 10) {
        mm = '0' + mm;
      } 
      request = new Request(`https://newsapi.org/v2/everything?q=${searchTerm}&from=${mm + '-' + dd + '-' + yyyy}&sortBy=publishedAt&apiKey=7ee0d0a6f0c149d2bda693a9027c3121`);
    } else 
    {
      request = new Request(`https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=${getState().categoryReducer.category}&sortBy=publishedAt&apiKey=7ee0d0a6f0c149d2bda693a9027c3121`);
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
      dispatch(fetchNewsError(err));
    });
  };
};


export const updateViewType = (view) => {
  return {
    type: 'UPDATE_VIEW_TYPE',
    view
  };
};
