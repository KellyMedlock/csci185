const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    const currentphoto = document.querySelector("img");
    const caption = document.querySelector(".caption");
    currentphoto.src = photos[idx];

    if (idx === 0) { 
        caption.innerHTML = "Image 1 of 10";
    } else if (idx === 1) {    
        caption.innerHTML = "Image 2 of 10";
    } else if (idx === 2) {        
        caption.innerHTML = "Image 3 of 10";
    } else if (idx === 3) {       
        caption.innerHTML = "Image 4 of 10";
    } else if (idx === 4) {        
        caption.innerHTML = "Image 5 of 10";
    } else if (idx === 5) {        
        caption.innerHTML = "Image 6 of 10";
    } else if (idx === 6) {        
        caption.innerHTML = "Image 7 of 10";
    } else if (idx === 7) {        
        caption.innerHTML = "Image 8 of 10";
    } else if (idx === 8) {       
        caption.innerHTML = "Image 9 of 10";
    } else if (idx === 9) {
        caption.innerHTML = "Image 10 of 10";
    }
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    if (idx === 9) {
        idx = 0;
    } else {
        idx++;
    }

    showImage();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    if (idx === 0) {
        idx = 9;
    } else {
        idx--;
    }

    showImage();
}
