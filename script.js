var images = []
var x = 0

// generating list
images[0] = "images/Ohidson1.jpg"
images[1] = "images/Aregbesola.jpeg"
images[2] = "images/volleyball.jpg"
images[3] = "images/washington.jpg"
images[4] = 'images/libr.jpg'
images[5] = "images/f_student.jpg"
images[6] = "images/ohidson.JPG"

//Definding our function
const slidePics = () => {
  document.pics.src = images[x]

  if(x < images.length - 1){
    x = x + 1;
  } else {
    x = 0
  }

  setTimeout("slidePics()", 3000)
}

window.onload = slidePics