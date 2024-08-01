var images = []
var x = 0

// generating list
images[0] = "asset/images/Ohidson1.jpg"
images[1] = "asset/images/dinning3.jpg"
images[2] = "asset/images/student.jpg"
images[3] = "asset/images/volleyball.jpg"
images[4] = "asset/images/washington.jpg"
images[5] = 'asset/images/libr.jpg'
images[6] = "asset/images/f_student.jpg"
images[7] = "asset/images/codeSchool.jpg"

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