import Mongoose from 'mongoose';

let PhysiciansSchema = new Mongoose.Schema(
    {
        email: String,
        name: String,
        appointments : [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointments'
          }
        ]
    }
);

module.exports = Mongoose.model('Physicians', PhysiciansSchema)
