import React from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

class Courses extends React.Component {
	constructor(props){
		super(props);

		this.props.fetchCourses();
		this.props.fetchAuthors();
	}

	render() {
		const courseList = this.props.courses ? this.props.courses : [];

		return (
			<div>
				<h2>Courses</h2>
				<Link to="/course"><button type="button" className="btn btn-primary">Add Course</button></Link>
				<div className="container">
					<table className="table">
						<thead>
							<tr>
								<th scope="col"></th>
								<th scope="col">Title</th>
								<th scope="col">Author</th>
								<th scope="col">Category</th>
							</tr>
						</thead>
						<tbody>
							{courseList.map((course, index) => <Course course={course} authors={this.props.authors} key={index} removeCourse={this.props.removeCourse} />)}
						</tbody>
					</table>
				</div>
			</div>
		);
	};
};


class Course extends React.Component {
	render() {
		const authorName = this.props.authors.length > 0 ? this.props.authors.find(author => this.props.course.authorId === author.id).name : []

		return (<tr>
			<td><button type="button" className="btn btn-light">Watch</button></td>
			<td><Link to={`/course/${this.props.course.slug}`}>{this.props.course.title}</Link></td>
			<td>{authorName}</td>
			<td>{this.props.course.category}</td>
			<td><button type="button" className="btn btn-outline-danger" onClick={() => this.props.removeCourse(this.props.course.id)}>Delete</button></td>
		</tr>)
	}
}

function mapStateToProps(state){
	return {
		courses: state.courses,
		authors: state.authors
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Courses)


export default App;
