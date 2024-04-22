const output = document.querySelector("#output");

const restaurants = [
    "Suwana's Thai Orchid", 
    "Khao Thai Cuisine", 
    "Little Bee Thai", 
    "PIE.ZAA Pizza", 
    "Fahrenheit Pizza & Brewhouse", 
    "Fresh Wood Fired Pizza West", 
    "Wasabi", 
    "Red Ginger Dimsum And Tapas", 
    "Murasaki Asheville"
];

// for (let i = 0; i < restaurants.length; i++) {
//     const restOutput = `<p>${restaurants[i]}</p>`;
//     output.innerHTML += restOutput;
//     output.insertAdjacentHTML("beforeend", restOutput);
// }

let i = 0;
while (i < restaurants.length) {
    const restOutput = `<p>${restaurants[i]}</p>`;
    output.insertAdjacentHTML("beforeend", restOutput);
    i++;
}