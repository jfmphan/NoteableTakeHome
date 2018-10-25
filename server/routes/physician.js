import physicancontroller from './../controllers/physician.ctrl'
import multipart from 'connect-multiparty'
const multipartWare = multipart()

module.exports = (router) => {
    /**
     * get all physcians
     */
    router
        .route('/physicians')
        .get(physiciancontroller.getAll)
    /**
     * get all appointments for physcians
     */

    // Maybe better to have this in the appointments route
    router
        .route('/appointments/physician:id')
        .get(physiciancontroller.getAllAppointments)
}
