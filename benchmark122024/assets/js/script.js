

const myForm = document.getElementById('myForm');
const production = document.getElementById('production');
const description = document.getElementById('description');
const imageUrl = document.getElementById('imageUrl');
const price = document.getElementById('price');
const brand = document.getElementById('brand');


class Order {
    constructor(_production, _description, _imageUrl, _price) {
        this.production = _production;
        this.description = _description;
        this.imageUrl = _imageUrl;
        this.price = _price;


    }
}
const dataURL = 'https://striveschool-api.herokuapp.com/api/product'

let productionList = [];

document.addEventListener('load', init());

function init() {
    SendForm.setAttribute('disable', true);
    readList();
};

const retrieveData = () => {
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(productionList),
        headers: {
            'Content-Type': 'application/json',
            'Authentication': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZmUxZWQyMjA3MTAwMTVkZTJmNGMiLCJpYXQiOjE3MzQwOTUwOTksImV4cCI6MTczNTMwNDY5OX0.MSL2vOlfLQT6fp1N20CB8DiIcjD-xiCDaVqIVer6yvY"
        }

    }).then((response) => {
        return response.json();
    }).then((data) => {
        let productionList = data;
        console.log(productionList);

    }).catch((error) => {
        console.log('Errore nel recupero dei prodotti', error);
    });
};

retrieveData();




async function readList() {
    try {
        let read = await fetch(dataURL);
        let response = await read.json();
        productionList = response;
        if (productionList.lenght > 0) {
            printData();
        } else {
            empty.innerText = 'Nessun prodotto disponibile';
            return;
        }
    } catch (error) {
        console.log('Errore nel recupero dei dati', error);
        empty.innerText = `Errore nel recupero dei dati : ${error}`
    }

};
