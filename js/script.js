// Ini Javascript
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function formValidation() {
    let name = document.getElementById('input-name').value;

    if (name == '') {
        alert('Silahkan input data anda')
    } else {
        alert('Data tersimpan')
    }
}

function formValidation() {
    let name = document.getElementById('input-email').value;

    if (name == '') {
        alert('Silahkan input data anda')
    } else {
        alert('Data tersimpan')
    }
}

function formValidation() {
    let name = document.getElementById('option').value;

    if (name == '') {
        alert('Silahkan input data anda')
    } else {
        alert('Data tersimpan')
    }
}