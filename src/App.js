import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Header from './components/Header';
import MainView from './components/MainView';
import { setToken } from './actions/tokenActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
const {
  Content, Footer
} = Layout;
class App extends Component {

	static audio;

	componentDidMount() {
		// Let's set the Token into our Redux and not pass it to our presentation components as much as possible.
		this.props.setToken("7ee0d0a6f0c149d2bda693a9027c3121");
	}
	render() {
	  return (

	    <Layout  >
	        <Header />
					<Content style={{ padding: '0 50px' }} >
					<Layout style={{ padding: '0 50px' }}>
	            <MainView/>
  			  </Layout>  
					</Content>
	        <Footer/>
	  </Layout> 
	  );
	}
}



App.propTypes = {
  setToken: PropTypes.func
};

const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    setToken
  },dispatch);

};

export default connect(null, mapDispatchToProps)(App);
