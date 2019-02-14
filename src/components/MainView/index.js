import MainView from "./component";
import { connect } from "react-redux";
import { searchNews } from '../../actions/newsActions';
import { bindActionCreators } from "redux";
const mapStateToProps = (state) => {

  return {
    songs: state.newsReducer.songs ? state.newsReducer.songs : '',
    viewType: state.newsReducer.viewType,
  };

};
const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    searchNews,
  }, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(MainView);
