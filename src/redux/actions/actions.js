import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"
export function loadPhysicians () {
    return (dispatch) => {
        axios.get(`${url}physcians`)
        .then((res) => {
            let articles = res.data
            dispatch({type:'LOAD_PHYSICIANS', physicians})
        }).catch((err) => {
            console.log(err)
        })
    }
}

export function getPhysicianAppointments (_id) {
    return (dispatch) => {
        axios.get(`${url}/appointments/physician${_id}`).then((res)=>{
            let profile = res.data
            dispatch({type: 'GET_APPOINTMENTS', appointments})
        }).catch(err=>console.log(err))
    }
}

export function toggleClose() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: false})
    }
}
export function toggleOpen() {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_MODAL', modalMode: true})
    }
}
