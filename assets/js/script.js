let drone = document.querySelector(".Drone");
let dronediv = document.querySelector(".dronediv");
let accesories = document.querySelector(".accesories");
let accesoriesdiv = document.querySelector(".accesoriesdiv");


drone.addEventListener("mouseover", function () {
  dronediv.classList.add("active");
});

drone.addEventListener("mouseout", function () {
  dronediv.classList.remove("active");
});



accesories.addEventListener("mouseover", function () {
    accesoriesdiv.classList.add("active");
});


accesories.addEventListener("mouseout", function () {
    accesoriesdiv.classList.remove("active");
});
