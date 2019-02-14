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
		console.log('setCategory');
		this.props.setCategory(value.toLowerCase());
	}
	
	handleBlur() {
		console.log('blur');
	}
	
	handleFocus() {
		console.log('focus');
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
						placeholder="Select a person"
						optionFilterProp="children"
						onChange={e => this.handleChange(e)}
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
						filterOption={(input, option) => {console.log('setCategory');this.props.setCategory(input.toLowerCase())}}
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
