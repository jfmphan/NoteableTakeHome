const initialState = {
    physicians: [],
    physician: {},
    appointments: []
}
export default (state=initialState, action) => {
    switch (action.type) {
        case 'LOAD_PHYSICIANS' :
        return {
            ...state,
            physicians: action.physcians
        }
        case 'GET_APPOINTMENTS':
        let physcian = Object.assign({}, state.physcian)
        return {
            ...state,
            appointments: action.appointments
        }
        default:
            return state
    }
}
