var images = []
var x = 0

// generating list
images[0] = "images/Ohidson1.jpg"
images[1] = "images/Aregbesola.jpeg"
images[2] = "images/volleyball.jpg"
images[3] = "images/volleyball.jpg"

//Definding our function
const slidePics = () => {
  document.pics.src = images[2]

  if(x < images.length - 1){
    x++
  } else {
    x = 0
  }

  setTimeout("slidePics()", 3000)
}

window.onload = slidePics