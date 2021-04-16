const mongoose = require("mongoose");
const { Schema } = mongoose;

const clienteSchema = new Schema(
  {
    nombre: { type: String, required: true },
    rfc: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true },
    cp: { type: String, required: true },
    direccion: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Cliente", clienteSchema);
