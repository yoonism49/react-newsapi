import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainView.css';
import { List, Card, Button } from 'antd';

class MainView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryId: "",
			catList:[]
		};

	}
	componentDidMount() {
		this.props.searchNews(this.state.searchTerm);
	}
	updateCategory(e) {
		let cat = e;
		this.setState({ categoryId: cat });
		// if(e !== 'favorite') {
		// 	this.props.actions.loadCats(cat);
		// 	this.setState({catList:'cat'});
		// } else {
		// 	this.props.actions.loadFavoriteCats();
		// 	this.setState({catList:'fav'});
		// }

	}



	render() {
		return (
			<div>
			{/* <Categories
					categories={this.props.categories}
					onChange={this.updateCategory}
				/> */}
				<List
					className="search-list"
					grid={{ gutter: 16, column: 2 }}
					dataSource={this.props.songs}
					renderItem={item => (
						<List.Item>
						  <Card className="custom-card" title={item.articles.title}><p className="search-list-paragrah"><img className="search-list-image" src={item.articles.urlToImage}/></p><p>{item.articles.description}</p><Button type="primary" icon="export" onClick={(e) => { window.open(item.articles.url, "_blank")}}>Read More</Button></Card>
						</List.Item>
					  )
					}
				/>
				
			</div>
		);
	}
}

MainView.propTypes = {
	searchNews: PropTypes.func,
	token: PropTypes.string,
  };
export default MainView;
