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
let sideNav = document.getElementById("mySidenav");

document.getElementById("women-salon-services").addEventListener("click", openNav)
function openNav() {
  sideNav.classList.toggle('show-nav');
}

document.querySelector(".closebtn").addEventListener("click", closeNav)
function closeNav() {
 sideNav.classList.toggle('show-nav');
}

document.body.addEventListener('click',(e)=>{
    // console.log(e.target)   
     if(e.target === sideNav){
        return;
    }
    // else{
    //     console.log('dsfh')
        // sideNav
        // sideNav.classList.remove('show-nav');

    // }

});

window.addEventListener('scroll',()=>{
    if(window.scrollY=== 1220){
        //add class to jo bhi hai vo
    }
    else{
        // remove class
    }
})