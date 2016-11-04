import React, { Component }  from 'react';
//import showMenu from '../../actions/index.js';
import { connect } from 'react-redux';

class AppLayout extends Component {
  componentWillMount() {
  }

  render() {

    return  (
      <div>
        Hola Mundo
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);
