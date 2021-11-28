//imports propios
import jsonData from '../JSON/datos.json';

const data = jsonData;

const idElegido = 2;

const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data.find(item => item.id === idElegido))
      reject("Oops! I did it again :c")
    },2000);
  });

export default getItem;