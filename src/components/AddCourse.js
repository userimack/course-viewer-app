import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreators from '../actions';



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
		const { match: { params: { slug }} } = this.props;;
		this.state = {
			course: {title: '',
					 author: 'Select Author',
					 category: '',
					 id: null,
					 slug
					},
			toCourses: false,
			authors: [],
			courses: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.props.fetchCourses();
		this.props.fetchAuthors();
		// this.getCourseDataForEdit();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("Calling componentDidUpdate")
		console.log("Updated state", this.state)
		// if (prevState.authors !== this.state.authors && prevState.courses !== this.state.courses) {
		// 	console.log("2 Calling componentDidUpdate")
		// 	this.setState({authors: prevState.authors, courses: prevState.courses});
		// 	console.log("Updated state", this.state)
		// 	this.getCourseDataForEdit();
		// 	console.log("3 Updated state", this.state)
		// }
	}

	// static getDerivedStateFromProps(nextProps, prevState){
	// 	console.log("Calling getDerivedStateFromProps")
	// 	if(nextProps.authors.length !== prevState.authors.length && nextProps.courses.length !== prevState.courses.length){
	// 		console.log("check passed")
	// 		if (prevState.course.slug){
	// 			console.log("hey there", prevState.course.slug)
	// 			console.log("---------------", prevState.courses, nextProps.courses);
	// 			console.log("prevState.slug", prevState.course.slug)
	// 			const cs = nextProps.courses.find((course, index) => prevState.course.slug === course.slug);
	// 			console.log("~~~", cs)

	// 			const author = nextProps.authors.find(author => cs.authorId  === author.id)
	// 			return {...prevState, course: {title: cs.title, author: author.name, category: cs.category, slug: cs.slug, id: cs.id}, authors: nextProps.authors, courses: nextProps.courses};
	// 			// console.log("getCourseDataForEdit: Updated state", this.state)

	// 		}
	// 		console.log("2 Calling getDerivedStateFromProps")
	// 		return {...prevState, authors: nextProps.authors, courses: nextProps.courses}
	// 	}
	// 	else return null
	// }


	handleChange(event) {
		this.setState({...this.state, course: {...this.state.course, [event.target.name]: event.target.value}})
	  }

	handleSubmit(event) {
		event.preventDefault();
		const course = this.state.course;

		if (course.title && course.author && course.category) {
			const authorId = this.props.authors? this.props.authors.find(author => course.author === author.name).id : ""
			const newCourse = {title: course.title, authorId: authorId, category: course.category}

			if (course.slug){
				console.log("Adding id and slug")
				newCourse.id = course.id
				newCourse.slug = course.slug
			}

			this.props.addCourse(newCourse);
			console.info(newCourse + " is added to the store")

		const newState = {
		...this.state,
		course: {title: '',
					author: 'Select Author',
					category: '',
					id: null,
					slug: null
				},
		toCourses: true
		};

		this.setState(newState);
		}
		else {
			console.log("HandleSubmit is not called")
		}
	  }

    render(){
		if (this.state.toCourses === true) {
			return <Redirect to='/courses' />
		  }

		return(
			<div>
				<h3>{this.state.course.slug ? 'Edit' : 'Add'} Course</h3>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group col-sm-4">
					<label htmlFor="title">Title</label>
						<input required name="title" className="form-control" type="text" value={this.state.course.title} onChange={this.handleChange}/>
					</div>
					<div className="form-group col-sm-4">
					<label htmlFor="author">Author</label>
						<select required name="author" className="form-control" value={this.state.course.author} onChange={this.handleChange}>
						    <option>Select Author</option>
							{this.props.authors.map((author, index) => <SelectOption selectOption={author.name} key={index} />)}
						</select>
					</div>
					<div className="form-group col-sm-4">
					<label htmlFor="category">Category</label>
						<input required name="category" className="form-control" type="text" value={this.state.course.category} onChange={this.handleChange}/>
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
