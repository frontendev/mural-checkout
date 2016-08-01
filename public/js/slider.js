//slider
console.log("slider init");

var slider = document.getElementById('slider');
var price = document.getElementById('price-number');

slider.min = 0;
slider.max = 100;
slider.step = 10;

slider.addEventListener('click', function(){
    var currentPosition = this.value;
    console.log(currentPosition);
    if (currentPosition >= 10) {
        price.innerHTML = '$600';
    }
    if (currentPosition >= 20) {
        price.innerHTML = '$800';
    }
    if (currentPosition >= 30) {
        price.innerHTML = '$900';
    }
    if (currentPosition >= 40) {
        price.innerHTML = '$1000';
    }
})
