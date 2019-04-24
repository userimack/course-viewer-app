import React from 'react';

class Courses extends React.Component {
	constructor(props){
		super(props);
		// this.state = {name: ''};

		// this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// handleChange(event) {
	//   const courseName = event.target.name;
	//   if (courseName) {
	//     this.setState({name: courseName})
	//   }
	// }

	handleSubmit(event) {
		event.preventDefault();

		const courseName = this.refs.name.value;
		if (courseName) {
			this.props.addCourse(courseName)
			console.info(courseName + " is added to the store")
			// this.setState({courses: [...this.state.courses, this.state.value]});

			// this.setState({value: ''})
		}
	}
	render() {
		const coursesList = this.props.courses;
		// if (!coursesList){
		//   coursesList = [];
		// }

		return (
			<div>
				<h2>Courses</h2>
				<ul>
					{coursesList ? coursesList.map((course, index) => <Course course={course} key={index} />) : []}
				</ul>

				<h3>Add Courses</h3>
				<form onSubmit={this.handleSubmit} ref="courseForm">
					<div className="form-group col-sm-4">
						<input ref="name" className="form-control" type="text"/>
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
		return <li>{this.props.course}</li>
	}
}

export default Courses;
