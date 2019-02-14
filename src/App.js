import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
const {
  Content, Footer
} = Layout;
import Header from './components/Header';
import MainView from './components/MainView';


class App extends Component {

	static audio;

	componentDidMount() {

	  // let hashParams = {}; 
	  // let e, r = /([^&;=]+)=?([^&;]*)/g,
	  //   q = window.location.hash.substring(1);
	  // while ( e = r.exec(q)) {
	  //   hashParams[e[1]] = decodeURIComponent(e[2]);
	  // }

	  // if(!hashParams.access_token) {
	  //   window.location.href = 'https://accounts.spotify.com/authorize?client_id=230be2f46909426b8b80cac36446b52a&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback';
	  // } else {
	  //   this.props.setToken(hashParams.access_token);
	  // }

	}

	componentWillReceiveProps(nextProps) {

	  if(this.audio !== undefined) {
	    this.audio.volume = nextProps.volume / 100;
	  }

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



export default App;
