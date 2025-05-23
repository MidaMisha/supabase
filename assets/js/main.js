

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

document.querySelector('.btn_filter').classList.add('active')
document.querySelector('.sleek_right').classList.add('active')
document.querySelector('.sleek_img').classList.add('active')

let btns = document.querySelectorAll('.btn_filter')
let sleek_rights = document.querySelectorAll('.sleek_right')
let imgs = document.querySelectorAll('.sleek_img')

btns.forEach((btn, index) => {
  btn.onclick = () => {
    document.querySelector('.btn_filter.active').classList.remove('active')
    btn.classList.add('active')
    document.querySelector('.sleek_right.active').classList.remove('active')
    sleek_rights[index].classList.add('active')
    document.querySelector('.sleek_img.active').classList.remove('active')
    imgs[index].classList.add('active')
  }
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('authModal').style.display = 'block';
    window.closeAuthModal = function() {
      document.getElementById('authModal').style.display = 'none';
    }
    window.onclick = function(event) {
      if (event.target == document.getElementById('authModal')) {
        closeAuthModal();
      }
    }
  });
