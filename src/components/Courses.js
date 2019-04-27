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
							{this.props.courses.map((course, index) => <Course course={course} authors={this.props.authors} key={index} />)}
						</tbody>
					</table>
				</div>
			</div>
		);
	};
};


class Course extends React.Component {
	render() {
		console.log("course comp", this.props.authors)
		return (<tr>
			<td>Watch</td>
			<td><Link to="">{this.props.course.title}</Link></td>
			<td>{this.props.authors.find(author => this.props.course.authorId === author.id).name}</td>
			<td>{this.props.course.category}</td>
		</tr>)
	}
}

export default Courses;
