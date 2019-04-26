import React from 'react';

class Courses extends React.Component {
	constructor(props){
		super(props);
		this.state = {value: ''};

		this.props.fetchCourses();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	  const courseName = event.target.value;
	  if (courseName) {
	    this.setState({value: courseName})
	  }
	}

	handleSubmit(event) {
		event.preventDefault();

		const courseName = this.state.value;
		if (courseName) {
			this.props.addCourse(courseName)
			console.info(courseName + " is added to the store")

			this.setState({value: ''})
		}
	}
	render() {
		console.log("comp", this.props);

		return (
			<div>
				<h2>Courses</h2>
				<ul>
					{this.props.courses.map((course, index) => <Course course={course} key={index} />)}
				</ul>

				<h3>Add Courses</h3>
				<form onSubmit={this.handleSubmit} ref="courseForm">
					<div className="form-group col-sm-4">
						<input className="form-control" type="text" value={this.state.value}  onChange={this.handleChange}/>
					</div>
					<div className="form-group col-sm-2">
						<input type="submit" value="save" className="btn btn-primary mb-2"/>
					</div>
				</form>
			</div>
		);
	};
};


class Course extends React.Component {
	render() {
		return <li>{this.props.course.title}</li>
	}
}

export default Courses;
