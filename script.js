let mybutton = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

mybutton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});