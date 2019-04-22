import React from 'react';

class Courses extends React.Component {
	constructor(props){
		super(props);
		this.state = {courses: [], value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value})
	}

	handleSubmit(event) {
		this.setState({courses: [...this.state.courses, this.state.value]});

		event.preventDefault();
		this.setState({value: ''})
	}
	render() {
		return (
			<div>
				<h2>Courses</h2>
				<ul>
					{this.state.courses.map((course, index) => <Course course={course} key={index} />)}
				</ul>

				<h3>Add Courses</h3>
				<form onSubmit={this.handleSubmit}>
					<div class="form-group col-sm-4">
						<input class="form-control" type="text" name="course" value={this.state.value} onChange={this.handleChange}/>
					</div>
					<div class="form-group col-sm-2">
						<input type="submit" value="save" class="btn btn-primary mb-2"/>
					</div>
				</form>
			</div>
		)
	}
}


class Course extends React.Component {
	render() {
		return <li>{this.props.course}</li>
	}
}

export default Courses;
