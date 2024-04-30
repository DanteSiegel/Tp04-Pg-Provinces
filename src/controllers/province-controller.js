router.get("/", (req, res) => {
  res.status(200).json(provinces);
});

// GET /api/province/{id}
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const province = provinces.find((p) => p.id === id);
  if (province) {
    res.status(200).json(province);
  } else {
    res.status(404).send("Provincia no encontrada");
  }
});

// POST /api/province
router.post("/", (req, res) => {
  const { name, fullName, latitude, longitude, displayOrder } = req.body;
  // Aquí puedes realizar validaciones antes de insertar la provincia
  if (!name || name.length < 3) {
    return res.status(400).send("Nombre de provincia inválido");
  }
  const newProvince = { id: provinces.length + 1, name, fullName, latitude, longitude, displayOrder };
  provinces.push(newProvince);
  res.status(201).send("Provincia creada correctamente");
});

// PUT /api/province
router.put("/", (req, res) => {
  const { id, name, fullName, latitude, longitude, displayOrder } = req.body;
  const index = provinces.findIndex((p) => p.id === id);
  if (index !== -1) {
    provinces[index] = { id, name, fullName, latitude, longitude, displayOrder };
    res.status(200).send("Provincia modificada correctamente");
  } else {
    res.status(404).send("Provincia no encontrada");
  }
});

// DELETE /api/province/{id}
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = provinces.findIndex((p) => p.id === id);
  if (index !== -1) {
    provinces.splice(index, 1);
    res.status(200).send("Provincia eliminada correctamente");
  } else {
    res.status(404).send("Provincia no encontrada");
  }
});

export default router;