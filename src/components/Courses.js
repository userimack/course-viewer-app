import React from 'react';
import { Link } from 'react-router-dom'
class Courses extends React.Component {
	constructor(props){
		super(props);

		this.props.fetchAuthors();
		this.props.fetchCourses();
	}

	render() {
		console.log("in the component", this.props);
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
							{courseList.map((course, index) => <Course course={course} authors={this.props.authors} key={index} />)}
						</tbody>
					</table>
				</div>
			</div>
		);
	};
};


class Course extends React.Component {
	render() {
		const authorName = this.props.authors ? this.props.authors.find(author => this.props.course.authorId === author.id).name : []

		return (<tr>
			<td>Watch</td>
			<td><Link to={`/course/${this.props.course.slug}`}>{this.props.course.title}</Link></td>
			<td>{authorName}</td>
			<td>{this.props.course.category}</td>
		</tr>)
	}
}

export default Courses;
