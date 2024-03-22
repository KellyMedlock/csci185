function makeBigger() {
   document.querySelector(".content").style.fontSize = "24px";
   document.querySelector("header").style.fontSize = "36px";
   // alert('make bigger!');
};

function makeSmaller() {
   document.querySelector(".content").style.fontSize = "16px";
   document.querySelector("header").style.fontSize = "24px";
   // alert('make smaller!');
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
