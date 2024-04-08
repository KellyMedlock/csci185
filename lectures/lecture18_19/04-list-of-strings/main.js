const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe",
    "Kelly", "Sarah", "Josh", "Jack"
];


// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
let counter = 0;

while (counter < names.length) { 
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[counter]}!</p>`);
    counter++;
}

// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[1]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[2]}!</p>`);
// outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[3]}!</p>`);