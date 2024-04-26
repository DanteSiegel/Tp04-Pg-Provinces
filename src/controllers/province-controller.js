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

// Endpoint para insertar una nueva provincia
ProvinceRouter.post("/", (req, res) => {
  const { name, full_name, latitude, longitude, display_order } = req.body;

  // Verificar si todos los campos necesarios están presentes
  if (!name || !full_name || !latitude || !longitude || !display_order) {
    return res.status(400).send("Faltan campos obligatorios");
  }

  // Verificar si el nombre tiene al menos 3 caracteres
  if (name.length < 3) {
    return res.status(400).send("El nombre debe tener al menos 3 caracteres");
  }

  // Crear la nueva provincia
  const newProvince = {
    id: provinces.length + 1,
    name,
    full_name,
    latitude,
    longitude,
    display_order
  };

  // Agregar la nueva provincia al array de provincias
  provinces.push(newProvince);

  // Retornar el estado 201 (Created) y la provincia creada
  res.status(201).json(newProvince);
});

export default ProvinceRouter;
