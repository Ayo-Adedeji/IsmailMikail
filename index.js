const showBar = document.querySelector(".fa-bars")
const sideBar = document.querySelector(".sidebar")
const hideBar = document.querySelector(".fa-x")

showBar.addEventListener("click", function() {
    sideBar.style.display = "flex"
})

hideBar.addEventListener("click", function() {
    sideBar.style.display = "none"
})

