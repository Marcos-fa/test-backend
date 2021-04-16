const express = require("express");
const router = express.Router();

const cliente = require("../controllers/cliente.controller");

router.get("/", cliente.getClientes);

router.post("/", cliente.createCliente);

router.get("/:id", cliente.getCliente);

router.put("/:id", cliente.editCliente);

router.delete("/:id", cliente.deleteCliente);


module.exports = router;
