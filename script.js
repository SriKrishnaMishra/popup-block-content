let showbtn = document.getElementById("showbtn");

let closebtn = document.getElementById("closebtn");

let popup = document.querySelector(".popup");
let subpop = document.getElementById("sub-pop")


showbtn.addEventListener("click", () => {

    popup.style.display = "block";
    showbtn.style.display = "none";
    document.body.style.backgroundColor = "orange";
    subpop.style.display = "none";
});

closebtn.addEventListener("click", () => {

    popup.style.display = "none";
    showbtn.style.display = "block";
    document.body.style.backgroundColor = "blue";
    subpop.style.display = "block";
});