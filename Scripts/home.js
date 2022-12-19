$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    items:5,
    autoplay:true,
    smartSpeed:1200,
    autoHeight:false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})


let place=localStorage.getItem('location')
document.querySelector('button').innerText=place

let logo = document.querySelector(".logo")
logo.addEventListener("click", () => {
    window.location.assign("index.html");
})

// Side NAv Bar

document.getElementById("women-salon-services").addEventListener("click", openNav)
function openNav() {
  document.getElementById("mySidenav").style.width = "340px";
}

document.querySelector(".closebtn").addEventListener("click", closeNav)
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
