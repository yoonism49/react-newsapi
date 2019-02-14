import TrackSearch from "./component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchNews } from '../../actions/newsActions';
import { setCategory } from '../../actions/categoryActions';

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    searchNews,
    setCategory
    
  }, dispatch);

};
export default connect(null, mapDispatchToProps)(TrackSearch);
