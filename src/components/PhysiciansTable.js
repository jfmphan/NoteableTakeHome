mport React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadPhysicians
} from './../redux/actions/actions'
const mapStateToProps = state => {
    return {
        physicians: state.physicians.physicians
    }
}
class PhysiciansTable extends Component {

    componentWillMount() {
        this.props.loadPhysicians()
    }

    render() {
      const physiciansList = this.props.physicians.map(function(physician)){
        return <li>{physician.lastName}, {physician.firstName} </li>
    }
      return (
          <div>
              <div className="container-fluid main-container">
                  <div className="col-xs-4">
                      <h4>PHYSICIANS</h4>
                      <ul>
                        { physiciansList }
                      </ul
                  </div>
              </div>
          </div>
      );
    }
}
export default connect(mapStateToProps, { loadPhysicians })(PhysiciansTable);
