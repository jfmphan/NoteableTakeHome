import Physicians from './../models/Physicians'
import Appointments from './../models/Appointments'

module.exports = {
  getAll : (req, res, next) => {
        Physicians.find({}})
        .toArray((err, physician)=> {
            if (err)
                res.send(err)
            else if (!physician)
                res.send(404)
            else
                res.send(physician)
            next()
        })
    },

    getAllAppointments : (req, res, next) => {
      Physicians.find({}})
      .populate('appointments').exec((err, physcian)=> {
          if (err)
              res.send(err)
          else if (!physcian)
              res.send(404)
          else
              res.send(physcian)
          next()
      })
    }
}
