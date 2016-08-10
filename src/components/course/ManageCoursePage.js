import React, {propTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ManageCoursePage extends React.component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(

    );
  }
}

ManageCoursePage.PropTypes = {
  // myproptypes: PropTypes.string.isRequired;
};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch);
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

