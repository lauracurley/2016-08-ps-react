import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}

CoursePage.propTypes= {
  courses: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursePage);