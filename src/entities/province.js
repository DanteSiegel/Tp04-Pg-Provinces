const provinces = [
  {
    id: 1,
    name: "Buenos Aires",
    full_name: "Provincia de Buenos Aires",
    latitude: -34.605105,
    longitude: -58.381555,
    display_order: 1
  },
  {
    id: 2,
    name: "Córdoba",
    full_name: "Provincia de Córdoba",
    latitude: -31.420083,
    longitude: -64.188774,
    display_order: 2
  },
  {
    id: 3,
    name: "Santa Fe",
    full_name: "Provincia de Santa Fe",
    latitude: -31.610657,
    longitude: -60.697293,
    display_order: 3
  },
  {
    id: 4,
    name: "Mendoza",
    full_name: "Provincia de Mendoza",
    latitude: -32.889458,
    longitude: -68.845838,
    display_order: 4
  },
  {
    id: 5,
    name: "Salta",
    full_name: "Provincia de Salta",
    latitude: -24.782127,
    longitude: -65.423198,
    display_order: 5
  }
];

const newProvince = {
  id: 6,
  name: "Chaco Provincia",
  full_name: "Provincia de Chaco",
  latitude: -24.895086288452148,
  longitude: -59.93218994140625,
  display_order: 100
};

provinces.push(newProvince);

export default provinces;
