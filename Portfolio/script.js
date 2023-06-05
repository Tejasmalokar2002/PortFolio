/* ========== toggle icon navbar==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==========scroll section Active links==========*/
let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



   /*  function toggleContent() {
        var content = document.getElementById("more-content");
        var button = document.querySelector(".btn");
    
        if (content.style.display === "none") {
          content.style.display = "block";
          button.innerHTML = "Read Less";
        } else {
          content.style.display = "none";
          button.innerHTML = "Read More";
        }
      }
 */

      var readMoreBtn = document.querySelector('.read-more-btn');
var additionalDetails = document.querySelector('.additional-details');

// Add a click event listener to the button
readMoreBtn.addEventListener('click', function() {
  // Toggle the visibility of the additional details
  if (additionalDetails.style.display === 'none') {
    additionalDetails.style.display = 'block';
    readMoreBtn.textContent = 'Read Less';
  } else {
    additionalDetails.style.display = 'none';
    readMoreBtn.textContent = 'Read More';
  }
});

var readMoreBtn = document.querySelector('.btn');
var additionalDetails = document.querySelector('.hidden-content');

// Add a click event listener to the button
readMoreBtn.addEventListener('click', function() {
  // Toggle the visibility of the additional details
  if (additionalDetails.style.display === 'none') {
    additionalDetails.style.display = 'block';
    readMoreBtn.textContent = 'Read Less';
  } else {
    additionalDetails.style.display = 'none';
    readMoreBtn.textContent = 'Read More';
  }
});
    /* function toggleContent() {
    var content = document.getElementById("more-content");
      var button = document.getElementById("btn");

      if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "Read Less";
      } else {
        content.style.display = "none";
        button.innerHTML = "Read More";
      }
    } */
    /* ==========sticky navbar==========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ========== remove toogle icon and navbar when click navbar link (scroll)==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


 /* ==========scroll reveal==========*/
 ScrollReveal({ 
 reset: true , 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/* ========== typed js==========*/
const typed = new Typed('.multiple-text', {
    strings: ['Java Developer','Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



/* <!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS for the expanded content */
  /*  .hidden-content {
      display: none;
    }
  </style>
  <script>
    // JavaScript to toggle the visibility of the content
    function toggleContent() {
      var content = document.getElementById("more-content");
      var button = document.getElementById("btn");

      if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "Read Less";
      } else {
        content.style.display = "none";
        button.innerHTML = "Read More";
      }
    }
  </script>
</head>
<body>
  <div>
    <h1>About Me</h1>
    <p>
      <!-- Shortened version of your bio -->
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id tincidunt mauris, eget ultrices ipsum. Sed venenatis ipsum lectus, quis volutpat ligula luctus ut.
    </p>
    <div id="more-content" class="hidden-content">
      <p>
        <!-- Additional content to be displayed -->
        Fusce consectetur arcu vitae ante tempus vestibulum. Nulla facilisi. Aliquam erat volutpat. Phasellus pharetra libero eu est fermentum, non hendrerit lectus dictum. Ut tempus metus ut mi viverra, at elementum tortor fermentum. Duis hendrerit nisi vitae consequat convallis. Sed placerat odio in vulputate rhoncus.
      </p>
    </div>
    <button id="btn" onclick="toggleContent()">Read More</button>
  </div>
</body>
</html> */