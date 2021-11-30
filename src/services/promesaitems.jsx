//imports propios
import jsonData from '../JSON/datos.json';

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jsonData)
      reject("Oops! I did it again :c")
    },2000);
  });

export default getProducts;