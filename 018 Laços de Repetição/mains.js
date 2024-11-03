const brands = ["BMW", "Volvo", "Ford", "Chevrolet", "Audi"];

//FOR

// let content = "";

// for (let i = 0; i < brands.length; i = i + 1) {

//     console.log(`Posição: ${i} = ${brands[i]}`);

//     content = content + `Posição: ${i} = ${brands[i]} <br>`;
// }

// document.querySelector("#content").innerHTML = content


//FOREACH

let content = "";

brands.forEach(function (brand, index) {

    console.log(`Posição: ${index} = ${brand}`);

    content +=  `Posição: ${index} = ${brand} <br>`;
})

document.querySelector("#content").innerHTML = content