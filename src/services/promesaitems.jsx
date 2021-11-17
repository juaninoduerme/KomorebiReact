import * as React from 'react';

const data = [
  {
      "id": 1,
      "nombre": "Spray",
      "imagen": "https://i.ibb.co/SnkzWDz/imgSpray.jpg",
      "alt": "Imagen con un frasco tipo spray color ámbar sobre un lienzo.",
      "precio": 600,
      "descripcion": "Spray realizado con aceites esenciales, alcohol de cereal y agua mineral. Envase color ámbar de 250 ml.",
      "consejos": "Usalo donde quieras, es apto para usar en tela, ambientes y en tu propia piel.",
      "stock": 20
  },

  {
      "id": 2,
      "nombre": "Vela de Soja",
      "imagen": "https://i.ibb.co/59RqVLS/imgVela.jpg",
      "alt": "Imagen con una vela de soja dentro de un frasco de vidrio trasparente, con lavanda arriba sobre un lienzo.",
      "precio": 700,
      "descripcion": "Vela realizada con cera de soja y aceites esenciales en frasco de 200 ml con tapa blanca. Apta masajes.",
      "consejos": "Usar en lapsos de 4 horas. No soplar, apagar a través de falta de oxígeno usando su tapa o un apaga velas.",
      "stock": 10
  },

  {
      "id": 3,
      "nombre": "Bombones de Soja",
      "imagen": "https://i.ibb.co/z5dffHs/img-Bombon.jpg",
      "alt": "Bombones en formas de flor de cera de soja apoyados entre si sobre un lienzo.",
      "precio": 500,
      "descripcion": "Bombones realizados con aceites esenciales y cera de soja, con formas inspiradas en la naturaleza.",
      "consejos": "El aceite que se forma al derretirse, al igual que el de la vela de soja, se puede usar para masajes.",
      "stock": 5
  },

  {
      "id": 4,
      "nombre": "Tag de Soja",
      "imagen": "https://i.ibb.co/RvX8fhd/imgTag.jpg",
      "alt": "Imagen de dos Tag's sobre un lienzo.",
      "precio": 300,
      "descripcion": "Tag con formita realizado con aceites esenciales y cera de soja. Con cinta para colgar y bolsa de organza.",
      "consejos": "La cera de soja se derrite a 40°C, así que si lo vas a usar en un lugar donde esté muy expuesto al sol, avísame así lo preparo con solidificador.",
      "stock": 5
  }
]

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
      reject("Oops! I did it again :c")
    },2000);
  });

export default getProducts;