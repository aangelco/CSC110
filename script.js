function divClick(var1) {
  
  console.log(var1)
  
  document.getElementsByClassName('show')[0].className='noshow';
  
  document.getElementById(var1).className="show";
}

function moveMole() {
  var div = document.querySelector('.mole');
  var maxX = window.innerWidth - div.offsetWidth;
  var maxY = window.innerHeight - div.offsetHeight;

  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);

  div.style.left = newX + 'px';
  div.style.top = newY + 'px';
}

var intervalId = setInterval(moveMole, 500);

function start() {
  var donutDiv = document.getElementById("donutDiv");

  if (donutDiv) {
    donutDiv.classList.add("animation");
    document.getElementById('donutDiv').id = 'stopDiv';
  } else {
      stopDiv.classList.add("box2picAfter");
      stopDiv.classList.add("animationAfter");
      } 
}
