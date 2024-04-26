import express from 'express';
import provinces from '../entities/province.js';

const ProvinceRouter = express.Router();

// Endpoint para obtener todas las provincias
ProvinceRouter.get("/", (req, res) => {
  res.status(200).json(provinces);
});

// Endpoint para obtener una provincia por su id
ProvinceRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const province = provinces.find(province => province.id === id);
  if (province) {
    res.status(200).json(province);
  } else {
    res.status(404).send("Provincia no encontrada");
  }
});

// Otros endpoints para insertar, actualizar y eliminar provincias

export default ProvinceRouter;
