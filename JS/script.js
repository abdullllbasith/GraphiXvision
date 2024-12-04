//side bar

function openNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '0';
    } else {
        console.error("error: side panel not found")
    }
}


function closeNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '-320px';
    } else {
        console.error("error: side panel not found")
    }
}


//right-side bar

function openRside() {
    'use strict';
    const rSide = document.getElementById('right-side');
    if (rSide) {
        rSide.style.right = '0';
    } else {
        console.error("error: side panel not found")
    }
}


function closeRside() {
    'use strict';
    const rSide = document.getElementById('right-side');
    if (rSide) {
        rSide.style.right = '-355px';
    } else {
        console.error("error: side panel not found")
    }
}
//End of right-side bar


//searchbar
//open search bar
function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '100vh';
        searchpanel.style.borderTopLeftRadius = '0';
        searchpanel.style.borderTopRightRadius = '0';
    }

    else {
        console.error('error: Search panel not found')
    }
}

function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '0%';
        searchpanel.style.borderTopLeftRadius = '80%';
        searchpanel.style.borderTopRightRadius = '80%';
    }

    else {
        console.error('error: Search panel not found')
    }
}




//Responsive client slider
$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
            }
        }
    ]
});




//portfolio gallery tab

function open_img(evt, cityName) {
    let i, tabcontent, tablinks;

    //hide all tab contents
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Remove active class from all tabs
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active")
    }

    //show the selected tab content and mark the corresponding tab link as active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

//End of portfolio gallery tab


//-------------------------------------------------------------------------------------------

// Show the image viewer
function showImage(imageElement) {
    const modal = document.getElementById('image-viewer');
    const modalImage = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');

    modal.style.display = 'flex'; // Display the modal
    modalImage.src = imageElement.src; // Set the image source
    captionText.innerHTML = imageElement.alt; // Set the caption text
}

// Close the image viewer
function closeViewer() {
    const modal = document.getElementById('image-viewer');
    modal.style.display = 'none'; // Hide the modal
}



//---------------------------------------------------------------------------------------------










//Auto typing

var typed = new Typed(".auto-type", {
    strings: ["Visualizing Your Ideas", "Where Creativity Meets Precision", "Turning Dreams into Digital Art", "Where Design Meets Possibility", "Inspired Designs for Inspired Brands"],
    typeSpeed: 150,
    backSpeed: 60,
    loop: true
})

//End of Auto typing


//Responsive image slider

$('.team-slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1, // Fixed key name
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1, // Fixed key name
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1, // Fixed key name
            }
        }
    ]
});







document.addEventListener('DOMContentLoaded', function () {
    let accordianButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordianButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            let collapse = button.parentElement.nextElementSibling; // Fixed typo: 'nextElementSibiling' -> 'nextElementSibling'

            // Close all the other accordion items
            accordianButtons.forEach(function (otherButton, otherIndex) {
                if (otherButton !== button) {
                    let otherCollapse = otherButton.parentElement.nextElementSibling; // Fixed typo
                    if (otherCollapse) {
                        otherCollapse.style.maxHeight = null;
                    }

                    // Reset the image source and rotation for other accordion items
                    acoimg[otherIndex].src = 'Assets/icon/plus.png';
                    acoimg[otherIndex].style.transform = 'rotate(0deg)';
                    otherButton.style.backgroundColor = '#fff';
                }
            });

            // Toggle the clicked accordion item
            if (collapse && collapse.style.maxHeight) {
                collapse.style.maxHeight = null;
                // Reset the image source, rotation, and background color when collapsing
                acoimg[index].src = 'Assets/icon/plus.png';
                acoimg[index].style.transform = 'rotate(0deg)';
                button.style.backgroundColor = '';
            } else if (collapse) {
                collapse.style.maxHeight = collapse.scrollHeight + 'px';
                // Change the image source, rotation, and background color when expanding
                acoimg[index].src = 'Assets/icon/menus.png';
                acoimg[index].style.transform = 'rotate(180deg)';
                button.style.backgroundColor = '#c1b0b5';
            }
        });
    });
});


// footer  validation 

const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message')

fom.addEventListener('submit', (event) => {
    event.preventDefault();
    footerMessage.innerHTML = 'e-mail submitted Successfully!'
    footerMessage.style.display = 'flex';
    fom.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none'
    }, 5000)
})

// End of footer  validation 

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.getElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: 'smooth',
    })
}

//





