import Mongoose from 'mongoose';

let AppointmentsSchema = new Mongoose.Schema(
    {
        patientName: String,
        time: Date,
        kind: String,
        physcian: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Physicians'
        }
    }
);

module.exports = Mongoose.model('Appointments', AppointmentsSchema)
