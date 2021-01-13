
var leftcontainer = document.getElementById("leftcontainer");
var rightcontainer = document.getElementById("rightcontainer");

// leftcontainer.addEventListener("mouseenter", function(){
//     console.log("check links")
//     leftcontainer.style.width = "80%";
//     rightcontainer.style.width = "20%";
// })
// rightcontainer.addEventListener("mouseenter", function(){
//     console.log("check rechts")
//     leftcontainer.style.width = "20%";
//     rightcontainer.style.width = "80%";
// })
leftcontainer.addEventListener("mouseenter", function(){
    console.log("check links")
    leftcontainer.classList.remove("small");
    rightcontainer.classList.remove("breed");
    leftcontainer.classList.add("breed");
    rightcontainer.classList.add("small");
})
rightcontainer.addEventListener("mouseenter", function(){
    console.log("check rechts")
    leftcontainer.classList.remove("breed");
    rightcontainer.classList.remove("small");
    leftcontainer.classList.add("small");
    rightcontainer.classList.add("breed");
})