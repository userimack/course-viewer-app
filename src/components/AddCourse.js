import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../actions/actionCreators';



function mapStateToProps(state){
	return {
		courses: state.courses,
		authors: state.authors
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

class AddCourse extends React.Component{
	constructor(props){
		super(props);
		this.state = {title: '', author: 'Select Author', category: '', toCourses: false,};

		this.props.fetchAuthors();
		this.props.fetchCourses();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const {title, author, category } = event.target;
		if (title && author && category) {
		  this.setState({title, author, category})
		}
	  }
  
	  handleSubmit(event) {
		  event.preventDefault();
  
		  const refs = this.refs;

		  if (refs.title.value && refs.author.value && refs.category.value) {
			  const authorId = this.props.authors.find(author => refs.author.value === author.name).id
			  this.props.addCourse({title: refs.title.value, authorId: authorId, category: refs.category.value})
			  console.info(refs.title.value + " is added to the store")
  
			  this.setState({title: '', author: '', category: '', toCourses: true});
		  }
		  else {
			  console.log("Not called")
		  }
	  }

    render(){
		if (this.state.toCourses === true) {
			return <Redirect to='/courses' />
		  }

		return(
			<div>
				<h3>Add Course</h3>
				<form onSubmit={this.handleSubmit} ref="courseForm">
					<div className="form-group col-sm-4">
					<label htmlFor="title">Title</label>
						<input className="form-control" type="text" ref="title"/>
					</div>
					<div className="form-group col-sm-4">
					<label htmlFor="author">Author</label>
						<select className="form-control" ref="author">
						    <option>Select Author</option>
							{this.props.authors.map((author, index) => <SelectOption selectOption={author.name} key={index} />)}
						</select>
					</div>
					<div className="form-group col-sm-4">
					<label htmlFor="category">Category</label>
						<input className="form-control" type="text" ref="category"/>
					</div>
					<div className="form-group col-sm-2">
						<input type="submit" value="save" className="btn btn-primary mb-2"/>
					</div>
				</form>
			</div>
	)}
};


class SelectOption extends React.Component{
	render() {
		return (
			<option>{this.props.selectOption}</option>
		)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);