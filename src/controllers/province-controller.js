
import { provinces } from "../entities/province.js";

// Mostrar todas las provincias
export const mostrarProvincias = (req, res) => {
  res.json(provinces);
};

// Buscar una provincia por ID
export const buscarProvinciaPorId = (req, res) => {
  const id = req.params.id;
  const provincia = provinces.find(provincia => provincia.id == id);
  if (provincia) {
    res.json(provincia);
  } else {
    res.status(404).json({ error: "Provincia no encontrada" });
  }
};

// Eliminar una provincia por ID
export const eliminarProvinciaPorId = (req, res) => {
  const id = req.params.id;
  const index = provinces.findIndex(provincia => provincia.id == id);
  if (index !== -1) {
    const eliminada = provinces.splice(index, 1);
    res.json(eliminada[0]);
  } else {
    res.status(404).json({ error: "Provincia no encontrada" });
  }
};
