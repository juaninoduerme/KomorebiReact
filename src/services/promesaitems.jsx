//imports propios
import jsonData from '../JSON/datos.json';

const data = jsonData;

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
      reject("Oops! I did it again :c")
    },2000);
  });

export default getProducts;