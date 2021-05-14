const scrollbar = document.getElementById("to-top");
window.addEventListener('scroll', function() {
  //document.getElementById('to-top').innerHTML = window.pageYOffset + 'px';
  let yOffset = window.pageYOffset;
  console.log(yOffset);
  if (yOffset > 800) {
    scrollbar.style.display = "block";
  } else {
    scrollbar.style.display = "none";
  }
});