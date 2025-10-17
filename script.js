const btnmodal = document.getElementById("btnmodal");
const bggelap = document.getElementById("bggelap");
const btntutup = document.getElementById("btntutup");


btnmodal.addEventListener("click", function() {
  bggelap.style.display = "flex";
});


btntutup.addEventListener("click", function() {
  bggelap.style.display = "none";
});


bggelap.addEventListener("click", function(e) {
  if (e.target === bggelap) {
    bggelap.style.display = "none";
  }
});