// curl --get   
// npm install axios 
const axios = require('axios');
let url = "";
let fs = require('fs');

showURL('link.txt');

function showURL(nombre) {
    fs.readFile(nombre, 'utf-8', (err, data) => { //sincrona
        if(err) {
          console.log('error: ', err);
        } else {
          url = data.toString();
          getURL(url)
          }
      });
}

function getURL(url) {
    axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
  }
