import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MainView.css';
import { List, Card, Button } from 'antd';

class MainView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryId: ""
		};

	}
	componentDidMount() {
		this.props.searchNews(this.state.searchTerm);
	}

	render() {
		return (
			<div>

				<List
					className="search-list"
					grid={{ gutter: 16, column: 2 }}
					dataSource={this.props.news}
					renderItem={item => (
						<List.Item>
						  <Card className="custom-card" title={item.articles.title}><p className="search-list-paragrah"><img className="search-list-image" src={item.articles.urlToImage}/></p><p>{item.articles.description}</p><Button type="primary" icon="export" onClick={() => { window.open(item.articles.url, "_blank")}}>Read More</Button></Card>
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
