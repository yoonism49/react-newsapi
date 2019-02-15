import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TrackSearch.css';
import { Input, Select, Button  } from 'antd';
const Option = Select.Option;

class TrackSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""

		};

	}
	updateSearchTerm = (e) => {
	  this.setState({
	    searchTerm: e.target.value
	  });
	}
	handleChange(value) {
		this.props.setCategory(value.toLowerCase());
	}
	
	render() {
	  return(
	    <div className='track-search-container'>
	      <form onSubmit={() => { this.props.searchNews(this.state.searchTerm)}}>
	        <Input onChange={this.updateSearchTerm} type='text' placeholder='Search...' />
	        <Button type="primary" onClick={(e) => { e.preventDefault(); this.props.searchNews(this.state.searchTerm)}}>
					  Search
	        </Button>
					<Select
						showSearch
						style={{ width: 200 }}
						placeholder="Select a category"
						optionFilterProp="children"
						onChange={e => this.handleChange(e)}
						filterOption={(input) => {this.props.setCategory(input.toLowerCase())}}
					>
						<Option value="date">date</Option>
						<Option value="relevance">relevance</Option>
						<Option value="popularity">popularity</Option>
					</Select>
	      </form>
	    </div>
	  );
	}
}

TrackSearch.propTypes = {
	searchNews: PropTypes.func,
	setCategory: PropTypes.func
};


export default TrackSearch;
