
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var dropbtns = document.getElementsByClassName("dropbtn");
var i;
for (i = 0; i < dropbtns.length; i++) {
    dropbtns[i].addEventListener("click", function() {
        document.getElementById("myDropdown").classList.toggle("show");
        var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
    }
    )
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
    )
}

const slides = document.querySelectorAll('.slide');
let currentIndex = 0

function switchSlides(){
    slides[currentIndex].classList.remove('active');

    currentIndex ++;

    if(currentIndex >= slides.length){
        currentIndex = 0
    }

    slides[currentIndex].classList.add('active');
}

setInterval(switchSlides, 1500)
