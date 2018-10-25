import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    getPhysicianAppointments,
    getPhysicians
} from './../redux/actions/actions'
import PropTypes from 'prop-types'
const mapStateToProps = state => {
    return {
        appointments: state.appointments.appointments,
        physician: state.physicians.physician
    }
}
class PhysiciansAppointments extends Component {


    componentWillMount() {
        this.props.getPhysicianAppointments(this.props.match.params.id)
    }
    componentWillUnmount() {
        document.body.className = ''
    }
    render() {
        const { patientName, time, kind } = this.props.appointments,

        const physician = this.props.physician,

        const appointmentsList = this.props.appointments.map(function (appointment)){
          return <tr>
                    <td>{ appointment.patientName }</td>
                    <td>{ appointment.time }</td>
                    <td>{ appointment.kind }</td>
                  </tr>
        },
        return (
                <div>
                  <div className="container-fluid main-container">
                    <div className="col-xs-8">
                      <h1>Dr. { physician.firstName } { physcian.lastName }</h1>
                      <h4> { physician.email }</h4>
                      <table>
                        <tr>
                          <th>Name</th>
                          <th>Time</th>
                          <th>Kind</th>
                        </tr>
                        { appointmentsList }
                      </table>
                    </div>
                  </div>
                </div>  
              );
    }
}
ArticleView.propTypes = {
    params: PropTypes.object.isRequired
}
export default connect(mapStateToProps, {
    getArticle,
    clap,
    follow
})(ArticleView);
