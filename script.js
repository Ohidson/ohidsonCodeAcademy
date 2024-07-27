var images = []
var x = 0

// generating list
images[0] = "asset/images/Ohidson1.jpg"
images[1] = "asset/images/Aregbesola.jpeg"
images[1] = "asset/images/Aregbesola.jpeg"
images[2] = "asset/images/volleyball.jpg"
images[3] = "asset/images/washington.jpg"
images[4] = 'asset/images/libr.jpg'
images[5] = "asset/images/f_student.jpg"
images[6] = "asset/images/ohidson.JPG"

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