console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)

let buttons = document.querySelectorAll("button");
// Extra credit: Select the navbar

let navbar = document.querySelector("navbar");
// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black

// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar
// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar

document.querySelector(".btn-light").addEventListener("click",function() {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
document.querySelector(".navbar").classList.remove("bg-dark");
  document.querySelector(".navbar").classList.add("bg-light");

});







// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards

let images = document.getElementsByClassName("card-img-top");
// Console log the length of the array to confirm you have all 4 images
console.log(images.length);

// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


for(let i = 0; i < images.length; i++){
  let img = images[i]
  let imgSrc = img.src 
  img.addEventListener("mouseover", function(event){
    img.src = imgSrc.replace(".jpg",".gif")
  })
  img.addEventListener("mouseout",function(event){
    img.src = imgSrc
  })
}