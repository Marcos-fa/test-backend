const Cliente = require("../models/cliente");

const clienteCtrl = {};

clienteCtrl.getClientes = async (req, res, next) => {
  const title = req.query.title;
  var condition = title ? { nombre: { $regex: new RegExp(title), $options: "i" } } : {};

  Cliente.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

clienteCtrl.createCliente = async (req, res, next) => {
  const cliente = new Cliente({
    nombre: req.body.nombre,
    rfc: req.body.rfc,
    telefono: req.body.telefono,
    email: req.body.email,
    cp: req.body.cp,
    direccion: req.body.direccion
  });
  await cliente.save();
  res.json({ status: "Cliente created" });
};

clienteCtrl.getCliente = async (req, res, next) => {
  const { id } = req.params;
  const cliente = await Cliente.findById(id);
  res.json(cliente);
};

clienteCtrl.editCliente = async (req, res, next) => {
  const { id } = req.params;
  await Cliente.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Cliente Updated" });
};

clienteCtrl.deleteCliente = async (req, res, next) => {
  await Cliente.findByIdAndRemove(req.params.id);
  res.json({ status: "Cliente Deleted" });
};

module.exports = clienteCtrl;
